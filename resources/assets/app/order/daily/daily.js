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
                console.log('getStatistics', 'server error');
            })
        }
    }

    OrderDialyController.$inject = ['DailyService'];

    function OrderDialyController (DailyService) {
        var self =this;
        var date = new Date();
        var year = date.getFullYear();
        var month = (Array(2).join('0') + (1 + date.getMonth())).slice(-2);
        self.searchInfo = {
            order_pay_after_date: '' + year + '-' + month
        };

        DailyService.fnGetStatistics(self.searchInfo).then(function (data) {
            self.statistics = data;
        })
    }
})();