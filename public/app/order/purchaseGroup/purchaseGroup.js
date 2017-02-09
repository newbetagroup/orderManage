/**
 * Created by geekzwb on 2016/12/19.
 */
;(function (angular) {
    'use strict';
    
    angular.module('PurchaseGroupDashboard', [])
        .service('PurchaseGroupService', [
            '$http',
            '$q',
            'CommonService',
            '$timeout',
            function ($http, $q, CommonService, $timeout) {
                var me = this;
                me.purchaseGroupsInfo = {};
                me.fnGetPurchaseGroups = function (type, filterValue, params) {
                    type = type || 'cache';//cache or remote

                    var deffered = $q.defer();
                    if(angular.equals({}, me.purchaseGroupsInfo) || type == 'remote') {
                        $http.get("/purchaseGroup").then(function (r) {
                            if(r.data.status != 1) {
                                deffered.reject();
                                return;
                            }

                            me.purchaseGroupsInfo = r.data.data;

                            if(angular.isUndefined(params)) {
                                var filteredData = CommonService.filterData(r.data.data.data,filterValue);
                                deffered.resolve(filteredData);
                                return;
                            }
                            params.total(r.data.data.recordsTotal);

                            var transformedData = CommonService.transformData(r.data.data.data, filterValue, params);
                            deffered.resolve(transformedData);
                        });

                        return deffered.promise;

                    } else {

                        var filteredData = CommonService.filterData(me.purchaseGroupsInfo.data,filterValue);

                        //!ng-table
                        if(angular.isUndefined(params)) {
                            return $q.when(filteredData);
                        }

                        params.total(filteredData.length);
                        var transformedData = CommonService.sliceOrderData(filteredData,params);
                        return $q.when(transformedData);
                    }
                };

                //新增
                me.fnAddPurchaseGroup = function (purchaseGroup) {
                    if(purchaseGroup.pending) return;
                    purchaseGroup.pending =true;
                    $http.post('/purchaseGroup', purchaseGroup)
                        .then(function (r) {
                            if(r.data.status == 1) {
                                purchaseGroup.addStatus = true;
                                me.purchaseGroupsInfo = {};//reload
                                $timeout(function () {
                                    purchaseGroup.addStatus = null;
                                }, 2000);
                            } else {
                                purchaseGroup.addStatus = false;
                            }
                        }, function (e) {
                            purchaseGroup.addStatus = false;
                        })
                        .finally(function () {
                            purchaseGroup.pending = false;
                        })
                };

                //edit 修改
                me.fnEditPurchaseGroup = function (purchaseGroupInfo) {
                    if(purchaseGroupInfo.pending) return;
                    purchaseGroupInfo.pending =true;
                    $http.put('/purchaseGroup/'+purchaseGroupInfo.id, purchaseGroupInfo)
                        .then(function (r) {
                            if(r.data.status == 1) {
                                purchaseGroupInfo.editStatus = true;
                                me.purchaseGroupsInfo = {};//reload
                                $timeout(function () {
                                    purchaseGroupInfo.editStatus = null;
                                }, 2000);
                            } else {
                                purchaseGroupInfo.editStatus = false;
                            }
                        }, function (e) {
                            purchaseGroupInfo.editStatus = false;
                        })
                        .finally(function () {
                            purchaseGroupInfo.pending = false;
                        });
                };

                //删除
                me.fnDestroyPurchaseGroup = function (id, deleteAction) {
                    if(deleteAction.pending) return; //正在删除
                    deleteAction.pending =true;
                    $http.delete('/purchaseGroup/'+id).then(function (r) {
                            if(r.data.status == 1) {
                                me.purchaseGroupsInfo = {}; //reload：本地循环还是服务器remote重新拉取？
                                deleteAction.status = true; //成功
                                $timeout(function () {
                                    deleteAction.status = null;
                                }, 2000);
                            } else {
                                deleteAction.status = false;
                            }
                        })
                        .finally(function () {
                            deleteAction.pending = false;
                        });
                }
                
            }
        ])
        .controller('PurchaseGroupIndexCtrl', [
            'PurchaseGroupService',
            'NgTableParams',
            'dialogs',
            function (PurchaseGroupService, NgTableParams, dialogs) {

                var getType = 'cache';// 每次去拉取posts的方式: cache or remote

                var self = this;

                self.filterValue ='';

                self.deleteAction = {};//删除的状态 pendding 和 status

                self.$injet = ["NgTableParams", "ngTableSimpleList"];

                self.tableParams = createUsingFullOptions();

                // init
                function createUsingFullOptions() {
                    var initialParams = {
                        page: 1,
                        sorting: { created_at: "desc" }
                    };
                    var initialSettings = {
                        getData: function(params) {
                            return PurchaseGroupService.fnGetPurchaseGroups(getType, self.filterValue, params);
                        }
                    };
                    return new NgTableParams(initialParams, initialSettings);
                }

                //筛选
                self.fnSearchChange = function () {
                    self.tableParams.reload();
                };

                //确认删除模态框
                var dlg = null;
                self.fnDestoryPurchaseGroup = function (id) {
                    dlg = dialogs.confirm('Confirm','确定要删除该purchaseGroup吗?',{size: 'sm'});
                    dlg.result.then(function(btn){
                        //确认删除
                        PurchaseGroupService.fnDestroyPurchaseGroup(id, self.deleteAction);
                        getType = 'remote';
                        self.tableParams.reload().finally(function () {
                            getType = 'cache';
                        });//更新表格，重新拉取数据
                    },function(btn){
                        console.log('取消删除purchaseGroup');
                    });
                }

            }])
        .controller('PurchaseGroupAddCtrl', [
            '$scope',
            'PurchaseGroupService',
            function ($scope, PurchaseGroupService) {
                $scope.purchaseGroupInfo = {};

                $scope.fnAddPurchaseGroup = function () {
                    PurchaseGroupService.fnAddPurchaseGroup($scope.purchaseGroupInfo);
                }
            }
        ])
        .controller('PurchaseGroupEditCtrl', [
            '$scope',
            'PurchaseGroupService',
            '$filter',
            'dialogs',
            function ($scope, PurchaseGroupService, $filter, dialogs) {

                $scope.purchaseGroupInfo = {};

                var purchaseGroupId = $scope.$stateParams.purchaseGroupId;

                PurchaseGroupService.fnGetPurchaseGroups().then(function (r) {
                    var purchaseGroupsInfo = $filter('filter')(r, {id: purchaseGroupId});
                    angular.forEach(purchaseGroupsInfo, function (value, key) {
                        //所有的purchaseGroups中取出id为postId的一条数据
                        if(value.id == purchaseGroupId) {
                            $scope.purchaseGroupInfo = value;
                            return false;
                        }
                    });

                    //没有这个purchaseGroup
                    if(angular.equals({}, $scope.purchaseGroupInfo)) {
                        dialogs.error('Error', '未找到该purchaseGroup', {size:'sm'}).result.then(function (btn) {
                            $scope.$state.go('website.purchaseGroup.index');
                        });
                        return;
                    }
                });

                //提交修改
                $scope.fnEditPurchaseGroup = function () {
                    PurchaseGroupService.fnEditPurchaseGroup($scope.purchaseGroupInfo);
                }
            }
        ]);
})(angular);