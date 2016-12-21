<section class="mt20">
    {{--新增服务器--}}
    <div class="main animsition">
        <div class="container-fluid">

            <div class="row">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">新增品牌</h3>
                    </div>
                    <div class="panel-body">

                        <form class="form-horizontal" role="form" ng-submit="fnAddBrand()">
                            <div class="form-group">
                                <label for="name" class="col-md-3 control-label">品牌</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="brandInfo.name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="order" class="col-md-3 control-label">排序</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="order" id="order" autofocus ng-model="brandInfo.order">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-7 col-md-offset-3">
                                    <button type="submit" class="btn btn-primary btn-md">
                                        <i class="fa fa-plus-circle"></i>
                                        添加
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div ng-show="brandInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>正在提交...</strong>
                        </div>
                        <div ng-if="brandInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>新增品牌成功!</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>