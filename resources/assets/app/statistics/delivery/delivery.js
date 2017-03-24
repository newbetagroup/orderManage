/**
 * Created by geekzwb on 2017/3/17.
 */
;(function() {

    'use strict';

    angular.module('StatisticsDashboard')
        .service('StatisticsDeliveryService', StatisticsDeliveryService)
        .controller('StatisticsDeliveryController', StatisticsDeliveryController);

    StatisticsDeliveryService.$inject = ['$http'];

    function StatisticsDeliveryService($http)
    {
        var me = this;

        me.fnGetStatistics = getStatistics;
        me.fnGetRanklist = getRanklist;

        function getStatistics (searchInfo) {
            return $http.post('/order/daily/delivery', searchInfo).then(function (r) {
                if(r.data.status == 1) return r.data.data;
            })
        }

        function getRanklist(searchInfo) {
            return $http.post('order/daily/ranklist', searchInfo).then(function (r) {
                if(r.data.status == 1) return r.data.data;
            })
        }
    }

    StatisticsDeliveryController.$inject = ['StatisticsDeliveryService', 'OrderCommonService'];

    function StatisticsDeliveryController (StatisticsDeliveryService, OrderCommonService) {
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
        getRanklist();

        /**
         * 统计分析
         */
        function getStatistics() {
            StatisticsDeliveryService.fnGetStatistics(self.searchInfo).then(function (data) {
                self.statistics = data;
            });
        }

        /**
         * 排行榜。  这个应该改造成组件形式。即指令。
         */
        function getRanklist () {
            StatisticsDeliveryService.fnGetRanklist(self.searchInfo).then(function (data) {
                self.ranklist = data.statistics;
                self.ordersCount = data.count;
                self.total = data.total;
            });
        }

        /**
         * 状态
         */
        function getStatuses() {
            OrderCommonService.fnGetOrderStatuses().then(function (r) {
                self.statuses = r.data;
                self.statuses.unshift({id:'', name:''});
            });
        }

        /**
         * 负责人
         */
        function getSupervisors() {
            OrderCommonService.fnGetSupervisors().then(function (r) {
                self.supervisors = r  || [];
                self.supervisors.unshift({id:'', name:''});
            });
        }

        /**
         * 付款后订单状态
         */
        function getAfterStatuses() {
            OrderCommonService.fnGetOrderPayAfterStatuses().then(function (r) {
                self.afterStatuses = r.data;
                self.afterStatuses.unshift({id:'', name:''});
            });
        }

        /**
         * 搜索
         */
        function search () {
            getStatistics();
            getRanklist();
        }
    }
})();