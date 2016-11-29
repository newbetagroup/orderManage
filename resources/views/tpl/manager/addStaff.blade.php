{{--添加员工--}}
<div class="main animsition">
    <div class="container-fluid">

        <div class="row">
            <div class="">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">添加员工</h3>
                    </div>
                    <div class="panel-body">

                        <form class="form-horizontal" role="form" ng-submit="fnAddStaff(staffInfo)">
                            <div class="form-group">
                                <label for="name" class="col-md-3 control-label">员工名字</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="staffInfo.name">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email" class="col-md-3 control-label">员工邮箱</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="email" id="email" autofocus ng-model="staffInfo.email">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="password" class="col-md-3 control-label">员工密码</label>
                                <div class="col-md-5">
                                    <input type="password" class="form-control" name="password" id="password" autofocus ng-model="staffInfo.password">
                                </div>
                                <div ng-if="staffInfo.password" class="col-sm-5 col-sm-offset-3">
                                    <div class="alert alert-info input-info" role="alert">
                                        <strong>提示：</strong> <span ng-bind="staffInfo.password"></span>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="identity" class="col-md-3 control-label">员工岗位</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="identity" id="identity" autofocus ng-model="staffInfo.identity">
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="supervisor" class="col-md-3 control-label">部门</label>
                                <div class="col-md-5">
                                    <select  class="form-control" ng-model="staffInfo.groupId" ng-options="group.id as group.name for group in allGroups"></select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label class="control-label col-md-3 all-check">
                                    权限列表：
                                </label>
                                <div class="col-md-6">
                                    <div ng-repeat="permission in allPermissions" class="col-md-4 col-sm-6">
                                        <div class="checkbox icheck">
                                            <label>
                                                <input type="checkbox" ng-checked="isChecked(permission.id)" ng-click="updateSelection($event,permission.id)">&nbsp;[: permission.label :]
                                            </label>
                                        </div>
                                    </div>
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
                        <div ng-show="staffInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>正在提交...</strong>
                        </div>
                        <div ng-if="staffInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                            <strong>添加员工成功!</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>