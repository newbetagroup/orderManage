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
                me.timeCompute = function () {

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
            '$filter',
            function ($scope, UserService,$filter) {
                $scope.User = UserService;
                if(UserService.profileData == null || angular.equals({}, UserService.profileData)) {
                    UserService.getProfile();
                }
                var dateFilter = $filter('date');
                UserService.askLeaveInfo.begin = dateFilter(new Date(),'yyyy/MM/dd hh:mm');
                UserService.askLeaveInfo.end = dateFilter(new Date(),'yyyy/MM/dd hh:mm');
                UserService.askLeaveInfo.total_time = 0;

                //计算请假时间
                $scope.$watch(function () {
                    return {
                        from: UserService.askLeaveInfo.begin,
                        to: UserService.askLeaveInfo.end
                    };
                }, function (newData, oldData) {
                    var total_time = 0;
                    var from = new Date(newData.from);
                    var to = new Date(newData.to);
                    var fromDay = from.getDate();
                    var toDay = to.getDate();
                    var fromhh = from.getHours();
                    fromhh = fromhh >9 ? fromhh : 9;
                    var tohh = to.getHours();
                    tohh = tohh > 18? 18:tohh;
                    var ftime = 0;
                    var ttime = 0;
                    if(toDay - fromDay == 0) {
                        total_time = tohh - fromhh > 0 ? tohh - fromhh:0;
                    } else if(toDay - fromDay > 0){
                        total_time = (toDay - fromDay - 1)*8;
                        ftime = (18 - fromhh) > 0 ? 18 - fromhh : 0;
                        ttime = (tohh - 9) > 0? tohh - 9 : 0;
                        total_time += ftime + ttime;
                    }
                    UserService.askLeaveInfo.total_time = total_time;
                    //9个小时为一天
                    UserService.askLeaveInfo.total_day = parseInt(total_time/9);
                    UserService.askLeaveInfo.total_hour = total_time%9;
                },true)
            }
        ])

})();