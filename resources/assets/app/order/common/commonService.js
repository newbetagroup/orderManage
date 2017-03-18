/**
 * Created by geekzwb on 2017/1/19.
 */
;(function (angular) {

    'use strict';

    angular.module('OrderCommonServiceDashboard', [])
        .service('OrderCommonService', [
            '$http',
            '$q',
            function ($http, $q) {
                var me = this;
                var orderStatuses = null;
                var orderPayAfterStatuses  = null;
                var suppliers = null;
                var orderCategories = null;
                var expresses = null;
                var supervisors = null;
                me.fnGetOrderStatuses = fnGetOrderStatuses;//付款前状态
                me.fnGetOrderPayAfterStatuses = fnGetOrderPayAfterStatuses;//获取付款后状态
                me.fnGetSuppliers = fnGetSuppliers;//获取供应商
                me.fnGetOrderCategories = fnGetOrderCategories;//获取产品分类
                me.fnGetExpresses = fnGetExpresses;//获取货运方式
                me.fnGetSupervisors = fnGetSupervisors;//获取货运方式


                    //付款前状态
                function fnGetOrderStatuses() {
                    var defered = $q.defer();
                    if (angular.equals(null, orderStatuses)) {
                        var pendding = false;
                        if (!pendding) {
                            pendding = true;
                            $http.get('orderStatus').then(function (r) {
                                if (r.data.status !=1) {
                                    return defered.reject('server error');
                                }

                                orderStatuses = r.data.data;
                                defered.resolve(orderStatuses);

                            }).finally(function () {
                                pendding = false;
                            });
                        }

                        return defered.promise;

                    } else {
                        //console.log('orderStatuses', orderStatuses);
                       return $q.when(orderStatuses);
                    }
                }

                //获取付款后状态
                function fnGetOrderPayAfterStatuses() {
                    if (angular.equals(null, orderPayAfterStatuses)) {
                        var defered = $q.defer();
                        var pendding = false;
                        if (!pendding) {
                            pendding = true;
                            $http.get('orderPayAfterStatus').then(function (r) {
                                if (r.data.status !=1) {
                                    return defered.reject('server error');
                                }

                                orderPayAfterStatuses = r.data.data;
                                defered.resolve(orderPayAfterStatuses);

                            }).finally(function () {
                                pendding = false;
                            });
                        }

                        return defered.promise;

                    } else {
                        return $q.when(orderPayAfterStatuses);
                    }
                }

                //获取供应商
                function fnGetSuppliers() {
                    if (angular.equals(null, suppliers)) {
                        var defered = $q.defer();
                        var pendding = false;
                        if (!pendding) {
                            pendding = true;
                            $http.get('supplier').then(function (r) {
                                if (r.data.status !=1) {
                                    return defered.reject('server error');
                                }

                                suppliers = r.data.data;
                                defered.resolve(suppliers);

                            }).finally(function () {
                                pendding = false;
                            });
                        }

                        return defered.promise;

                    } else {
                        return $q.when(suppliers);
                    }
                }

                //获取产品分类
                function fnGetOrderCategories() {
                    if (angular.equals(null, orderCategories)) {
                        var defered = $q.defer();
                        var pendding = false;
                        if (!pendding) {
                            pendding = true;
                            $http.get('orderCategory').then(function (r) {
                                if (r.data.status !=1) {
                                    return defered.reject('server error');
                                }

                                orderCategories = r.data.data;
                                defered.resolve(orderCategories);

                            }).finally(function () {
                                pendding = false;
                            });
                        }

                        return defered.promise;

                    } else {
                        return $q.when(orderCategories);
                    }
                }


                /**
                 * 获取货运方式
                 * @returns {*}
                 */
                function fnGetExpresses() {
                    if (angular.equals(null, expresses)) {
                        var defered = $q.defer();
                        var pendding = false;
                        if (!pendding) {
                            pendding = true;
                            $http.get('express').then(function (r) {
                                if (r.data.status !=1) {
                                    return defered.reject('server error');
                                }

                                expresses = r.data.data;
                                defered.resolve(expresses);

                            }).finally(function () {
                                pendding = false;
                            });
                        }

                        return defered.promise;

                    } else {
                        return $q.when(expresses);
                    }
                }


                /**
                 * 网站负责人
                 * @returns {*}
                 */
                function fnGetSupervisors() {
                    if(angular.equals(supervisors, null)) {
                        var deffer = $q.defer();
                        var pendding = false;
                        if(!pendding) {
                            pendding = true;
                            var groupId = 2;
                            // 这里需要完善。获取业务部的groupId
                            $http.get('/group/getUsers/' + groupId).then(function (r) {
                                if(r.data.status != 1) {
                                    deffer.reject();
                                    return false;
                                }

                                supervisors = r.data.data.data;

                                deffer.resolve(supervisors);
                            }).finally(function () {
                                pendding = false;
                            });
                        }
                        return deffer.promise;
                    } else {
                        return $q.when(supervisors);
                    }
                }
            }
        ])
})(angular);