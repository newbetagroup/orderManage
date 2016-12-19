/**
 * Created by Geek-zwb on 2016/12/2 0002.
 */

"use strict";
orderApp.config([
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
                abstract: true,
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
                controller: 'StaffInfoCtrl',
                controllerAs: 'staffs'
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
                        return $ocLazyLoad.load(["postDashboard"]);
                    }]
                },
                controller: function ($state) {
                   // $state.go('post.postIndex');
                }
            })
            .state('post.postIndex', {
                url: '/postIndex',
                templateUrl: 'tpl/post/postIndex',
                resolve:{
                    loadCss:["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load('/css/timeline.css');
                    }]
                },
                controller: 'PostTimelineCtrl'
            })
            .state('post.postDescription', {
                url: '/postDescription/:postId',
                templateUrl: 'tpl/post/postDescription',
                resolve:{
                    loadCss:["$ocLazyLoad", function ($ocLazyLoad) {
                        return $ocLazyLoad.load('/css/post.css');
                    }]
                },
                controller: 'PostDescriptionCtrl'
            })
            .state('post.postManageIndex', {
                url: '/postManageIndex',
                templateUrl: 'tpl/post/postManageIndex',
                controller: 'PostManageIndexCtrl',
                controllerAs: 'posts'
            })
            .state('post.postManageAdd', {
                url: '/postManageAdd',
                templateUrl: 'tpl/post/postManageAdd',
                controller: 'PostManageAddCtrl'
            })
            .state('post.postManageEdit', {
                url: '/postManageEdit/:postId',
                templateUrl: 'tpl/post/postManageEdit',
                controller: 'PostManageEditCtrl'
            })
            .state('post.postManageDestroy', {
                url: '/postManageDestroy',
                templateUrl: 'tpl/post/postManageDestroy',
                controller: 'PostManageDestroyCtrl'
            })

        //performance
            .state('user.performance', {
                url: '/performances',
                resolve:{
                  loadPerformanceCtrl: ["$ocLazyLoad", function ($ocLazyLoad) {
                      return $ocLazyLoad.load('/app/performance/performance.js');
                  }]
                },
                views: {
                    '': {
                        controller: 'PerformanceCtrl',
                        templateUrl: 'tpl/user/performance'
                    }
                }
            })

        //所有员工请假记录
            .state('leaveRecords', {
                url: '/leaveRecords',
                templateUrl: 'tpl/leaves/records',
                resolve: {
                    loadleaveRecordsDashboard: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('/app/leaves/leaveRecords.js');
                    }]
                },
                controller: 'LeaveRecordsController'
            })

        //网站信息管理
            .state('website', {
                template:'<div ui-view=""></div>'
            })

            //server
            .state('website.server', {
                url:'/server',
                resolve: {
                    loadServerDashboard: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('/app/website/server/server.js');
                    }]
                },
                template: '<div ui-view=""></div>'
            })
            .state('website.server.index', {
                url:'/serverIndex',
                templateUrl: 'tpl/website/server/index',
                controller: 'ServersIndexCtrl as servers'
            })
            .state('website.server.add', {
                url:'/serverAdd',
                templateUrl: 'tpl/website/server/add',
                controller: 'ServerAddCtrl'
            })
            .state('website.server.edit', {
                url:'/serverEdit/:serverId',
                templateUrl: 'tpl/website/server/edit',
                controller: 'ServerEditCtrl'
            })
        ;
    }
    ])
    .run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
