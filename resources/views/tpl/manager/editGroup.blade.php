{{--添加部门--}}
<div class="main animsition">
    <div class="container-fluid">
        <div class="row">
            <div class="">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">编辑部门</h3>
                    </div>
                    <div class="panel-body">

                        <form class="form-horizontal" role="form" ng-submit="fnEditGroup(groupInfo)">
                            <div class="form-group">
                                <label for="name" class="col-md-3 control-label">部门名称</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="groupInfo.name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="supervisor" class="col-md-3 control-label">指定主管</label>
                                <div class="col-md-5">
                                    <select  class="form-control" ng-model="groupInfo.supervisor_id" ng-options="user.id as user.name for user in allUsers"></select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="tag" class="col-md-3 control-label">部门标签</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="label" id="tag" autofocus ng-model="groupInfo.label">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="tag" class="col-md-3 control-label">部门概述</label>
                                <div class="col-md-5">
                                    <textarea name="description" class="form-control" rows="3" ng-model="groupInfo.description"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="form-group">
                                    <label class="control-label col-md-3 all-check">
                                        权限列表：
                                    </label>
                                    <div class="col-md-6">
                                        <div ng-repeat="permission in allPermissions" class="col-md-4 col-sm-6">
                                            <div class="checkbox icheck">
                                                <label>
                                                    <input type="checkbox" ng-checked="isChecked(permission.id)" ng-click="updateSelection($event,permission.id)">&nbsp;[: permission.name :]
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-7 col-md-offset-3">
                                    <button type="submit" class="btn btn-primary btn-md">
                                        <i class="fa fa-plus-circle"></i>
                                        保存
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div ng-show="groupInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>正在提交...</strong>
                        </div>
                        <div ng-if="groupInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>修改部门成功!</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>