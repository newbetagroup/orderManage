/**
 * Created by geekzwb on 2017/3/6.
 */
(function() {
    var orderDetailsModule;
    try {
        orderDetailsModule  = angular.module('orderDetailsModule');
    } catch (e) {
        orderDetailsModule  = angular.module('orderDetailsModule',[]);
    }

    orderDetailsModule.service('OrderDetailService', [
        '$http',
        function($http) {
            var me = this;

            me.fnGetOrderDetail = function(orderId) {
                return $http.put('orderDetail/' + orderId);
            }
        }
    ])

        .controller('OrderDetailController', [
            '$scope',
            'OrderDetailService',
            function($scope, OrderDetailService) {
                var self = this;
                var orderId = $scope.$stateParams.orderId;

                self.fnGetOrderDetail = function() {
                    OrderDetailService.fnGetOrderDetail().then(function(r) {
                        console.log(r);
                    })
                }
            }
        ])
})();