<?php

namespace App\Models\Order;

use Illuminate\Database\Eloquent\Model;

class PurchaseGroup extends Model
{
    public function odProducts()
    {
	    return $this->hasMany('App\Models\Order\OdProduct', 'purchase_group_id', 'id');
    }
}
