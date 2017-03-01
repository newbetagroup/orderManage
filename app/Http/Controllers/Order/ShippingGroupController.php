<?php

namespace App\Http\Controllers\Order;

use App\Models\Order\ShippingGroup;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class ShippingGroupController extends Controller
{
    protected $fields = [
        'name' => '',
        'user_id' => '',
        'charger_name' => '',
        'remark' => ''
    ];
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['data'] = ShippingGroup::all();
        $data['recordsTotal'] = ShippingGroup::count();
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
        $shippingGroup = new ShippingGroup();
        
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $shippingGroup->$field = $request->get($field);
        }

        $user = Auth::user();

        $shippingGroup->user_id = $user->id;
        $shippingGroup->charger_name = $user->name;
        $shippingGroup->save();
        
        return ['status' => 1, 'id' => $shippingGroup->id];
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
        $shippingGroup = ShippingGroup::find($id);
        
        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $shippingGroup->$field!=$request->get($field)) $shippingGroup->$field = $request->get($field);
        }
        
        // $performance->update(['']);
        if(!$shippingGroup->save()) {
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
        ShippingGroup::destroy($id);
        
        return ['status' => 1, 'msg' => 'delete success'];
    }
}
