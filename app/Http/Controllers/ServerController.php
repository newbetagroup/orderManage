<?php

namespace App\Http\Controllers;

use App\Server;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ServerController extends Controller
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
        $data['data'] = Server::all();
        $data['recordsTotal'] = Server::count();
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
        $server = new Server();
        // Server::create($request->all()); 需要在model中定义fillable 字段
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $server->$field = $request->get($field);
        }
        $server->save();
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
        $server = Server::find($id);
    
        foreach (array_keys($this->fields) as $field) {
            if($request->get($field) && $server->$field!=$request->get($field)) $server->$field = $request->get($field);
        }
    
        // $performance->update();
        if(!$server->save()) {
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
        Server::destroy($id);

        return ['status' => 1, 'msg' => 'delete success'];
    }
}
