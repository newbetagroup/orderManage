<?php

namespace App\Http\Controllers\Order;

use App\Models\Order\OdCustomer;
use App\Models\Order\OdDeliveryAddress;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class DeliveryAddressController extends Controller
{
    protected $fields = [
        'consignee' => '',
        'country' => '',
        'state' => '',
        'city' => '',
        'street' => '',
        'postcode' => '',
        'phone' => '',
    ];
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        $address = new OdDeliveryAddress();
        
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $address->$field = $request->get($field);
        }
        
        $address->save();
        
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
        $address = OdDeliveryAddress::find($id);

        //update one delivery address
        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $address->$field!=$request->get($field)) $address->$field = $request->get($field);
        }

        //if ip or email changed, update the customer
        if($request->has('ip') || $request->has('email')) {
            $customer = OdCustomer::find($address->od_customer_id);
            if($request->has('email')) $customer->email = $request->email;
            if($request->has('ip')) $customer->ip = $request->ip;
        }

        // update
        if(!($address->save() && $customer->save())) {
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
        OdDeliveryAddress::destroy($id);
        
        return ['status' => 1, 'msg' => 'delete success'];
    }
}
