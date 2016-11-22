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
    Route::get('/', function () {
        return view('index');
    });
    Route::get('home', function () {
        return view('index');
    });

    //User 路由
    Route::resource('user','UserController');
    Route::any('user/getProfile', ['uses' => 'UserController@checkLogin']);
    Route::any('user/profileUpdate', ['uses' => 'UserController@selfUpdate']);

    //leave 请假
    Route::resource('leave', 'LeaveController');
});

//angular view
Route::get('tpl/page/home', function() { return view('tpl.page.home'); });
Route::get('tpl/user/index', function() { return view('tpl.user.index'); });
Route::get('tpl/user/profileUpdate', function() { return view('tpl.user.profileUpdate'); });
Route::get('tpl/user/askForLeave', function() { return view('tpl.user.askForLeave'); });
Route::get('tpl/user/allLeaves', function() { return view('tpl.user.allLeaves'); });
