<?php

namespace App\Http\Controllers\Order;

use App\DomainBrand;
use App\Helpers\Contracts\OrderHelperContract;
use App\OdOrder;
use App\OdProduct;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class DeliveryDepartmentController extends Controller
{
    protected $fields = [
        'id' => 'equals',
        'website_id' => 'equals',
        'website_order_id' => 'equals',
        'website_name' => 'like',
        'od_customer_id' => 'equals',
        'od_delivery_address_id' => 'equals',
        'website_supervisor_id' => 'equals',
        'date_purchased' => 'like',
        'order_total' => 'equals',
        'order_currency' => 'equals',
        'order_qty' => 'equals',
        'od_status_id' => 'equals',
        'od_pay_after_status_id' => 'equals',
        'order_pay_after_date' => 'like',
        'remark' => 'like',
    ];

    //od_products 表 发货组
    protected $shippingFields = [
        'shipping_group_id' => '',
        'shipping_group_date' => '',
    ];

    /**
     * 发货部
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //orderBy
        $orderBy = $request->get('orderBy');
        $orderBy = $orderBy[0];
        $order = strpos($orderBy, '+') === false?'desc':'asc';
        $orderBy = substr($orderBy, 1)?:'od_orders.id';//排序

        //filter
        $filters = $request->get('filters');

        $currentPage = $request->get('currentPage')?:1; //当前页码
        $itemsPerPage = $request->get('itemsPerPage')?:15;//每页有几条数据
        $skip = ($currentPage - 1)*$itemsPerPage;
        $take = $request->get('takeCount')? $request->get('takeCount'):$itemsPerPage;

        if(isset($filters['brand_id']) && $filters['brand_id']!='') {
            $brandId = $filters['brand_id'];
            $brandObj = DomainBrand::select('id', 'name')->where('id', $brandId)->first();
            $brand = $brandObj->name;
            $orders = OdOrder::with(['orderProducts' => function($query) use($brand) {
                $query->select('od_products.id', 'sku', 'od_order_id', 'product_name', 'quantity', 'image_url', 'attributes_id', 'shipping_group_id', 'shipping_groups.name')
                    /*->leftJoin('shipping_groups', function ($join) use($brand) {
                        $join->on('od_products.shipping_group_id', '=', 'shipping_groups.id')
                            ->where('od_products.sku', 'like', $brand.'%');
                    });*/
                    ->where('od_products.sku', 'like', $brand.'%')
                    ->leftJoin('shipping_groups', 'od_products.shipping_group_id', '=', 'shipping_groups.id');
            }]);
        } else {
            $orders = OdOrder::with(['orderProducts' => function($query) {
                $query->select('od_products.id', 'od_order_id', 'product_name', 'quantity', 'image_url', 'attributes_id', 'shipping_group_id', 'shipping_groups.name')
                    ->leftJoin('shipping_groups', 'od_products.shipping_group_id', '=', 'shipping_groups.id');
            }]);
        }

        if(!empty($filters)) {
            foreach ($filters as $key => $value) {
                if ($value == '') continue;
                if(!isset($this->fields[$key])) continue;//已定义字段
                if(isset($this->fields[$key]) && $this->fields[$key] == 'equals')
                    $orders = $orders->where($key, $value);
                else
                    $orders = $orders->where($key, 'like', '%'.$value.'%');
            }
        }

        $data['recordsTotal'] = $orders->count();

        $orders = $orders->skip($skip)
            ->take($take)
            ->orderBy($orderBy, $order)
            ->get();
        $data['data'] = $orders;

        return ['status' => 1, 'data' => $data];
    }

    /**
     * 将订单产品添加到发货分组
     * @param Request $request
     * @return array
     */
    public function addProductsToShippingGroup(Request $request)
    {
        $orderProduct = OdProduct::find($request->id);

        foreach (array_keys($this->shippingFields) as $field) {
            if($request->has($field)) $orderProduct->$field = $request->get($field);
        }

        //将产品加入发货分组的时间(发货时间)
        $orderProduct->shipping_group_date = date("Y-m-d H:i:s");

        if(!$orderProduct->save()) {
            return ['status' => 0, 'msg' => '更新失败'];
        }

        return ['status' => 1, 'data' => $orderProduct];
    }
    
    /**
     * 更新订单信息相关内容
     * @param Request $request
     * @param OrderHelperContract $orderHelper
     * @return array
     */
    public function ordersUpdate(Request $request, OrderHelperContract $orderHelper)
    {
        //是一个数组，含有一个order或多个order信息
        $orders = $request->all();
        
        $result = $orderHelper->ordersUpdate($orders);
        
        if(!$result) return ['status' => 0, 'msg' => '更新失败'];
        return ['status' => 1, 'msg' => '更新成功'];
    }
}
