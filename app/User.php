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
     * 用户所属部门，可以有多个？
     *
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function groups()
    {
        return $this->belongsToMany(Group::class, 'group_user', 'user_id', 'group_id');
    }
    
    /**
     *
     * @return \Illuminate\Database\Eloquent\Relations\HasOne
     */
    public function charge()
    {
        return $this->hasOne('App\Group', 'id', 'supervisor_id');
    }

    /**
     * 一个用户有N张请假条
     * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
     */
    public function leaves()
    {
        return $this->belongsTo('App\Leave', 'id', 'user_id');
    }

    /**
     * 用户的特权
     * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    public function permissions()
    {
        return $this->belongsToMany(Permission::class, 'permission_user', 'user_id', 'permission_id');
    }

    /**
     * 用户是否在某个组
     * @param $group
     * @return bool
     */
    public function hasGroup($group)
    {
        if (is_string($group)) {
            return $this->groups->contains('name', $group);
        }

        return !!$group->intersect($this->groups)->count();
    }

    /**
     * 是否有某个权限
     * @param $permission
     * @return bool
     */
    public function hasPermission($permission) {
        //是否存在这个权限设置
        if (is_string($permission)) {
            $permission = Permission::where('name',$permission)->first();
            if (!$permission) return false;
        }

        return $this->hasGroup($permission->groups);

        //还要判断用户自身的特权
    }

    /**
     * 将用户注册到某个部门
     * @param $group
     * @return Model
     */
    public function assignGroup($group)
    {
        return $this->groups()->save($group);
    }

    /**
     * 用户部门批量添加与修改
     * @param array $RoleId
     * @return bool
     */
    public function giveGroupTo(array $GroupId){
        $this->groups()->detach();
        $groups=Group::whereIn('id',$GroupId)->get();
        foreach ($groups as $v){
            $this->assignGroup($v);
        }
        return true;
    }

    /**
     * 新增特权
     * @param $permission
     */
    public function asignPermission($permission)
    {
        $this->permissions()->save($permission);
    }

    public function givePermissionTo(array $PermissionId){
        $this->permissions()->detach();
        $permissions=Permission::whereIn('id',$PermissionId)->get();
        foreach ($permissions as $v){
            $this->asignPermission($v);
        }
        return true;
    }


    public function allPermissionshad($id)
    {
        
    }
    
}
