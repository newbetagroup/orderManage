/**
 * Created by Geek-zwb on 2016/11/19 0019.
 */

;(function () {

    'use strict';

    angular.module('userDashboard', [])
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
                    return $http.post('user/getProfile', {})
                        .then(function (r) {
                            if(r.data.status == 1) {
                                me.profileData = r.data.data['user'];
                                me.profileData.password = '';
                               // gData.userId = me.profileData.id;
                              //  gData.supervisor_id = me.profileData.groups[0].supervisor_id;
                               // gData.group_id = me.profileData.groups[0].id;
                                //console.log(gData);
                                return me.profileData;
                            }
                        }, function (e) {
                            console.log(e);
                        })
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
                    console.log(me.askLeaveInfo);
                    $http.post('leave', me.askLeaveInfo)
                        .then(function (r) {
                            if(r.data.status == 1) {
                                //申请请假成功
                                me.askLeaveInfo.status = true;
                                setTimeout(function () {
                                    me.askLeaveInfo = {};
                                   // $state.go('allLeaves');
                                },3000);
                                // me.askLeaveInfo = {};
                            } else {
                                me.askLeaveInfo.err = r.data.msg;
                                setTimeout(function () {
                                    me.askLeaveInfo.err = null;
                                },2000);
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

        .service("LeaveService", [
            '$http',
            '$filter',
            '$q',
            function($http, $filter,$q){
                var cachedData; //请假记录

                var dataLength; //后台获取的总共条数

                function filterData(data, filter){
                    return $filter('filter')(data, filter);
                }

                function orderData(data, params){
                    return params.sorting() ? $filter('orderBy')(data, params.orderBy()) : filteredData;
                }

                function sliceData(data, params){
                    return data.slice((params.page() - 1) * params.count(), params.page() * params.count())
                }

                function transformData(data,filter,params){
                    return sliceData( orderData( filterData(data,filter), params ), params);
                }

                this.fnGetLeaves = function(params) {
                    console.log(params.sorting());
                    console.log(params.orderBy());
                    var deffered = $q.defer();


                    //还要加上判断chcheData中的数据够不够显示,暂缓
                    if(angular.isUndefined(cachedData)) {
                        $http.get("/leave").then(function (r) {

                            if(r.status !== 200 || r.data.status !=1) {
                                deffered.reject();
                                return;
                            }

                            dataLength = r.data.data.recordsTotal;
                            params.total(dataLength);
                            cachedData = r.data.data.data;
                            var transformedData = sliceData(orderData(cachedData,params),params);
                            console.log('cachedData', transformedData);
                            deffered.resolve(transformedData);
                        });
                        return deffered.promise;
                    } else {
                        //var filteredData = filterData(cachedData,filter);
                        var transformedData = sliceData(orderData(cachedData,params),params);
                        console.log('realcache',transformedData);
                        params.total(dataLength);
                        return $q.when(transformedData);
                    }
                };


                /*return {
                    getLeaves: fnGetLeaves()
                }*/
        }])

        //show user info
        .controller('UserInfoController', [
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
        .controller('ProfileUpdateController', [
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
        .controller('AskforLeaveController', [
            '$scope',
            'UserService',
            '$filter',
            function ($scope, UserService,$filter) {
                $scope.User = UserService;
                /*if(UserService.profileData == null || angular.equals({}, UserService.profileData)) {
                     UserService.getProfile(); //从服务器得到UserService.profileData，并不能马上用怎么办？？？？？？
                }*/

                //初始值
                //遗留问题，当UserService.profileData 尚未加载时？？？？ 监控profileData的值？ promise解决？全局变量？
               // UserService.askLeaveInfo.user_id = UserService.profileData.id;
                UserService.askLeaveInfo.user_id = $scope.gUserInfo.userId;
               //UserService.askLeaveInfo.supervisor_id = UserService.profileData.groups[0].supervisor_id ?UserService.profileData.groups[0].supervisor_id:1;
               UserService.askLeaveInfo.supervisor_id = $scope.gUserInfo.supervisor_id;
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
            }
        ])
    
        //请假记录
        .controller('GetLeavesController', [
            '$scope',
            'LeaveService',
            '$filter',
            'NgTableParams',
            function ($scope, LeaveService, $filter, NgTableParams) {
                var self = this;
                self.$injet = ["NgTableParams", "ngTableSimpleList"];
               // self.defaultConfigTableParams = new NgTableParams({}, { dataset: data});
                self.tableParams = createUsingFullOptions();
                self.cols = [
                    { field: "created_at", title: "申请时间", sortable: "created_at", show: true },
                    { field: "type", title: "请假原因", show: true },
                    { field: "grant", title: "审批结果", show: true },
                    { field: "begin", title: "开始请假时间", sortable: "begin", show: true},
                    { field: "end", title: "结束请假时间", sortable: "end", show: true},
                    { field: "total_time", title: "合计请假时数", sortable: "total_time", show: true}
                ];

                function createUsingFullOptions() {
                    var initialParams = {
                        page: 1,
                        sorting: { created_at: "asc" }
                    };
                    var initialSettings = {
                        filterDelay: 0,
                        paginationMaxBlocks: 3,
                        paginationMinBlocks: 2,
                        getData: function(params) {
                           return LeaveService.fnGetLeaves(params);
                        }
                    };
                    return new NgTableParams(initialParams, initialSettings);
                }

            }
        ])


})();