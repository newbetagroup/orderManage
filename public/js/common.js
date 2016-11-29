/**
 * Created by summer on 2016/11/20.
 */
;(function () {
    'use strict';
        angular.module('common', [])
            .service('CommonService',[
                '$http',
                '$rootScope',
                '$q',
                function ($http, $rootScope, $q) {
                    var me = this;

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
                    }
                }
            ])
})();
