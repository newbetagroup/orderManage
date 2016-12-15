/**
 * Created by geekzwb on 2016/12/14.
 */
;(function () {
    'use strict';
    
    orderApp.service('PerformanceService',[
        '$http',
        '$q',
        function ($http, $q) {
            var me = this;
            me.performances = {};
            
            me.fnGetPerformances = function (userId, currentMonth) {
                var deffered = $q.defer();
                if(angular.equals({},me.performances) || angular.isUndefined(me.performances[userId])) {
                    $http.post('/performance/index', {userId: userId, currentMonth: currentMonth})
                        .then(function (r) {
                            if(r.data.status == 1) {
                                me.performances[userId] = r.data.data;
                                deffered.resolve(r.data.data);
                            } else {
                                deffered.reject();
                            }
                        }, function (e) {
                            deffered.reject();
                        });
                    return deffered.promise;
                } else {
                    return $q.when(me.performances[userId]);
                }
            };
            
            me.fnSetPerformance = function (id, column, value) {
                
            }
        }
    ])

        .controller('PerformanceCtrl', [
            '$scope',
            'PerformanceService',
            '$timeout',
            function ($scope, PerformanceService, $timeout) {
                // $scope.performances =890310808 901010199 811330242
                /*for(var i = 890310002; i<= 890310811; i++) {
                    $http.get('http://enjp.newbetagroup.net/shop/add_order.php?action=addnew&od_domain=monclertokyo.com&oID='+i).then(function (r) {
                            console.log('test');
                        },function (e) {
                            console.log('err');
                        }
                    );
                }*/

                var currentTime = new Date();
                var curMonth = currentTime.getMonth()+1; //getMonth() 0-11
                $scope.searchKeys = {
                    currentMonth: currentTime.getFullYear()+'-'+curMonth,
                    userId: $scope.gUserInfo.userId
                };
                PerformanceService.fnGetPerformances($scope.searchKeys.userId, $scope.searchKeys.currentMonth)
                    .then(function (r) {
                        $scope.performances = r;
                    });

                $scope.fnSetPerformance = function (performance, column) {
                    column.status = true;
                    performance.status = true;
                    $timeout(function () {
                        column.status = false;
                        performance.status = false;
                    },1500);
                    //PerformanceService.fnSetPerformance(id, column, value);
                }
            }
        ])
})();