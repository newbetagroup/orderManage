{{--添加权限--}}
<div class="main animsition">
    <div class="container-fluid">

        <div class="row">
            <div class="">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">添加权限</h3>
                    </div>
                    <div class="panel-body">

                        <form class="form-horizontal" role="form" ng-submit="fnAddPermission(permissionInfo)">
                            <div class="form-group">
                                <label for="name" class="col-md-3 control-label">权限名称</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="permissionInfo.name">
                                </div>
                                div.col-md-4
                            </div>
                            <div class="form-group">
                                <label for="tag" class="col-md-3 control-label">权限标签</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="label" id="tag" autofocus ng-model="permissionInfo.label">
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="tag" class="col-md-3 control-label">权限概述</label>
                                <div class="col-md-5">
                                    <textarea name="description" class="form-control" rows="3" ng-model="permissionInfo.description"></textarea>
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
                        <div ng-show="permissionInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>正在提交...</strong>
                        </div>
                        <div ng-if="permissionInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>添加`[: permissionInfo.name :]`权限成功!</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>