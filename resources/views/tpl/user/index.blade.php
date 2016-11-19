<header>
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation" class="active"><a href="#">个人信息</a></li>
        <li role="presentation"><a href="#">绩效目标</a></li>
        <li role="presentation"><a href="#">请假管理</a></li>
    </ul>
</header>
<hr>
<section>
    <div class="table-responsive" ng-controller="userInfo">
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
                <td>主管,加到部门表？</td>
                <td>[: User.profileData.identity :]</td>
                <td>[: User.profileData.qq :]</td>
                <td>[: User.profileData.phone :]</td>
                <td>[: User.profileData.created_at :]</td>
                <td>修改/删除</td>
            </tr>
            </tbody>
        </table>
    </div>
</section>
