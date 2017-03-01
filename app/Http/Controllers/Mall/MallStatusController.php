<?php

namespace App\Http\Controllers\Mall;

use App\Models\Mall\MallStatus;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class MallStatusController extends Controller
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
        $data['data'] = MallStatus::all();
        $data['recordsTotal'] = MallStatus::count();
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
        $mallStatus = new MallStatus();

        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $mallStatus->$field = $request->get($field);
        }

        $mallStatus->save();

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
        $mallStatus = MallStatus::find($id);

        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $mallStatus->$field!=$request->get($field)) $mallStatus->$field = $request->get($field);
        }

        // $performance->update(['']);
        if(!$mallStatus->save()) {
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
        MallStatus::destroy($id);

        return ['status' => 1, 'msg' => '删除成功'];
    }
}
