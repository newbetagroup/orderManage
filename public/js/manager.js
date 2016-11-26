/**
 * Created by Geek-zwb on 2016/11/26 0026.
 */
;(function () {
    'use strict';

    angular.module('managerDashboard', [])
        .service('ManagerService',[
            '$http',
            '$q',
            function ($http, $q) {
                var me = this;

                me.staffInfo = {};
                me.groupsInfo = {};//{recordsFiltered,data}
                //获取员工数据
                me.getStaff = function () {
                    var deffered = $q.defer();
                    if(angular.equals({}, me.staffInfo)) {
                        $http.get("/group").then(function (r) {

                            if(r.status !== 200 || r.data.status !=1) {
                                deffered.reject();
                                return;
                            }

                            me.staff = r.data.data;

                            deffered.resolve(me.staffInfo);
                        });
                        return deffered.promise;
                    } else {
                        console.log('cachestaffInfo',me.staffInfo);
                        // return $q.when(me.staff);
                    }
                }
                //groups
                me.getGroups = function () {
                    var deffered = $q.defer();
                    if(angular.equals({}, me.groupsInfo)) {
                        $http.get("/group").then(function (r) {

                            if(r.status !== 200 || r.data.status !=1) {
                                deffered.reject();
                                return;
                            }

                            me.groupsInfo = r.data.data;

                            deffered.resolve(me.groupsInfo);
                        });
                        return deffered.promise;
                    } else {
                        console.log('cachegroupsInfo',me.groupsInfo);
                        // return $q.when(me.staff);
                    }
                }
                me.fnAddGroup = function (groupInfo) {
                    groupInfo.pending = true;
                    $http.post('/group', groupInfo)
                        .then(function (r) {
                            if(r.data.status == 1) {
                                groupInfo.addStatus = true;
                            } else {
                                groupInfo.addStatus = false;
                            }
                        }, function (e) {
                            groupInfo.addStatus = false;
                        })
                        .finally(function () {
                            groupInfo.pending = false;
                        })
                }
            }

        ])
        //员工管理index
        .controller('StaffInfoController',[
            '$scope',
            'ManagerService',
            function ($scope, ManagerService) {
                $scope.Manager = ManagerService;
                ManagerService.getStaff();
            }
        ])
        .controller('GroupInfoController', [
            '$scope',
            'ManagerService',
            function ($scope, ManagerService) {
                $scope.Manager = ManagerService;
                ManagerService.getGroups();
            }
        ])
        .controller('AddGroupController', [
            '$scope',
            'ManagerService',
            function ($scope, ManagerService) {
                $scope.Manager = ManagerService;
                $scope.groupInfo = {};
                $scope.fnAddGroup = function (groupInfo) {
                    console.log('groupInfo', groupInfo);
                    ManagerService.fnAddGroup(groupInfo);
                }


            }
        ])
        .controller('EditGroupController', [
            '$scope',
            'ManagerService',
            function ($scope, ManagerService) {
                console.log('stateParams', $scope.$state);
                $scope.Manager = ManagerService;
            }
        ])
})();
