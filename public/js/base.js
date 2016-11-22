/**
 * Created by Geek-zwb on 2016/11/18 0018.
 */
;(function () {
    
    'use strict';

    //绑定module
    var app = angular.module('zwb', [
        'ui.router',
        'ngTable',
        'user',
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
                    url: '/user',
                    templateUrl:'tpl/user/index'
                })
                .state('profileUpdate', {
                    url:'/profileUpdate',
                    templateUrl:'tpl/user/profileUpdate'
                })
                .state('askForLeave', {
                    url:'/askForLeave',
                    templateUrl:'tpl/user/askForLeave'
                })
                .state('allLeaves', {
                    url: '/allLeaves',
                    templateUrl: 'tpl/user/allLeaves'
                })
        });
    app.constant('userInfo',{});
})();