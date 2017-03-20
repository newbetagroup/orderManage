/**
 * Created by geekzwb on 2017/3/20.
 */
(function () {
    'use strict';

    angular.module('StatisticsDashboard').
        service('StatisticsRateService', StatisticsRateService)
        .controller('StatisticsRateController', StatisticsRateController);

    StatisticsRateService.$inject = ['$http'];
    function StatisticsRateService($http) {
        var me = this;
        me.fnGetStatistics = getStatistics;

        function getStatistics (searchInfo) {
            return $http.post('/order/daily/rate', searchInfo).then(function (r) {
                if(r.data.status == 1) return r.data.data;
            })
        }
    }

    StatisticsRateController.$inject = ['StatisticsRateService', 'OrderCommonService'];

    function StatisticsRateController(StatisticsRateService, OrderCommonService) {
        var vm = this;
        var date = new Date();
        var year = date.getFullYear();
        var month = (Array(2).join('0') + (1 + date.getMonth())).slice(-2);
        vm.searchInfo = {
            date_purchased: '' + year + '-' + month
        };
        vm.search = search;//search

        getStatuses();
        getAfterStatuses();
        getSupervisors();
        getStatistics();

        /**
         * 统计分析
         */
        function getStatistics() {
            StatisticsRateService.fnGetStatistics(vm.searchInfo).then(function (data) {
                vm.statistics = data;
            });
        }

        /**
         * 状态
         */
        function getStatuses() {
            OrderCommonService.fnGetOrderStatuses().then(function (r) {
                vm.statuses = r.data;
                vm.statuses.unshift({id:'', name:''});
            });
        }

        /**
         * 负责人
         */
        function getSupervisors() {
            OrderCommonService.fnGetSupervisors().then(function (r) {
                vm.supervisors = r || [];
                vm.supervisors.unshift({id:'', name:''});
            });
        }

        /**
         * 付款后订单状态
         */
        function getAfterStatuses() {
            OrderCommonService.fnGetOrderPayAfterStatuses().then(function (r) {
                vm.afterStatuses = r.data;
                vm.afterStatuses.unshift({id:'', name:''});
            });
        }

        /**
         * 搜索
         */
        function search () {
            getStatistics();
        }
    }
})();