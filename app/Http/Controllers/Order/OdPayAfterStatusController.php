<?php

namespace App\Http\Controllers\Order;

use App\Models\Order\OdPayAfterStatus;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class OdPayAfterStatusController extends Controller
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
        $data['data'] = OdPayAfterStatus::all();
        $data['recordsTotal'] = OdPayAfterStatus::count();
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
        $payAfterStatus = new OdPayAfterStatus();
        
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $payAfterStatus->$field = $request->get($field);
        }
        
        $payAfterStatus->save();
        
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
        $payAfterStatus = OdPayAfterStatus::find($id);
        
        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $payAfterStatus->$field!=$request->get($field)) $payAfterStatus->$field = $request->get($field);
        }
        
        // $performance->update(['']);
        if(!$payAfterStatus->save()) {
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
        OdPayAfterStatus::destroy($id);
        
        return ['status' => 1, 'msg' => 'delete success'];
    }
}
