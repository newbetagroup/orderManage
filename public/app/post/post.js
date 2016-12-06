/**
 * Created by Geek-zwb on 2016/12/5 0005.
 */
(function () {

        'use strict';

        angular
            .module('postDashboard',[])
            .service('PostService',[
                '$http',
                '$q',
                function ($http, $q) {
                    var me = this;
                    me.postsInfo = {};
                    var cachePosts = null;
                    var dataLength;

                    function filterData(data, filter){
                        return $filter('filter')(data, filter);
                    }

                    function orderData(data, params){
                        return params.sorting() ? $filter('orderBy')(data, params.orderBy()) : filteredData;
                    }

                    function sliceData(data, params){
                        return data.slice((params.page() - 1) * params.count(), params.page() * params.count())
                    }

                    function transformData(data,filter,params){
                        return sliceData( orderData( filterData(data,filter), params ), params);
                    }

                    //all
                    me.fnGetPosts = function () {
                        var deffered = $q.defer();
                        if(angular.isUndefined(cachedData)) {
                            $http.get("/post/index").then(function (r) {

                                if(r.status !== 200 || r.data.status !=1) {
                                    deffered.reject();
                                    return;
                                }

                                dataLength = r.data.data.recordsTotal;
                                params.total(dataLength);
                                cachedData = r.data.data.data;
                                var transformedData = sliceData(orderData(cachedData,params),params);
                                console.log('cachedData', transformedData);
                                deffered.resolve(transformedData);
                            });
                            return deffered.promise;
                        } else {
                            //var filteredData = filterData(cachedData,filter);
                            var transformedData = sliceData(orderData(cachedData,params),params);
                            console.log('realcache',transformedData);
                            params.total(dataLength);
                            return $q.when(transformedData);
                        }
                    };
                    // by id
                    me.fnGetPost = function (id) {

                    };

                    //新增
                    me.fnAddPost = function (post) {
                        if(post.pending) return;
                        post.pending =true;
                        $http.post('/post', post)
                            .then(function (r) {
                                if(r.data.status == 1) {
                                    post.addStatus = true;
                                } else {
                                    post.addStatus = false;
                                }
                            }, function (e) {
                                post.addStatus = false;
                            })
                            .finally(function () {
                                post.pending = false;
                            })
                    };

                    me.fnDestroyPost = function (id) {
                        
                    }
                }
            ])
            .controller('PostManageIndexCtrl', [
                '$scope',
                '$timeout',
                'PostService',
                'NgTableParams',
                function ($scope, $timeout, PostService, NgTableParams) {

                    var self = this;
                    self.$injet = ["NgTableParams", "ngTableSimpleList"];
                    this.posts = {};

                    self.tableParams = createUsingFullOptions();

                    function createUsingFullOptions() {
                        var initialParams = {
                            page: 1,
                            sorting: { created_at: "asc" }
                        };
                        var initialSettings = {
                            filterDelay: 0,
                            paginationMaxBlocks: 3,
                            paginationMinBlocks: 2,
                            getData: function(params) {
                                $location.search(params.url()); // 将参数放到url上，实现刷新页面不会跳回第一页和默认配置
                                return PostService.fnGetPosts(params);
                            }
                        };
                        return new NgTableParams(initialParams, initialSettings);
                    }

                }])
            .controller('PostManageAddCtrl', [
                '$scope',
                'PostService',
                'textAngularManager',
                function ($scope, PostService, textAngularManager) {
                    $scope.postInfo = {};
                     $scope.postInfo.description = '<p>内容</p>';
                    $scope.disabled = false;
                    $scope.fnAddPost = function (postInfo) {
                        console.log(postInfo);
                       // PostService.fnAddPost(postInfo);
                    }
                }
            ]);
})();
