<section class="mt20">
    {{--修改快递发货公司--}}
    <div class="main animsition">
        <div class="container-fluid">

            <div class="row">
                <div class="panel panel-default">
                    <div class="panel-heading">
                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>
                         <h3 class="panel-title">修改快递发货公司</h3>
                    </div>
                    <div class="panel-body">

                        <form class="form-horizontal" role="form" ng-submit="fnEditExpressCompany()">
                            <div class="form-group">
                                <label for="expressCompanyName" class="col-md-3 control-label">快递发货公司</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="expressCompanyName" id="expressCompanyName" autofocus ng-model="expressCompanyInfo.name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="expressCompanyAbbreviation" class="col-md-3 control-label">简写</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="expressCompanyAbbreviation" id="order" autofocus ng-model="expressCompanyInfo.abbreviation">
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-7 col-md-offset-3">
                                    <button type="submit" class="btn btn-primary btn-md">
                                        <i class="fa fa-plus-circle"></i>
                                        修改
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div ng-show="expressCompanyInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>正在提交...</strong>
                        </div>
                        <div ng-if="expressCompanyInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>修改快递发货公司成功!</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>