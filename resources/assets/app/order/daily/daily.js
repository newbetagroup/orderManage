/**
 * Created by geekzwb on 2017/3/17.
 */
;(function() {

    'use strict';

    angular.module('DailyDashboard', [])
        .service('DailyService', DailyService)
        .controller('OrderDialyController', OrderDialyController);

    DailyService.$inject = ['$http'];

    function DailyService($http)
    {
        var me = this;

        me.fnGetStatistics = getStatistics;

        function getStatistics (searchInfo) {
            return $http.post('/order/daily', searchInfo).then(function (r) {
                if(r.data.status == 1) return r.data.data;
            })
        }
    }

    OrderDialyController.$inject = ['DailyService', 'OrderCommonService'];

    function OrderDialyController (DailyService, OrderCommonService) {
        var self =this;
        var date = new Date();
        var year = date.getFullYear();
        var month = (Array(2).join('0') + (1 + date.getMonth())).slice(-2);
        self.searchInfo = {
            order_pay_after_date: '' + year + '-' + month
        };
        self.search = search;//search


        getStatuses();
        getAfterStatuses();
        getSupervisors();
        getStatistics();

        function getStatistics() {
            DailyService.fnGetStatistics(self.searchInfo).then(function (data) {
                self.statistics = data;
            });
        }

        function getStatuses() {
            OrderCommonService.fnGetOrderStatuses().then(function (r) {
                self.statuses = r.data;
                self.statuses.unshift({id:'', name:''});
            });
        }

        function getSupervisors() {
            OrderCommonService.fnGetSupervisors().then(function (r) {
                self.supervisors = r;
                self.supervisors.unshift({id:'', name:''});
            });
        }

        function getAfterStatuses() {
            OrderCommonService.fnGetOrderPayAfterStatuses().then(function (r) {
                self.afterStatuses = r.data;
                self.afterStatuses.unshift({id:'', name:''});
            });
        }

        function search () {
            getStatistics();
        }
    }
})();