/**
 * Created by Geek-zwb on 2016/11/19 0019.
 */

;(function () {

    'use strict';

    angular.module('user', [])
        .service('UserService', [
            '$http',
            '$state',
            function ($http, $state) {
                var me = this;
                me.profileData = {};//用户信息
                me.askLeaveInfo = {};//一次请假
                me.getProfile = function () {
                    $http.post('user/getProfile', {})
                        .then(function (r) {
                            if(r.data.status == 1) {
                                me.profileData = r.data.data['user'];
                                me.profileData.password = '';
                                console.log(me.profileData);
                            }
                        }, function (e) {
                            console.log(e);
                        })
                };
                me.profileUpdate = function () {
                    $http.post('user/profileUpdate', me.profileData)
                        .then(function (r) {
                            if(r.data.status == 1) {
                                me.profileData.updateStatus = true;
                            }
                        }, function (e) {
                            //error
                        })
                }
                me.askforLeave = function () {
                    $http.post('leave', me.askLeave)
                        .then(function (r) {
                            if(r.data.status == 1) {
                                //申请请假成功
                                me.askLeaveInfo.status = true;
                                // me.askLeave = {};
                            }
                        },function (e) {
                            // error
                        })
                }
            }
        ])

        //show user info
        .controller('UserInfo', [
            '$scope',
            'UserService',
            function ($scope, UserService) {
                $scope.User = UserService;
                if(UserService.profileData == null || angular.equals({}, UserService.profileData)) {
                    UserService.getProfile();
                }
            }
        ])

        //update profile
        .controller('ProfileUpdate', [
            '$scope',
            'UserService',
            function ($scope, UserService) {
                $scope.User = UserService;
                if(UserService.profileData == null || angular.equals({}, UserService.profileData)) {
                    UserService.getProfile();
                }
            }
        ])

        .controller('AskforLeave', [
            '$scope',
            'UserService',
            function ($scope, UserService) {
                $scope.User = UserService;
                if(UserService.profileData == null || angular.equals({}, UserService.profileData)) {
                    UserService.getProfile();
                }
            }
        ])
})();