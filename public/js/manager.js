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

                me.staffsInfo = {};
                me.groupsInfo = {};//{recordsFiltered,data}
                me.permissionsInfo ={};

                //获取员工数据
                me.fnGetStaffs = function () {
                    var deffered = $q.defer();
                    if(angular.equals({}, me.staffsInfo)) {
                        $http.get("/user").then(function (r) {

                            if(r.status !== 200 || r.data.status !=1) {
                                deffered.reject();
                                return;
                            }

                            me.staffsInfo = r.data.data;

                            deffered.resolve(me.staffsInfo);
                        });
                        return deffered.promise;
                    } else {
                         return $q.when(me.staffsInfo);
                    }
                };
                //添加新员工
                me.fnAddStaff = function (staffInfo) {
                    staffInfo.pending = true;
                    $http.post('/user', staffInfo)
                        .then(function (r) {
                            if(r.data.status == 1) {
                                staffInfo.addStatus = true;
                            } else {
                                staffInfo.addStatus = false;
                            }
                        }, function (e) {
                            staffInfo.addStatus = false;
                        })
                        .finally(function () {
                            staffInfo.pending = false;
                        })
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
                         return $q.when(me.groupsInfo);
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
                me.fnEditGroup = function (groupInfo) {
                    groupInfo.pending = true;
                    $http.put('/group/'+groupInfo.id, groupInfo)
                        .then(function (r) {
                            if(r.data.status == 1) {
                                groupInfo.editStatus = true;
                            } else {
                                groupInfo.editStatus = false;
                            }
                        }, function (e) {
                            groupInfo.editStatus = false;
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

                            deffered.resolve(me.permissionsInfo);
                        });
                        return deffered.promise;
                    } else {
                        return $q.when(me.permissionsInfo);
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
                $scope.Manager = ManagerService;
                ManagerService.fnGetStaffs();
            }
        ])
        .controller('AddStaffController', [
            '$scope',
            'ManagerService',
            function ($scope, ManagerService) {
                $scope.staffInfo = {};
                $scope.staffInfo.permissions = [];//权限id,这是该用户特权。去除某个权限呢？用-号？数据库已经定义unsigned int

                //所有权限
                ManagerService.getPermissions().then(function (r) {
                    $scope.allPermissions = r.data;
                });

                //所有部门
                ManagerService.getGroups().then(function (r) {
                    $scope.allGroups = r.data;
                    console.log($scope.allGroups);
                });

                //是否选中
                $scope.isChecked = function(id){
                    return $scope.staffInfo.permissions.indexOf(id) >= 0 ;
                };
                //改变check状态
                $scope.updateSelection = function($event,id){
                    var checkbox = $event.target ;
                    var checked = checkbox.checked ;
                    if(checked){
                        $scope.staffInfo.permissions.push(id) ;
                    }else{
                        var idx = $scope.staffInfo.permissions.indexOf(id) ;//第几个
                        $scope.staffInfo.permissions.splice(idx,1) ;//选中中删除
                    }
                };
                
                //当改变部门的时候改变permission选中状态
                $scope.$watch(function () {
                    return $scope.staffInfo.groupId;
                },function (newId, oldId) {
                    //清空原有的部门权限还是清空所有权限？ 清空所有
                    //获得新部门的所有权限，重新赋值（清空所有）；更新的时候删除所有个人权限

                    $scope.staffInfo.permissions = [];

                    var groupSelected = $scope.allGroups[newId];
                    angular.forEach(groupSelected.permissions, function (value, key) {
                        $scope.staffInfo.permissions.push(value.id);//赋值部门权限
                    });
                },true);

                //新增员工
                $scope.fnAddStaff = function (staffInfo) {
                    ManagerService.fnAddStaff(staffInfo);
                }
            }
        ])
        .controller('EditStaffController', [
            '$scope',
            'ManagerService',
            'CommonService',
            function ($scope, ManagerService, CommonService) {
                var staffId = $scope.$stateParams.staffId; //员工id
                if (angular.isDefined(ManagerService.staffsInfo.data)) {
                    $scope.staffInfo = ManagerService.staffsInfo.data[staffId];
                    $scope.staffInfo.groupId = $scope.staffInfo.groups[0].id;
                    $scope.staffInfo.permissions = null;
                } else {
                    $scope.$state.go('manager.staff.index');
                }

                //初始化权限
                CommonService.fnGetPermissionsHad(staffId, $scope.staffInfo.groupId).then(function (r) {
                  $scope.staffInfo.permissions = r;
                });


                //所有权限
                ManagerService.getPermissions().then(function (r) {
                    $scope.allPermissions = r.data;
                });

                //所有部门
                ManagerService.getGroups().then(function (r) {
                    $scope.allGroups = r.data;
                });

                //是否选中
                $scope.isChecked = function(id){
                    return $scope.staffInfo.permissions.indexOf(id) >= 0 ;
                };
                //改变check状态
                $scope.updateSelection = function($event,id){
                    var checkbox = $event.target ;
                    var checked = checkbox.checked ;
                    if(checked){
                        $scope.staffInfo.permissions.push(id) ;
                    }else{
                        var idx = $scope.staffInfo.permissions.indexOf(id) ;//第几个
                        $scope.staffInfo.permissions.splice(idx,1) ;//选中中删除
                    }
                };

                //当改变部门的时候改变permission选中状态
                $scope.fnChangeGroup = function (groupId) {
                    $scope.staffInfo.permissions = [];
                    //改变部门，重新赋值权限
                    var groupSelected = $scope.allGroups[groupId];
                    angular.forEach(groupSelected.permissions, function (value, key) {
                        $scope.staffInfo.permissions.push(value.id);//原有权限
                    });
                };
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
                $scope.groupInfo.permissions = [];//checked
                $scope.selected = [];//checked

                //所有权限
                ManagerService.getPermissions().then(function (r) {
                    $scope.allPermissions = r.data;
                });

                //所有用户
                ManagerService.fnGetStaffs().then(function (r) {
                    $scope.allUsers = r.data;
                });

                //是否选中
                $scope.isChecked = function(id){
                    return $scope.groupInfo.permissions.indexOf(id) >= 0 ;
                };
                //改变check状态
                $scope.updateSelection = function($event,id){
                    var checkbox = $event.target ;
                    var checked = checkbox.checked ;
                    if(checked){
                        $scope.groupInfo.permissions.push(id) ;
                    }else{
                        var idx = $scope.groupInfo.permissions.indexOf(id) ;//第几个
                        $scope.groupInfo.permissions.splice(idx,1) ;//选中中删除
                    }
                };
                //提交添加分组
                $scope.fnAddGroup = function (groupInfo) {
                    console.log(groupInfo);
                    ManagerService.fnAddGroup(groupInfo);
                };
            }
        ])
        .controller('EditGroupController', [
            '$scope',
            'ManagerService',
            function ($scope, ManagerService) {
                var groupId = $scope.$stateParams.groupId;
                $scope.groupInfo = {};
                $scope.groupInfo.permissions = [];

                //所有权限
                ManagerService.getPermissions().then(function (r) {
                    $scope.allPermissions = r.data;
                });

                //部门信息及拥有权限
                if (angular.isDefined(ManagerService.groupsInfo.data)) {
                    $scope.groupInfo = ManagerService.groupsInfo.data[groupId];
                    var permissions = $scope.groupInfo.permissions;
                    $scope.groupInfo.permissions = [];
                    angular.forEach(permissions, function (value, key) {
                        $scope.groupInfo.permissions.push(value.id);//原有权限
                    });
                } else {
                    $scope.$state.go('manager.group.index');
                }

                //所有用户
                ManagerService.fnGetStaffs().then(function (r) {
                    $scope.allUsers = r.data;
                });

                //判断选中
                $scope.isChecked = function(id){
                    return $scope.groupInfo.permissions.indexOf(id) >= 0 ;
                };

                //改变check状态
                $scope.updateSelection = function($event,id){
                    var checkbox = $event.target ;
                    var checked = checkbox.checked ;
                    if(checked){
                        $scope.groupInfo.permissions.push(id) ;
                    }else{
                        var idx = $scope.groupInfo.permissions.indexOf(id) ;//第几个
                        $scope.groupInfo.permissions.splice(idx,1) ;//选中中删除
                    }
                };

                //提交修改
                $scope.fnEditGroup = function (groupInfo) {
                    ManagerService.fnEditGroup(groupInfo);
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
