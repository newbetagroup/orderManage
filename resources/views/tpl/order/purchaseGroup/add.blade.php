<section class="mt20">
    {{--新增订货分组--}}
    <div class="main animsition">
        <div class="container-fluid">

            <div class="row">
                <div class="panel panel-default">
                    <div class="panel-heading">
                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>
                         <h3 class="panel-title">新增订货分组</h3>
                    </div>
                    <div class="panel-body">

                        <form class="form-horizontal" role="form" ng-submit="fnAddPurchaseGroup()">
                            <div class="form-group">
                                <label for="name" class="col-md-3 control-label">订货分组</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="purchaseGroupInfo.name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="remark" class="col-md-3 control-label">备注</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="remark" id="remark" autofocus ng-model="purchaseGroupInfo.remark">
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
                        <div ng-show="purchaseGroupInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>正在提交...</strong>
                        </div>
                        <div ng-if="purchaseGroupInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>新增订货分组成功!</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>