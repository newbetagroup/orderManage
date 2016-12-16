/**
 * Created by summer on 2016/11/20.
 */
;(function () {
    'use strict';
        angular.module('commonDashboard', [])
            .service('CommonService',[
                '$http',
                '$rootScope',
                '$q',
                '$filter',
                function ($http, $rootScope, $q, $filter) {
                    var me = this;

                    /*======================贯穿的个人权限============================*/
                    me.PermissionsHad = {};
                    me.PermissionsNameHad = {};
                    me.fnGetPermissionsHad = function (userId, groupId) {
                        var deffered = $q.defer();
                        if(me.PermissionsHad[userId] == null) {
                            $http.post("/user/allPermissionsHad", {id: userId, groupId: groupId}).then(function (r) {

                                if(r.status !== 200 || r.data.status !=1) {
                                    deffered.reject();
                                    return;
                                }

                                me.PermissionsHad[userId] = r.data.data.allPermissionHad;
                                me.PermissionsNameHad[userId] = r.data.data.allPermissionNameHad;

                                deffered.resolve(me.PermissionsHad[userId]);
                            });
                            return deffered.promise;
                        } else {
                            return $q.when(me.PermissionsHad[userId]);
                        }
                    };
                    me.fnGetPermissionsNameHad = function (userId, groupId) {
                        var deffered = $q.defer();
                        if(me.PermissionsNameHad[userId] == null) {
                            $http.post("/user/allPermissionsHad", {id: userId, groupId: groupId}).then(function (r) {

                                if(r.status !== 200 || r.data.status !=1) {
                                    deffered.reject();
                                    return;
                                }

                                me.PermissionsHad[userId] = r.data.data.allPermissionHad;
                                me.PermissionsNameHad[userId] = r.data.data.allPermissionNameHad;

                                deffered.resolve(me.PermissionsNameHad[userId]);
                            });
                            return deffered.promise;
                        } else {
                            return $q.when(me.PermissionsNameHad[userId]);
                        }
                    };

                    /*=======================部门下的所有员工========================*/
                    
                    var usersBygroup = {};
                    me.fnGetUsersBygroup = function (groupId) {
                            var deffered = $q.defer();
                          if (!usersBygroup[groupId]) {
                              $http.get('/group/getUsers/'+groupId).then(function (r) {
                                  if (r.data.status != 1) deffered.reject('status 0');
                                  usersBygroup[groupId] = r.data.data;
                                  deffered.resolve(r.data.data);
                              });
                              return deffered.promise;
                          } else {
                              return $q.when(usersBygroup[groupId]);
                          }
                    };

                    /*================== 公共常用的方法 ==================*/

                    /**
                     * $filter('filter')
                     * 实际生产中直接$filter('filter')(data, filter);
                     * @param data
                     * @param filter
                     * @returns {*}
                     */
                    me.filterData = function(data, filter){
                        return $filter('filter')(data, filter);
                    };

                    //下面三种方法只针对于ngTable，params是getData传入参数
                    
                    /**
                     * 排序
                     * @param data
                     * @param params
                     * @returns {*}
                     */
                    me.orderData = function(data, params){
                        return params.sorting() ? $filter('orderBy')(data, params.orderBy()) : data;
                    };

                    /**
                     * 排序、分页数据
                     * @param data
                     * @param params
                     * @returns {Array.<T>|*|Blob|string|ArrayBuffer}
                     */
                    me.sliceOrderData = function(data, params){
                        return me.orderData(data, params).slice((params.page() - 1) * params.count(), params.page() * params.count())
                    };

                    /**
                     * 返回筛选、排序、分页后的数据
                     * @param data
                     * @param filter
                     * @param params
                     * @returns {Array.<T>|*|Blob|string|ArrayBuffer}
                     */
                    me.transformData = function(data,filter,params){
                        return me.sliceOrderData(me.filterData(data,filter), params);
                    };
                }
            ])
})();
