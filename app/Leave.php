<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Leave extends Model
{
	/**
	 * 一张请假条对应一个用户
	 * @return \Illuminate\Database\Eloquent\Relations\HasOne
	 */
    public function user() {
	    return $this->hasOne('App\User','user_id','id');
    }
}
