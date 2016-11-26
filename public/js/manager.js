/**
 * Created by Geek-zwb on 2016/11/26 0026.
 */
;(function () {
    'use strict';

    angular.module('managerDashboard', [])
        .service('ManagerUservice',[
            '$http',
            '$q',
            function ($http, $q) {
                var me = this;

                me.staff = {};
                //获取员工数据
                me.getStaff = function () {
                    var deffered = $q.defer();
                    if(angular.equals({}, me.staff)) {
                        $http.get("/group").then(function (r) {

                            if(r.status !== 200 || r.data.status !=1) {
                                deffered.reject();
                                return;
                            }

                            me.staff = r.data.data;

                            deffered.resolve(me.staff);
                        });
                        return deffered.promise;
                    } else {
                        console.log('cacheprofile',me.staff);
                        // return $q.when(me.staff);
                    }
                }
            }

        ])
        //员工管理index
        .controller('StaffInfoController',[
            '$scope',
            'ManagerService',
            'NgTableParams',
            function ($scope, ManagerService, NgTableParams) {
                $scope.StaffInfo = ManagerService;
                ManagerService.getStaff();
            }
        ])
})();
