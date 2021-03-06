<?php

namespace App\Http\Controllers\Domain;

use App\Models\Domain\DomainAdStatus;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class DomainAdStatusController extends Controller
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
        $data['data'] = DomainAdStatus::all();
        $data['recordsTotal'] = DomainAdStatus::count();
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
        $domainAdStatus = new DomainAdStatus();

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
        $domainAdStatus = DomainAdStatus::find($id);

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
        DomainAdStatus::destroy($id);

        return ['status' => 1, 'msg' => 'delete success'];
    }
}
