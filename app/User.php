<?php

namespace App;

use Illuminate\Auth\Authenticatable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Auth\Passwords\CanResetPassword;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Contracts\Auth\Access\Authorizable as AuthorizableContract;
use Illuminate\Contracts\Auth\CanResetPassword as CanResetPasswordContract;

class User extends Model implements AuthenticatableContract,
                                    AuthorizableContract,
                                    CanResetPasswordContract
{
    use Authenticatable, Authorizable, CanResetPassword;

    /**
     * The database table used by the model.
     *
     * @var string
     */
    protected $table = 'users';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['name', 'email', 'password', 'domicile', 'graduated_school', 'address', 'sex', 'phone', 'qq', 'remark'];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = ['password', 'remember_token'];

    /**
     * 用户所属分组，可以有多个？
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function groups()
    {
        return $this->belongsToMany(Group::class, 'group_user', 'group_id', 'user_id');
    }


    public function hasGroup($group)
    {
        //用户是否在某个组
    }

    public function hasPermission($permission) {
        //是否有某个权限
    }

    public function assignGroup($group)
    {
        //将用户注册到某个分组
        return $this->groups()->save($group);
    }

    //用户分组批量添加与修改
    public function giveGroupTo(array $RoleId){
        $this->groups()->detach();
        $roles=Group::whereIn('id',$RoleId)->get();
        foreach ($roles as $v){
            $this->assignGroup($v);
        }
        return true;
    }


    
    
}
