<?php

namespace App\Http\Controllers\Order;

use App\OdOrder;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class OrderDepartmentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //orderBy
        $orderBy = $request->get('orderBy');
        $orderBy = $orderBy[0];
        $order = strpos($orderBy, '+') === false?'desc':'asc';
        $orderBy = substr($orderBy, 1)?:'od_orders.id';//排序

        //filter
        $filters = $request->get('filters');

        $currentPage = $request->get('currentPage')?:1; //当前页码
        $itemsPerPage = $request->get('itemsPerPage')?:15;//每页有几条数据
        $skip = ($currentPage - 1)*$itemsPerPage;
        $take = $request->get('takeCount')? $request->get('takeCount'):$itemsPerPage;

        $orders = OdOrder::with('orderProducts');

        if(!empty($filters)) {
            foreach ($filters as $key => $value) {
                if ($value == '') continue;
                if ($key == 'id') {
                    $orders = $orders->where('id', $value);
                    continue;
                }
                if(isset($this->fields[$key]) && $this->fields[$key] == 'equals')
                    $orders = $orders->where($key, $value);
                else
                    $orders = $orders->where($key, 'like', $value.'%');
            }
        }

        $data['recordsTotal'] = $orders->count();

        $orders = $orders->skip($skip)
            ->take($take)
            ->orderBy($orderBy, $order)
            ->get();
        $data['data'] = $orders;

        return ['status' => 1, 'data' => $data];
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
