<?php

namespace App\Http\Controllers;

use App\DomainWebsite;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class DomainWebsiteController extends Controller
{
    protected $fields = [
        'name' => 'like',
        'domain_server_id' => '',
        'domain_country_id' => '',
        'domain_brand_id' => '',
        'domain_ad_status_id' => '',
        'domain_website_status_id' => '',
        'user_id' => '',
        'ftp_ip' => '',
        'ftp_username' => 'like',
        'ftp_password' => 'like',
        'background_username' => 'like',
        'background_password' => 'like',
        'database_username' => 'like',
        'database_password' => 'like',
        'domain_host_id' => '',
        'expiration_time' => 'like',
        'adstart' => 'like',
        'adend' => 'like',
        'remark' => 'like'
    ];

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        if(!$request->isMethod('post')) {
            //get
            $data['data'] = DomainWebsite::take(100)->get();
            $data['recordsTotal'] = DomainWebsite::count();
        } else {
            $currentPage = $request->get('currentPage'); //当前页码
            $countPerpage = $request->get('countPerpage');//每页有几条数据
            $skip = ($currentPage - 1)*$countPerpage;
            //post search by field
            $resu = new DomainWebsite();
            //$resu = DB::table('domain_websites');
            foreach (array_keys($this->fields) as $field) {
                if ($request->has($field)) {
                    if($this->fields[$field] == 'like') {
                        $resu = $resu->where($field, 'like', '%'. $request->get($field) .'%');
                    } else {
                        $resu = $resu->where($field, $request->get($field));
                    }
                }
            }

            $data['data'] = $resu->skip($skip)->take($countPerpage)->get();
        }

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
        $domainWebsite = new DomainWebsite();

        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $domainWebsite->$field = $request->get($field);
        }

        $domainWebsite->save();

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
        $domainWebsite = DomainWebsite::find($id);

        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $domainWebsite->$field!=$request->get($field)) $domainWebsite->$field = $request->get($field);
        }

        // $performance->update(['']);
        if(!$domainWebsite->save()) {
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
        DomainWebsite::destroy($id);

        return ['status' => 1, 'msg' => 'delete success'];
    }
}
