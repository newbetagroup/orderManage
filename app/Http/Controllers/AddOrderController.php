<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class AddOrderController extends Controller
{
    protected $fields = [
        'customers' => '',
        'address' => '',
        'product' => '',
        'img' => '',
        'email' => '',
        'price' => '',
        'purch' => '',
        'ip' => '',
        'sku' => '',
        'code' => '',
        'city' => '',
        'state ' => '',
        'phone' => '',
        'country' => '',
        'pay_str' => '',
        'pay_comments' => '',
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
        foreach (array_keys($this->fields) as $field) {
            if(!$request->has($field)) return ['status' => 0, 'msg' => $field.' is required'];
            $this->orderInfo[$field] = $request->get($field);
        }
        
        //处理逻辑，存进数据库
        
        
        return ['status' => 1, 'data' => $this->orderInfo];
    }
}
