<?php

namespace App\Http\Controllers;

use App\DomainServer;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class DomainServerController extends Controller
{
    protected $fields = [
        'pid' => '',
        'name' => '',
        'user_name' => '',
        'password' => '',
        'login_url' => '',
        'status' => '',
        'remark' => ''
    ];
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['data'] = DomainServer::all();
        $data['recordsTotal'] = DomainServer::count();
        return ['status' => 1, 'data'=> $data];
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
        $domainServer = new DomainServer();
        // DomainServer::create($request->all()); 需要在model中定义fillable 字段
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $domainServer->$field = $request->get($field);
        }
        $domainServer->save();
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
        $domainServer = DomainServer::find($id);
        
        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $domainServer->$field!=$request->get($field)) $domainServer->$field = $request->get($field);
        }
        
        // $performance->update(['']);
        if(!$domainServer->save()) {
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
        DomainServer::destroy($id);
        
        return ['status' => 1, 'msg' => 'delete success'];
    }
}
