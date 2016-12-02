/**
 * Created by Geek-zwb on 2016/11/18 0018.
 */
    'use strict';

    //绑定module
    var myApp = angular.module('zwb', [
        'ui.router',
        'oc.lazyLoad',
        'ngTable',
        //'ngResource',
        'commonDashboard',
        //'common',
        'userDashboard',
        'managerDashboard'
    ]);
    myApp.config([
        '$interpolateProvider',
        function ($interpolateProvider) {
            //定界符
            $interpolateProvider.startSymbol('[:');
            $interpolateProvider.endSymbol(':]');
        }])
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