<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Group extends Model
{
    //
	protected $table = 'groups';

	public function users()
	{
		return $this->belongsToMnay('App\User');
	}

	/**
	 *group 多对多 permission
	 *
	 * @return mixed
	 */
	public function permissions()
	{
		return $this->belongsToMnay(Permission::class, 'group_permission', 'group_id', 'permission_id');
	}

	/**
	 * 给group添加权限
	 *
	 * @param $permission
	 * @return mixed
	 */
	public function givePermissionTo($permission)
	{
		return $this->permissions()->save($permission);
	}

	/**
	 * group权限整体添加与修改
	 *
	 * @param array $permissionId
	 * @return bool
	 */
	public function givePermissionsTo(array $permissionId){
		$this->permissions()->detach();
		$permissions=Permission::whereIn('id',$permissionId)->get();
		foreach ($permissions as $v){
			$this->givePermissionTo($v);
		}
		return true;
	}

}
