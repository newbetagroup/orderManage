@section('css')
    {{--无效？--}}
    <link rel="stylesheet" href="/css/user.css">
@endsection

<header>
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation"><a ui-sref="user">个人信息</a></li>
        <li role="presentation"><a href="#">绩效目标</a></li>
        <li role="presentation" class="active"><a ui-sref="askForLeave">请假管理</a></li>
    </ul>
</header>
<hr>
<section id="userAction" class="clearfix" ng-controller="AskforLeave">
    <div class="ask-for-leave">
        <h2>请假条</h2>
    </div>
    <form name="userProfileUpdate" ng-submit="User.askforLeave()" class="form-horizontal" role="form">
        <input type="hidden" ng-model="User.profileData.user_id">
        <div class="form-group">
            <label for="type" class="col-sm-2 control-label">请假类型</label>
            <div class="col-sm-10">
                <label class="radio-inline">
                    <input type="radio" name="type" value="事假" id="inlineRadio1" ng-model="User.askLeaveInfo.type"> 事假
                </label>
                <label class="radio-inline">
                    <input type="radio" name="type" value="病假" id="inlineRadio1" ng-model="User.askLeaveInfo.type"> 病假
                </label>
                <label class="radio-inline">
                    <input type="radio" name="type" value="婚假" id="inlineRadio1" ng-model="User.askLeaveInfo.type"> 婚假
                </label>
                <label class="radio-inline">
                    <input type="radio" name="type" value="公假" id="inlineRadio1" ng-model="User.askLeaveInfo.type"> 公假
                </label>
                <label class="radio-inline">
                    <input type="radio" name="type" value="其他" id="inlineRadio1" ng-model="User.askLeaveInfo.type"> 其他
                </label>
            </div>
        </div>
        <div class="form-group">
            <label for="leave_reson" class="col-sm-2 control-label">请假事由</label>
            <div class="col-sm-10">
                <textarea name="leave_reson" id="remark" ng-model="User.askLeaveInfo.leave_reson" class="form-control" rows="3"></textarea>
            </div>
        </div>
        <div class="form-group">
            <label class="col-sm-2 control-label">请假时间</label>
            <div class="col-sm-4">
                <input name="begin" type="date" class="form-control" id="begin" ng-model="User.askLeaveInfo.begin">
            </div>
            <div class="col-sm-1"><span class="form-control">到</span></div>
            <div class="col-sm-4">
                <input name="end" type="date" class="form-control" id="end" ng-model="User.askLeaveInfo.end">
            </div>
        </div>
        <div class="form-group">
            <label for="inputPassword" class="col-sm-2 control-label">密码</label>
            <div class="col-sm-10">
                <input name="confirmpassword" type="password" class="form-control" id="inputPassword" ng-model="User.askLeaveInfo.password">
            </div>
            <div class="col-sm-10 col-sm-offset-2">
                <div class="alert alert-info input-info" role="alert">
                    <strong>提示：</strong>如果为空，则为旧密码，不进行修改
                </div>
            </div>
        </div>
        <div class="form-group" ng-if="User.askLeaveInfo.password">
            <label for="inputPassword2" class="col-sm-2 control-label">你的新密码</label>
            <div class="col-sm-10">
                <input name="password" type="text" class="form-control" id="inputPassword2" ng-model="User.askLeaveInfo.password" disabled>
            </div>
        </div>
        <div class="form-group">
            <label for="groups" class="col-sm-2 control-label">部门</label>
            <div class="col-sm-10">
                <input name="groups[]" type="text" class="form-control" id="groups" ng-model="User.askLeaveInfo.groups[0].name" disabled>
            </div>
        </div>
        <div class="form-group">
            <label for="supervisor" class="col-sm-2 control-label">主管</label>
            <div class="col-sm-10">
                <input name="supervisor" type="text" class="form-control" id="supervisor" ng-model="User.askLeaveInfo.groups[0].supervisor['name']" disabled>
            </div>
        </div>
        <div class="form-group">
            <label for="identity" class="col-sm-2 control-label">职称</label>
            <div class="col-sm-10">
                <input name="identity" type="text" class="form-control" id="identity" ng-model="User.askLeaveInfo.identity" disabled>
            </div>
        </div>
        <div class="form-group">
            <label for="qq" class="col-sm-2 control-label">qq</label>
            <div class="col-sm-10">
                <input name="qq" type="text" class="form-control" id="qq" ng-model="User.askLeaveInfo.qq">
            </div>
        </div>
        <div class="form-group">
            <label for="phone" class="col-sm-2 control-label">手机</label>
            <div class="col-sm-10">
                <input name="phone" type="text" class="form-control" id="phone" ng-model="User.askLeaveInfo.phone">
            </div>
        </div>
        <div class="form-group">
            <label for="domicile" class="col-sm-2 control-label">户籍</label>
            <div class="col-sm-10">
                <input name="domicile" type="text" class="form-control" id="domicile" ng-model="User.askLeaveInfo.domicile">
            </div>
        </div>
        <div class="form-group">
            <label for="graduated_school" class="col-sm-2 control-label">毕业院校</label>
            <div class="col-sm-10">
                <input name="graduated_school" type="text" class="form-control" id="graduated_school" ng-model="User.askLeaveInfo.graduated_school">
            </div>
        </div>
        <div class="form-group">
            <label for="address" class="col-sm-2 control-label">居住地址</label>
            <div class="col-sm-10">
                <input name="address" type="text" class="form-control" id="address" ng-model="User.askLeaveInfo.address">
            </div>
        </div>
        <div class="form-group">
            <label for="sex" class="col-sm-2 control-label">性别</label>
            <div class="col-sm-10">
                <input name="sex" type="text" class="form-control" id="sex" ng-model="User.askLeaveInfo.sex">
            </div>
        </div>

        <div class="form-group">
            <label for="created_at" class="col-sm-2 control-label">入职时间</label>
            <div class="col-sm-10">
                <input name="created_at" type="text" class="form-control" id="phone" ng-model="User.askLeaveInfo.created_at" disabled>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default" ng-disabled="userProfileUpdate.$invalid">提交修改</button>
                <a ui-sref="user" class="btn btn-default" role="button">返回</a>
            </div>
        </div>
    </form>
    <div ng-show="User.askLeaveInfo.updateStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
        <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
        <strong>修改成功!</strong>
    </div>
</section>