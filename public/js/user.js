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
                me.profileData = {};
                me.getProfile = function () {
                    $http.post('user/getProfile', {})
                        .then(function (r) {
                            if(r.data.status == 1) {
                                me.profileData = r.data.data;
                                //console.log(r.data.data);
                            }
                        }, function (e) {
                            console.log(e);
                        })
                }
            }
        ])
        .controller('userInfo', [
            '$scope',
            'UserService',
            function ($scope, UserService) {
                $scope.User = UserService;
                UserService.getProfile();
            }
        ])
})();