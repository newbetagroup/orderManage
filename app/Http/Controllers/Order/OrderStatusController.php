<?php

namespace App\Http\Controllers\Order;

use App\Models\Order\OdStatus;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class OrderStatusController extends Controller
{
    protected $fields = [
        'name' => '',
        'color' => ''
    ];
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['data'] = OdStatus::all();
        $data['recordsTotal'] = OdStatus::count();
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
        $orderStatus = new OdStatus();
        
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $orderStatus->$field = $request->get($field);
        }
        
        $orderStatus->save();
        
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
        $orderStatus = OdStatus::find($id);
        
        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $orderStatus->$field!=$request->get($field)) $orderStatus->$field = $request->get($field);
        }
        
        // $performance->update(['']);
        if(!$orderStatus->save()) {
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
        OdStatus::destroy($id);
        
        return ['status' => 1, 'msg' => 'delete success'];
    }
}
