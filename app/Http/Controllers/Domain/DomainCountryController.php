<?php

namespace App\Http\Controllers\Domain;

use App\Models\Domain\DomainCountry;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class DomainCountryController extends Controller
{
    protected $fields = [
        'name' => '',
        'abbreviation' => '',
        'currency_id' => ''
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $data['data'] = DomainCountry::all();
        $data['recordsTotal'] = DomainCountry::count();
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
        $domainCountry = new DomainCountry();
        
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $domainCountry->$field = $request->get($field);
        }
        
        $domainCountry->save();
        
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
        $domainCountry = DomainCountry::find($id);

        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $domainCountry->$field!=$request->get($field)) $domainCountry->$field = $request->get($field);
        }

        // $performance->update(['']);
        if(!$domainCountry->save()) {
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
        DomainCountry::destroy($id);

        return ['status' => 1, 'msg' => 'delete success'];
    }
}
