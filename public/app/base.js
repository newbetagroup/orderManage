/**
 * Created by Geek-zwb on 2016/11/18 0018.
 */
;(function () {
    
    'use strict';

    //绑定module
    var app = angular.module('zwb', [
        'ui.router',
        'ngTable',
        //'ngResource',
        'commonDashboard',
        'userDashboard',
        'managerDashboard'
    ])
        .config(function ($interpolateProvider, $stateProvider, $urlRouterProvider) {
            //定界符
            $interpolateProvider.startSymbol('[:');
            $interpolateProvider.endSymbol(':]');

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
                    templateUrl: 'tpl/user/allLeaves'
                })
                .state('user.test', {
                    url: '/testng',
                    templateUrl: 'tpl/user/test'
                })
                .state('manager', {
                    url: '/manager',
                    templateUrl: 'tpl/manager/base'
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
                });

                $urlRouterProvider.when('', '/user/info');
        })
        .run(function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        })
        .run(function($rootScope,UserService,CommonService) {
            var userInfo = null;
            UserService.getProfile().then(function (r) {
                console.log(r);
                userInfo = {
                    userId: r.id,
                    name:r.name,
                    group_id:angular.isDefined(r.groups['0'])?r.groups['0'].id:'undefinded',
                    supervisor_id:angular.isDefined(r.groups['0'])?r.groups['0'].supervisor_id:'2'
                };
                $rootScope.gUserInfo = userInfo; //注册全局登陆user信息

                CommonService.fnGetPermissionsNameHad(r.id, r.groups['0'].id).then(function (data) {
                    $rootScope.gPermissionNameHad = data; //登陆用户拥有的权限
                })
            });

        })
        .run(function (ngTableDefaults) {
            ngTableDefaults.$inject = ["ngTableDefaults"];
            ngTableDefaults.params.count = 5;
            ngTableDefaults.settings.counts = [];
        });
})();