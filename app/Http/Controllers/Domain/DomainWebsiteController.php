<?php

namespace App\Http\Controllers\Domain;

use App\Models\Domain\DomainServer;
use App\Models\Domain\DomainWebsite;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class DomainWebsiteController extends Controller
{
    protected $fields = [
        'name' => 'like',
        'domain_server_id' => 'extra',
        'domain_country_id' => 'equal',
        'domain_brand_id' => 'equal',
        'domain_ad_status_id' => 'equal',
        'domain_website_status_id' => 'equal',
        'user_id' => 'equal',
        'ftp_ip' => 'like',
        'ftp_username' => 'like',
        'ftp_password' => 'like',
        'background_username' => 'like',
        'background_password' => 'like',
        'database_username' => 'like',
        'database_password' => 'like',
        'domain_host_id' => 'equal',
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
        //orderBy
        $orderBy = $request->get('orderBy');
        $orderBy = $orderBy[0];
        $order = strpos($orderBy, '+') === false?'desc':'asc';
        $orderBy = substr($orderBy, 1);

        $currentPage = $request->get('currentPage'); //当前页码
        $itemsPerPage = $request->get('itemsPerPage');//每页有几条数据
        $skip = ($currentPage - 1)*$itemsPerPage;
        $take = $request->get('takeCount')? $request->get('takeCount'):$itemsPerPage;
        //post search by field

        if($request->has('isDeleted') && $request->get('isDeleted')) {
            //已删除
            $resu = DomainWebsite::onlyTrashed();
        } else {
            //$resu = new DomainWebsite();
           // $resu = DomainWebsite::whereIn('domain_server_id', [1, 2]);
            $resu = DomainWebsite::withTrashed();
        }
        
        //$resu = $resu->whereIn('domain_server_id', [1, 2]);
        //server 服务器 是否是父级服务器，如果是，则取该服务器及其子服务器
        if($request->has('domain_server_id')) {
            $domainServerId = $request->get('domain_server_id');
            //$sql = 'domain_server_id = '.$domainServerId;
            $domainServer = DomainServer::find($domainServerId);
            if($domainServer->pid == 0) {
                $domainServerChildren = DomainServer::select('id')
                    ->where('pid', $domainServerId)
                    ->get();
                $childrenArray =  $domainServerChildren->pluck('id');

                //sql 语句拼接不可取，改成whereIn
                /*foreach($domainServerChildren as $domainServerChild) {
                    $sql .= ' or domain_server_id = '.$domainServerChild->id;
                }*/
                //$resu = $resu->whereRaw($sql);
                $resu = $resu->whereIn('domain_server_id', $childrenArray);
            }
            //$resu = $resu->whereIn('domain_server_id', [1, 2]);
            $resu = $resu->orWhere('domain_server_id', $domainServerId);
        }

        //$resu = DB::table('domain_websites');
        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) {
                if($this->fields[$field] == 'like') {
                    $resu = $resu->where($field, 'like', '%'. $request->get($field) .'%');
                }
                if($this->fields[$field] == 'equal'){
                    $resu = $resu->where($field, $request->get($field));
                }
            }
        }

        $data['recordsTotal'] = $resu->count();
        $data['data'] = $resu->skip($skip)->take($take)->orderBy($orderBy, $order)->get();

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
        $domainWebsite = DomainWebsite::find($id);
        return ['status' => 1, 'data' => $domainWebsite];
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
