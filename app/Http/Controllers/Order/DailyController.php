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
		//下单时间
		$purchasedDate = $request->input('date_purchased', date('Y-m', time()));

		$orders = OdOrder::where('date_purchased', 'like', $purchasedDate.'%');

		if($request->has('order_pay_after_date')) $orders = $orders->where('order_pay_after_date', 'like', $request->get('order_pay_after_date').'%');

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

	/**
	 * 域名下单分析
	 * @param Request $request
	 * @return array
	 */
	public function domain(Request $request) {
		//下单时间
		$purchasedDate = $request->input('date_purchased', date('Y-m', time()));

		$orders = OdOrder::where('date_purchased', 'like', $purchasedDate.'%');

		if($request->has('order_pay_after_date')) $orders = $orders->where('order_pay_after_date', 'like', $request->get('order_pay_after_date').'%');

		foreach(array_keys($this->field) as $field) {
			if($request->has($field)) $orders = $orders->where($field, $request->get($field));
		}

		$orders = $orders->join('domain_websites', 'od_orders.website_id', '=', 'domain_websites.id')
				->select('od_orders.*', 'domain_websites.id as domain_website_id', 'domain_websites.user_id as website_supervisor_id','domain_websites.domain_ad_status_id', 'domain_websites.ftp_username', 'domain_websites.domain_host_id','domain_websites.created_at as website_created_at')
				->orderBy('od_orders.id', 'desc')
				->get()
				->groupBy('website_name');

		$statistics = [];
		//dd($orders);
		$orders->each(function ($items, $key) use (&$statistics) {
			$statistics[$key]['website'] = $key;
			$statistics[$key]['count'] = $items->count();
			$statistics[$key]['totals'] = 0;
			$statistics[$key]['website_supervisor_id'] = $items[0]['website_supervisor_id'];
			$statistics[$key]['domain_ad_status_id'] = $items[0]['domain_ad_status_id'];
			$statistics[$key]['domain_host_id'] = $items[0]['domain_host_id'];
			$statistics[$key]['website_created_at'] = $items[0]['website_created_at'];
			$statistics[$key]['ftp_username'] = $items[0]['ftp_username'];
			foreach($items as $item) {
				$statistics[$key]['totals'] += $item['order_total'];
			}
		});

		//按订单数的排序 desc
		uasort($statistics, function ($a, $b) {
			if($a['count'] == $b['count']) return 0;
			return ($a['count'] - $b['count']) > 0 ? -1 : 1;
		});

		return ['status' => 1, 'data' => $statistics];
	}

	/**
	 * 排行榜
	 * @param Request $request
	 * @return array
	 */
	public function supervisor(Request $request) {
		$statistics = [];
		$orders = new OdOrder();

		if($request->has('order_pay_after_date')) $orders = $orders->where('order_pay_after_date', 'like', $request->get('order_pay_after_date').'%');
		if($request->has('date_purchased')) $orders = $orders->where('order_pay_after_date', 'like', $request->get('date_purchased').'%');

		foreach(array_keys($this->field) as $field) {
			if($request->has($field)) $orders = $orders->where($field, $request->get($field));
		}

		$count = $orders->count();//订单总数
		$total = 0;

		$orders = $orders->orderBy('id', 'desc')
				->get()
				->groupBy('website_supervisor_id');

		$orders->each(function ($items, $key) use (&$statistics, &$total) {
			$statistics[$key]['supervisor_id'] = $key;
			$statistics[$key]['count'] = $items->count();
			$statistics[$key]['total'] = 0;
			foreach($items as $item) {
				$statistics[$key]['total'] += $item['order_total'];
				$total += $item['order_total'];
			}
		});

		uasort($statistics, function ($a, $b) {
		    if($a['count'] == $b['count']) return 0;

			return ($a['count'] > $b['count'])? -1 : 1;
		});

		$data['statistics'] = $statistics;
		$data['count'] = $count;
		$data['total'] = $total;

		return ['status' => 1, 'data' => $data];
	}
}