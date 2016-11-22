<header>
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a ui-sref="user">个人信息</a></li>
        <li role="presentation"><a href="#">绩效目标</a></li>
        <li role="presentation" class="dropdown">
            <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                请假管理 <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" role="menu">
                <li><a ui-sref="askForLeave">请假</a></li>
                <li><a ui-sref="allLeaves">请假记录</a></li>
            </ul>
        </li>
    </ul>
</header>
<hr>
<section>
    <div class="table-responsive" ng-controller="UserInfo">
        <table class="table table-bordered">
            <thead>
            <tr>
                <th>id</th>
                <th>姓名</th>
                <th>邮箱</th>
                <th>所属部门</th>
                <th>所属主管</th>
                <th>就职岗位</th>
                <th>QQ</th>
                <th>联系电话</th>
                <th>入职时间</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>[: User.profileData.id :]</td>
                <td>[: User.profileData.name :]</td>
                <td>[: User.profileData.email :]</td>
                <td>[: User.profileData.groups[0].name :]</td>
                <td>[: User.profileData.groups[0].supervisor['name'] :]</td>
                <td>[: User.profileData.identity :]</td>
                <td>[: User.profileData.qq :]</td>
                <td>[: User.profileData.phone :]</td>
                <td>[: User.profileData.created_at :]</td>
                <td>
                    <a ui-sref="profileUpdate">修改</a>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</section>
