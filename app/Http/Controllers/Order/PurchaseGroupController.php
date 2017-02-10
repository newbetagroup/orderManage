<?php

namespace App\Http\Controllers\Order;

use App\Models\Order\PurchaseGroup;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class PurchaseGroupController extends Controller
{
    protected $fields = [
        'supplier_id' => '',
        'name' => '',
        'charger_id' => '',
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
        /*$purchaseGroups = PurchaseGroup::selectRaw('purchase_groups.*, od_products.id as od_product_id, od_products.od_order_id, suppliers.name as supplier_name')
                            ->join('od_products', 'purchase_groups.id', '=', 'od_products.id')
                            ->leftJoin('suppliers', 'purchase_groups.supplier_id', '=', 'suppliers.id')
                            ->get();*/

        $purchaseGroups = PurchaseGroup::selectRaw('purchase_groups.*, suppliers.name as supplier_name')
            ->with(['odProducts' => function($query) {
                $query->select('id', 'purchase_group_id', 'od_order_id');//此处关联id purchase_group_id 必须查询，否则结果为空
            }])
            ->leftJoin('suppliers', 'purchase_groups.supplier_id', '=', 'suppliers.id')
            ->get();

        $data['recordsTotal'] = $purchaseGroups->count();
        $data['data'] = $purchaseGroups;
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
        $purchaseGroup = new PurchaseGroup();

        foreach (array_keys($this->fields) as $field) {
            if ($request->has($field)) $purchaseGroup->$field = $request->get($field);
        }

        $user = Auth::user();

        $purchaseGroup->charger_id = $user->id;
        $purchaseGroup->charger_name = $user->name;

        $purchaseGroup->save();

        return ['status' => 1, 'id' => $purchaseGroup->id];
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
        $purchaseGroup = PurchaseGroup::find($id);

        foreach (array_keys($this->fields) as $field) {
            if($request->has($field) && $purchaseGroup->$field!=$request->get($field)) $purchaseGroup->$field = $request->get($field);
        }

        // $performance->update(['']);
        if(!$purchaseGroup->save()) {
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
        PurchaseGroup::destroy($id);

        return ['status' => 1, 'msg' => 'delete success'];
    }
}
