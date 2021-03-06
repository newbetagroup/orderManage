<?php

namespace App\Http\Controllers\Domain;


use App\Models\Domain\DomainBrand;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class DomainBrandController extends Controller
{
    protected $fields = [
        'name' => '',
        'order' => ''
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['data'] = DomainBrand::all();
        $data['recordsTotal'] = DomainBrand::count();
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
        $domainBrand = new DomainBrand();
    
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $domainBrand->$field = $request->get($field);
        }
    
        $domainBrand->save();
    
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
        $domainBrand = DomainBrand::find($id);
    
        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $domainBrand->$field!=$request->get($field)) $domainBrand->$field = $request->get($field);
        }
    
        // $performance->update(['']);
        if(!$domainBrand->save()) {
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
        DomainBrand::destroy($id);
    
        return ['status' => 1, 'msg' => 'delete success'];
    }
}
