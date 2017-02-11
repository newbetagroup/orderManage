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
    Route::get('user/getUserOptional', ['as' => 'user.getUserOptional', 'uses' => 'UserController@getUserOptional']);
    Route::get('user/getProfile', ['as' => 'user.getProfile', 'uses' => 'UserController@checkLogin']);
    Route::post('user/profileUpdate', ['as' => 'user.profileUpdate', 'uses' => 'UserController@selfUpdate']);
    //某个用户拥有的的所有权限（部门+个人）
    Route::post('user/allPermissionsHad', ['uses' => 'UserController@allPermissionshad']);
    Route::resource('user', 'UserController', ['names' => ['update' => 'user.edit', 'store' => 'user.create']]);


    //leave 请假
    Route::get('leave/monthLeaves/{currentMonth}', ['uses' => 'LeaveController@monthLeaves']);
    Route::resource('leave', 'LeaveController');

    //group 路由
    Route::get('group/aGroupPermissions/{id}', ['uses' => 'GroupController@oneGroupPermission']);
    Route::get('group/index', ['as' => 'group.index', 'uses' => 'GroupController@index']);
    Route::get('/group/getUsers/{id}', ['as' => 'group.getUsersByGroup', 'uses' => 'GroupController@getUsersByGroup']);
    Route::post('group/index', ['as' => 'group.index', 'uses' => 'GroupController@index']);
    Route::resource('group', 'GroupController', ['names' => ['update' => 'group.edit', 'store' => 'group.create']]);

    //permission
    // Route::get('permission/manage', ['as' => 'permission.manage', 'uses' => 'PermissionController@index']);
    //Route::get('permission/{cid?}', ['as' => 'permission.index', 'uses' => 'PermissionController@index']);
    Route::post('permission/index', ['as' => 'permission.index', 'uses' => 'PermissionController@index']); //查询
    Route::resource('permission', 'PermissionController');

    //post
    Route::get('post/index', ['as' => 'post.index', 'uses' => 'PostController@allPost']);//
    Route::resource('post', 'PostController', ['names' => ['update' => 'post.edit', 'store' => 'post.create']]);

    //performance
    Route::post('performance/index', ['uses' => 'PerformanceController@index']);
    Route::put('performance/{id}', ['uses' => 'PerformanceController@update']);

    //domain server 服务器管理
    Route::get('server/parentServers', ['as' => 'server.parentServers', 'uses' => 'DomainServerController@parentServers']);
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
    Route::post('website/index', ['uses' => 'DomainWebsiteController@index']);
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
    Route::post('customerService/order', ['uses' => 'Order\CustomerServiceDepartmentController@index']);
    Route::post('customerService/ordersUpdate', ['uses' => 'Order\CustomerServiceDepartmentController@ordersUpdate']);
        //订货部
    Route::any('orderDepartment/order', ['uses' => 'Order\OrderDepartmentController@index']);
    Route::post('productsToPurchaseGroup', ['uses' => 'Order\OrderDepartmentController@addProductsToPurchaseGroup']);
            //订货分组
    Route::resource('purchaseGroup', 'Order\PurchaseGroupController', ['names' => ['update' => 'purchaseGroup.edit', 'store' => 'purchaseGroup.create']]);

        //发货部
    Route::any('deliveryDepartment/order', ['uses' => 'Order\DeliveryDepartmentController@index']);
    //Route::post('')
            //发货分组
    Route::resource('shippingGroup', 'Order\ShippingGroupController', ['names' => ['update' => 'shippingGroup.edit', 'store' => 'shippingGroup.create']]);

    //发货分组
    Route::resource('supplier', 'Supplier\SupplierController');

    //订单产品分类
    Route::resource('orderCategory', 'Order\OrderCategoryController', ['names' => ['update' => 'orderCategory.edit', 'store' => 'orderCategory.create']]);

    //店铺管理
    Route::resource('mall', 'Mall\MallController', ['names' => ['update' => 'mall.edit', 'store' => 'mall.create']]);

    //店铺状态
    Route::resource('mallStatus', 'Mall\MallStatusController', ['names' => ['update' => 'mallStatus.edit', 'store' => 'mallStatus.create']]);

    //付款方式
    Route::resource('mallPayType', 'Mall\MallPayTypeController', ['names' => ['update' => 'mallPayType.edit', 'store' => 'mallPayType.create']]);

});

Route::get('/', ['middleware' => 'auth', function () {
    return view('index');
}]);
Route::get('home', function () {
    return view('index');
});

Route::any('addorder/index', ['uses' => 'AddOrderController@index']);


//angular view
Route::get('tpl/page/home', function() { return view('tpl.page.home'); });

Route::get('tpl/user/base', function() { return view('tpl.user.base'); });
Route::get('tpl/user/index', function() { return view('tpl.user.index'); });
Route::get('tpl/user/profileUpdate', function() { return view('tpl.user.profileUpdate'); });
Route::get('tpl/user/askForLeave', function() { return view('tpl.user.askForLeave'); });
Route::get('tpl/user/allLeaves', function() { return view('tpl.user.allLeaves'); });
Route::get('tpl/user/test', function() { return view('tpl.user.test'); });

//manager
Route::get('tpl/manager/base', function() { return view('tpl.manager.base'); });
    //===========staff
Route::get('tpl/manager/staffIndex', function() { return view('tpl.manager.staff.staffIndex'); });
Route::get('tpl/manager/addStaff', function() { return view('tpl.manager.staff.addStaff'); });
Route::get('tpl/manager/editStaff', function() { return view('tpl.manager.staff.editStaff'); });
    //==========group
Route::get('tpl/manager/groupIndex', function() { return view('tpl.manager.group.groupIndex'); });
Route::get('tpl/manager/addGroup', function() { return view('tpl.manager.group.addGroup'); });
Route::get('tpl/manager/editGroup', function() { return view('tpl.manager.group.editGroup'); });
    //=========permission
Route::get('tpl/manager/permissionIndex', function() { return view('tpl.manager.permission.permissionIndex'); });
Route::get('tpl/manager/addPermission', function() { return view('tpl.manager.permission.addPermission'); });
Route::get('tpl/manager/editPermission', function() { return view('tpl.manager.permission.editPermission'); });

//post
Route::get('tpl/post/base', function() { return view('tpl.post.base'); });
Route::get('tpl/post/postIndex', function() { return view('tpl.post.postIndex'); });
Route::get('tpl/post/postDescription', function() { return view('tpl.post.postDescription'); });
Route::get('tpl/post/postManageIndex', function() { return view('tpl.post.postManageIndex'); });
Route::get('tpl/post/postManageAdd', function() { return view('tpl.post.postManageAdd'); });
Route::get('tpl/post/postManageEdit', function() { return view('tpl.post.postManageEdit'); });
Route::get('tpl/post/postManageDestroy', function() { return view('tpl.post.postManageDestroy'); });

//performance
Route::get('tpl/user/performance', function() { return view('tpl.user.performance');});

//leaves
Route::get('tpl/leaves/records', function() { return view('tpl.leaves.records');});

//website domain
    //========server
Route::get('tpl/website/server', function () { return view('tpl.website.server.base');});
Route::get('tpl/website/server/index', function () { return view('tpl.website.server.index');});
Route::get('tpl/website/server/add', function () { return view('tpl.website.server.add');});
Route::get('tpl/website/server/edit', function () { return view('tpl.website.server.edit');});
    //=========country
Route::get('tpl/website/country', function () { return view('tpl.website.country.base');});
Route::get('tpl/website/country/index', function () { return view('tpl.website.country.index');});
Route::get('tpl/website/country/add', function () { return view('tpl.website.country.add');});
Route::get('tpl/website/country/edit', function () { return view('tpl.website.country.edit');});
    //==========brand
Route::get('tpl/website/brand/index', function () { return view('tpl.website.brand.index');});
Route::get('tpl/website/brand/add', function () { return view('tpl.website.brand.add');});
Route::get('tpl/website/brand/edit', function () { return view('tpl.website.brand.edit');});
    //==========Ad status
Route::get('tpl/website/adStatus/index', function () { return view('tpl.website.adStatus.index');});
Route::get('tpl/website/adStatus/add', function () { return view('tpl.website.adStatus.add');});
Route::get('tpl/website/adStatus/edit', function () { return view('tpl.website.adStatus.edit');});
    //==========website status
Route::get('tpl/website/websiteStatus/index', function () { return view('tpl.website.websiteStatus.index');});
Route::get('tpl/website/websiteStatus/add', function () { return view('tpl.website.websiteStatus.add');});
Route::get('tpl/website/websiteStatus/edit', function () { return view('tpl.website.websiteStatus.edit');});
    //==========host
Route::get('tpl/website/host/index', function () { return view('tpl.website.host.index');});
Route::get('tpl/website/host/add', function () { return view('tpl.website.host.add');});
Route::get('tpl/website/host/edit', function () { return view('tpl.website.host.edit');});
    //==========website
Route::get('tpl/website/website/index', function () { return view('tpl.website.website.index');});
Route::get('tpl/website/website/add', function () { return view('tpl.website.website.add');});
Route::get('tpl/website/website/edit', function () { return view('tpl.website.website.edit');});

//==========店铺管理
Route::get('tpl/mall/mall/index', function () { return view('tpl.mall.mall.index');});
Route::get('tpl/mall/mall/add', function () { return view('tpl.mall.mall.add');});
Route::get('tpl/mall/mall/edit', function () { return view('tpl.mall.mall.edit');});
//==========店铺状态
Route::get('tpl/mall/mallStatus/index', function () { return view('tpl.mall.mallStatus.index');});
Route::get('tpl/mall/mallStatus/add', function () { return view('tpl.mall.mallStatus.add');});
Route::get('tpl/mall/mallStatus/edit', function () { return view('tpl.mall.mallStatus.edit');});
//==========付款方式
Route::get('tpl/mall/mallPayType/index', function () { return view('tpl.mall.mallPayType.index');});
Route::get('tpl/mall/mallPayType/add', function () { return view('tpl.mall.mallPayType.add');});
Route::get('tpl/mall/mallPayType/edit', function () { return view('tpl.mall.mallPayType.edit');});
//order 订单相关
    //==========order status
Route::get('tpl/order/status/index', function () { return view('tpl.order.status.index');});
Route::get('tpl/order/status/add', function () { return view('tpl.order.status.add');});
Route::get('tpl/order/status/edit', function () { return view('tpl.order.status.edit');});
    //==========order pay after status
Route::get('tpl/order/payAfterStatus/index', function () { return view('tpl.order.orderPayAfterStatus.index');});
Route::get('tpl/order/payAfterStatus/add', function () { return view('tpl.order.orderPayAfterStatus.add');});
Route::get('tpl/order/payAfterStatus/edit', function () { return view('tpl.order.orderPayAfterStatus.edit');});
    //==========express
Route::get('tpl/order/express/index', function () { return view('tpl.order.express.index');});
Route::get('tpl/order/express/add', function () { return view('tpl.order.express.add');});
Route::get('tpl/order/express/edit', function () { return view('tpl.order.express.edit');});
    //==========express company
Route::get('tpl/order/expressCompany/index', function () { return view('tpl.order.expressCompany.index');});
Route::get('tpl/order/expressCompany/add', function () { return view('tpl.order.expressCompany.add');});
Route::get('tpl/order/expressCompany/edit', function () { return view('tpl.order.expressCompany.edit');});
    //客服部 订单相关
Route::get('tpl/order/customerServiceDepartment/index', function () { return view('tpl.order.customerService.index');});
    //订货部 订单相关
Route::get('tpl/order/orderDepartment/index', function () { return view('tpl.order.orderDepartment.index');});
    //==========订货部 订货分组
Route::get('tpl/order/purchaseGroup/index', function () { return view('tpl.order.purchaseGroup.index');});
Route::get('tpl/order/purchaseGroup/add', function () { return view('tpl.order.purchaseGroup.add');});
Route::get('tpl/order/purchaseGroup/edit', function () { return view('tpl.order.purchaseGroup.edit');});
Route::get('tpl/order/purchaseGroup/detail', function () { return view('tpl.order.purchaseGroup.detail');});
    //发货部 订单相关
Route::get('tpl/order/deliveryDepartment/index', function () { return view('tpl.order.deliveryDepartment.index');});
    //==========发货部 发货分组
Route::get('tpl/order/shippingGroup/index', function () { return view('tpl.order.shippingGroup.index');});
Route::get('tpl/order/shippingGroup/add', function () { return view('tpl.order.shippingGroup.add');});
Route::get('tpl/order/shippingGroup/edit', function () { return view('tpl.order.shippingGroup.edit');});
    //==========订单产品分类
Route::get('tpl/order/category/index', function () { return view('tpl.order.category.index');});
Route::get('tpl/order/category/add', function () { return view('tpl.order.category.add');});
Route::get('tpl/order/category/edit', function () { return view('tpl.order.category.edit');});
//供应商
Route::get('tpl/order/supplier/index', function () { return view('tpl.order.supplier.index');});
Route::get('tpl/order/supplier/add', function () { return view('tpl.order.supplier.add');});
Route::get('tpl/order/supplier/edit', function () { return view('tpl.order.supplier.edit');});
