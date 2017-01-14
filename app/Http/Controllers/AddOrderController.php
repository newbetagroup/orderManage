<?php

namespace App\Http\Controllers;

use App\DomainWebsite;
use App\OdCustomer;
use App\OdDeliveryAddress;
use App\OdOrder;
use App\OdProduct;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class AddOrderController extends Controller
{
    /*customer []*/
    protected $fields = [
        'websiteOrderId' => '',
        'domain' => '', //www.example.com
        'customerName' => '',
        'street' => '',
        'products' => '',
        'img' => '',
        'email' => '',
        'price' => '',
        'datePurchased' => '',
        'ip' => '0',
        'sku' => '',
        'postcode' => '',
        'city' => '',
        'state' => '',
        'phone' => '',
        'country' => '',
        'payType' => '',
        'payComments' => '',
        'gender' => '',
        'orderCount' => '',//一个订单里的产品总数
    ];
    
    protected $orderInfo = [];
    
    /**
     * @param Request $request
     * 接受跨域请求,经过enblecross中间件
     * 跳过CsrfToken检查
     */
    public function index(Request $request)
    {
      // $data = $request->all();
        $this->validate($request, [
           'websiteOrderId' => 'required|Integer',
            'ip' => 'IP Address',
            'products' => 'required|array',
            'email' => 'required|email',
        ]);

        foreach (array_keys($this->fields) as $field) {
            if($request->has($field))
                $this->orderInfo[$field] = $request->get($field); //传输值
            else
                $this->orderInfo[$field] = $this->fields[$field]; //默认值
        }
        
        //处理逻辑，存进数据库
        $orderCount = 0;//一个订单里的产品总数
        foreach ($this->orderInfo['products'] as $product) {
            $orderCount += $product['quantity'];
        }
        $this->orderInfo['orderCount'] = $orderCount;

        // Start 事务
        DB::beginTransaction();

        try {
            //存客户信息
            $customerId = $this->storeCustomer();

            //存收货地址
            $deliveryAddressId = $this->storeDeliveryAddress($customerId);

            //存订单信息
            $orderId = $this->storeOrder($customerId, $deliveryAddressId);

            //存订单产品
            $orderProductsIds = $this->storeOrderProducts($orderId, $this->orderInfo['products']);

            //提交事务
            DB::commit();

        } catch(\Exception $e)
        {
            //回滚
            DB::rollBack();
            throw $e;
            //获取抛出的异常信息
            $errorMessage = $e->getMessage();
            //返回错误信息
            return ['status' => 0, 'msg' => $errorMessage];
        }

        return ['status' => 1, 'data' => $this->orderInfo];
    }

    /**
     * 新增订单
     * @param $customerId
     * @param $deliveryAddressId
     * @return mixed 返回新增订单id
     * @throws \Exception
     */
    public function storeOrder($customerId, $deliveryAddressId)
    {
        $orderInfo = $this->orderInfo;
        $websiteName = str_replace('www.', '', $orderInfo['domain']);
        $website = DomainWebsite::select('id', 'user_id')->where('name', $websiteName)->first();

        if(!$website) throw new \Exception('该域名不存在');

        $websiteId = $website->id;
        $websiteSupervisorId = $website->user_id; //网站负责人

        preg_match('/\d+/',$orderInfo['price'],$orderTotal);//总价
        $orderTotal = $orderTotal[0];

        $currency = str_replace($orderTotal, '', $orderInfo['price']);//货币符号

        $orderInfo['od_status_id'] = 0;
        $orderInfo['od_pay_after_status_id'] = 0;
        $timeNow = 0;
        if($orderInfo['payType'] == 'Myorderapproved') {
            $orderInfo['od_status_id'] = 1;//已付款
            $orderInfo['od_pay_after_status_id'] = 1;
            $timeNow = date("Y-m-d H:i:s");
        }

        $order = OdOrder::updateOrCreate(['website_order_id' => $orderInfo['websiteOrderId'], 'website_name' => $websiteName], [
            'website_id' => $websiteId,
            'website_order_id' => $orderInfo['websiteOrderId'],
            'website_name' => $websiteName,
            'od_customer_id' => $customerId,
            'od_delivery_address_id' => $deliveryAddressId,
            'website_supervisor_id' => $websiteSupervisorId,
            'date_purchased' => $orderInfo['datePurchased'],
            'order_total' => $orderTotal,
            'order_currency' => $currency,
            'order_qty' => $orderInfo['orderCount'],
            'od_status_id' => $orderInfo['od_status_id'],
            //'od_pay_after_status_id' => $orderInfo['od_pay_after_status_id'],
            //'order_pay_after_date' => $timeNow?:'0000-00-00 00:00:00',
        ]);

        if($orderInfo['payType'] == 'Myorderapproved' && $order->od_pay_after_status_id == 0) {
            $order->od_pay_after_status_id = 1;//已付款
            $order->order_pay_after_date = $timeNow;
            $order->save();
        }

        if(!$order) throw new \Exception('添加订单失败，请检查格式');

        return $order->id;
    }

    /**
     *存储客户信息
     * 邮箱和姓名唯一为一个用户
     * @return mixed 返回customerId
     */
    private function storeCustomer()
    {
        $customerInfo = $this->orderInfo;

        $customer = OdCustomer::select('id')
            ->where('email', $customerInfo['email'])
            //->where('name', $customerInfo['customerName'])
            ->first();

        if(!$customer) {
            //数据库中不存在
            $customerId = OdCustomer::insertGetId(
                [
                    'email' => $customerInfo['email'],
                    'name' => $customerInfo['customerName'],
                    'gender' => $customerInfo['gender'],
                    'ip' => ip2long($customerInfo['ip']),//0代表为空
                    'phone' => $customerInfo['phone']
                ]
            );
        } else {
            //已有该客户信息
            $customerId = $customer->id;
        }

        if(!$customerId) throw new \Exception('客户找不到或存储失败');

        return $customerId;

    }

    /**
     * 存储客户收件地址等信息
     * @param $customerId
     */
    private function storeDeliveryAddress($customerId)
    {
        $addressInfo = $this->orderInfo;

        //$address = OdDeliveryAddress::select('id', 'consignee', 'street')->where('od_customer_id', $customerId)->first();
        

        $address = OdDeliveryAddress::updateOrCreate(
            [
                'od_customer_id' => $customerId,
                'consignee' =>$addressInfo['customerName'],
                'street' =>$addressInfo['street']
            ],
            [
                'od_customer_id' => $customerId,
                'consignee' => $addressInfo['customerName'],
                'country' => $addressInfo['country'],
                'state' => $addressInfo['state'],
                'city' => $addressInfo['city'],
                'street' => $addressInfo['street'], //街道地址
                'postcode' => $addressInfo['postcode'],
                'phone' => $addressInfo['phone']
            ]
        );

        if(!$address) throw new \Exception('地址不存在且存储新地址失败');

        return $address->id;
    }

    private function storeOrderProducts($orderId, $products)
    {
        
        foreach ($products as $product) {
            $attributes = $product['attributes'];
            $attributes = explode(';', $attributes);
            dd($attributes);
            /*OdProduct::createOrUpdate(
                [
                    'od_order_id' => $orderId,
                    'od_product_id' => 
                    'attributes_id' => 
                ],
                [

                ]
            );*/
        }
    }
}
