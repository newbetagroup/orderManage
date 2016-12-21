<aside class="main-sidebar">

    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">

        <!-- Sidebar user panel (optional) -->
      {{--  <div class="user-panel">
            <div class="pull-left image">
                <img src="/imgs/avatar/u1.jpg" class="img-circle" alt="User Image">
            </div>
            <div class="pull-left info">
                <p>{{auth()->user()->username}}</p>
                <!-- Status -->
                <a><i class="fa fa-circle text-success"></i> 在线</a>
            </div>
        </div>
--}}
        <!-- search form (Optional) -->
      {{--  <form action="#" method="get" class="sidebar-form">
            <div class="input-group">
                <input type="text" name="q" class="form-control" placeholder="搜索...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
            </div>
        </form>--}}
        <!-- /.search form -->

        <!-- Sidebar Menu -->
        <ul class="sidebar-menu">
            {{--<li class="header"><i class="fa fa-times-circle-o"></i>2016-12-21</li>--}}
            <!-- Optionally, you can add icons to the links -->

            {{--<li><a href="/"><i class="fa fa-dashboard"></i> <span>控制面板</span></a></li>--}}

            <li class="treeview">
                <a><i class="fa fa-group"></i> <span>公司管理</span> <i
                            class="fa fa-angle-left pull-right"></i></a>
                <ul class="treeview-menu">
                    <li ng-class="{active: $state.includes('user')}">
                        <a ui-sref="user.info">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-user-circle"></i>个人信息</a>
                    </li>
                    <li ng-class="{active: $state.includes('manager')}">
                        <a ui-sref="manager.staff.index">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-users"></i>员工管理</a>
                    </li>
                    <li ng-class="{active: $state.includes('post')}">
                        <a ui-sref="post.postIndex">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-newspaper-o"></i>新闻公告</a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="user.performance">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-tasks"></i>绩效目标</a>
                    </li>
                    <li ui-sref-active="active">
                        <a ui-sref="leaveRecords">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-user-times"></i>所有员工请假记录</a>
                    </li>
                </ul>
            </li>
            <li class="treeview" ng-class="{active: $state.includes('website')}">
                <a><i class="fa fa-internet-explorer"></i><span>网站管理</span><i class="fa fa-angle-left pull-right"></i></a>
                <ul class="treeview-menu">
                    <li ng-class="{active: $state.includes('website.server')}">
                        <a ui-sref="website.server.index">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-server"></i>服务器管理</a>
                    </li>
                    <li ng-class="{active: $state.includes('website.country')}">
                        <a ui-sref="website.country.index">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-map-o"></i>国家管理</a>
                    </li>
                    <li ng-class="{active: $state.includes('website.brand')}">
                        <a ui-sref="website.brand.index">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-flag-o"></i>品牌管理</a>
                    </li>
                    <li ng-class="{active: $state.includes('website.adStatus')}">
                        <a ui-sref="website.adStatus.index">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-audio-description"></i>广告状态管理</a>
                    </li>
                    <li ng-class="{active: $state.includes('website.websiteStatus')}">
                        <a ui-sref="website.websiteStatus.index">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-sitemap"></i>网站状态管理</a>
                    </li>
                    <li ng-class="{active: $state.includes('website.host')}">
                        <a ui-sref="website.host.index">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-sitemap"></i>Hosting账户管理</a>
                    </li>
                </ul>
            </li>
        </ul>
        <!-- /.sidebar-menu -->
    </section>
    <!-- /.sidebar -->
</aside>