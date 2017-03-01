<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Model;

class OdOrder extends Model
{
    protected $guarded =['id'];
    
    public function products()
    {
        $this->belongsToMany('App\Models\Product', 'od_products', 'od_order_id', 'product_id')
        ->withPivot(['purchase_group_id', 'shipping_group_id']);
    }

    public function orderProducts()
    {
        return $this->hasMany('App\Models\Order\OdProduct', 'od_order_id', 'id');
    }
    
}
