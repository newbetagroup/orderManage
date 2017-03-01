<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Stock;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class StockController extends Controller
{
	protected $field = [
		'name' => 'like',
		'model' => 'like',//即sku
		'image' => 'like',
		'price' => 'like',
	];

	/**
	 * 产品与库存
	 * @param Request $request
	 * @return array
	 */
    public function index(Request $request)
    {
	    //orderBy
	    $orderBy = $request->get('orderBy');
	    $orderBy = $orderBy[0];
	    $order = strpos($orderBy, '+') === false?'desc':'asc';
	    $orderBy = substr($orderBy, 1)?:'products.id';//排序

	    //filter
	    $filters = $request->get('filters');

	    //pagination
	    $currentPage = $request->get('currentPage')?:1; //当前页码
	    $itemsPerPage = $request->get('itemsPerPage')?:15;//每页有几条数据
	    $skip = ($currentPage - 1)*$itemsPerPage;
	    $take = $request->get('takeCount')? $request->get('takeCount'):$itemsPerPage;//自定义取出几条数据 takeCount

	    //关联 库存
	    $products = Product::with('stocks');

	    //按照库存量排序
	    if($orderBy == 'store_count') {
		    $orderBy = 'stocks.store_count';
		    $products = $products->select('products.*', 'stocks.id as stock_id', 'stocks.store_count')
			    ->join('stocks', 'products.id', '=', 'stocks.id');
	    }

	    if(!empty($filters)) {
		    foreach ($filters as $key => $value) {
			    if ($value == '') continue;
			    if ($key == 'id') {
				    $products = $products->where('products.id', $value);
				    continue;
			    }
			    if(isset($this->fields[$key]) && $this->fields[$key] == 'equals')
				    $products = $products->where($key, $value);
			    else
				    $products = $products->where($key, 'like', '%'.$value.'%');
		    }
	    }

	    $products = $products->skip($skip)
		    ->take($take)
		    ->orderBy($orderBy, $order)
		    ->get();

	    $data['recordsTotal'] = $products->count();
	    $data['data'] = $products;

	    return ['status' => 1, 'data' => $data];
    }


	/**
	 * 批量修改库存
	 * @param Request $request
	 * @return array
	 */
	public function updateStocks(Request $request)
	{
		$stocks = $request->all();//[[$stock1],[$stock2]] or $stock
		if(is_array($stocks)) {
			foreach ($stocks as $stock) {
				$result = $this->update($stock);
			}
		} else {
			$result = $this->update($stocks);
		}

		if(!$result) return ['status' => 0, 'msg' => 'false'];
		return ['status' => 1, 'msg' => 'success'];
	}

	/**
	 * update stock
	 * @param $stock is a array: ['id'=>1, 'store_count'=>3]
	 * @return bool
	 */
	public function update($stock)
	{
		$stockId = $stock['id'];
		$stockObj = Stock::find($stockId);
		$stockObj->store_count = $stock['store_count'];

		if($stockObj->save()) return true;

		return false;
	}
}
