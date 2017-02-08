(function (angular) {
    
    'use strict';
    
    angular.module('OrderDepartmentDashboard', [])
        .service('OrderDepartmentService', [
            '$http',
            '$q',
            'OrderCommonService',
            function ($http, $q, OrderCommonService) {
                var me = this;

                //表格顶部筛选
                me.arrOrderStatuses = [];//[{id:1, title:"已付款"}]
                me.arrOrderPayAfterStatuses = [];//[{id:1, title:"已付款"}]
                //订单状态
                OrderCommonService.fnGetOrderStatuses().then(function (r) {
                    me.orderStatuses = r.data;
                    angular.forEach(me.orderStatuses, function(value) {
                        var status = {};
                        status.title = value.name;
                        status.id = value.id;
                        me.arrOrderStatuses.push(status);
                    })

                });
                //发货等状态
                OrderCommonService.fnGetOrderPayAfterStatuses().then(function (r) {
                    me.payAfterStatuses = r.data;
                    angular.forEach(me.payAfterStatuses, function(value) {
                        var status = {};
                        status.title = value.name;
                        status.id = value.id;
                        me.arrOrderPayAfterStatuses.push(status);
                    })
                });

                me.fnGetOrders = function (searchRemoteInfo, params) {

                    searchRemoteInfo.orderBy = params.orderBy();
                    searchRemoteInfo.filters = params.filter();
                    console.log(params);
                    console.log(params.orderBy());
                    console.log(params.filter());
                    console.log(searchRemoteInfo);
                    params.count(searchRemoteInfo.itemsPerPage);
                    
                    var deffered = $q.defer();

                    //先去除为空的字段
                    angular.forEach(searchRemoteInfo, function (value, key) {
                        if (value == null) delete searchRemoteInfo[key];
                    });

                    //=========================== search
                    $http.post("orderDepartment/order", searchRemoteInfo).then(function (r) {
                        if(r.data.status != 1) {
                            deffered.reject();
                            return;
                        }
                        //params.total(r.data.data.recordsTotal); no need ng-table with pagination
                        searchRemoteInfo.totalItems = r.data.data.recordsTotal;
                        deffered.resolve(r.data.data.data);
                    });
                    return deffered.promise;
                };

                /**
                 * 将订单产品添加到订货分组，修改采购价
                 * @param product
                 */
                me.addProductsToPurchaseGroup = function (product) {
                   return $http.post('productsToPurchaseGroup', product);
                }
            }
        ])
        
        //
        .controller('OrderDepartmentIndexCtrl', [
            '$scope',
            'NgTableParams',
            'dialogs',
            'OrderDepartmentService',
            '$http',
            'PurchaseGroupService',
            function ($scope, NgTableParams, dialogs, OrderDepartmentService, $http, PurchaseGroupService) {
                var self = this;
                self.OrderDepartmentSer = OrderDepartmentService;

                self.searchRemoteInfo = {};
                self.searchRemoteInfo.totalItems = 100;
                self.searchRemoteInfo.currentPage = 1;
                //self.searchRemoteInfo.numPages
                self.searchRemoteInfo.itemsPerPage = 10;
                $scope.itemsPerPage = self.searchRemoteInfo.itemsPerPage;

                var originalData = null;

                // init
                self.tableParams = createUsingFullOptions();
                function createUsingFullOptions() {
                    var initialParams = {
                        //page: 1,
                        sorting: { id: "desc" },
                        count: self.searchRemoteInfo.itemsPerPage
                    };
                    var initialSettings = {
                        counts: [],
                        getData: function(params) {
                            var data = OrderDepartmentService.fnGetOrders(self.searchRemoteInfo,  params);
                            data.then(function (r) {
                                originalData = angular.copy(r);//重新深拷贝一份出来，而不是赋值引用
                            });
                            return data;
                        }
                    };
                    return new NgTableParams(initialParams, initialSettings);
                }

                /*==================angular-bootstrap-ui 分页==================*/
                //去到第几页
                self.fnSetPage = function (pageNo) {
                    console.log(pageNo);
                    self.searchRemoteInfo.currentPage = pageNo;
                    self.tableParams.reload();
                };
                //当前页数已经改变
                self.fnPageChanged = function() {
                    console.log('Page changed to: ' + self.searchRemoteInfo.currentPage);
                    self.tableParams.reload();
                };
                //每页显示几条
                self.fnSetItemsPerPage = function (itemsPerPage) {
                    self.searchRemoteInfo.itemsPerPage = itemsPerPage;
                    self.tableParams.reload();
                };


                /*=============edit batch============*/
                self.deleteCount = 0;
                //self.add = add;
                self.cancelChanges = cancelChanges;
                //self.del = del;
                self.hasChanges = hasChanges;
                self.saveChanges = saveChanges;

                //////////

               /* function add() {
                    self.isEditing = true;
                    self.isAdding = true;
                    self.tableParams.settings().dataset.unshift({
                        name: "",
                        age: null,
                        money: null
                    });
                    // we need to ensure the user sees the new row we've just added.
                    // it seems a poor but reliable choice to remove sorting and move them to the first page
                    // where we know that our new item was added to
                    self.tableParams.sorting({});
                    self.tableParams.page(1);
                    self.tableParams.reload();
                }*/

                function cancelChanges() {
                    resetTableStatus();
                    var currentPage = self.tableParams.page();

                    /*self.tableParams.settings({
                        dataset: angular.copy(originalData)
                    });*/
                    //self.tableParams.reload();

                    // keep the user on the current page when we can
                    if (!self.isAdding) {
                        self.tableParams.page(currentPage);
                    }
                }

                function hasChanges() {
                    return self.tableForm.$dirty || self.deleteCount > 0
                }

                function resetTableStatus() {
                    self.isEditing = false;
                    self.isAdding = false;
                    self.deleteCount = 0;
                    self.tableTracker.reset();
                    self.tableForm.$setPristine();
                }

                function saveChanges() {
                    resetTableStatus();
                    var currentPage = self.tableParams.page();
                    var ordersChanged = compareData(self.tableParams.data, originalData);
                    $http.post('orderDepartment/ordersUpdate', ordersChanged).then(function (r) {
                        if (r.data.status == 1) {
                            originalData = angular.copy(self.tableParams.data);
                        }
                    })
                }

                /**
                 * 返回两个对象不同的值
                 * @param n
                 * @param o
                 * @returns {Array}
                 */
                function compareData(n, o) {
                    var diff = [];
                    angular.forEach(n, function (value, key) {
                        if (!angular.equals(value, o[key])) {
                            diff.push(value);
                        }
                    });
                    return diff;
                }

            //================采购分组相关操作
                var currentPurchaseGroup = new Date();
                self.currentPurchaseGroup = currentPurchaseGroup.toString();
                PurchaseGroupService.fnGetPurchaseGroups().then(function (r) {
                    console.log(r);
                });

                //将商品添加进采购分组，或者修改采购价等
                self.addProductsToPurchaseGroup = function (product) {
                    product.id = self.currentPurchaseGroup;
                    OrderDepartmentService.addProductsToPurchaseGroup(product).then(function (r) {
                        if (r.data.status != 1) {
                            dialogs.error('Server Error', '添加进分组失败，请重试！');
                        }
                    });
                };

                //选择发货分组
                self.fnChangeGroup = function (groupId) {
                      self.currentPurchaseGroup = groupId;
                }
            }
        ]);
    
})(angular);
