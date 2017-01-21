<?php

namespace App\Helpers;

use App\Helpers\Contracts\OrderHelperContract;
use App\OdOrder;

class OrderHelper implements OrderHelperContract
{
	protected $fields = [
		'website_id' => '',
		'website_order_id' => '',
		'website_name' => '',
		'od_customer_id' => '',
		'od_delivery_address_id' => '',
		'website_supervisor_id' => '',
		'date_purchased' => '',
		'order_total' => '',
		'order_currency' => '',
		'order_qty' => '',
		'od_status_id' => '',
		'od_pay_after_status_id' => '',
		'order_pay_after_date' => '',
		'remark' => '',
	];

	public function getOrder()
	{
		return 'this is a test from orderHelper';
	}

	/**
	 * 更新一个订单
	 * @param $order
	 * @return mixed
	 */
	public function orderUpdate($order)
	{
		$orderFilter = [];
		foreach (array_keys($this->fields) as $field) {
			if (isset($order[$field])) $orderFilter[$field] = $order[$field];
		}
		$oderObj = OdOrder::updateOrCreate(['id' => $order['id']], $orderFilter);
		return $oderObj->id;
	}

	/**
	 * 多个订单
	 * @param $orders
	 * @return bool
	 */
	public function ordersUpdate($orders)
	{
		//$orders = $request->all();
		foreach ($orders as $order) {
			$orderId = $this->orderUpdate($order);
			if(!$orderId) return false;
		}
		return true;
	}
}