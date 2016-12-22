/**
 * Created by geekzwb on 2016/12/22.
 * 域名管理
 */
;(function (angular) {
    'use strict';
    
    angular.module('WebsiteDashboard', [])
        .service('WebsiteService', [
            '$http',
            '$q',
            'CommonService',
            '$timeout',
            'ServerService',
            'CountryService',
            'BrandService',
            'AdStatusService',
            'WebsiteStatusService',
            'HostService',
            function ($http, $q, CommonService, $timeout, ServerService, CountryService, BrandService, AdStatusService, WebsiteStatusService, HostService) {
                var me = this;
                //=================相关数据
                ServerService.fnGetServers().then(function (r) {
                    me.domainServers = r;
                });
                CountryService.fnGetCountries().then(function (r) {
                    me.domainCountries = r;
                });
                BrandService.fnGetBrands().then(function (r) {
                    me.domainBrands = r;
                });
                AdStatusService.fnGetAdStatuses().then(function (r) {
                    me.domainAdStatuses = r;
                });
                WebsiteStatusService.fnGetWebsiteStatuses().then(function (r) {
                    me.domainWebsiteStatuses = r;
                });
                CommonService.fnGetusersOptional().then(function (r) {
                    me.usersOptional = r.data;
                });
                HostService.fnGetHosts().then(function (r) {
                   me.domainHosts = r;
                });

                me.websitesInfo = {};
                me.fnGetWebsites = function (filterValue, params, type) {
                    type = type || 'cache';//cache or remote

                    var deffered = $q.defer();
                    if(angular.equals({}, me.websitesInfo) || type == 'remote') {
                        $http.get("/website").then(function (r) {
                            if(r.data.status != 1) {
                                deffered.reject();
                                return;
                            }

                            me.websitesInfo = r.data.data;

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

                        var filteredData = CommonService.filterData(me.websitesInfo.data,filterValue);

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
                me.fnAddWebsite = function (website) {
                    if(website.pending) return;
                    website.pending =true;
                    $http.post('/website', website)
                        .then(function (r) {
                            if(r.data.status == 1) {
                                website.addStatus = true;
                                me.websitesInfo = {};//reload
                                $timeout(function () {
                                    website.addStatus = null;
                                }, 2000);
                            } else {
                                website.addStatus = false;
                            }
                        }, function (e) {
                            website.addStatus = false;
                        })
                        .finally(function () {
                            website.pending = false;
                        })
                };

                //edit 修改
                me.fnEditWebsite = function (websiteInfo) {
                    if(websiteInfo.pending) return;
                    websiteInfo.pending =true;
                    $http.put('/website/'+websiteInfo.id, websiteInfo)
                        .then(function (r) {
                            if(r.data.status == 1) {
                                websiteInfo.editStatus = true;
                                me.websitesInfo = {};//reload
                                $timeout(function () {
                                    websiteInfo.editStatus = null;
                                }, 2000);
                            } else {
                                websiteInfo.editStatus = false;
                            }
                        }, function (e) {
                            websiteInfo.editStatus = false;
                        })
                        .finally(function () {
                            websiteInfo.pending = false;
                        });
                };

                //删除
                me.fnDestroyWebsite = function (id, deleteAction) {
                    if(deleteAction.pending) return; //正在删除
                    deleteAction.pending =true;
                    $http.delete('/website/'+id).then(function (r) {
                            if(r.data.status == 1) {
                                me.websitesInfo = {}; //reload：本地循环还是服务器remote重新拉取？
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
        .controller('WebsiteIndexCtrl', [
            'WebsiteService',
            'NgTableParams',
            'dialogs',
            function (WebsiteService, NgTableParams, dialogs) {

                var getType = 'cache';// 每次去拉取posts的方式: cache or remote

                var self = this;

                self.WebsiteSer = WebsiteService;

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
                            return WebsiteService.fnGetWebsites(self.filterValue, params, getType);
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
                self.fnDestoryPost = function (id) {
                    dlg = dialogs.confirm('Confirm','确定要删除该国家吗?',{size: 'sm'});
                    dlg.result.then(function(btn){
                        //确认删除
                        WebsiteService.fnDestroyWebsite(id, self.deleteAction);
                        getType = 'remote';
                        self.tableParams.reload().finally(function () {
                            getType = 'cache';
                        });//更新表格，重新拉取数据
                    },function(btn){
                        console.log('取消删除website');
                    });
                }

            }])
        .controller('WebsiteAddCtrl', [
            '$scope',
            'WebsiteService',
            function ($scope, WebsiteService) {
                $scope.websiteInfo = {};
                $scope.WebsiteSer = WebsiteService;
                $scope.fnAddWebsite = function () {
                    WebsiteService.fnAddWebsite($scope.websiteInfo);
                }
            }
        ])
        .controller('WebsiteEditCtrl', [
            '$scope',
            'WebsiteService',
            '$filter',
            'dialogs',
            function ($scope, WebsiteService, $filter, dialogs) {

                $scope.websiteInfo = {};
                $scope.WebsiteSer = WebsiteService;

                var websiteId = $scope.$stateParams.websiteId;

                WebsiteService.fnGetWebsites().then(function (r) {
                    var websitesInfo = $filter('filter')(r, {id: websiteId});
                    angular.forEach(websitesInfo, function (value, key) {
                        //所有的websites中取出id为postId的一条数据
                        if(value.id == websiteId) {
                            $scope.websiteInfo = value;
                            return false;
                        }
                    });

                    //没有这个website
                    if(angular.equals({}, $scope.websiteInfo)) {
                        dialogs.error('Error', '未找到该域名', {size:'sm'}).result.then(function (btn) {
                            $scope.$state.go('website.website.index');
                        });
                        return;
                    }
                });

                //提交修改
                $scope.fnEditWebsite = function () {
                    WebsiteService.fnEditWebsite($scope.websiteInfo);
                }
            }
        ]);
})(angular);