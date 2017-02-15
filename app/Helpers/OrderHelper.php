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
		'customer_name' => '',
		'od_delivery_address_id' => '',
		'website_supervisor_id' => '',
		'date_purchased' => '',
		'order_total' => '',
		'order_currency' => '',
		'order_qty' => '',
		'od_status_id' => '',
		'od_pay_after_status_id' => '',
		'express_id' => '',
		'od_category_id' => '',
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
		//
		if(isset($order['remark'])) {
			if($orderFilter['remark'] == 'nul') {
				//重写remark
				$orderFilter['remark'] = '';
			} else {
				//remark 不为null字符串，则补充
				$orderObj1 = OdOrder::select('id', 'remark')->where('id', $order['id'])->get();
				if($orderObj1 && !empty($orderObj1->remark)) {
					//整合remark
					$order['remark'] = $this->integrateRemark($orderObj1->remark, $order['remark']);
				}
			}
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

	/**
	 * 整合备注
	 * @param $remark1
	 * @param $remark2
	 * @return string
	 */
	public function integrateRemark($remark1, $remark2)
	{
		$position = strspn($remark1 ^ $remark2, "\0");
		$remark2 = substr($remark2, $position);
		$remark1 = $remark1.' '.$remark2;
		return $remark1;
	}
}