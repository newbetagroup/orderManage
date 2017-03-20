<?php

namespace App\Http\Controllers\Order;

use App\Models\Order\OdOrder;
use App\Models\Order\OdPayAfterStatus;
use App\Models\Order\OdStatus;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class DailyController extends Controller
{
	public $field = [
		//'order_pay_after_date' => '',
		'website_name' => '',
		//'userGroup' => '', //??
		'website_supervisor_id' => '',
		'od_status_id' => '',
		'od_pay_after_status_id' => ''
	];

	/**
	 * 每日订发货
	 * @param Request $request
	 * @return array
	 */
	public function delivery(Request $request)
	{
		//整单时间
		$resolveDate = $request->input('order_pay_after_date', date('Y-m', time()));

		$orders = OdOrder::where('order_pay_after_date', 'like', $resolveDate.'%')->where('od_pay_after_status_id', '<>', 0);

		foreach(array_keys($this->field) as $field) {
			if($request->has($field)) $orders = $orders->where($field, $request->get($field));
		}

		$orders = $orders->orderBy('id', 'desc')->get()
				->groupBy(function ($item, $key) {
					return substr($item['created_at'], 0, 10);
				});

		$payStatuses = OdPayAfterStatus::select('id', 'en_name')->orderBy('id', 'asc')->get()->keyBy('id');

		$statistics = [];

		$orders->each(function ($items, $key) use ($payStatuses, &$statistics) {
			$statistics[$key]['totals'] = 0;
			$statistics[$key]['date'] = $key;
		    foreach($items as $item) {
				if($item->od_pay_after_status_id == 0) {
					$name = 'unresolved';
				} else {
					$name = $payStatuses[$item->od_pay_after_status_id]['en_name'];
				}
			    //dd($item);
			    $statistics[$key][$name] = isset($statistics[$key][$name])? $statistics[$key][$name] + 1 : 1;

			    $statistics[$key]['totals'] += $item['order_total'];
		    }
			$statistics[$key]['count'] = $items->count();
		});

		return ['status' => 1, 'data' => $statistics];
    }

	/**
	 * 日均付款率
	 * @param Request $request
	 * @return array
	 */
	public function rate(Request $request) {
		//整单时间
		$purchasedDate = $request->input('date_purchased', date('Y-m', time()));

		$orders = OdOrder::where('date_purchased', 'like', $purchasedDate.'%');

		if($request->has('order_pay_after_date')) $orders = $orders->where('order_pay_after_date', $request->get('order_pay_after_date'));

		foreach(array_keys($this->field) as $field) {
			if($request->has($field)) $orders = $orders->where($field, $request->get($field));
		}


		$orders = $orders->orderBy('id', 'desc')->get()
				->groupBy(function ($item, $key) {
					return substr($item['created_at'], 0, 10);
				});

		$statistics = [];
		$payStatuses = OdStatus::select('id', 'en_name')->orderBy('id', 'asc')->get()->keyBy('id');
		$orders->each(function ($items, $key) use ($payStatuses, &$statistics) {
			$statistics[$key]['totals'] = 0;//订单额
			$statistics[$key]['totalqty'] = 0;//订单含商品数
			$statistics[$key]['date'] = $key;
			foreach($items as $item) {
				if($item->od_pay_after_status_id == 0) {
					$name = 'unresolved';
				} else {
					$name = $payStatuses[$item->od_pay_after_status_id]['en_name'];
				}
				//dd($item);
				$statistics[$key][$name] = isset($statistics[$key][$name])? $statistics[$key][$name] + 1 : 1;

				$statistics[$key]['totals'] += $item['order_total'];
				$statistics[$key]['totalqty'] += $item['order_qty'];
			}
			$statistics[$key]['count'] = $items->count();//订单数
			$statistics[$key]['rate'] = isset($statistics[$key]['paid']) ? ($statistics[$key]['paid']*100/$statistics[$key]['count']) : 0;//转化率
		});

		return ['status' => 1, 'data' => $statistics];
	}
}
