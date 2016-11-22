/**
 * Created by Geek-zwb on 2016/11/19 0019.
 */

;(function () {

    'use strict';

    angular.module('user', [])
        .service('UserService', [
            '$http',
            '$state',
            '$filter',
            function ($http, $state,$filter) {
                var me = this;
                me.profileData = {};//用户信息

                me.askLeaveInfo = {
                    type: '事假',
                    total_time: 0,
                    status: false
                };//一次请假

                me.leavesInfo = {};

                //获取用户自身信息
                me.getProfile = function () {
                    var data = {};
                    data = $http.post('user/getProfile', {})
                        .then(function (r) {
                            if(r.data.status == 1) {
                                data = r.data.data['user']; //无效赋值？
                                me.profileData = r.data.data['user'];
                                me.profileData.password = '';
                                console.log(me.profileData);
                                return me.profileData;
                                //console.log(me.profileData);//有值??????
                            }
                        }, function (e) {
                            console.log(e);
                        })
                   console.log(data);
                    return data; //return???
                };

                //更新个人资料
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

                //请假申请
                me.askforLeave = function () {
                    if(me.pending) return;//防止重复请求
                    me.pending =true;

                    $http.post('leave', me.askLeaveInfo)
                        .then(function (r) {
                            if(r.data.status == 1) {
                                //申请请假成功
                                me.askLeaveInfo.status = true;
                                setTimeout(function () {
                                    me.askLeaveInfo = {};
                                    $state.go('allLeaves');
                                },3000);
                                // me.askLeaveInfo = {};
                            }
                        },function (e) {
                            // error
                        })
                        .finally(function () {
                            me.pending = false;
                        })
                }

                //获取个人的limit条请假记录
                me.getLeaves = function () {
                    $http.post('user/getProfile', {})
                        .then(function (r) {
                            if(r.data.status == 1) {
                               // data = r.data.data['user']; //无效赋值？
                                me.profileData = r.data.data['user'];
                                me.profileData.password = '';
                                //console.log(me.profileData);//有值??????
                            }
                        }, function (e) {
                            console.log(e);
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

        //请假条
        .controller('AskforLeave', [
            '$scope',
            'UserService',
            '$filter',
            'userInfo',
            function ($scope, UserService,$filter,userInfo) {
                $scope.User = UserService;
                if(UserService.profileData == null || angular.equals({}, UserService.profileData)) {
                     UserService.getProfile(); //从服务器得到UserService.profileData，并不能马上用怎么办？？？？？？
                }

                //初始值
                //遗留问题，当UserService.profileData 尚未加载时？？？？ 当前：监控profileData的值
               // UserService.askLeaveInfo.user_id = UserService.profileData.id;
               //UserService.askLeaveInfo.supervisor_id = UserService.profileData.groups[0].supervisor_id ?UserService.profileData.groups[0].supervisor_id:1;
                var dateFilter = $filter('date');
                UserService.askLeaveInfo.begin = dateFilter(new Date(),'yyyy/MM/dd HH:mm');
                UserService.askLeaveInfo.end = dateFilter(new Date(),'yyyy/MM/dd HH:mm');

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
                    var tohh = to.getHours();
                    if(from.getMinutes() > 30) fromhh = fromhh + 1; //分钟超过30，小时+1
                    if(to.getMinutes() > 40) tohh = tohh + 1; //未小伙伴们谋个小福利吧
                    fromhh = fromhh >9 ? fromhh : 9;
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

                $scope.$watch(function () {
                    return {
                        user_id: UserService.profileData.id,
                        supervisor_id: UserService.profileData.groups[0].supervisor_id
                    };
                },function (newData, oldData) {
                    UserService.askLeaveInfo.user_id = newData.user_id;
                    UserService.askLeaveInfo.supervisor_id = newData.supervisor_id;
                },true);
            }
        ])
    
        //请假记录
        .controller('GetLeaves', [
            '$scope',
            'UserService',
            '$filter',
            'NgTableParams',
            '$http',
            function ($scope, UserService, $filter, NgTableParams,$http) {
                var self = this;
                self.$injet = ["NgTableParams", "ngTableSimpleList"];
                var data = [
                    {name: "Moroni", age: 16, money: 88.1},
                    {name: "Enos", age: 99, money: 22.3},
                    {name: "Tracy", age: 2, money: 22.4},
                    {name: "Oracle", age: 31, money: 33.3},
                    {name: "Java", age: 13, money: 53.3},
                    {name: "Php", age: 46, money: 67.3}
                ];
               // self.defaultConfigTableParams = new NgTableParams({}, { dataset: data});
                self.tableParams = createUsingFullOptions();
                self.cols = [
                    { field: "created_at", title: "申请时间", sortable: "created_at", show: true },
                    { field: "leave_reson", title: "请假原因", show: true },
                    { field: "grant", title: "审批结果", show: true },
                    { field: "begin", title: "开始请假时间", sortable: "begin", show: true},
                    { field: "end", title: "结束请假时间", sortable: "end", show: true},
                    { field: "total_time", title: "合计请假时数", sortable: "total_time", show: true}
                ];

                function createUsingFullOptions() {
                    var initialParams = {
                        page: 1,
                        //count: 5, // initial page size
                        sorting: { name: "asc" }
                    };
                    var initialSettings = {
                        // page size buttons (right set of buttons in demo)
                        counts: [],
                        // determines the pager buttons (left set of buttons in demo)
                        filterDelay: 0,
                        paginationMaxBlocks: 13,
                        paginationMinBlocks: 2,
                        //dataset: data
                        getData: function () {
                            return $http.get('/leave').then(function (r) {
                                if(r.data.status) {
                                    return r.data.data.data;
                                }
                            });
                        }
                    };
                    return new NgTableParams(initialParams, initialSettings);
                }

            }
        ])

})();