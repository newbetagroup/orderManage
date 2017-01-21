<?php
/**
 * Created by PhpStorm.
 * User: geekzwb
 * Date: 2017/1/17
 * Time: 14:14
 */

namespace App\Helpers\Contracts;


interface OrderHelperContract
{
	public function getOrder();
	
	/**
	 * 更新orders表的数据
	 * @return mixed
	 */
	public function ordersUpdate($orders);
	
	public function orderUpdate($order);
}