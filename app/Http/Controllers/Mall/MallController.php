<?php

namespace App\Http\Controllers\Mall;

use App\Models\Mall\MallMall;
use App\Models\Mall\MallStatus;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class MallController extends Controller
{
    protected $fields = [
        'name' => 'like',
        'website' => 'like',
        'username' => 'like',
        'password' => 'equal',
        'mall_status_id' => 'equal',
        'user_id' => 'equal',
        'remark' => 'like'
    ];
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(request $request)
    {
        //orderBy
        $orderBy = $request->get('orderBy');
        $orderBy = $orderBy[0];
        $order = strpos($orderBy, '+') === false?'desc':'asc';
        $orderBy = substr($orderBy, 1)?:'id';//排序

        //filter
        $filters = $request->get('filters');

        $currentPage = $request->get('currentPage')?:1; //当前页码
        $itemsPerPage = $request->get('itemsPerPage')?:15;//每页有几条数据
        $skip = ($currentPage - 1)*$itemsPerPage;
        $take = $request->get('takeCount')?:$itemsPerPage;

        $mallMall = new MallMall();

        if(!empty($filters)) {
            foreach ($filters as $key => $value) {
                if ($value == '') continue;
                if ($key == 'id') {
                    $mallMall = $mallMall->where('id', $value);
                    continue;
                }
                if(isset($this->fields[$key]) && $this->fields[$key] == 'equals')
                    $mallMall = $mallMall->where($key, $value);
                else
                    $mallMall = $mallMall->where($key, 'like', $value.'%');
            }
        }
        $data['recordsTotal'] = $mallMall->count();

        $data['data'] = $mallMall->skip($skip)
            ->take($take)
            ->orderBy($orderBy, $order)
            ->get();

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
        $mallMall = new MallMall();
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $mallMall->$field = $request->get($field);
        }
        $mallMall->save();
        return ['status' => 1, 'msg' => '添加成功'];
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
        $mallMall = MallMall::find($id);
        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $mallMall->$field!=$request->get($field)) $mallMall->$field = $request->get($field);
        }
        if(!$mallMall->save()) {
            return ['status' => 0, 'msg' => '更新失败'];
        }
        return ['status' => 1, 'msg' => '更新成功'];
    }
    
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        MallMall::destroy($id);
        
        return ['status' => 1, 'msg' => '删除成功'];
    }
}
