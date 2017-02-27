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
//Route::group(['middleware' => ['auth']], function() {
//如果没有添加as(别名)，即没有添加权限规则，则默认能访问该路由
    //User 路由
    Route::get('user/getUserOptional', ['uses' => 'UserController@getUserOptional']);//所有用户名字及其部门信息
    Route::get('user/getProfile', ['as' => 'user.getProfile', 'uses' => 'UserController@checkLogin']);
    Route::post('user/profileUpdate', ['as' => 'user.profileUpdate', 'uses' => 'UserController@selfUpdate']);
    //某个用户拥有的的所有权限（部门+个人）
    Route::post('user/allPermissionsHad', ['uses' => 'UserController@allPermissionshad']);
    Route::resource('user', 'UserController', ['names' => ['update' => 'user.edit', 'store' => 'user.create']]);


    //leave 请假
    Route::get('leave/monthLeaves/{currentMonth}', ['as' => 'leave.monthLeaves', 'uses' => 'LeaveController@monthLeaves']);
    Route::resource('leave', 'LeaveController');

    //group 路由
    Route::get('group/aGroupPermissions/{id}', ['uses' => 'GroupController@oneGroupPermission']);
    Route::get('group/index', ['as' => 'group.index', 'uses' => 'GroupController@index']);
    Route::get('/group/getUsers/{id}', ['uses' => 'GroupController@getUsersByGroup']);//部门下的所有员工
    Route::post('group/index', ['as' => 'group.index', 'uses' => 'GroupController@index']);
    Route::resource('group', 'GroupController', ['names' => ['update' => 'group.edit', 'store' => 'group.create']]);

    //permission
    // Route::get('permission/manage', ['as' => 'permission.manage', 'uses' => 'PermissionController@index']);
    //Route::get('permission/{cid?}', ['as' => 'permission.index', 'uses' => 'PermissionController@index']);
    Route::post('permission/index', ['as' => 'permission.index', 'uses' => 'PermissionController@index']); //查询
    Route::resource('permission', 'PermissionController');

    //post
    Route::get('post/index', ['uses' => 'PostController@allPost']);//
    Route::resource('post', 'PostController', ['names' => ['update' => 'post.edit', 'store' => 'post.create']]);

    //performance
    Route::post('performance/index', ['uses' => 'PerformanceController@index']);
    Route::put('performance/{id}', ['uses' => 'PerformanceController@update']);

    //domain server 服务器管理
    Route::get('server/parentServers', ['uses' => 'DomainServerController@parentServers']);
    Route::resource('server', 'DomainServerController', ['names' => ['update' => 'domainServer.edit', 'store' => 'domainServer.create']]);

    //domain country
    Route::resource('country', 'DomainCountryController', ['names' => ['update' => 'domainCountry.edit', 'store' => 'domainCountry.create']]);

    //doamin brand
    Route::resource('brand', 'DomainBrandController', ['names' => ['update' => 'domainBrand.edit', 'store' => 'domainBrand.create']]);

    //domain Ad status
    Route::resource('adStatus', 'DomainAdStatusController', ['names' => ['update' => 'domainAdStatus.edit', 'store' => 'domainAdStatus.create']]);

    //domain website status
    Route::resource('websiteStatus', 'DomainWebsiteStatusController', ['names' => ['update' => 'domainWebsiteStatus.edit', 'store' => 'domainWebsiteStatus.create']]);

    //domain host
    Route::resource('host', 'DomainHostController', ['names' => ['update' => 'domainHost.edit', 'store' => 'domainHost.create']]);

    //domain website 网站管理
    Route::post('website/index', ['as'=> 'website.index', 'uses' => 'DomainWebsiteController@index']);
    Route::resource('website', 'DomainWebsiteController', ['names' => ['update' => 'domainWebsite.edit', 'store' => 'domainWebsite.create']]);

    //order status
    Route::resource('orderStatus', 'OrderStatusController', ['names' => ['update' => 'orderStatus.edit', 'store' => 'orderStatus.create']]);

    //order pay after status 付款后订单状态
    Route::resource('orderPayAfterStatus', 'OdPayAfterStatusController', ['names' => ['update' => 'orderPayAfterStatus.edit', 'store' => 'orderPayAfterStatus.create']]);

    //货运方式 如EMS
    Route::resource('express', 'ExpressController', ['names' => ['update' => 'express.edit', 'store' => 'express.create']]);

    //快递发货公司
    Route::resource('expressCompany', 'ExpressCompanyController', ['names' => ['update' => 'expressCompany.edit', 'store' => 'expressCompany.create']]);

    //order
        //客服部
    Route::post('customerService/order', ['as' => 'customerService.order', 'uses' => 'Order\CustomerServiceDepartmentController@index']);
    Route::post('customerService/ordersUpdate', ['as' => 'customerService.update', 'uses' => 'Order\CustomerServiceDepartmentController@ordersUpdate']);
        //订货部
    Route::any('orderDepartment/order', ['as' => 'orderDepartment.order', 'uses' => 'Order\OrderDepartmentController@index']);
    Route::post('productsToPurchaseGroup', ['as' => 'orderDepartment.productsToPurchaseGroup', 'uses' => 'Order\OrderDepartmentController@addProductsToPurchaseGroup']);
            //订货分组
    Route::resource('purchaseGroup', 'Order\PurchaseGroupController', ['names' => ['update' => 'purchaseGroup.edit', 'store' => 'purchaseGroup.create']]);

        //发货部
    Route::any('deliveryDepartment/order', ['as' => 'deliveryDepartment.order', 'uses' => 'Order\DeliveryDepartmentController@index']);
    Route::any('deliveryDepartment/exportDHL', ['as' => 'deliveryDepartment.exportdhl', 'uses' => 'Order\DeliveryDepartmentController@exportDHL']);
    Route::any('deliveryDepartment/barCode', ['as' => 'deliveryDepartment.barCode', 'uses' => 'Order\DeliveryDepartmentController@barCode']);
    Route::post('productsToShippingGroup', ['as' => 'deliveryDepartment.productsToShippingGroup', 'uses' => 'Order\DeliveryDepartmentController@addProductsToShippingGroup']);
    //Route::post('')
            //发货分组
    Route::resource('shippingGroup', 'Order\ShippingGroupController', ['names' => ['update' => 'shippingGroup.edit', 'store' => 'shippingGroup.create']]);

    //供应商
    Route::resource('supplier', 'Supplier\SupplierController');

    //订单产品分类
    Route::resource('orderCategory', 'Order\OrderCategoryController', ['names' => ['update' => 'orderCategory.edit', 'store' => 'orderCategory.create']]);

    //店铺管理
    Route::resource('mall', 'Mall\MallController', ['names' => ['update' => 'mall.edit', 'store' => 'mall.create']]);

    //店铺状态
    Route::resource('mallStatus', 'Mall\MallStatusController', ['names' => ['update' => 'mallStatus.edit', 'store' => 'mallStatus.create']]);

    //付款方式
    Route::resource('mallPayType', 'Mall\MallPayTypeController', ['names' => ['update' => 'mallPayType.edit', 'store' => 'mallPayType.create']]);

    //产品及库存
    Route::any('stock/index', ['as' => 'stock.index', 'uses' => 'StockController@index']);
    Route::post('stock/update', ['as' => 'stock.update', 'uses' => 'StockController@updateStocks']);
});

Route::get('/', ['middleware' => 'auth', function () {
    return view('index');
}]);
Route::get('home', function () {
    return view('index');
});

Route::any('addorder/index', ['uses' => 'AddOrderController@index']);