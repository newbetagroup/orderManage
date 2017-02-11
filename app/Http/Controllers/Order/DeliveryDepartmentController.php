<?php

namespace App\Http\Controllers\Order;

use App\OdOrder;
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
        
        $orders = OdOrder::with(['orderProducts' => function($query) {
            $query->select('od_products.id', 'od_order_id', 'product_name', 'quantity', 'image_url', 'attributes_id', 'shipping_group_id', 'shipping_groups.name')
            ->leftJoin('shipping_groups', 'od_products.shipping_group_id', '=', 'shipping_groups.id');
        }]);

        if(!empty($filters)) {
            foreach ($filters as $key => $value) {
                if ($value == '') continue;
                if ($key == 'id') {
                    $orders = $orders->where('id', $value);
                    continue;
                }
                if(isset($this->fields[$key]) && $this->fields[$key] == 'equals')
                    $orders = $orders->where($key, $value);
                else
                    $orders = $orders->where($key, 'like', $value.'%');
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
}
