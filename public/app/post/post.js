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
                '$filter',
                function ($http, $q, $filter) {
                    var me = this;
                    me.postsInfo = {};//{recordTotal:*, data}

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
                    me.fnGetPosts = function (params) {
                        console.log(params.filter());
                        var deffered = $q.defer();
                        if(angular.equals({}, me.postsInfo)) {
                            $http.get("/post/index").then(function (r) {

                                if(r.status !== 200 || r.data.status !=1) {
                                    deffered.reject();
                                    return;
                                }

                                me.postsInfo = r.data.data;
                                params.total(r.data.data.recordsTotal);
                                //var transformedData = sliceData(orderData(r.data.data.data,params),params);
                                var transformedData = transformData(me.postsInfo.data, params.filter(), params);
                                deffered.resolve(transformedData);
                            });
                            return deffered.promise;
                        } else {
                            var transformedData = transformData(me.postsInfo.data, params.filter(), params);
                            params.total(me.postsInfo.recordsTotal);
                            return $q.when(transformedData);
                        }
                    };
                    // by id
                    me.fnGetPost = function (id) {

                    };

                    //新增
                    me.fnAddPost = function (postInfo) {
                        if(postInfo.pending) return;
                        postInfo.pending =true;
                        $http.post('/post', postInfo)
                            .then(function (r) {
                                if(r.data.status == 1) {
                                    postInfo.addStatus = true;
                                } else {
                                    postInfo.addStatus = false;
                                }
                            }, function (e) {
                                postInfo.addStatus = false;
                            })
                            .finally(function () {
                                postInfo.pending = false;
                            })
                    };

                    me.fnEditPost = function (postInfo) {
                        if(postInfo.pending) return;
                        postInfo.pending =true;
                        $http.put('/post/'+postInfo.id, postInfo)
                            .then(function (r) {
                                if(r.data.status == 1) {
                                    postInfo.editStatus = true;
                                } else {
                                    postInfo.editStatus = false;
                                }
                            }, function (e) {
                                postInfo.editStatus = false;
                            })
                            .finally(function () {
                                postInfo.pending = false;
                            });
                    };

                    me.fnDestroyPost = function (id) {
                        $http.delete('post/'+id).then(function (r) {
                            console.log(r.data);
                        })
                    }
                }
            ])
            .controller('PostManageIndexCtrl', [
                '$scope',
                '$timeout',
                'PostService',
                '$location',
                'NgTableParams',
                function ($scope, $timeout, PostService, $location, NgTableParams) {
                    var self = this;
                    self.$injet = ["NgTableParams", "ngTableSimpleList"];
                    this.posts = {};

                    self.tableParams = createUsingFullOptions();

                    self.cols = [
                        { field: "title", title: "标题", sortable: "title", filter: {title: "text"}, show: true },
                        { field: "created_at", title: "添加时间", sortable: "created_at", show: true },
                        { field: "updated_at", title: "最后修改时间", show: true },
                        { title: "", show: true }
                    ];

                    function createUsingFullOptions() {
                        var initialParams = {
                            page: 1,
                            sorting: { created_at: "asc" },
                            filter: { title: "" }
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

                    //删除
                    self.fnDestroyPost = function (id) {
                        PostService.fnDestroyPost(id);
                    };

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
                        PostService.fnAddPost(postInfo);
                    }
                }
            ])
            .controller('PostManageEditCtrl', [
                '$scope',
                'PostService',
                '$filter',
                function ($scope, PostService, $filter) {
                    $scope.postInfo = {};

                    var postId = $scope.$stateParams.postId;
                    if(angular.equals({}, PostService.postsInfo.data)) {
                        $scope.$state.go('post.postManageIndex');
                        return;
                    }
                    var postsInfo = $filter('filter')(PostService.postsInfo.data, {id: postId});
                    angular.forEach(postsInfo, function (value, key) {
                        //所有的posts中取出id为postId的一条数据
                        if(value.id == postId) {
                            $scope.postInfo = value;
                            return false;
                        }
                    });
                    //没有这个post
                    if(angular.equals({}, $scope.postInfo)) {
                        $scope.$state.go('post.postManageIndex');
                        return;
                    }

                    //提交修改
                    $scope.fnEditPost = function (postInfo) {
                        PostService.fnEditPost(postInfo);
                    }
                }
            ]);
})();
