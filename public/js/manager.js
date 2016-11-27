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
                me.permissionsInfo ={};

                //获取员工数据
                me.getStaff = function () {
                    var deffered = $q.defer();
                    if(angular.equals({}, me.staffInfo)) {
                        $http.get("/user").then(function (r) {

                            if(r.status !== 200 || r.data.status !=1) {
                                deffered.reject();
                                return;
                            }

                            me.staffInfo = r.data.data;

                            deffered.resolve(me.staffInfo);
                        });
                        return deffered.promise;
                    } else {
                        // return $q.when(me.staffInfo);
                    }
                };
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
                        console.log(me.groupsInfo);
                        // return $q.when(me.staff);
                    }
                };
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
                };
                
                me.getPermissions = function () {
                    var deffered = $q.defer();
                    if(angular.equals({}, me.permissionsInfo)) {
                        $http.get("/permission").then(function (r) {

                            if(r.status !== 200 || r.data.status !=1) {
                                deffered.reject();
                                return;
                            }

                            me.permissionsInfo = r.data.data;
                            console.log(me.permissionsInfo);

                            deffered.resolve(me.permissionsInfo);
                        });
                        return deffered.promise;
                    } else {
                        // return $q.when(me.staff);
                    }
                };
                me.fnAddPermission = function (permissionInfo) {
                    permissionInfo.pending = true;
                    $http.post('/permission', permissionInfo)
                        .then(function (r) {
                            if (r.data.status == 1) {
                                permissionInfo.addStatus = true;
                            } else {
                                permissionInfo.addStatus = false;
                            }
                        }, function (e) {
                            permissionInfo.addStatus = false;
                        })
                        .finally(function () {
                            permissionInfo.pending = false;
                        })
                };
            }

        ])
        //员工管理index
        .controller('StaffInfoController',[
            '$scope',
            'ManagerService',
            function ($scope, ManagerService) {
                ManagerService.getStaff();
            }
        ])
        .controller('AddStaffController', [
            '$scope',
            'ManagerService',
            function ($scope, ManagerService) {
                $scope.staffInfo = {};
                $scope.fnAddStaff = function (staffInfo) {
                    ManagerService.fnAddPermission(staffInfo);
                }
            }
        ])
        .controller('EditStaffController', [
            '$scope',
            'ManagerService',
            function ($scope, ManagerService) {
                console.log('stateParams', $scope.$state);
                //$scope.staff = ManagerService.
                $scope.Manager = ManagerService;
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
                $scope.groupInfo = {};
                $scope.fnAddGroup = function (groupInfo) {
                    ManagerService.fnAddGroup(groupInfo);
                }
            }
        ])
        .controller('EditGroupController', [
            '$scope',
            'ManagerService',
            function ($scope, ManagerService) {
                var groupId = $scope.$stateParams.groupId;
                if (angular.isDefined(ManagerService.groupsInfo.data)) {
                    $scope.group = ManagerService.groupsInfo.data[groupId];
                } else {
                    $scope.$state.go('manager.group.index');
                }
            }
        ])
        .controller('PermissionInfoController', [
            '$scope',
            'ManagerService',
            function ($scope, ManagerService) {
                $scope.Manager = ManagerService;
                ManagerService.getPermissions();
            }
        ])
        .controller('AddPermissionController', [
            '$scope',
            'ManagerService',
            function ($scope, ManagerService) {
                $scope.permissionInfo = {};
                $scope.fnAddPermission = function (permissionInfo) {
                    ManagerService.fnAddPermission(permissionInfo);
                }
            }
        ])
        .controller('EditPermissionController', [
            '$scope',
            'ManagerService',
            function ($scope, ManagerService) {
                console.log('stateParams', $scope.$state);
                $scope.Manager = ManagerService;
            }
        ])
})();
