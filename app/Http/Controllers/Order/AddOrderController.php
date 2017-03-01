<?php

namespace App\Http\Controllers\Order;

use App\Models\Attribute;
use App\Models\Domain\DomainWebsite;
use App\Models\Stock;
use App\Models\SysConfig;
use App\Models\Order\OdCustomer;
use App\Models\Order\OdDeliveryAddress;
use App\Models\Order\OdOrder;
use App\Models\Order\OdProduct;
use App\Models\Product;
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

        /*
         * 测试成功，发送邮件
         * \Mail::send('emails.test', $this->orderInfo, function($msg) {
            $msg->to('515639342@qq.com', '夏日很温暖')->subject('An email test from laravel');
            $msg->from('13720892502@163.com');
            $msg->sender('13720892502@163.com');
        });*/

        return ['status' => 1, 'msg' => '添加订单成功'];
    }

    /**
     * 存订单
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
        }

        $configCategoryId = SysConfig::select('name', 'val')->where('name', 'od_category_id')->first()->val;//默认产品分类

        $order = OdOrder::updateOrCreate(['website_order_id' => $orderInfo['websiteOrderId'], 'website_name' => $websiteName], [
            'website_id' => $websiteId,
            'website_order_id' => $orderInfo['websiteOrderId'],
            'website_name' => $websiteName,
            'od_customer_id' => $customerId,
            'customer_name' => $orderInfo['customerName'],
            'od_delivery_address_id' => $deliveryAddressId,
            'website_supervisor_id' => $websiteSupervisorId,
            'date_purchased' => $orderInfo['datePurchased'],
            'order_total' => $orderTotal,
            'order_currency' => $currency,
            'order_qty' => $orderInfo['orderCount'],
            'od_status_id' => $orderInfo['od_status_id'],
            'od_category_id' => $configCategoryId,
            //'od_pay_after_status_id' => $orderInfo['od_pay_after_status_id'],
            //'order_pay_after_date' => $timeNow?:'0000-00-00 00:00:00',
        ]);

        //判断是否是重复单
        $orderBycustomer = OdOrder::where('od_customer_id', $customerId)->count();
        if($orderBycustomer > 1 && $order->od_status_id == 0) {
            $order->od_status_id = 2; //重复单
            $order->remark = '下过'. $orderBycustomer .'单';
        }

        //判断付款状态
        if($orderInfo['payType'] == 'Myorderapproved' && $order->od_pay_after_status_id == 0) {
            $order->od_pay_after_status_id = 1;//已付款
            $order->order_pay_after_date = date("Y-m-d H:i:s");
        }

        $order->save();

        if(!$order) throw new \Exception('添加订单失败，请检查格式');

        return $order->id;
    }

    /**
     * 查询或存储客户信息
     * 邮箱唯一为一个用户
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
    
    /**
     * 存订单里面有的产品
     * @param $orderId
     * @param $products
     * @return array  返回产品id数组
     */
    private function storeOrderProducts($orderId, $products)
    {
        $orderProductsIds = [];

        foreach ($products as $product) {
            //存产品
            $productId = $this->storeProduct($product);

            $attributes = $product['attributes'];
            $attributes = explode(';', $attributes);
            //存属性
            $attributesJson = $this->storeAttributes($attributes);

            //库存表
            $stock = Stock::updateOrCreate(['product_id' => $productId,'attributes' => $attributesJson],
                [
                    'product_id' => $productId,
                    'product_name' => $product['name'],
                    'attributes' => $attributesJson,
                    'sku' => $product['sku']
                ]);

            $remark = isset($product['remark'])?$product['remark']:'';
            $objOdProduct = OdProduct::updateOrCreate(
                [
                    'od_order_id' => $orderId,
                    'product_id' => $productId,
                    'attributes_id' => $attributesJson,
                ],
                [
                    'od_order_id' => $orderId,
                    'product_id' => $productId,
                    'product_name' => $product['name'],
                    'quantity' => $product['quantity'],
                    'image_url' => isset($product['img'])?$product['img']:'',
                    'attributes_id' => $attributesJson,
                    'sku' => $product['sku'],
                    'remark' => $remark
                ]
            );

            $orderProductsIds[] = $objOdProduct->id;
        }

        return $orderProductsIds;
    }

    /**
     * 返回$attributes 的json格式，key为数据库id，value为name
     * @param $attributes  array
     * @return mixed json
     */
    private function storeAttributes($attributes)
    {
        $arrAttribute = [];
        foreach ($attributes as $attribute) {
            $objAttribute = Attribute::firstOrCreate(['name' => $attribute]);
            $arrAttribute[$objAttribute->id] = $objAttribute->name;
        }

        return json_encode($arrAttribute);
    }

    /**
     * 商品不存在，存储
     * @param $product
     * @return mixed 返回产品id
     */
    private function storeProduct($product)
    {
        $objProtuct = Product::firstOrCreate(['model' => $product['sku']],
            [
                'name' => $product['name'],
                'model' => $product['sku']
            ]
        );

        if($objProtuct->image == '' && isset($product['img'])) $objProtuct->image = $product['img'];

        //判断name是否为(英文和数字)
        if(preg_match("/^[a-zA-Z0-9\s]+$/",$product['name']) && !preg_match("/^[a-zA-Z0-9\s]+$/",$objProtuct->name))
        {
            $objProtuct->name = $product['name'];
        }

        $objProtuct->save();
        
        return $objProtuct->id;
    }

}
