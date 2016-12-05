/**
 * Created by Geek-zwb on 2016/12/2 0002.
 */

"use strict";
myApp.config([
    "$stateProvider",
    "$urlRouterProvider",
    function ($stateProvider,$urlRouterProvider){
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl:'tpl/page/home'
            })
            .state('user', {
                //abstract: true,
                url: '/user',
                templateUrl:'tpl/user/base'
            })
            .state('user.info', {
                url:'/info',
                templateUrl:'tpl/user/index'
            })
            .state('user.profileUpdate', {
                url:'/profileUpdate',
                templateUrl:'tpl/user/profileUpdate'
            })
            .state('user.askForLeave', {
                url:'/askForLeave',
                templateUrl:'tpl/user/askForLeave'
            })
            .state('user.allLeaves', {
                url: '/allLeaves',
                templateUrl: 'tpl/user/allLeaves',
                controller:'GetLeavesController',
                controllerAs:'leave'
            })
            .state('user.test', {
                url: '/testng',
                templateUrl: 'tpl/user/test'
            })
            .state('manager', {
                url: '/manager',
                templateUrl: 'tpl/manager/base',
                resolve:{
                    loadOut:["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("managerDashboard");
                    }]
                }
            })
            .state('manager.staff', {
                abstract: true,
                template:'<div ui-view></div>'
            })
            .state('manager.staff.index', {
                url: '/index',
                templateUrl: 'tpl/manager/staffIndex',
                controller: 'StaffInfoCtrl'
            })
            .state('manager.staff.addStaff', {
                url: '/addStaff',
                templateUrl: 'tpl/manager/addStaff',
                controller: 'AddStaffCtrl'
            })
            .state('manager.staff.editStaff', {
                url: '/editStaff/:staffId',
                templateUrl: 'tpl/manager/editStaff',
                controller: 'EditStaffCtrl'
            })
            .state('manager.group', {
                abstract: true,
                template:'<div ui-view></div>'
            })
            .state('manager.group.index', {
                url: '/groupIndex',
                templateUrl: 'tpl/manager/groupIndex',
                controller: 'GroupInfoCtrl'
            })
            .state('manager.group.addGroup', {
                url: '/addGroup',
                templateUrl: 'tpl/manager/addGroup',
                controller: 'AddGroupCtrl'
            })
            .state('manager.group.editGroup', {
                url: '/editGroup/:groupId',
                templateUrl: 'tpl/manager/editGroup',
                controller: 'EditGroupCtrl'
            })
            .state('manager.permission', {
                abstract: true,
                template:'<div ui-view></div>'
            })
            .state('manager.permission.index', {
                url: '/permissionIndex',
                templateUrl: 'tpl/manager/permissionIndex',
                controller: 'PermissionInfoCtrl'
            })
            .state('manager.permission.addPermission', {
                url: '/addPermission',
                templateUrl: 'tpl/manager/addPermission',
                controller: 'AddPermissionCtrl'
            })
            .state('manager.permission.editPermission', {
                url: '/editPermission/:permissionId',
                templateUrl: 'tpl/manager/editPermission',
                controller: 'EditPermissionCtrl'
            })

        //post
            .state('post', {
                url:'/post',
                templateUrl: 'tpl/post/base',
                resolve:{
                    loadDashboard:["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load("postDashboard");
                    }]
                },
                controller: function ($state) {
                   // $state.go('post.postIndex');
                }
            })
            .state('post.postIndex', {
                url: '/postIndex',
                templateUrl: 'tpl/post/postIndex',
                controller: 'PostIndexCtrl'
            })
            .state('post.postManageIndex', {
                url: '/postManageIndex',
                templateUrl: 'tpl/post/postManageIndex',
                controller: 'PostManageIndexCtrl'
            })
            .state('post.postManageAdd', {
                url: '/postManageAdd',
                templateUrl: 'tpl/post/postManageAdd',
                resolve: {
                  /*loadkindeditor:["$ocLazyLoad", function ($ocLazyLoad) {
                      return $ocLazyLoad.load([
                          "/css/textAngular.css",
                          '/app/post/textAngular-rangy.min.js',
                          '/app/post/textAngular-sanitize.min.js'
                      ]).then(function () {
                          return $ocLazyLoad.load('textAngular');
                      });
                  }]*/
                },
                controller: 'PostManageAddCtrl'
            })
            .state('post.postManageEdit', {
                url: '/postManageEdit',
                templateUrl: 'tpl/post/postManageEdit',
                controller: 'PostManageEditCtrl'
            })
            .state('post.postManageDestroy', {
                url: '/postManageDestroy',
                templateUrl: 'tpl/post/postManageDestroy',
                controller: 'PostManageDestroyCtrl'
            })
        ;
    }
    ])
    .run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
