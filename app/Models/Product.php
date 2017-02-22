<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
	protected $guarded = ['id'];

	/**
	 * 产品与库存
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function stocks()
	{
		return $this->hasMany('App\Models\Stock', 'product_id', 'id');
	}
}
