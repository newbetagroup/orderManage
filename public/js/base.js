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
        'directives'
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
                    controller: function ($rootScope, promise) {
                        var userInfo = {};
                        console.log(promise);
                        userInfo = {
                            userId:promise.data.data.user.groups['0'].id,
                            name:promise.data.data.user.name,
                            group_id:promise.data.data.user.groups['0'].id,
                            supervisor_id:promise.data.data.user.groups['0'].supervisor_id
                        };
                        $rootScope.gUserInfo = userInfo;
                        //$rootScope.gUserInfo.groupId = promise.data.data.groups['0'].id;
                        //$rootScope.gUserInfo.supervisorId = promise.data.data.groups['0'].supervisor_id;
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
                });

                $urlRouterProvider.when('', '/user/info');
        })
        .run(function($rootScope, $state, $stateParams) {
            $rootScope.$on('$locationChangeSuccess', function(evt) {
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            });
        })
        .run(function (ngTableDefaults) {
            ngTableDefaults.$inject = ["ngTableDefaults"];
            ngTableDefaults.params.count = 5;
            ngTableDefaults.settings.counts = [];
        });
})();