<section class="mt20">
    {{--修改货运方式--}}
    <div class="main animsition">
        <div class="container-fluid">

            <div class="row">
                <div class="panel panel-default">
                    <div class="panel-heading">
                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>
                         <h3 class="panel-title">修改货运方式</h3>
                    </div>
                    <div class="panel-body">

                        <form class="form-horizontal" role="form" ng-submit="fnEditExpress()">
                            <div class="form-group">
                                <label for="expressName" class="col-md-3 control-label">货运方式</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="expressName" id="expressName" autofocus ng-model="expressInfo.name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="expressAbbreviation" class="col-md-3 control-label">简写</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="expressAbbreviation" id="order" autofocus ng-model="expressInfo.abbreviation">
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
                        <div ng-show="expressInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>正在提交...</strong>
                        </div>
                        <div ng-if="expressInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>修改货运方式成功!</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>