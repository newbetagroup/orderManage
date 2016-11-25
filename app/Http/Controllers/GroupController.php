<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class GroupController extends Controller
{
    protected $fields = [
        'name' => '',
        'label' => '',
        'description' => '',
        'permissions' => [],
    ];

    /**
     * Display a listing of the resource.
     * 查询全部分组信息
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $searchFieldDefault = 'name'; //查询的默认字段
        $data = array();
        //$data['draw'] = $request->get('draw');
       // $count = $request->get('count')?: 15; //每页几条记录
        //$page = $request->get('page')?: 1; //当前页数
        //$start = ($page - 1)*$count; //从第几条开始获取
        $start = $request->get('start'); //从第几条开始获取
        $length = $request->get('length'); //要获取接下去的几条
        $order = $request->get('order'); //排序， 排序字段和排序方式
        $columns = $request->get('columns');
        $search['searchField'] = $request->get('searchField')?:$searchFieldDefault; //搜索 $filter 搜索字段。如果前端已经获取了全部记录，前端处理？
        $search['searchValue'] = $request->get('searchValue'); //搜索 $filter 搜索关键字。如果前端已经获取了全部记录，前端处理？

        $data['recordsTotal'] = Role::count();
        if (strlen($search['searchValue']) > 0) {
            //搜索
            $data['recordsFiltered'] = Role::where(function ($query) use ($search) {
                $query->where($search['searchField'], 'LIKE', '%' . $search['searchValue'] . '%')
                    ->orWhere('description', 'like', '%' . $search['searchValue'] . '%');
            })->count();
            $data['data'] = Role::where(function ($query) use ($search) {
                $query->where($search['searchField'], 'LIKE', '%' . $search['searchValue'] . '%')
                    ->orWhere('description', 'like', '%' . $search['searchValue'] . '%');
            })
                ->skip($start)->take($length)
                ->orderBy($columns[$order[0]['column']]['data'], $order[0]['dir'])
                ->get();
        } else {
            //结果集
            $data['recordsFiltered'] = Role::count();
            $data['data'] = Role::
            skip($start)->take($length)
                ->orderBy($columns[$order[0]['column']]['data'], $order[0]['dir'])
                ->get();
        }
        return response()->json($data);
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
