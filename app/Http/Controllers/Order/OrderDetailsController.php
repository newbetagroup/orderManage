<?php

namespace App\Http\Controllers\Order;

use App\Models\Order\OdOrder;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class OrderDetailsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($orderId)
    {
        $order = OdOrder::where('id', $orderId)
            ->with(['odDeliveryAddress' => function($query) {
                $query->select('od_delivery_addresses.id','consignee','country','city','state','street','postcode','od_delivery_addresses.phone','od_customer_id','od_customers.id as od_customers_id','email','ip')
                    ->join('od_customers', 'od_customer_id', '=', 'od_customers.id');
            }])
            ->with('orderProducts')
            ->first();

       return ['status' => 1, 'data' => $order];

    }

}
