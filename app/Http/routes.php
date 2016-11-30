<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

// 认证路由...
Route::get('auth/login', 'Auth\AuthController@getLogin');
Route::post('auth/login', 'Auth\AuthController@postLogin');
Route::get('auth/logout', 'Auth\AuthController@getLogout');

// 注册路由...
Route::get('auth/register', 'Auth\AuthController@getRegister');
Route::post('auth/register', 'Auth\AuthController@postRegister');

Route::any('user/authuser', 'UserController@checkLogin');



//强制登录
Route::group(['middleware' => ['auth']], function() {

    //User 路由
    Route::get('user/getProfile', ['as' => 'user.getProfile', 'uses' => 'UserController@checkLogin']);
    Route::post('user/profileUpdate', ['as' => 'user.profileUpdate', 'uses' => 'UserController@selfUpdate']);
    Route::post('user/allPermissionsHad', ['as' => 'user.allPermissionsHad', 'uses' => 'UserController@allPermissionshad']);
    Route::resource('user', 'UserController', ['names' => ['update' => 'user.edit', 'store' => 'user.create']]);


    //leave 请假
    Route::resource('leave', 'LeaveController');

    //group 路由
    Route::get('group/aGroupPermissions/{id}', ['as' => 'group.aGroupPermissions', 'uses' => 'GroupController@oneGroupPermission']);
    Route::get('group/index', ['as' => 'group.index', 'uses' => 'GroupController@index']);
    Route::post('group/index', ['as' => 'group.index', 'uses' => 'GroupController@index']);
    Route::resource('group', 'GroupController', ['names' => ['update' => 'group.edit', 'store' => 'group.create']]);

    //permission
    // Route::get('permission/manage', ['as' => 'permission.manage', 'uses' => 'PermissionController@index']);
    //Route::get('permission/{cid?}', ['as' => 'permission.index', 'uses' => 'PermissionController@index']);
    Route::post('permission/index', ['as' => 'permission.index', 'uses' => 'PermissionController@index']); //查询
    Route::resource('permission', 'PermissionController', ['names' => ['update' => 'permission.edit', 'store' => 'permission.create']]);

});

Route::get('/', ['middleware' => 'auth', function () {
    return view('index');
}]);
Route::get('home', function () {
    return view('index');
});


//angular view
Route::get('tpl/page/home', function() { return view('tpl.page.home'); });

Route::get('tpl/user/base', function() { return view('tpl.user.base'); });
Route::get('tpl/user/index', function() { return view('tpl.user.index'); });
Route::get('tpl/user/profileUpdate', function() { return view('tpl.user.profileUpdate'); });
Route::get('tpl/user/askForLeave', function() { return view('tpl.user.askForLeave'); });
Route::get('tpl/user/allLeaves', function() { return view('tpl.user.allLeaves'); });
Route::get('tpl/user/test', function() { return view('tpl.user.test'); });

Route::get('tpl/manager/base', function() { return view('tpl.manager.base'); });
Route::get('tpl/manager/staffIndex', function() { return view('tpl.manager.staffIndex'); });
Route::get('tpl/manager/addStaff', function() { return view('tpl.manager.addStaff'); });
Route::get('tpl/manager/editStaff', function() { return view('tpl.manager.editStaff'); });
Route::get('tpl/manager/groupIndex', function() { return view('tpl.manager.groupIndex'); });
Route::get('tpl/manager/addGroup', function() { return view('tpl.manager.addGroup'); });
Route::get('tpl/manager/editGroup', function() { return view('tpl.manager.editGroup'); });
Route::get('tpl/manager/permissionIndex', function() { return view('tpl.manager.permissionIndex'); });
Route::get('tpl/manager/addPermission', function() { return view('tpl.manager.addPermission'); });
Route::get('tpl/manager/editPermission', function() { return view('tpl.manager.editPermission'); });
