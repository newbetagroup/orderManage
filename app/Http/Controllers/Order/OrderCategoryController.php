<?php

namespace App\Http\Controllers\Order;

use App\Models\Order\OdCategory;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class OrderCategoryController extends Controller
{
    protected $fields = [
        'name' => '',
        'english_name' => '',
        'weight' => '',
        'price' => '',
    ];
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['data'] = OdCategory::all();
        $data['recordsTotal'] = OdCategory::count();
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
        $domainAdStatus = new OdCategory();
        
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $domainAdStatus->$field = $request->get($field);
        }
        
        $domainAdStatus->save();
        
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
        $domainAdStatus = OdCategory::find($id);
        
        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $domainAdStatus->$field!=$request->get($field)) $domainAdStatus->$field = $request->get($field);
        }
        
        // $performance->update(['']);
        if(!$domainAdStatus->save()) {
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
        OdCategory::destroy($id);
        
        return ['status' => 1, 'msg' => 'delete success'];
    }
}
