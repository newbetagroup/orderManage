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
Route::group(['middleware' => ['auth', 'permission']], function() {

    //User 路由
    Route::get('user/getProfile', ['as' => 'user.getProfile', 'uses' => 'UserController@checkLogin']);
    Route::post('user/profileUpdate', ['as' => 'user.profileUpdate', 'uses' => 'UserController@selfUpdate']);
    Route::resource('user','UserController');

    //leave 请假
    Route::resource('leave', 'LeaveController');

    //group 路由
    Route::get('group/index', ['as' => 'group.index', 'uses' => 'RoleController@index']);
    Route::post('group/index', ['as' => 'group.index', 'uses' => 'RoleController@index']);
    Route::resource('group', 'RoleController', ['names' => ['update' => 'group.edit', 'store' => 'group.create']]);

    //permission
     Route::get('permission/manage', ['as' => 'permission.manage', 'uses' => 'PermissionController@index']);
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
