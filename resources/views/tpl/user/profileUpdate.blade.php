<header>
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#">个人信息</a></li>
        <li role="presentation"><a href="#">绩效目标</a></li>
        <li role="presentation"><a href="#">请假管理</a></li>
    </ul>
</header>
<hr>
<section ng-controller="ProfileUpdate">
    <form name="userProfileUpdate" ng-submit="User.profileUpdate()" class="form-horizontal" role="form">
        <div class="form-group">
            <label for="userId" class="col-sm-2 control-label">Id</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="userId" ng-model="User.profileData.id" disabled>
            </div>
        </div>
        <div class="form-group">
            <label for="name" class="col-sm-2 control-label">名字</label>
            <div class="col-sm-10">
                <input name="name" type="text" class="form-control" id="name" ng-model="User.profileData.name" disabled>
            </div>
        </div>
        <div class="form-group">
            <label for="inputEmail" class="col-sm-2 control-label">邮箱</label>
            <div class="col-sm-10">
                <input name="email" type="email" class="form-control" id="inputEmail" ng-model="User.profileData.email">
            </div>
        </div>
        <div class="form-group">
            <label for="inputPassword" class="col-sm-2 control-label">密码</label>
            <div class="col-sm-10">
                <input name="confirmpassword" type="password" class="form-control" id="inputPassword" ng-model="User.profileData.password">
            </div>
            <div class="col-sm-10 col-sm-offset-2">
                <div class="alert alert-info input-info" role="alert">
                    <strong>提示：</strong>如果为空，则为旧密码，不进行修改
                </div>
            </div>
        </div>
        <div class="form-group" ng-if="User.profileData.password">
            <label for="inputPassword2" class="col-sm-2 control-label">你的新密码</label>
            <div class="col-sm-10">
                <input name="password" type="text" class="form-control" id="inputPassword2" ng-model="User.profileData.password" disabled>
            </div>
        </div>
        <div class="form-group">
            <label for="groups" class="col-sm-2 control-label">部门</label>
            <div class="col-sm-10">
                <input name="groups[]" type="text" class="form-control" id="groups" ng-model="User.profileData.groups[0].name" disabled>
            </div>
        </div>
        <div class="form-group">
            <label for="supervisor" class="col-sm-2 control-label">主管</label>
            <div class="col-sm-10">
                <input name="supervisor" type="text" class="form-control" id="supervisor" ng-model="User.profileData.groups[0].supervisor['name']" disabled>
            </div>
        </div>
        <div class="form-group">
            <label for="identity" class="col-sm-2 control-label">职称</label>
            <div class="col-sm-10">
                <input name="identity" type="text" class="form-control" id="identity" ng-model="User.profileData.identity" disabled>
            </div>
        </div>
        <div class="form-group">
            <label for="qq" class="col-sm-2 control-label">qq</label>
            <div class="col-sm-10">
                <input name="qq" type="text" class="form-control" id="qq" ng-model="User.profileData.qq">
            </div>
        </div>
        <div class="form-group">
            <label for="phone" class="col-sm-2 control-label">手机</label>
            <div class="col-sm-10">
                <input name="phone" type="text" class="form-control" id="phone" ng-model="User.profileData.phone">
            </div>
        </div>
        <div class="form-group">
            <label for="created_at" class="col-sm-2 control-label">入职时间</label>
            <div class="col-sm-10">
                <input name="created_at" type="text" class="form-control" id="phone" ng-model="User.profileData.created_at" disabled>
            </div>
        </div>
        <div class="form-group">
            <div class="col-sm-offset-2 col-sm-10">
                <button type="submit" class="btn btn-default" ng-disabled="userProfileUpdate.$invalid">提交修改</button>
                <a ui-sref="user" class="btn btn-default" role="button">返回</a>
            </div>
        </div>
    </form>
</section>
