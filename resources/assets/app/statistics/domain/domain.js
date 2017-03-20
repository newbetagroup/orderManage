/**
 * Created by geekzwb on 2017/3/20.
 */
(function () {
    'use strict';

    angular.module('StatisticsDashboard').
        service('StatisticsDomainService', StatisticsDomainService)
        .controller('StatisticsDomainController', StatisticsDomainController);

    StatisticsDomainService.$inject = ['$http'];
    function StatisticsDomainService($http) {
        var me = this;
    }

    StatisticsDomainController.$inject = ['StatisticsDomainService'];

    function StatisticsDomainController(StatisticsDomainService) {
        var vm = this;
    }
})();