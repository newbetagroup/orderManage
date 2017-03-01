<?php

namespace App\Http\Controllers\Mall;

use App\Models\Mall\MallPayType;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class MallPayTypeController extends Controller
{
    protected $fields = [
        'name' => '',
        'sort' => ''
    ];
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['data'] = MallPayType::all();
        $data['recordsTotal'] = MallPayType::count();
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
        $mallPayType = new MallPayType();
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $mallPayType->$field = $request->get($field);
        }
        $mallPayType->save();
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
        $mallPayType = MallPayType::find($id);
        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $mallPayType->$field!=$request->get($field)) $mallPayType->$field = $request->get($field);
        }
        if(!$mallPayType->save()) {
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
        MallPayType::destroy($id);

        return ['status' => 1, 'msg' => '删除成功'];
    }
}
