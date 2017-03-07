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
        'OrderCommonService',
        'dialogs',
        function($http, OrderCommonService, dialogs) {
            var me = this;

            me.fnEditAddress = fnEditAddress;

            //订单状态
            OrderCommonService.fnGetOrderStatuses().then(function (r) {
                me.orderStatuses = r.data;
            });
            //发货等状态
            OrderCommonService.fnGetOrderPayAfterStatuses().then(function (r) {
                me.payAfterStatuses = r.data;
            });

            me.fnGetOrderDetail = function(orderId) {
                return $http.put('orderDetail/' + orderId).then(function(r) {
                    if (r.data.status != 1) {
                        dialogs.error('Server Error', '请求失败', {'size':'sm'});
                        return false;
                    }

                    return r.data.data;
                });
            }

            function fnEditAddress(address)
            {

            }
        }
    ])

        .controller('OrderDetailController', [
            '$scope',
            'OrderDetailService',
            function($scope, OrderDetailService) {
                var self = this;
                self.orderDetailSer = OrderDetailService;
                var orderId = $scope.$stateParams.orderId;

                self.fnGetOrderDetail = fnGetOrderDetail;
                self.launch = launch;

                fnGetOrderDetail();

                function fnGetOrderDetail()
                {
                    OrderDetailService.fnGetOrderDetail(orderId).then(function(r) {
                        self.orderInfo = r;
                    })
                }

                function launch(deliveryAddress)
                {
                    console.log(deliveryAddress);
                    OrderDetailService.fnEditAddress(deliveryAddress).then(function(r) {
                        if (r) fnGetOrderDetail();//refresh
                    })
                }
            }
        ])
})();