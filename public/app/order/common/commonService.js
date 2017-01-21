/**
 * Created by geekzwb on 2017/1/19.
 */
;(function (angular) {

    'use strict';

    angular.module('orderServiceDashboard', [])
        .service('orderService', [
            '$http',
            '$q',
            function ($http, $q) {
                var me = this;
                var orderStatuses = null;
                var orderPayAfterStatuses  = null;

                me.fnGetOrderStatuses = function () {
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
                        $q.when(orderStatuses);
                    }
                };

                me.fnGetOrderPayAfterStatuses = function () {
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
                        $q.when(orderPayAfterStatuses);
                    }
                };

            }
        ])
})(angular);