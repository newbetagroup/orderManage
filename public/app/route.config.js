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
            //country
            .state('website.country', {
                url:'/country',
                resolve: {
                    loadServerDashboard: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('/app/website/country/country.js');
                    }]
                },
                template: '<div ui-view=""></div>'
            })
            .state('website.country.index', {
                url:'/countryIndex',
                templateUrl: 'tpl/website/country/index',
                controller: 'CountryIndexCtrl as countries'
            })
            .state('website.country.add', {
                url:'/countryAdd',
                templateUrl: 'tpl/website/country/add',
                controller: 'CountryAddCtrl'
            })
            .state('website.country.edit', {
                url:'/countryEdit/:countryId',
                templateUrl: 'tpl/website/country/edit',
                controller: 'CountryEditCtrl'
            })
            //brand
            .state('website.brand', {
                url:'/brand',
                resolve: {
                    loadBrandDashboard: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('/app/website/brand/brand.js');
                    }]
                },
                template: '<div ui-view=""></div>'
            })
            .state('website.brand.index', {
                url:'/brandIndex',
                templateUrl: 'tpl/website/brand/index',
                controller: 'BrandIndexCtrl as brands'
            })
            .state('website.brand.add', {
                url:'/brandAdd',
                templateUrl: 'tpl/website/brand/add',
                controller: 'BrandAddCtrl'
            })
            .state('website.brand.edit', {
                url:'/brandEdit/:brandId',
                templateUrl: 'tpl/website/brand/edit',
                controller: 'BrandEditCtrl'
            })
            //ad status
            .state('website.adStatus', {
                url:'/adStatus',
                resolve: {
                    loadBrandDashboard: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('/app/website/adStatus/adStatus.js');
                    }]
                },
                template: '<div ui-view=""></div>'
            })
            .state('website.adStatus.index', {
                url:'/adStatusIndex',
                templateUrl: 'tpl/website/adStatus/index',
                controller: 'AdStatusIndexCtrl as adStatuses'
            })
            .state('website.adStatus.add', {
                url:'/adStatusAdd',
                templateUrl: 'tpl/website/adStatus/add',
                controller: 'AdStatusAddCtrl'
            })
            .state('website.adStatus.edit', {
                url:'/adStatusEdit/:adStatusId',
                templateUrl: 'tpl/website/adStatus/edit',
                controller: 'AdStatusEditCtrl'
            })
            //website status
            .state('website.websiteStatus', {
                url:'/websiteStatus',
                resolve: {
                    loadBrandDashboard: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('/app/website/websiteStatus/websiteStatus.js');
                    }]
                },
                template: '<div ui-view=""></div>'
            })
            .state('website.websiteStatus.index', {
                url:'/websiteStatusIndex',
                templateUrl: 'tpl/website/websiteStatus/index',
                controller: 'WebsiteStatusIndexCtrl as websiteStatuses'
            })
            .state('website.websiteStatus.add', {
                url:'/websiteStatusAdd',
                templateUrl: 'tpl/website/websiteStatus/add',
                controller: 'WebsiteStatusAddCtrl'
            })
            .state('website.websiteStatus.edit', {
                url:'/websiteStatusEdit/:websiteStatusId',
                templateUrl: 'tpl/website/websiteStatus/edit',
                controller: 'WebsiteStatusEditCtrl'
            })
            //host
            .state('website.host', {
                url:'/host',
                resolve: {
                    loadBrandDashboard: ['$ocLazyLoad', function ($ocLazyLoad) {
                        return $ocLazyLoad.load('/app/website/host/host.js');
                    }]
                },
                template: '<div ui-view=""></div>'
            })
            .state('website.host.index', {
                url:'/hostIndex',
                templateUrl: 'tpl/website/host/index',
                controller: 'HostIndexCtrl as hosts'
            })
            .state('website.host.add', {
                url:'/hostAdd',
                templateUrl: 'tpl/website/host/add',
                controller: 'HostAddCtrl'
            })
            .state('website.host.edit', {
                url:'/hostEdit/:hostId',
                templateUrl: 'tpl/website/host/edit',
                controller: 'HostEditCtrl'
            })
        ;
    }
    ])
    .run(function($rootScope, $state, $stateParams) {
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
    });
