<?php

namespace App\Http\Controllers\Supplier;

use App\Models\Supplier;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class SupplierController extends Controller
{
    protected $fields = [
        'name' => '',
        'account' => '',
        'password' => '',
        'description' => '',
        'is_check' => '',
        'contacts' => '',
        'phone' => '',
        'qq' => '',
        'remark' => ''
    ];
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['data'] = Supplier::all();
        $data['recordsTotal'] = Supplier::count();
        return ['status' => 1, 'data' => $data];
    }
    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $supplier = new Supplier();
        
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $supplier->$field = $request->get($field);
        }
        
        $supplier->save();
        
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
        $supplier = Supplier::find($id);
        
        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $supplier->$field!=$request->get($field)) $supplier->$field = $request->get($field);
        }
        
        // $performance->update(['']);
        if(!$supplier->save()) {
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
        Supplier::destroy($id);
        
        return ['status' => 1, 'msg' => 'delete success'];
    }
}
