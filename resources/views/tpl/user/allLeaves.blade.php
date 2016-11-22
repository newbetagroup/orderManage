<header>
    <ul class="nav nav-tabs" role="tablist">
        <li role="presentation"><a ui-sref="user">个人信息</a></li>
        <li role="presentation"><a href="#">绩效目标</a></li>
        <li role="presentation" class="dropdown active">
            <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                请假管理 <span class="caret"></span>
            </a>
            <ul class="dropdown-menu" role="menu">
                <li><a ui-sref="askForLeave">请假</a></li>
                <li class="active"><a ui-sref="allLeaves">请假记录</a></li>
            </ul>
        </li>
    </ul>
</header>
<hr>
<section id="userAction" class="clearfix leave-desc">
    <div ng-controller="GetLeaves as vm">

        <table ng-table="vm.tableParams" class="table" show-filter="false">
            <tr ng-repeat="user in $data">
                <td title="'Name'" filter="{ name: 'text'}" sortable="'name'">
                    [: user.name :]</td>
                <td title="'Age'" filter="{ age: 'number'}" sortable="'age'">
                    [: user.age :]</td>
            </tr>
        </table>
    </div>
</section>