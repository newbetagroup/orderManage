<?php

namespace App\Http\Controllers;

use App\Express;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ExpressController extends Controller
{
    protected $fields = [
        'name' => '',
        'abbreviation' => ''
    ];
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['data'] = Express::all();
        $data['recordsTotal'] = Express::count();
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
        $express = new Express();
        
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $express->$field = $request->get($field);
        }
        
        $express->save();
        
        return ['status' => 1, 'msg' => 'add success'];
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
        $express = Express::find($id);
        
        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $express->$field!=$request->get($field)) $express->$field = $request->get($field);
        }
        
        // $performance->update(['']);
        if(!$express->save()) {
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
        Express::destroy($id);
        
        return ['status' => 1, 'msg' => 'delete success'];
    }
}
