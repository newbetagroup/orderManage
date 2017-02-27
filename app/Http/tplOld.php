<?php
/**
 * Created by PhpStorm.
 * User: geekzwb
 * Date: 2017/2/27
 * Time: 9:41
 */

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
//产品及库存
Route::get('tpl/order/stock/index', function() { return view('tpl.order.stock.index');});