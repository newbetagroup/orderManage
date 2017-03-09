<?php

namespace App\Helpers;

use App\Helpers\Contracts\OrderHelperContract;
use App\Models\Stock;
use App\Models\Order\OdOrder;

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

		$orderObjOld = OdOrder::select('id', 'od_pay_after_status_id', 'remark')->where('id', $order['id'])->first();
		if(!$orderObjOld) return false;

		//针对remark的额外处理
		if(isset($order['remark'])) {
			if($orderFilter['remark'] == 'nul') {
				//重写remark
				$orderFilter['remark'] = '';
			} else {
				//remark 不为null字符串，则补充
				//$orderObj1 = OdOrder::select('id', 'remark')->where('id', $order['id'])->get();
				if($orderObjOld && !empty($orderObjOld->remark)) {
					//整合remark
					$order['remark'] = $this->integrateRemark($orderObjOld->remark, $order['remark']);
				}
			}
		}

		//更新订单表信息
		$oderObj = OdOrder::updateOrCreate(['id' => $order['id']], $orderFilter);

		//更改库存
		if($orderObjOld->od_pay_after_status_id != $oderObj->od_pay_after_status_id) {
			if($orderObjOld->od_pay_after_status_id == 1) {
				//已付款改成**
				switch ($oderObj->od_pay_after_status_id) {
					case 2:
						//已发货
						$this->reduceStocks($order['order_products']);
						break;
				}
			}
		}

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

	/**
	 * 库存增加
	 * @param $orderProducts [[$orderProduct1], [$orderProduct2]]
	 * @return bool
	 */
	public function plusStocks($orderProducts)
	{
		foreach ($orderProducts as $orderProduct) {
			Stock::increment('store_count', $orderProduct['quantity'])
				->where('product_id', $orderProduct['product_id'])
				->where('attributes', $orderProduct['attributes_id']);
		}

		return true;
	}

	/**
	 * 库存减
	 * @param $orderProducts
	 * @return bool
	 */
	public function reduceStocks($orderProducts)
	{
		foreach ($orderProducts as $orderProduct) {
			Stock::where('product_id', $orderProduct['product_id'])
				->where('attributes', $orderProduct['attributes_id'])
				->decrement('store_count', $orderProduct['quantity']);
		}

		return true;
	}
}