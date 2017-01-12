<?php

namespace App\Http\Controllers;

use App\DomainWebsite;
use App\OdCustomer;
use App\OdDeliveryAddress;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class AddOrderController extends Controller
{
    /*customer []*/
    protected $fields = [
        'oID' => '',
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
        'gender' => ''
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
           'oID' => 'required|Integer',
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

        // Start 事务
        DB::beginTransaction();

        try {
            //存客户信息
            $customerId = $this->storeCustomer();

            //存收货地址
            $deliveryAddressId = $this->storeDeliveryAddress($customerId);

            //存订单信息
            $orderId = $this->storeOrder();


            //存订单产品，返回新增订单id
            $orderProductsId = $this->storeOrderProducts($this->orderInfo['products']);

            //提交事务
            DB::commit();

        } catch(\Exception $e)
        {
            //回滚
            DB::rollBack();
            //获取抛出的异常信息
            $errorMessage = $e->getMessage();
            //返回错误信息
            return ['status' => 0, 'msg' => $errorMessage];
        }

        return ['status' => 1, 'data' => $this->orderInfo];
    }

    public function storeOrder()
    {
        $orderInfo = $this->orderInfo;
        $websiteName = str_replace('www.', '', $orderInfo['domain']);
        $website = DomainWebsite::select('id, user_id')->where('name', $websiteName)->first();

        if(!$website) throw new \Exception('该域名不存在');

        $websiteId = $website->id;
        $website_supervisor_id = $website->user_id; //网站负责人

        
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

        $address = OdDeliveryAddress::select('id', 'consignee', 'street')->where('od_customer_id', $customerId)->first();
        
        if($address && $address->consignee == $addressInfo['customerName'] && $address->address == $addressInfo['street']) {
            $addressId = $address->id;
        } else {
            $addressId = OdDeliveryAddress::insertGetId(
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
        }

        if(!$addressId) throw new \Exception('地址不存在且存储新地址失败');

        return $addressId;
    }

    private function storeOrderProducts($products)
    {
        foreach ($products as $product) {
            //dd($product);

        }
    }
}
