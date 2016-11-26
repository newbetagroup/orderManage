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
        'userDashboard',
        'directives',
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
                    templateUrl:'tpl/user/base',
                    resolve: {
                        promise: function ($http) {
                           return $http.get('user/getProfile');
                        }
                    },
                    controller: function ($rootScope, promise, $state) {
                        var userInfo = null;
                        if(!$rootScope.gUserInfo) {
                            userInfo = {
                                userId:promise.data.data.user.groups['0'].id,
                                name:promise.data.data.user.name,
                                group_id:promise.data.data.user.groups['0'].id,
                                supervisor_id:promise.data.data.user.groups['0'].supervisor_id
                            };
                            $rootScope.gUserInfo = userInfo;
                            console.log($rootScope.gUserInfo);
                        }
                        $state.go('user.info');
                    }
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
                    templateUrl: 'tpl/manager/base',
                    resolve: {
                        promise: function ($http) {
                            return $http.get('user/getProfile');
                        }
                    },
                    controller: function ($rootScope, promise, $state) {
                        console.log('stateParams', $state.current.name);
                        var userInfo = null;
                        if(!$rootScope.gUserInfo) {
                            userInfo = {
                                userId:promise.data.data.user.groups['0'].id,
                                name:promise.data.data.user.name,
                                group_id:promise.data.data.user.groups['0'].id,
                                supervisor_id:promise.data.data.user.groups['0'].supervisor_id
                            };
                            $rootScope.gUserInfo = userInfo;
                            console.log($rootScope.gUserInfo);
                        }
                        //$state.go('manager.index');
                    }
                })
                .state('manager.staff', {
                    abstract: true,
                    template:'<div ui-view></div>'
                })
                .state('manager.staff.index', {
                    url: '/index',
                    templateUrl: 'tpl/manager/index'
                })
                .state('manager.group', {
                    abstract: true,
                    template:'<div ui-view></div>'
                })
                .state('manager.group.index', {
                    url: '/groupIndex',
                    templateUrl: 'tpl/manager/groupIndex',
                    controller: 'GroupInfoController'
                })
                .state('manager.group.addGroup', {
                    url: '/addGroup',
                    templateUrl: 'tpl/manager/addGroup',
                    controller: 'AddGroupController'
                })
                .state('manager.group.editGroup', {
                    url: '/editGroup/:groupId',
                    templateUrl: 'tpl/manager/editGroup',
                    controller: 'EditGroupController'
                })
                .state('manager.permission', {
                    abstract: true,
                    template:'<div ui-view></div>'
                })
                .state('manager.permission.index', {
                    url: '/permissionIndex',
                    templateUrl: 'tpl/manager/permissionIndex',
                    controller: 'PermissionInfoController'
                })
                .state('manager.permission.addPermission', {
                    url: '/addPermission',
                    templateUrl: 'tpl/manager/addPermission',
                    controller: 'AddPermissionController'
                })
                .state('manager.permission.editPermission', {
                    url: '/editPermission/:permissionId',
                    templateUrl: 'tpl/manager/editPermission',
                    controller: 'EditPermissionController'
                });

                $urlRouterProvider.when('', '/user/info');
        })
        .run(function($rootScope, $state, $stateParams) {
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        })
        .run(function (ngTableDefaults) {
            ngTableDefaults.$inject = ["ngTableDefaults"];
            ngTableDefaults.params.count = 5;
            ngTableDefaults.settings.counts = [];
        });
})();