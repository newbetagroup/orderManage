<section class="mt20">
    {{--修改服务器--}}
    <div class="main animsition">
        <div class="container-fluid">

            <div class="row">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">修改服务器</h3>
                    </div>
                    <div class="panel-body">

                        <form class="form-horizontal" role="form" ng-submit="fnEditServer()">
                            <div class="form-group">
                                <label for="name" class="col-md-3 control-label">服务器名称</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="serverInfo.name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="user_name" class="col-md-3 control-label">用户名</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="user_name" id="user_name" autofocus ng-model="serverInfo.user_name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password" class="col-md-3 control-label">密码</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="password" id="password" autofocus ng-model="serverInfo.password">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="login_url" class="col-md-3 control-label">登陆地址</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="login_url" id="login_url" autofocus ng-model="serverInfo.login_url">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="status" class="col-md-3 control-label">使用状态</label>
                                <div class="col-md-5">
                                    <label class="radio-inline">
                                        <input type="radio" name="status" value="1" ng-model="serverInfo.status"> 使用中
                                    </label>
                                    <label class="radio-inline">
                                        <input type="radio" name="status" value="0" ng-model="serverInfo.status"> 暂停使用
                                    </label>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-3" for="remark">
                                    备注
                                </label>
                                <div class="col-md-6">
                                    <textarea class="form-control" name="remark" id="remark" cols="30" rows="6" ng-model="serverInfo.remark"></textarea>
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
                        <div ng-show="serverInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>正在提交...</strong>
                        </div>
                        <div ng-if="serverInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>修改服务器成功!</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>