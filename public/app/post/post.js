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
                    me.fnGetPosts = function (params, filterValue) {
                        var deffered = $q.defer();
                        if(angular.equals({}, me.postsInfo)) {
                            console.log('http');
                            $http.get("/post/index").then(function (r) {

                                if(r.status !== 200 || r.data.status !=1) {
                                    deffered.reject();
                                    return;
                                }

                                me.postsInfo = r.data.data;
                                params.total(r.data.data.recordsTotal);
                                //var transformedData = sliceData(orderData(r.data.data.data,params),params);
                                var transformedData = transformData(me.postsInfo.data, filterValue, params);
                                deffered.resolve(transformedData);
                            });
                            return deffered.promise;
                        } else {
                            console.log('cache');
                            var filteredData = filterData(me.postsInfo.data,filterValue);
                            params.total(filteredData.length);
                            var transformedData = sliceData(orderData(filteredData,params),params);
                            return $q.when(transformedData);
                        }
                    };
                    me.fnSearchPosts = function () {

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
                'NgTableParams',
                'dialogs',
                function ($scope, $timeout, PostService, NgTableParams, dialogs) {
                    var self = this;
                    self.$injet = ["NgTableParams", "ngTableSimpleList"];

                    self.tableParams = createUsingFullOptions();

                    /*self.cols = [
                        // { field: "title", title: "标题", sortable: "title", filter: {title: "text"}, show: true },
                        { field: "title", title: "标题", sortable: "title", show: true },
                        { field: "created_at", title: "添加时间", sortable: "created_at", show: true },
                        { field: "updated_at", title: "最后修改时间", show: true },
                        {
                            field: 'id',
                            title: "操作",
                            show: true
                        }
                    ];*/

                    // init
                    function createUsingFullOptions() {
                        var initialParams = {
                            page: 1,
                            sorting: { created_at: "desc" },
                            count:5
                        };
                        var initialSettings = {
                            counts: [5, 20, 50, 100],
                            paginationMaxBlocks: 5,
                            paginationMinBlocks: 2,
                            getData: function(params) {
                                return PostService.fnGetPosts(params, $scope.filterValue);
                            }
                        };
                        return new NgTableParams(initialParams, initialSettings);
                    }

                    //筛选
                    $scope.$watch("filterValue", function () {
                        self.tableParams.reload();
                    });

                    var dlg = null;
                    self.fnConfirmDestory = function (id) {
                       dlg = dialogs.confirm('Confirm','确定要删除该post吗?');
                        dlg.result.then(function(btn){
                            //确认删除
                            PostService.fnDestroyPost(id);
                        },function(btn){
                            console.log('取消');
                        });
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
