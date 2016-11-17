<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Permission extends Model
{
	/**
	 * group <=> permission 多对多
	 *
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
	 */
	public function groups()
	{
		return $this->belongsToMany(Group::class,'group_permission','permission_id','group_id');
	}
}
