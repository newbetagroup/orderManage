(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/modal.html',
    '<body ng-controller="dialogServiceTest" class="pad">\n' +
    '<h2>Bootstrap 3 & AngularJS Dialog/Modals</h2><br />\n' +
    '<p>\n' +
    '    Demostration of my Angular-Dialog-Service module. Which can be found on Github: <a href="https://github.com/m-e-conroy/angular-dialog-service">https://github.com/m-e-conroy/angular-dialog-service</a><br />\n' +
    '</p>\n' +
    '<div class="row">\n' +
    '    <div class="col-md-12">\n' +
    '        <button class="btn btn-danger" ng-click="launch(\'error\')">Error Dialog</button>\n' +
    '\n' +
    '        <button class="btn btn-primary" ng-click="launch(\'wait\')">Wait Dialog</button>\n' +
    '\n' +
    '        <button class="btn btn-default" ng-click="launch(\'notify\')">Notify Dialog</button>\n' +
    '\n' +
    '        <button class="btn btn-success" ng-click="launch(\'confirm\')">Confirm Dialog</button>\n' +
    '\n' +
    '        <button class="btn btn-warning" ng-click="launch(\'create\')">Custom Dialog</button>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '</body>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/leaves/records.html',
    '<section>\n' +
    '    <uib-tabset active="activeJustified" justified="true">\n' +
    '        <uib-tab index="0" heading="统计">\n' +
    '            <section class="mt20">\n' +
    '                <div class="row">\n' +
    '                    <div class="col-md-6">\n' +
    '                        <form class="form-inline" role="form">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="currentMonth" class="control-label">年月</label>\n' +
    '                                <input type="search" class="form-control input-sm" ng-model="search.currentMonth" ng-change="fnGetLeavesRecords(search.currentMonth)">\n' +
    '                                <span ng-show="!search.status" class="alert-error">格式如: 2016-01</span>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="searchKeys" class="control-label">搜索</label>\n' +
    '                                <input type="search" class="form-control input-sm" ng-model="search.searchKeys" ng-change="fnGetLeavesRecords(search.currentMonth)">\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '                <div class="row mt20">\n' +
    '                    <div class="col-xs-12">\n' +
    '                        <div class="box">\n' +
    '                            <div class="box-body">\n' +
    '                                <table class="table table-bordered table-hover">\n' +
    '                                    <thead>\n' +
    '                                    <tr>\n' +
    '                                        <th>姓名</th>\n' +
    '                                        <th>请假类型</th>\n' +
    '                                        <th>请假事由</th>\n' +
    '                                        <th>开始时间</th>\n' +
    '                                        <th>结束时间</th>\n' +
    '                                        <th>批准情况</th>\n' +
    '                                        <th>合计时间(hour)</th>\n' +
    '                                    </tr>\n' +
    '                                    </thead>\n' +
    '                                    <tbody>\n' +
    '                                    <tr ng-repeat="leavesRecord in leavesRecords">\n' +
    '                                        <td>[: leavesRecord.name :]</td>\n' +
    '                                        <td>[: leavesRecord.type :]</td>\n' +
    '                                        <td>[: leavesRecord.leave_reson :]</td>\n' +
    '                                        <td>[: leavesRecord.begin :]</td>\n' +
    '                                        <td>[: leavesRecord.end :]</td>\n' +
    '                                        <td>[: leavesRecord.grant :]</td>\n' +
    '                                        <td>[: leavesRecord.total_time :]</td>\n' +
    '                                    </tr>\n' +
    '                                    </tbody>\n' +
    '                                </table>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </section>\n' +
    '        </uib-tab>\n' +
    '        <uib-tab index="1" heading="详情">...</uib-tab>\n' +
    '    </uib-tabset>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/manager/base.html',
    '<header>\n' +
    '    <ul class="nav nav-tabs" role="tablist">\n' +
    '        <li role="presentation" ng-class="{active: $state.includes(\'manager.staff\')}"><a ui-sref="manager.staff.index">员工管理</a></li>\n' +
    '        <li role="presentation" ng-class="{active: $state.includes(\'manager.group\')}"><a ui-sref=".group.index">部门管理</a></li>\n' +
    '        <li role="presentation" ng-class="{active: $state.includes(\'manager.permission\')}"><a ui-sref=".permission.index">权限管理</a></li>\n' +
    '    </ul>\n' +
    '</header>\n' +
    '<hr>\n' +
    '<div ui-view></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/page/home.html',
    '<div class="container">\n' +
    '    <div class="row">\n' +
    '        <div class="col-md-8 col-md-offset-2">\n' +
    '            <div class="panel panel-default">\n' +
    '                <div class="panel-heading">Dashboard</div>\n' +
    '\n' +
    '                <div class="panel-body">\n' +
    '                    You are logged in!\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/post/base.html',
    '<header>\n' +
    '    <ul class="nav nav-tabs" role="tablist">\n' +
    '        <li role="presentation" ui-sref-active="active"><a ui-sref="post.postIndex">TimeLine</a></li>\n' +
    '        <li role="presentation" ui-sref-active="active"><a ui-sref="post.postManageIndex">公告管理</a></li>\n' +
    '    </ul>\n' +
    '</header>\n' +
    '<hr>\n' +
    '\n' +
    '<div ui-view=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/post/postDescription.html',
    '<section class="content-wrap">\n' +
    '    <div class="container">\n' +
    '        <div class="row">\n' +
    '\n' +
    '            <!--<main class="col-md-8 main-content">-->\n' +
    '            <main class="main-content">\n' +
    '\n' +
    '\n' +
    '                <article class="post">\n' +
    '\n' +
    '                    <header class="post-head">\n' +
    '                        <h1 class="post-title" ng-bind="post.title"></h1>\n' +
    '                        <section class="post-meta">\n' +
    '                            <span class="author" ng-if="post.author">作者：<a ng-bind="post.author"></a>•</span>\n' +
    '                            <time class="post-date" title="[: post.created_at :]">[: post.created_at | date:"yyyy年MM月dd日" :]</time>\n' +
    '                        </section>\n' +
    '                    </header>\n' +
    '\n' +
    '                    <!--<section class="featured-media">\n' +
    '                        <img src="http://image.golaravel.com/9/a9/c367f99a8366ca86f7b889da25022.png" alt="">\n' +
    '                    </section>-->\n' +
    '\n' +
    '                    <section class="post-content" ng-bind-html="post.description"></section>\n' +
    '\n' +
    '                    <footer class="post-footer clearfix">\n' +
    '                        <div class="prev-next-wrap clearfix row">\n' +
    '                            <a class="col-sm-3 col-sm-offset-2 btn btn-default" ng-if="prePost.id" ui-sref="post.postDescription({postId:prePost.id})"><i class="fa fa-angle-left fa-fw"></i> [: prePost.title :]</a>\n' +
    '                            <a class="col-sm-3 col-sm-offset-2 btn btn-default" ng-if="nextPost.id" ui-sref="post.postDescription({postId:nextPost.id})">[: nextPost.title :]<i class="fa fa-angle-right fa-fw"></i></a>\n' +
    '                        </div>\n' +
    '                    </footer>\n' +
    '                    <hr>\n' +
    '\n' +
    '                </article>\n' +
    '\n' +
    '            </main>\n' +
    '\n' +
    '            <!--<aside class="col-md-4 sidebar">\n' +
    '                <div class="widget">\n' +
    '                    <h4 class="title">文档</h4>\n' +
    '                    <a href="http://lumen.golaravel.com/docs/" class="btn btn-default btn-block" target="_blank">Lumen 中文文档</a>\n' +
    '                    <a href="http://www.golaravel.com/laravel/docs/5.0/" class="btn btn-default btn-block" target="_blank">5.0 中文文档</a>\n' +
    '                    <a href="http://www.golaravel.com/laravel/docs/4.2/" class="btn btn-default btn-block" target="_blank">4.2 中文文档</a>\n' +
    '                    <a href="http://www.golaravel.com/laravel/docs/4.1/" class="btn btn-default btn-block" target="_blank">4.1 中文文档</a>\n' +
    '                    <a href="http://www.golaravel.com/laravel/docs/4.0/" class="btn btn-default btn-block" target="_blank">4.0 中文文档</a>\n' +
    '                </div>\n' +
    '            </aside>-->\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/post/postIndex.html',
    '<section>\n' +
    '    <div class="row page-title-row">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter">\n' +
    '                <label class="col-md-5">搜索:<input ng-model="filterValue" type="search" class="form-control input-sm"></label>\n' +
    '            </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <ul class="timeline">\n' +
    '        <li ng-repeat="post in posts" ng-class-odd="\'timeline-inverted\'">\n' +
    '            <div class="timeline-badge info"><i class="glyphicon glyphicon-floppy-disk"></i></div>\n' +
    '            <div class="timeline-panel">\n' +
    '                <div class="timeline-heading">\n' +
    '                    <h4 class="timeline-title">[: post.title :]</h4>\n' +
    '                    <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> [: post.created_at :]</small></p>\n' +
    '                </div>\n' +
    '                <div class="timeline-body">\n' +
    '                    <p>[: post.abstract :]</p>\n' +
    '                    <a ui-sref="post.postDescription({postId:post.id})" class="btn btn-info floatRight">详情</a>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li class="timeline-inverted">\n' +
    '            <div class="timeline-badge warning"><i class="glyphicon glyphicon-credit-card"></i></div>\n' +
    '            <div class="timeline-panel">\n' +
    '                <div class="timeline-heading">\n' +
    '                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>\n' +
    '                </div>\n' +
    '                <div class="timeline-body">\n' +
    '                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n' +
    '                    <p>Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Interagi no mé, cursus quis, vehicula ac nisi. Aenean vel dui dui. Nullam leo erat, aliquet quis tempus a, posuere ut mi. Ut scelerisque neque et turpis posuere pulvinar pellentesque nibh ullamcorper. Pharetra in mattis molestie, volutpat elementum justo. Aenean ut ante turpis. Pellentesque laoreet mé vel lectus scelerisque interdum cursus velit auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ac mauris lectus, non scelerisque augue. Aenean justo massa.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '            <div class="timeline-badge danger"><i class="glyphicon glyphicon-credit-card"></i></div>\n' +
    '            <div class="timeline-panel">\n' +
    '                <div class="timeline-heading">\n' +
    '                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>\n' +
    '                </div>\n' +
    '                <div class="timeline-body">\n' +
    '                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li class="timeline-inverted">\n' +
    '            <div class="timeline-panel">\n' +
    '                <div class="timeline-heading">\n' +
    '                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>\n' +
    '                </div>\n' +
    '                <div class="timeline-body">\n' +
    '                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '            <div class="timeline-badge info"><i class="glyphicon glyphicon-floppy-disk"></i></div>\n' +
    '            <div class="timeline-panel">\n' +
    '                <div class="timeline-heading">\n' +
    '                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>\n' +
    '                </div>\n' +
    '                <div class="timeline-body">\n' +
    '                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n' +
    '                    <hr>\n' +
    '                    <div class="btn-group">\n' +
    '                        <button type="button" class="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">\n' +
    '                            <i class="glyphicon glyphicon-cog"></i> <span class="caret"></span>\n' +
    '                        </button>\n' +
    '                        <ul class="dropdown-menu" role="menu">\n' +
    '                            <li><a href="#">Action</a></li>\n' +
    '                            <li><a href="#">Another action</a></li>\n' +
    '                            <li><a href="#">Something else here</a></li>\n' +
    '                            <li class="divider"></li>\n' +
    '                            <li><a href="#">Separated link</a></li>\n' +
    '                        </ul>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '            <div class="timeline-panel">\n' +
    '                <div class="timeline-heading">\n' +
    '                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>\n' +
    '                </div>\n' +
    '                <div class="timeline-body">\n' +
    '                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '        <li class="timeline-inverted">\n' +
    '            <div class="timeline-badge success"><i class="glyphicon glyphicon-thumbs-up"></i></div>\n' +
    '            <div class="timeline-panel">\n' +
    '                <div class="timeline-heading">\n' +
    '                    <h4 class="timeline-title">Mussum ipsum cacilds</h4>\n' +
    '                </div>\n' +
    '                <div class="timeline-body">\n' +
    '                    <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/post/postManageAdd.html',
    '<div class="row">\n' +
    '    <div class="col-lg-12">\n' +
    '\n' +
    '        <div class="panel panel-default">\n' +
    '\n' +
    '            <!-- heading -->\n' +
    '            <div class="panel-heading panel-heading-admin text-center">\n' +
    '                新增 post\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="panel-body">\n' +
    '\n' +
    '                <form class="form" role="form" ng-submit="fnAddPost(postInfo)">\n' +
    '                    <!-- name -->\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="title">标题</label>\n' +
    '                        <div class="input-group col-md-5">\n' +
    '                            <input type="text" id="title" name="title" placeholder="标题" class="form-control" ng-model="postInfo.title"/>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <!-- abstract -->\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="abstract">摘要</label>\n' +
    '                        <div class="input-group col-md-5">\n' +
    '                            <textarea name="abstract" ng-model="postInfo.abstract" id="abstract" cols="100%" rows="6"></textarea>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <!-- Description -->\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="description">详细内容</label>\n' +
    '                        <div class="input-group">\n' +
    '                            <text-angular name="description" ng-model="postInfo.description">\n' +
    '                                <p>Any <b>HTML</b> we put in-between the text-angular tags gets automatically put into the editor if there <strong style="font-size: 12pt;"><u><em>is not</em></u></strong> a value assigned to the ngModel.</p>\n' +
    '                                <p>If there is a value assigned to the ngModel, it replaces any html here. To see this, uncomment the line at the bottom of demo.html</p>\n' +
    '                            </text-angular>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <!-- Visible -->\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label" for="visible">是否可见</label>\n' +
    '                        <div class="col-md-3">\n' +
    '                            <label class="radio-inline">\n' +
    '                                <input type="radio" name="visible" id="visible" value="1" ng-model="postInfo.visible" checked="checked"> Yes\n' +
    '                            </label>\n' +
    '                            <label class="radio-inline">\n' +
    '                                <input type="radio" name="visible" id="visible" value="0" ng-model="postInfo.visible"> No\n' +
    '                            </label>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <div class="col-md-7">\n' +
    '                            <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                <i class="fa fa-plus-circle"></i>\n' +
    '                                添加\n' +
    '                            </button>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '\n' +
    '                <!-- errors -->\n' +
    '                <div class="alert alert-danger" role="alert" ng-if="errors">\n' +
    '                    <ul ng-repeat="error in errors">\n' +
    '                        <li ng-bind="error"></li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '\n' +
    '                <div ng-show="postInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                    <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                    <strong>正在提交...</strong>\n' +
    '                </div>\n' +
    '\n' +
    '                <div ng-if="postInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                    <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                    <strong>添加post成功!</strong>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/post/postManageEdit.html',
    '<div class="row">\n' +
    '    <div class="col-lg-12">\n' +
    '\n' +
    '        <div class="panel panel-default">\n' +
    '\n' +
    '            <!-- heading -->\n' +
    '            <div class="panel-heading panel-heading-admin text-center">\n' +
    '                修改 post\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="panel-body">\n' +
    '\n' +
    '                <form class="form" role="form" ng-submit="fnEditPost(postInfo)">\n' +
    '                    <!-- name -->\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="title">标题</label>\n' +
    '                        <div class="input-group col-md-5">\n' +
    '                            <input type="text" id="title" name="title" placeholder="标题" class="form-control" ng-model="postInfo.title"/>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <!-- abstract -->\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="abstract">摘要</label>\n' +
    '                        <div class="input-group col-md-5">\n' +
    '                            <textarea name="abstract" ng-model="postInfo.abstract" id="abstract" cols="100%" rows="6"></textarea>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <!-- Description -->\n' +
    '                    <div class="form-group">\n' +
    '                        <label for="description">详细内容</label>\n' +
    '                        <div class="input-group">\n' +
    '                            <text-angular name="description" ng-model="postInfo.description">\n' +
    '                                <p>Any <b>HTML</b> we put in-between the text-angular tags gets automatically put into the editor if there <strong style="font-size: 12pt;"><u><em>is not</em></u></strong> a value assigned to the ngModel.</p>\n' +
    '                                <p>If there is a value assigned to the ngModel, it replaces any html here. To see this, uncomment the line at the bottom of demo.html</p>\n' +
    '                            </text-angular>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <!-- Visible -->\n' +
    '                    <div class="form-group">\n' +
    '                        <label class="col-md-2 control-label" for="visible">是否可见</label>\n' +
    '                        <div class="col-md-3">\n' +
    '                            <label class="radio-inline">\n' +
    '                                <input type="radio" name="visible" id="visible" value="1" ng-model="postInfo.visible" checked="checked"> Yes\n' +
    '                            </label>\n' +
    '                            <label class="radio-inline">\n' +
    '                                <input type="radio" name="visible" id="visible" value="0" ng-model="postInfo.visible"> No\n' +
    '                            </label>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '\n' +
    '                    <div class="form-group">\n' +
    '                        <div class="col-md-7">\n' +
    '                            <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                <i class="fa fa-plus-circle"></i>\n' +
    '                                保存\n' +
    '                            </button>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </form>\n' +
    '\n' +
    '                <!-- errors -->\n' +
    '                <div class="alert alert-danger" role="alert" ng-if="errors">\n' +
    '                    <ul ng-repeat="error in errors">\n' +
    '                        <li ng-bind="error"></li>\n' +
    '                    </ul>\n' +
    '                </div>\n' +
    '\n' +
    '                <div ng-show="postInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                    <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                    <strong>正在提交...</strong>\n' +
    '                </div>\n' +
    '\n' +
    '                <div ng-if="postInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                    <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                    <strong>修改post成功!</strong>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/post/postManageIndex.html',
    '<!--post manage index-->\n' +
    '<section>\n' +
    '    <div class="row page-title-row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter">\n' +
    '                <label>搜索:<input ng-model="filterValue" type="search" class="form-control input-sm"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="post.postManageAdd" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 添加\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body">\n' +
    '                    <table  ng-table="posts.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'标题\'" sortable="\'title\'">[: row.title :]</td>\n' +
    '                            <td data-title="\'创建时间\'" sortable="\'created_at\'">[: row.created_at :]</td>\n' +
    '                            <td data-title="\'最后修改时间\'" sortable="\'updated_at\'">[: row.updated_at :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="post.postManageEdit({postId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="posts.fnConfirmDestory(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="posts.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="posts.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/user/allLeaves.html',
    '<section id="userAction" class="clearfix">\n' +
    '    <div>\n' +
    '        <p>Filter: <input class="form-control" type="text" ng-model="filter.$" /></p>\n' +
    '        <table  ng-table-dynamic="leave.tableParams with leave.cols" class="table table-condensed table-bordered table-striped">\n' +
    '            <tr ng-repeat="row in $data">\n' +
    '                <td ng-repeat="col in $columns">[: row[col.field] :]</td>\n' +
    '            </tr>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/user/askForLeave.html',
    '<section id="userAction" class="clearfix leave-desc" ng-controller="AskforLeaveController">\n' +
    '    <div class="ask-for-leave">\n' +
    '        <h2>请假条</h2>\n' +
    '    </div>\n' +
    '    <form id="leaveForm" name="useraskforLeave" ng-submit="User.askforLeave()" class="form-horizontal" role="form">\n' +
    '        <div class="form-group">\n' +
    '            <label for="type" class="col-sm-2 control-label">请假类型</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <label class="radio-inline">\n' +
    '                    <input type="radio" name="type" value="事假" id="inlineRadio1" ng-model="User.askLeaveInfo.type"> 事假\n' +
    '                </label>\n' +
    '                <label class="radio-inline">\n' +
    '                    <input type="radio" name="type" value="病假" id="inlineRadio1" ng-model="User.askLeaveInfo.type"> 病假\n' +
    '                </label>\n' +
    '                <label class="radio-inline">\n' +
    '                    <input type="radio" name="type" value="婚假" id="inlineRadio1" ng-model="User.askLeaveInfo.type"> 婚假\n' +
    '                </label>\n' +
    '                <label class="radio-inline">\n' +
    '                    <input type="radio" name="type" value="公假" id="inlineRadio1" ng-model="User.askLeaveInfo.type"> 公假\n' +
    '                </label>\n' +
    '                <label class="radio-inline">\n' +
    '                    <input type="radio" name="type" value="其他" id="inlineRadio1" ng-model="User.askLeaveInfo.type"> 其他\n' +
    '                </label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="leave_reson" class="col-sm-2 control-label">请假事由</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <textarea name="leave_reson" id="remark" ng-model="User.askLeaveInfo.leave_reson" class="form-control" rows="3"></textarea>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label class="col-sm-2 control-label">请假时间</label>\n' +
    '            <div class="col-sm-3">\n' +
    '                <datetimepicker dateID="begin" format="Y/m/d H:i" class="form-control" ng-model="User.askLeaveInfo.begin"></datetimepicker>\n' +
    '                <!--<input name="begin" type="date" class="form-control" id="begin" ng-model="User.askLeaveInfo.begin">-->\n' +
    '            </div>\n' +
    '            <div class="col-sm-1"><span class="form-control">到</span></div>\n' +
    '            <div class="col-sm-3">\n' +
    '                <datetimepicker dateID="end" format="Y/m/d H:i" class="form-control" ng-model="User.askLeaveInfo.end"></datetimepicker>\n' +
    '            </div>\n' +
    '            <div class="col-sm-3"><span class="form-control">共&nbsp;<span ng-bind="User.askLeaveInfo.total_day">0</span>&nbsp;天&nbsp;<span ng-bind="User.askLeaveInfo.total_hour"></span>&nbsp;小时</span></div>\n' +
    '            <div ng-if="User.askLeaveInfo.total_time > 9" class="col-sm-10 col-sm-offset-2">\n' +
    '                <div class="alert alert-warning input-info" role="alert">\n' +
    '                    <strong>温馨提示：</strong>超过1天,本页面提交申请后请及时和老板口头申请\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="name" class="col-sm-offset-7 col-sm-5 control-label">申请人：<span ng-bind="User.profileData.name"></span></label>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <div class="col-sm-offset-5 col-sm-4">\n' +
    '                <button type="submit" class="btn btn-default" ng-disabled="useraskforLeave.$invalid">提交申请</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '    <div ng-show="User.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '        <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '        <strong>正在提交!</strong>\n' +
    '    </div>\n' +
    '    <div ng-if="User.askLeaveInfo.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '        <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '        <strong>申请成功!</strong>\n' +
    '    </div>\n' +
    '    <div ng-if="User.askLeaveInfo.err" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '        <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '        <strong ng-bind="User.askLeaveInfo.err">重复请假!</strong>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/user/base.html',
    '<header>\n' +
    '    <ul class="nav nav-tabs" role="tablist">\n' +
    '        <li role="presentation" ui-sref-active="active"><a ui-sref="user.info">个人信息</a></li>\n' +
    '        <li role="presentation" ui-sref-active="active"><a ui-sref="user.performance">绩效目标</a></li>\n' +
    '        <li role="presentation" class="dropdown" ui-sref-active="active">\n' +
    '            <a class="dropdown-toggle" data-toggle="dropdown" aria-expanded="false">\n' +
    '                请假管理 <span class="caret"></span>\n' +
    '            </a>\n' +
    '            <ul class="dropdown-menu" role="menu">\n' +
    '                <li><a ui-sref="user.askForLeave">请假</a></li>\n' +
    '                <li><a ui-sref="user.allLeaves">请假记录</a></li>\n' +
    '            </ul>\n' +
    '        </li>\n' +
    '    </ul>\n' +
    '</header>\n' +
    '<hr>\n' +
    '<div ui-view=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/user/index.html',
    '<section>\n' +
    '    <div class="table-responsive" ng-controller="UserInfoController">\n' +
    '        <table class="table table-bordered">\n' +
    '            <thead>\n' +
    '            <tr>\n' +
    '                <th>id</th>\n' +
    '                <th>姓名</th>\n' +
    '                <th>邮箱</th>\n' +
    '                <th>所属部门</th>\n' +
    '                <th>所属主管</th>\n' +
    '                <th>就职岗位</th>\n' +
    '                <th>QQ</th>\n' +
    '                <th>联系电话</th>\n' +
    '                <th>入职时间</th>\n' +
    '                <th>操作</th>\n' +
    '            </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '            <tr>\n' +
    '                <td>[: User.profileData.id :]</td>\n' +
    '                <td>[: User.profileData.name :]</td>\n' +
    '                <td>[: User.profileData.email :]</td>\n' +
    '                <td>[: User.profileData.groups[0].name :]</td>\n' +
    '                <td>[: User.profileData.groups[0].supervisor[\'name\'] :]</td>\n' +
    '                <td>[: User.profileData.identity :]</td>\n' +
    '                <td>[: User.profileData.qq :]</td>\n' +
    '                <td>[: User.profileData.phone :]</td>\n' +
    '                <td>[: User.profileData.created_at :]</td>\n' +
    '                <td>\n' +
    '                    <a ui-sref="user.profileUpdate">修改</a>\n' +
    '                </td>\n' +
    '            </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '    </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/user/performance.html',
    '<section>\n' +
    '    <form class="form-inline" role="form">\n' +
    '        <div class="form-group">\n' +
    '            <label for="userName" class="control-label">执行人</label>\n' +
    '            <select ng-if="isSupervisor" class="form-control" ng-model="searchKeys.userId" ng-options="user.id as user.name for user in usersByGroup" ng-change="fnChangeUser(searchKeys.userId)"></select>\n' +
    '            <input ng-if="!isSupervisor" type="text" class="form-control" id="userName" name="userName" disabled placeholder="[: searchKeys.userName :]">\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="currentMonth" class="control-label">考核日期</label>\n' +
    '            <input class="form-control" ng-model="searchKeys.currentMonth"/>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <button class="btn btn-primary" ng-click="fnReloadPerformances()">submit</button>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '\n' +
    '        <table class="table table-condensed">\n' +
    '            <thead>\n' +
    '            <tr>\n' +
    '                <th width="6%">星期</th>\n' +
    '                <th width="8%">工作日期</th>\n' +
    '                <th width="36%">每日必要工作内容要点</th>\n' +
    '                <th width="6%">自我考评(0-10)</th>\n' +
    '                <th width="6%">完成效率(主管 0-10)</th>\n' +
    '                <th width="6%">质量分(主管 0-10)</th>\n' +
    '                <th width="6%">综合考评(主管 0-10)</th>\n' +
    '                <th width="26%">备注建议</th>\n' +
    '            </tr>\n' +
    '            </thead>\n' +
    '            <tbody>\n' +
    '            <tr ng-repeat="performance in performances">\n' +
    '                <td ng-if="!performance.week_target">[: performance.what_day :]</td>\n' +
    '                <td ng-if="!performance.week_target">[: performance.day_time :]</td>\n' +
    '                <td ng-if="!performance.week_target" ng-init="updateStatus={}">\n' +
    '                    <textarea ng-model="performance.day_work" style="width: 98%;"  rows="2" ng-blur="$parent.fnSetPerformance(performance, updateStatus)"></textarea>\n' +
    '                    <font ng-show="updateStatus.status" color="green">success</font>\n' +
    '                </td>\n' +
    '                <td ng-if="!performance.week_target" ng-init="updateStatus={}" >\n' +
    '                    <input style="height: 47px;width: 100%;" type="number" ng-model="performance.self_rating" ng-blur="$parent.fnSetPerformance(performance, updateStatus)">\n' +
    '                    <font ng-show="updateStatus.status" color="green">success</font>\n' +
    '                </td>\n' +
    '                <td ng-if="!performance.week_target" ng-init="updateStatus={}">\n' +
    '                    <input style="height: 47px;width: 100%;" type="number" ng-disabled="!isSupervisor" ng-model="performance.efficiency_rating" ng-blur="$parent.fnSetPerformance(performance, updateStatus)">\n' +
    '                    <font ng-show="updateStatus.status" color="green">success</font>\n' +
    '                </td>\n' +
    '                <td ng-if="!performance.week_target" ng-init="updateStatus={}">\n' +
    '                    <input style="height: 47px;width: 100%;" type="number" ng-disabled="!isSupervisor" ng-model="performance.quality_rating" ng-blur="$parent.fnSetPerformance(performance, updateStatus)">\n' +
    '                    <font ng-show="updateStatus.status" color="green">success</font>\n' +
    '                </td>\n' +
    '                <td ng-if="!performance.week_target" ng-init="updateStatus={}">\n' +
    '                    <input style="height: 47px;width: 100%;" type="number" ng-disabled="!isSupervisor" ng-model="performance.overall_rating" ng-blur="$parent.fnSetPerformance(performance, updateStatus)">\n' +
    '                    <font ng-show="updateStatus.status" color="green">success</font>\n' +
    '                </td>\n' +
    '                <td ng-if="!performance.week_target" ng-init="updateStatus={}"><textarea ng-disabled="!isSupervisor" style="width: 98%;" ng-model="performance.remark"  rows="2" ng-blur="$parent.fnSetPerformance(performance, updateStatus)"></textarea></td>\n' +
    '                <td colspan="3" ng-if="performance.week_target" ng-init="updateStatus={}"><textarea style="width: 98%;" ng-model="performance.week_target"  rows="2" ng-blur="$parent.fnSetPerformance(performance, updateStatus)"></textarea></td>\n' +
    '                <td colspan="5" ng-if="performance.week_completed_target" ng-init="updateStatus={}"><textarea style="width: 98%;" ng-model="performance.week_completed_target"  rows="2" ng-blur="$parent.fnSetPerformance(performance, updateStatus)"></textarea></td>\n' +
    '            </tr>\n' +
    '            </tbody>\n' +
    '        </table>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/user/profileUpdate.html',
    '<section class="clearfix" ng-controller="ProfileUpdateController">\n' +
    '    <form name="userProfileUpdate" ng-submit="User.profileUpdate()" class="form-horizontal" role="form">\n' +
    '        <div class="form-group">\n' +
    '            <label for="userId" class="col-sm-2 control-label">Id</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input type="text" class="form-control" id="userId" ng-model="User.profileData.id" disabled>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="name" class="col-sm-2 control-label">名字</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input name="name" type="text" class="form-control" id="name" ng-model="User.profileData.name" disabled>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="inputEmail" class="col-sm-2 control-label">邮箱</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input name="email" type="email" class="form-control" id="inputEmail" ng-model="User.profileData.email">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="inputPassword" class="col-sm-2 control-label">密码</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input name="confirmpassword" type="password" class="form-control" id="inputPassword" ng-model="User.profileData.password">\n' +
    '            </div>\n' +
    '            <div class="col-sm-10 col-sm-offset-2">\n' +
    '                <div class="alert alert-info input-info" role="alert">\n' +
    '                    <strong>提示：</strong>如果为空，则为旧密码，不进行修改\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group" ng-if="User.profileData.password">\n' +
    '            <label for="inputPassword2" class="col-sm-2 control-label">你的新密码</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input name="password" type="text" class="form-control" id="inputPassword2" ng-model="User.profileData.password" disabled>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="groups" class="col-sm-2 control-label">部门</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input name="groups[]" type="text" class="form-control" id="groups" ng-model="User.profileData.groups[0].name" disabled>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="supervisor" class="col-sm-2 control-label">主管</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input name="supervisor" type="text" class="form-control" id="supervisor" ng-model="User.profileData.groups[0].supervisor[\'name\']" disabled>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="identity" class="col-sm-2 control-label">职称</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input name="identity" type="text" class="form-control" id="identity" ng-model="User.profileData.identity" disabled>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="qq" class="col-sm-2 control-label">qq</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input name="qq" type="text" class="form-control" id="qq" ng-model="User.profileData.qq">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="phone" class="col-sm-2 control-label">手机</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input name="phone" type="text" class="form-control" id="phone" ng-model="User.profileData.phone">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="domicile" class="col-sm-2 control-label">户籍</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input name="domicile" type="text" class="form-control" id="domicile" ng-model="User.profileData.domicile">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="graduated_school" class="col-sm-2 control-label">毕业院校</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input name="graduated_school" type="text" class="form-control" id="graduated_school" ng-model="User.profileData.graduated_school">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="address" class="col-sm-2 control-label">居住地址</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input name="address" type="text" class="form-control" id="address" ng-model="User.profileData.address">\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="sex" class="col-sm-2 control-label">性别</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <label class="radio-inline">\n' +
    '                    <input type="radio" name="sex" value="男" id="inlineRadio1" ng-model="User.profileData.sex"> 男\n' +
    '                </label>\n' +
    '                <label class="radio-inline">\n' +
    '                    <input type="radio" name="sex" value="女" id="inlineRadio2" ng-model="User.profileData.sex"> 女\n' +
    '                </label>\n' +
    '                <label class="radio-inline">\n' +
    '                    <input type="radio" name="sex" value="保密" id="inlineRadio3" ng-model="User.profileData.sex"> 保密\n' +
    '                </label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="remark" class="col-sm-2 control-label">remark</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <textarea name="remark" id="remark" ng-model="User.profileData.remark" class="form-control" rows="3"></textarea>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <label for="created_at" class="col-sm-2 control-label">入职时间</label>\n' +
    '            <div class="col-sm-10">\n' +
    '                <input name="created_at" type="text" class="form-control" id="phone" ng-model="User.profileData.created_at" disabled>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="form-group">\n' +
    '            <div class="col-sm-offset-2 col-sm-10">\n' +
    '                <button type="submit" class="btn btn-default" ng-disabled="userProfileUpdate.$invalid">提交修改</button>\n' +
    '                <a ui-sref="user" class="btn btn-default" role="button">返回</a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </form>\n' +
    '    <div ng-if="User.profileData.updateStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '        <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '        <strong>修改成功!</strong>\n' +
    '    </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/user/test.html',
    '<section ng-controller="DemoCtrl">\n' +
    '    <p><strong>Page:</strong> [: tableParams.page() :]\n' +
    '    <p><strong>Count per page:</strong> [: tableParams.count() :]\n' +
    '\n' +
    '    <p>Filter: <input class="form-control" type="text" ng-model="filter.$" /></p>\n' +
    '\n' +
    '    <table ng-table="tableParams" show-filter="true" class="table">\n' +
    '        <tr ng-repeat="user in $data" ng-class="{ \'emphasis\': user.money > 500 }">\n' +
    '            <td width="30" style="text-align: left" header="\'ng-table/headers/checkbox.html\'">\n' +
    '                <input type="checkbox" ng-model="checkboxes.items[user.organizationId]" />\n' +
    '            </td>\n' +
    '            <td data-title="\'编号\'"  sortable="\'organizationId\'">\n' +
    '                [: user.organizationId :]\n' +
    '            </td>\n' +
    '            <td  data-title="\'名称\'" sortable="\'name\'">\n' +
    '                [: user.name :]\n' +
    '            </td>\n' +
    '        </tr>\n' +
    '    </table>\n' +
    '    <script type="text/ng-template" id="ng-table/headers/checkbox.html">\n' +
    '        <input type="checkbox" ng-model="checkboxes.checked" id="select_all" name="filter-checkbox" value="" />\n' +
    '    </script>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/mall/mall/add.html',
    '<section class="mt20">\n' +
    '    <!--新增订单状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增店铺</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddMall()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">店铺名称</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="mallInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="website" class="col-md-3 control-label">网址</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="website" id="website" autofocus ng-model="mallInfo.website">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="username" class="col-md-3 control-label">用户名</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="username" id="username" autofocus ng-model="mallInfo.username">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="password" class="col-md-3 control-label">密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="password" id="password" autofocus ng-model="mallInfo.password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="mall_status_id" class="col-md-3 control-label">店铺状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select class="form-control" name="mall_status_id" id="mall_status_id" ng-model="mallInfo.mall_status_id" ng-options="mallStatuses.id as mallStatuses.name for mallStatuses in mallService.mallStatuses | orderBy:[\'name\']">\n' +
    '                                        <option value="">请选择店铺状态</option>\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="user_id" class="col-md-3 control-label">负责人</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select class="form-control" name="user_id" id="user_id" ng-model="mallInfo.user_id" ng-options="user.id as user.name for user in mallService.usersOptional | orderBy:[\'groupId\', \'name\']">\n' +
    '                                        <option value="">请选择负责人</option>\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="remark" class="col-md-3 control-label">备注</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="remark" id="remark" autofocus ng-model="mallInfo.remark">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="mallInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="mallInfo.addMall" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增店铺成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/mall/mall/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改订单状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改订单状态</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditMall()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="orderStatusName" class="col-md-3 control-label">订单状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="mallInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="sort" class="col-md-3 control-label">颜色标识</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="sort" id="sort" autofocus ng-model="mallInfo.sort">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="mallInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="mallInfo.editMall" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改订单状态成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/mall/mall/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="MallIndex.filterValue" ng-change="MallIndex.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <div class="btn-group pull-right">\n' +
    '                <button class="btn btn-default" ng-if="MallIndex.isEditing" ng-click="MallIndex.cancelChanges()">\n' +
    '                    <span class="glyphicon glyphicon-remove"></span>\n' +
    '                </button>\n' +
    '                <button class="btn btn-primary" ng-if="!MallIndex.isEditing" ng-click="MallIndex.isEditing = true">\n' +
    '                    <span class="glyphicon glyphicon-pencil"></span>\n' +
    '                </button>\n' +
    '                <button class="btn btn-primary" ng-if="MallIndex.isEditing" ng-disabled="!MallIndex.hasChanges() || MallIndex.tableTracker.$invalid" ng-click="MallIndex.saveChanges()">\n' +
    '                    <span class="glyphicon glyphicon-ok"></span>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="MallIndex.tableParams" class="table table-bordered table-hover table-condensed editable-table"\n' +
    '                            ng-form="MallIndex.tableForm" disable-filter="MallIndex.isAdding" nbg-tracked-table="MallIndex.tableTracker">\n' +
    '                        <tr ng-repeat="row in $data" ng-form="rowForm" nbg-tracked-table-row="row">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'" filter="{id: \'text\'}">[: row.id :]</td>\n' +
    '                            <td data-title="\'店铺名称\'" filter="{name: \'text\'}">[: row.name :]</td>\n' +
    '                            <td data-title="\'网址\'" filter="{website: \'text\'}">[: row.website :]</td>\n' +
    '                            <td data-title="\'用户名\'" filter="{username: \'text\'}">[: row.username :]</td>\n' +
    '                            <td data-title="\'密码\'" filter="{password: \'text\'}">[: row.password :]</td>\n' +
    '                            <td title="\'店铺状态\'" filter="{mall_status_id: \'select\'}" filter-data="MallIndex.mallService.arrmallStatuses" ng-switch="MallIndex.isEditing" ng-class="mall_status_id.$dirty ? \'bg-warning\' : \'\'" ng-form="mall_status_id" nbg-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.mall_status_id | zwbIdToName:MallIndex.mallService.mallStatuses :]</span>\n' +
    '                                <div class="controls" ng-class="mall_status_id.$invalid && mall_status_id.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <select class="editable-input form-control input-sm" name="mall_status_id" ng-model="row.mall_status_id"\n' +
    '                                            ng-options="mallStatuses.id as mallStatuses.name for mallStatuses in MallIndex.mallService.arrmallStatuses"></select>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                            <td title="\'负责人\'" filter="{user_id: \'select\'}" filter-data="MallIndex.mallService.arrusersOptional" ng-switch="MallIndex.isEditing" ng-class="user_id.$dirty ? \'bg-warning\' : \'\'" ng-form="user_id" nbg-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.user_id | zwbIdToName:MallIndex.mallService.usersOptional :]</span>\n' +
    '                                <div class="controls" ng-class="user_id.$invalid && user_id.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <select class="editable-input form-control input-sm" name="user_id" ng-model="row.user_id"\n' +
    '                                            ng-options="user.id as user.name for user in MallIndex.mallService.arrusersOptional"></select>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                            <td title="\'备注\'" filter="{remark: \'text\'}" ng-switch="MallIndex.isEditing" ng-class="remark.$dirty ? \'bg-warning\' : \'\'" ng-form="remark" demo-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.remark :]</span>\n' +
    '                                <div class="controls" ng-class="remark.$invalid && remark.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <input type="text" name="remark" ng-model="row.remark" class="editable-input form-control input-sm" required />\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '                <div class="box-body">\n' +
    '                    <div class="floatLeft">\n' +
    '                        <ul class="pagination-sm no-margin" previous-text="上一页" next-text="下一页" uib-pagination ng-change="MallIndex.fnPageChanged()" items-per-page="MallIndex.searchRemoteInfo.itemsPerPage" num-pages="MallIndex.searchRemoteInfo.numPages" total-items="MallIndex.searchRemoteInfo.totalItems" ng-model="MallIndex.searchRemoteInfo.currentPage" max-size="MallIndex.searchRemoteInfo.maxSize" boundary-link-numbers="true"></ul>\n' +
    '                    </div>\n' +
    '                    <div class="floatRight">\n' +
    '                        <div class="btn-group">\n' +
    '                            <label class="btn btn-default" ng-click="MallIndex.fnSetItemsPerPage(10)" ng-model="itemsPerPage" uib-btn-radio="10">10</label>\n' +
    '                            <label class="btn btn-default" ng-click="MallIndex.fnSetItemsPerPage(20)" ng-model="itemsPerPage" uib-btn-radio="20">20</label>\n' +
    '                            <label class="btn btn-default" ng-click="MallIndex.fnSetItemsPerPage(50)" ng-model="itemsPerPage" uib-btn-radio="50">50</label>\n' +
    '                            <label class="btn btn-default" ng-click="MallIndex.fnSetItemsPerPage(100)" ng-model="itemsPerPage" uib-btn-radio="100">100</label>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/mall/mallPayType/add.html',
    '<section class="mt20">\n' +
    '    <!--新增订单状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增付款方式</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddMallPayType()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">付款方式</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="mallPayTypeInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="sort" class="col-md-3 control-label">排序</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="sort" id="sort" autofocus ng-model="mallPayTypeInfo.sort">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="mallPayTypeInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="mallPayTypeInfo.addMallPayType" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增付款方式成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/mall/mallPayType/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改订单状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改订单状态</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditMallPayType()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="orderStatusName" class="col-md-3 control-label">订单状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="mallPayTypeInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="sort" class="col-md-3 control-label">颜色标识</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="sort" id="sort" autofocus ng-model="mallPayTypeInfo.sort">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="mallPayTypeInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="mallPayTypeInfo.editMallPayType" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改订单状态成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/mall/mallPayType/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="mallPayType.filterValue" ng-change="mallPayType.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="mall.mallPayType.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="mallPayType.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'订单状态\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'排序\'">[: row.sort :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="mall.mallPayType.edit({mallPayTypeId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="mallPayType.fnDestoryPost(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="mallPayType.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="mallPayType.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/mall/mallStatus/add.html',
    '<section class="mt20">\n' +
    '    <!--新增网站状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增店铺状态</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddMallStatus()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">店铺状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="mallStatusInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="sort" class="col-md-3 control-label">排序</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="sort" id="sort" autofocus ng-model="mallStatusInfo.sort">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="mallStatusInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="mallStatusInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增店铺状态成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/mall/mallStatus/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改店铺状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改店铺状态</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditMallStatus()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">店铺状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="mallStatusInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="sort" class="col-md-3 control-label">排序</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="sort" id="sort" autofocus ng-model="mallStatusInfo.sort">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="mallStatusInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="mallStatusInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改店铺状态成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/mall/mallStatus/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="mallStatuses.filterValue" ng-change="mallStatuses.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="mall.mallStatus.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="mallStatuses.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'店铺状态\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'排序\'">[: row.sort :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="mall.mallStatus.edit({mallStatusId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="mallStatuses.fnDestoryPost(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="mallStatuses.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="mallStatuses.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/manager/group/addGroup.html',
    '<!--添加部门-->\n' +
    '<div class="main animsition">\n' +
    '    <div class="container-fluid">\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">添加部门</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddGroup(groupInfo)">\n' +
    '                            <input type="hidden" name="_token" value="{{ csrf_token() }}">\n' +
    '                            <input type="hidden" name="cove_image"/>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">部门名称</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="groupInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="tag" class="col-md-3 control-label">部门标签</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="label" id="tag" autofocus ng-model="groupInfo.label">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="supervisor" class="col-md-3 control-label">指定主管</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select  class="form-control" ng-model="groupInfo.supervisor_id" ng-options="user.id as user.name for user in allUsers"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="tag" class="col-md-3 control-label">部门概述</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <textarea name="description" class="form-control" rows="3" ng-model="groupInfo.description"></textarea>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="form-group">\n' +
    '                                    <label class="control-label col-md-3 all-check">\n' +
    '                                        权限列表：\n' +
    '                                    </label>\n' +
    '                                    <div class="col-md-6">\n' +
    '                                        <div ng-repeat="permission in allPermissions" class="col-md-4 col-sm-6">\n' +
    '                                            <div class="checkbox icheck">\n' +
    '                                                <label>\n' +
    '                                                    <input type="checkbox" ng-checked="isChecked(permission.id)" ng-click="updateSelection($event,permission.id)">&nbsp;[: permission.label :]\n' +
    '                                                </label>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                     </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="groupInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="groupInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>添加部门成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/manager/group/editGroup.html',
    '<!--添加部门-->\n' +
    '<div class="main animsition">\n' +
    '    <div class="container-fluid">\n' +
    '        <div class="row">\n' +
    '            <div class="">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">编辑部门</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditGroup(groupInfo)">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">部门名称</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="groupInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="supervisor" class="col-md-3 control-label">指定主管</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select  class="form-control" ng-model="groupInfo.supervisor_id" ng-options="user.id as user.name for user in allUsers"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="tag" class="col-md-3 control-label">部门标签</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="label" id="tag" autofocus ng-model="groupInfo.label">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="tag" class="col-md-3 control-label">部门概述</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <textarea name="description" class="form-control" rows="3" ng-model="groupInfo.description"></textarea>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="form-group">\n' +
    '                                    <label class="control-label col-md-3 all-check">\n' +
    '                                        权限列表：\n' +
    '                                    </label>\n' +
    '                                    <div class="col-md-6">\n' +
    '                                        <div ng-repeat="permission in allPermissions" class="col-md-4 col-sm-6">\n' +
    '                                            <div class="checkbox icheck">\n' +
    '                                                <label>\n' +
    '                                                    <input type="checkbox" ng-checked="isChecked(permission.id)" ng-click="updateSelection($event,permission.id)">&nbsp;[: permission.label :]\n' +
    '                                                </label>\n' +
    '                                            </div>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        保存\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="groupInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="groupInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改部门成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/manager/group/groupIndex.html',
    '<!--group index-->\n' +
    '<section>\n' +
    '    <div class="row page-title-row" style="margin:5px;">\n' +
    '        <div class="col-md-6">\n' +
    '        </div>\n' +
    '        <div class="col-md-6 text-right">\n' +
    '            <a ui-sref="manager.group.addGroup" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 增加部门\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="row page-title-row" style="margin:5px;">\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body">\n' +
    '                    <table class="table table-bordered table-hover">\n' +
    '                        <thead>\n' +
    '                        <tr>\n' +
    '                            <th class="hidden-sm">id</th>\n' +
    '                            <th class="hidden-md">部门名称</th>\n' +
    '                            <th class="hidden-sm">部门标签</th>\n' +
    '                            <th class="hidden-md">部门概述</th>\n' +
    '                            <th class="hidden-sm">部门创建日期</th>\n' +
    '                            <th class="hidden-sm">部门修改日期</th>\n' +
    '                            <th data-sortable="false">操作</th>\n' +
    '                        </tr>\n' +
    '                        </thead>\n' +
    '                        <tbody>\n' +
    '                            <tr ng-repeat="group in Manager.groupsInfo.data">\n' +
    '                                <td class="hidden-sm">[: group.id :]</td>\n' +
    '                                <td class="hidden-md">[: group.name :]</td>\n' +
    '                                <td class="hidden-sm">[: group.label :]</td>\n' +
    '                                <td class="hidden-md">[: group.description :]</td>\n' +
    '                                <td class="hidden-sm">[: group.created_at :]</td>\n' +
    '                                <td class="hidden-sm">[: group.updated_at :]</td>\n' +
    '                               <td>\n' +
    '                                    <a style="margin:3px;" ui-sref="manager.group.editGroup({groupId:group.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="$parent.fnDestroyGroup(group.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </td>\n' +
    '                            </tr>\n' +
    '                        </tbody>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/manager/permission/addPermission.html',
    '<!--添加权限-->\n' +
    '<div class="main animsition">\n' +
    '    <div class="container-fluid">\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">添加权限</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddPermission(permissionInfo)">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">权限名称</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="permissionInfo.name">\n' +
    '                                </div>\n' +
    '                                <div class="col-md-4">\n' +
    '                                    <div class="alert alert-warning input-info" role="alert">\n' +
    '                                        <strong>格式如：</strong>user.getProfile\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="tag" class="col-md-3 control-label">权限标签</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="label" id="tag" autofocus ng-model="permissionInfo.label">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="tag" class="col-md-3 control-label">权限概述</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <textarea name="description" class="form-control" rows="3" ng-model="permissionInfo.description"></textarea>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="permissionInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="permissionInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>添加`[: permissionInfo.name :]`权限成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/manager/permission/editPermission.html',
    '<!--修改权限-->\n' +
    '<div class="main animsition">\n' +
    '    <div class="container-fluid">\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">编辑权限</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditPermission()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">权限名称</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="permissionInfo.name">\n' +
    '                                </div>\n' +
    '                                <div class="col-md-4">\n' +
    '                                    <div class="alert alert-warning input-info" role="alert">\n' +
    '                                        <strong>格式如：</strong>user.getProfile\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="tag" class="col-md-3 control-label">权限标签</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="label" id="tag" autofocus ng-model="permissionInfo.label">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="tag" class="col-md-3 control-label">权限概述</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <textarea name="description" class="form-control" rows="3" ng-model="permissionInfo.description"></textarea>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="permissionInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="permissionInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改权限成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/manager/permission/permissionIndex.html',
    '<!--所有权限信息-->\n' +
    '<section>\n' +
    '    <div class="row page-title-row" style="margin:5px;">\n' +
    '        <div class="col-md-6">\n' +
    '        </div>\n' +
    '        <div class="col-md-6 text-right">\n' +
    '            <a ui-sref="manager.permission.addPermission" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 添加权限\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="row page-title-row" style="margin:5px;">\n' +
    '        <div class="col-md-6">\n' +
    '            <div class="dataTables_length" id="tags-table_length">\n' +
    '                <label>显示\n' +
    '                    <select name="tags-table_length" class="form-control input-sm">\n' +
    '                        <option value="10">10</option>\n' +
    '                        <option value="25">25</option>\n' +
    '                        <option value="50">50</option>\n' +
    '                        <option value="100">100</option>\n' +
    '                    </select> 项结果</label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-md-6 text-right">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body">\n' +
    '                    <table class="table table-bordered table-hover">\n' +
    '                        <thead>\n' +
    '                        <tr>\n' +
    '                            <th class="hidden-sm">id</th>\n' +
    '                            <th class="hidden-md">权限名称</th>\n' +
    '                            <th class="hidden-sm">权限标签</th>\n' +
    '                            <th class="hidden-md">权限概述</th>\n' +
    '                            <th class="hidden-md">权限级别</th>\n' +
    '                            <th class="hidden-sm">权限创建日期</th>\n' +
    '                            <th class="hidden-sm">权限修改日期</th>\n' +
    '                            <th data-sortable="false">操作</th>\n' +
    '                        </tr>\n' +
    '                        </thead>\n' +
    '                        <tbody>\n' +
    '                        <tr ng-repeat="permission in Manager.permissionsInfo.data">\n' +
    '                            <td class="hidden-sm">[: permission.id :]</td>\n' +
    '                            <td class="hidden-md">[: permission.name :]</td>\n' +
    '                            <td class="hidden-sm">[: permission.label :]</td>\n' +
    '                            <td class="hidden-md">[: permission.description :]</td>\n' +
    '                            <td class="hidden-md">[: permission.cid :]</td>\n' +
    '                            <td class="hidden-sm">[: permission.created_at :]</td>\n' +
    '                            <td class="hidden-sm">[: permission.updated_at :]</td>\n' +
    '                            <td>\n' +
    '                                <a style="margin:3px;" ui-sref="manager.permission.editPermission({permissionId:permission.id})" class="X-Small btn-xs text-success ">\n' +
    '                                    <i class="fa fa-edit"></i> 编辑\n' +
    '                                </a>\n' +
    '                                <a style="margin:3px;" ng-click="$parent.fnDestroyPermission(permission.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                    <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                        </tbody>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/manager/staff/addStaff.html',
    '<!--添加员工-->\n' +
    '<div class="main animsition">\n' +
    '    <div class="container-fluid">\n' +
    '\n' +
    '        <div class="row">\n' +
    '            <div class="">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">添加员工</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddStaff(staffInfo)">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">员工名字</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="staffInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="email" class="col-md-3 control-label">员工邮箱</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="email" id="email" autofocus ng-model="staffInfo.email">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="password" class="col-md-3 control-label">员工密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="password" class="form-control" name="password" id="password" autofocus ng-model="staffInfo.password">\n' +
    '                                </div>\n' +
    '                                <div ng-if="staffInfo.password" class="col-sm-5 col-sm-offset-3">\n' +
    '                                    <div class="alert alert-info input-info" role="alert">\n' +
    '                                        <strong>提示：</strong> <span ng-bind="staffInfo.password"></span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="identity" class="col-md-3 control-label">员工岗位</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="identity" id="identity" autofocus ng-model="staffInfo.identity">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="supervisor" class="col-md-3 control-label">部门</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select  class="form-control" ng-model="staffInfo.groupId" ng-options="group.id as group.name for group in allGroups"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label class="control-label col-md-3 all-check">\n' +
    '                                    权限列表：\n' +
    '                                </label>\n' +
    '                                <div class="col-md-6">\n' +
    '                                    <div ng-repeat="permission in allPermissions" class="col-md-4 col-sm-6">\n' +
    '                                        <div class="checkbox icheck">\n' +
    '                                            <label>\n' +
    '                                                <input type="checkbox" ng-checked="isChecked(permission.id)" ng-click="updateSelection($event,permission.id)">&nbsp;[: permission.label :]\n' +
    '                                            </label>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="staffInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="staffInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>添加员工成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/manager/staff/editStaff.html',
    '<!--修改员工信息-->\n' +
    '<div class="main animsition">\n' +
    '    <div class="container-fluid">\n' +
    '        <div class="row">\n' +
    '            <div class="">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改员工信息</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditStaff(staffInfo)">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">员工名字</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="staffInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="email" class="col-md-3 control-label">员工邮箱</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="email" id="email" autofocus ng-model="staffInfo.email">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="password" class="col-md-3 control-label">员工密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="password" class="form-control" name="password" id="password" autofocus ng-model="staffInfo.password">\n' +
    '                                </div>\n' +
    '                                <div class="col-sm-5 col-sm-offset-3">\n' +
    '                                    <div class="alert alert-info input-info" role="alert">\n' +
    '                                        <strong>提示：</strong> 为空则不修改密码。 <span ng-bind="staffInfo.password"></span>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="identity" class="col-md-3 control-label">员工岗位</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="identity" id="identity" autofocus ng-model="staffInfo.identity">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="supervisor" class="col-md-3 control-label">部门</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select  class="form-control" ng-change="fnChangeGroup(staffInfo.groupId)" ng-model="staffInfo.groupId" ng-options="group.id as group.name for group in allGroups"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label class="control-label col-md-3 all-check">\n' +
    '                                    权限列表：\n' +
    '                                </label>\n' +
    '                                <div class="col-md-6">\n' +
    '                                    <div ng-repeat="permission in allPermissions" class="col-md-4 col-sm-6">\n' +
    '                                        <div class="checkbox icheck">\n' +
    '                                            <label>\n' +
    '                                                <input type="checkbox" ng-checked="isChecked(permission.id)" ng-click="updateSelection($event,permission.id)">&nbsp;[: permission.label :]\n' +
    '                                            </label>\n' +
    '                                        </div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-if="staffInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="staffInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/manager/staff/staffIndex.html',
    '<!--所有员工信息-->\n' +
    '<section>\n' +
    '    <div class="row page-title-row" style="margin:5px;">\n' +
    '        <div class="col-md-6">\n' +
    '        </div>\n' +
    '        <div class="col-md-6 text-right">\n' +
    '            <a ui-sref="manager.staff.addStaff" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 增加用户\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="row page-title-row" style="margin:5px;">\n' +
    '        <div class="col-md-6">\n' +
    '            <div class="dataTables_length" id="tags-table_length">\n' +
    '                <label>共有[: staffs.tableParams.data.length :]项结果</label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-md-6 text-right">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter">\n' +
    '                <label>搜索:<input ng-model="filterValue" type="search" class="form-control input-sm"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body">\n' +
    '                    <table  ng-table="staffs.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td class="hidden-xs" data-title="\'id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'员工\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'岗位\'" sortable="\'identity\'">[: row.identity :]</td>\n' +
    '                            <td data-title="\'部门\'">[: row.groups[0].name :]</td>\n' +
    '                            <td class="hidden-xs" data-title="\'住宅地址\'">[: row.address :]</td>\n' +
    '                            <td class="hidden-xs" data-title="\'手机\'">[: row.phone :]</td>\n' +
    '                            <td class="hidden-xs" data-title="\'入职日期\'" sortable="\'created_at\'">[: row.created_at :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="manager.staff.editStaff({staffId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="staffs.fnDestroyStaff(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>\n' +
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/category/add.html',
    '<section class="mt20">\n' +
    '    <!--新增产品分类-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增产品分类</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddOrderCategory()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="orderCategoryName" class="col-md-3 control-label">分类名称</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="orderCategoryName" id="orderCategoryName" autofocus ng-model="orderCategoryInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="orderCategoryEnName" class="col-md-3 control-label">英文名</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="orderCategoryEnName" id="orderCategoryEnName" autofocus ng-model="orderCategoryInfo.english_name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="weight" class="col-md-3 control-label">重量</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="weight" id="weight" autofocus ng-model="orderCategoryInfo.weight">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="price" class="col-md-3 control-label">价格</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="price" id="price" autofocus ng-model="orderCategoryInfo.price">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="is_default" class="control-label col-md-3">设为默认产品分类</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <label class="radio-inline">\n' +
    '                                        <input type="radio" name="is_default" ng-value="1" ng-model="orderCategoryInfo.is_default">是\n' +
    '                                    </label>\n' +
    '                                    <label class="radio-inline">\n' +
    '                                        <input type="radio" name="is_default" ng-value="0" ng-model="orderCategoryInfo.is_default"> 否\n' +
    '                                    </label>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="orderCategoryInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="orderCategoryInfo.addOrderCategory" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增产品分类成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/category/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改产品分类-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改产品分类</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditOrderCategory()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="orderCategoryName" class="col-md-3 control-label">分类名称</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="orderCategoryName" id="orderCategoryName" autofocus ng-model="orderCategoryInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="orderCategoryEnName" class="col-md-3 control-label">英文名</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="orderCategoryEnName" id="orderCategoryEnName" autofocus ng-model="orderCategoryInfo.english_name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="weight" class="col-md-3 control-label">重量</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="weight" id="weight" autofocus ng-model="orderCategoryInfo.weight">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="price" class="col-md-3 control-label">价格</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="price" id="price" autofocus ng-model="orderCategoryInfo.price">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="is_default" class="control-label col-md-3">设为默认产品分类</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <label class="radio-inline">\n' +
    '                                        <input type="radio" name="is_default" ng-value="1" ng-model="orderCategoryInfo.is_default">是\n' +
    '                                    </label>\n' +
    '                                    <label class="radio-inline">\n' +
    '                                        <input type="radio" name="is_default" ng-value="0" ng-model="orderCategoryInfo.is_default"> 否\n' +
    '                                    </label>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="orderCategoryInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="orderCategoryInfo.editOrderCategory" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改产品分类成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/category/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="orderCategory.filterValue" ng-change="orderCategory.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="order.orderCategory.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="orderCategory.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'产品分类名\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'英文名\'" sortable="\'english_name\'">[: row.english_name :]</td>\n' +
    '                            <td data-title="\'重量\'">[: row.weight :]</td>\n' +
    '                            <td data-title="\'价格\'">[: row.price :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="order.orderCategory.edit({orderCategoryId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="orderCategory.fnDestoryCategory(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="orderCategory.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="orderCategory.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/customerService/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="serviceDepartment.filterValue" ng-change="serviceDepartment.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <div class="btn-group pull-right">\n' +
    '                <button class="btn btn-default" ng-if="serviceDepartment.isEditing" ng-click="serviceDepartment.cancelChanges()">\n' +
    '                    <span class="glyphicon glyphicon-remove"></span>\n' +
    '                </button>\n' +
    '                <button class="btn btn-primary" ng-if="!serviceDepartment.isEditing" ng-click="serviceDepartment.isEditing = true">\n' +
    '                    <span class="glyphicon glyphicon-pencil"></span>\n' +
    '                </button>\n' +
    '                <button class="btn btn-primary" ng-if="serviceDepartment.isEditing" ng-disabled="!serviceDepartment.hasChanges() || serviceDepartment.tableTracker.$invalid" ng-click="serviceDepartment.saveChanges()">\n' +
    '                    <span class="glyphicon glyphicon-ok"></span>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="serviceDepartment.tableParams" class="table table-bordered table-hover table-condensed editable-table"\n' +
    '                            ng-form="serviceDepartment.tableForm" disable-filter="serviceDepartment.isAdding" nbg-tracked-table="serviceDepartment.tableTracker">\n' +
    '                        <tr ng-repeat="row in $data" ng-form="rowForm" nbg-tracked-table-row="row">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'" filter="{id: \'text\'}">[: row.id :]</td>\n' +
    '                            <td title="\'状态\'" filter="{od_status_id: \'select\'}" filter-data="serviceDepartment.CustomerSer.arrOrderStatuses" ng-switch="serviceDepartment.isEditing" ng-class="od_status_id.$dirty ? \'bg-warning\' : \'\'" ng-form="od_status_id" nbg-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.od_status_id | zwbIdToName:serviceDepartment.CustomerSer.orderStatuses :]</span>\n' +
    '                                <div class="controls" ng-class="od_status_id.$invalid && od_status_id.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <select class="editable-input form-control input-sm" name="od_status_id" ng-model="row.od_status_id"\n' +
    '                                            ng-options="orderStatus.id as orderStatus.name for orderStatus in serviceDepartment.CustomerSer.orderStatuses"></select>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                            <td title="\'订单状态\'" filter="{od_pay_after_status_id: \'select\'}" filter-data="serviceDepartment.CustomerSer.arrOrderPayAfterStatuses" ng-switch="serviceDepartment.isEditing" ng-class="od_pay_after_status_id.$dirty ? \'bg-warning\' : \'\'" ng-form="od_pay_after_status_id" nbg-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.od_pay_after_status_id | zwbIdToName:serviceDepartment.CustomerSer.payAfterStatuses :]</span>\n' +
    '                                <div class="controls" ng-class="od_pay_after_status_id.$invalid && od_status_id.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <select class="editable-input form-control input-sm" name="od_pay_after_status_id" ng-model="row.od_pay_after_status_id"\n' +
    '                                            ng-options="payAfterStatus.id as payAfterStatus.name for payAfterStatus in serviceDepartment.CustomerSer.payAfterStatuses"></select>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                            <td data-title="\'下单日期\'" filter="{date_purchased: \'text\'}">[: row.date_purchased :]</td>\n' +
    '                            <td data-title="\'整单日期\'" filter="{order_pay_after_date: \'text\'}">[: row.order_pay_after_date :]</td>\n' +
    '                            <td data-title="\'网站\'" filter="{website_name: \'text\'}">[: row.website_name :]</td>\n' +
    '                            <td data-title="\'订单号\'" filter="{website_order_id: \'text\'}">[: row.website_order_id :]</td>\n' +
    '                            <td data-title="\'客户名字\'" filter="{name: \'text\'}">[: row.name :]</td>\n' +
    '                            <td data-title="\'客户邮箱\'" filter="{email: \'text\'}">[: row.email :]</td>\n' +
    '                            <td data-title="\'金额\'" filter="{order_total: \'text\'}">[: row.order_total | currency:row.order_currency :]</td>\n' +
    '                            <td title="\'备注\'" filter="{remark: \'text\'}" ng-switch="serviceDepartment.isEditing" ng-class="name.$dirty ? \'bg-warning\' : \'\'" ng-form="remark" demo-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.remark :]</span>\n' +
    '                                <div class="controls" ng-class="remark.$invalid && remark.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <input type="text" name="remark" ng-model="row.remark" class="editable-input form-control input-sm" required />\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '                <div class="box-body">\n' +
    '                    <div class="floatLeft">\n' +
    '                        <ul class="pagination-sm no-margin" previous-text="上一页" next-text="下一页" uib-pagination ng-change="serviceDepartment.fnPageChanged()" items-per-page="serviceDepartment.searchRemoteInfo.itemsPerPage" num-pages="serviceDepartment.searchRemoteInfo.numPages" total-items="serviceDepartment.searchRemoteInfo.totalItems" ng-model="serviceDepartment.searchRemoteInfo.currentPage" max-size="serviceDepartment.searchRemoteInfo.maxSize" boundary-link-numbers="true"></ul>\n' +
    '                    </div>\n' +
    '                    <div class="floatRight">\n' +
    '                        <div class="btn-group">\n' +
    '                            <label class="btn btn-default" ng-click="serviceDepartment.fnSetItemsPerPage(10)" ng-model="itemsPerPage" uib-btn-radio="10">10</label>\n' +
    '                            <label class="btn btn-default" ng-click="serviceDepartment.fnSetItemsPerPage(20)" ng-model="itemsPerPage" uib-btn-radio="20">20</label>\n' +
    '                            <label class="btn btn-default" ng-click="serviceDepartment.fnSetItemsPerPage(50)" ng-model="itemsPerPage" uib-btn-radio="50">50</label>\n' +
    '                            <label class="btn btn-default" ng-click="serviceDepartment.fnSetItemsPerPage(100)" ng-model="itemsPerPage" uib-btn-radio="100">100</label>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/deliveryDepartment/index.html',
    '<section class="mt20">\n' +
    '    <div class="row">\n' +
    '        <a class="btn btn-info" ng-click="deliveryDepartment.fnExportDHL()">导出DHL</a>\n' +
    '    </div>\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="deliveryDepartment.filterValue" ng-change="deliveryDepartment.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <div class="btn-group pull-right">\n' +
    '                <button class="btn btn-default" ng-if="deliveryDepartment.isEditing" ng-click="deliveryDepartment.cancelChanges()">\n' +
    '                    <span class="glyphicon glyphicon-remove"></span>\n' +
    '                </button>\n' +
    '                <button class="btn btn-primary" ng-if="!deliveryDepartment.isEditing" ng-click="deliveryDepartment.isEditing = true">\n' +
    '                    <span class="glyphicon glyphicon-pencil"></span>\n' +
    '                </button>\n' +
    '                <button class="btn btn-primary" ng-if="deliveryDepartment.isEditing" ng-disabled="!deliveryDepartment.hasChanges() || deliveryDepartment.tableTracker.$invalid" ng-click="deliveryDepartment.saveChanges()">\n' +
    '                    <span class="glyphicon glyphicon-ok"></span>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="deliveryDepartment.tableParams" class="table table-bordered table-hover table-condensed editable-table"\n' +
    '                            ng-form="deliveryDepartment.tableForm" disable-filter="deliveryDepartment.isAdding" nbg-tracked-table="deliveryDepartment.tableTracker">\n' +
    '                        <tr ng-repeat="row in $data" ng-form="rowForm" nbg-tracked-table-row="row">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'" filter="{id: \'text\'}">[: row.id :]</td>\n' +
    '                            <td title="\'状态\'" filter="{od_status_id: \'select\'}" filter-data="deliveryDepartment.DeliverySer.arrOrderStatuses" ng-switch="deliveryDepartment.isEditing" ng-class="od_status_id.$dirty ? \'bg-warning\' : \'\'" ng-form="od_status_id" nbg-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.od_status_id | zwbIdToName:deliveryDepartment.DeliverySer.orderStatuses :]</span>\n' +
    '                                <div class="controls" ng-class="od_status_id.$invalid && od_status_id.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <select class="editable-input form-control input-sm" name="od_status_id" ng-model="row.od_status_id"\n' +
    '                                            ng-options="orderStatus.id as orderStatus.name for orderStatus in deliveryDepartment.DeliverySer.orderStatuses"></select>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                            <td title="\'订单状态\'" filter="{od_pay_after_status_id: \'select\'}" filter-data="deliveryDepartment.DeliverySer.arrOrderPayAfterStatuses" ng-switch="deliveryDepartment.isEditing" ng-class="od_pay_after_status_id.$dirty ? \'bg-warning\' : \'\'" ng-form="od_pay_after_status_id" nbg-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.od_pay_after_status_id | zwbIdToName:deliveryDepartment.DeliverySer.payAfterStatuses :]</span>\n' +
    '                                <div class="controls" ng-class="od_pay_after_status_id.$invalid && od_pay_after_status_id.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <select class="editable-input form-control input-sm" name="od_pay_after_status_id" ng-model="row.od_pay_after_status_id"\n' +
    '                                            ng-options="payAfterStatus.id as payAfterStatus.name for payAfterStatus in deliveryDepartment.DeliverySer.payAfterStatuses"></select>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                            <td data-title="\'整单日期\'" filter="{order_pay_after_date: \'text\'}">[: row.order_pay_after_date :]</td>\n' +
    '                            <td data-title="\'订单号\'" filter="{website_order_id: \'text\'}">[: row.website_order_id :]</td>\n' +
    '                            <td data-title="\'客户名字\'" filter="{name: \'text\'}">[: row.name :]</td>\n' +
    '                            <td title="\'备注\'" filter="{remark: \'text\'}" ng-switch="deliveryDepartment.isEditing" ng-class="name.$dirty ? \'bg-warning\' : \'\'" ng-form="remark" demo-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.remark :]</span>\n' +
    '                                <div class="controls" ng-class="remark.$invalid && remark.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <input type="text" name="remark" ng-model="row.remark" class="editable-input form-control input-sm" required />\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                            <td style="min-width: 350px;"  filter="{brand_id: \'select\'}" filter-data="deliveryDepartment.DeliverySer.arrBrands" data-title="\'商品信息|发货分组(品牌查询)\'">\n' +
    '                                <div class="row" ng-repeat="product in row.order_products">\n' +
    '                                    <div class="col-md-4"><span>[: product.quantity :] x </span><img zwb-magnifying-glass class="order-small-image" ng-src="[: product.image_url :]" alt="[: product.product_name :]" title="[: product.product_name :]" /></div>\n' +
    '                                    <div class="col-md-4">[: product.attributes_id :]</div>\n' +
    '                                    <div class="col-md-4 form-inline"><div class="checkbox"><label><input type="checkbox" ng-disabled="!deliveryDepartment.isCheckedAbled && product.shipping_group_id == 0" ng-checked="deliveryDepartment.isShippingGroupChecked(product)" ng-click="deliveryDepartment.addProductsToShippingGroup(product)">[: product.shipping_group_id | zwbIdToName:deliveryDepartment.shippingGroups :]</label></div></div>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                            <td title="\'产品分类\'" filter="{od_category_id: \'select\'}" filter-data="deliveryDepartment.DeliverySer.arrOrderCategories" ng-switch="deliveryDepartment.isEditing" ng-class="od_category_id.$dirty ? \'bg-warning\' : \'\'" ng-form="od_category_id" nbg-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.od_category_id | zwbIdToName:deliveryDepartment.DeliverySer.orderCategories :]</span>\n' +
    '                                <div class="controls" ng-class="od_category_id.$invalid && od_category_id.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <select class="editable-input form-control input-sm" name="od_category_id" ng-model="row.od_category_id"\n' +
    '                                            ng-options="orderCategory.id as orderCategory.name for orderCategory in deliveryDepartment.DeliverySer.orderCategories"></select>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                            <td title="\'货运方式\'" filter="{express_id: \'select\'}" filter-data="deliveryDepartment.DeliverySer.arrExpresses" ng-switch="deliveryDepartment.isEditing" ng-class="express_id.$dirty ? \'bg-warning\' : \'\'" ng-form="express_id" nbg-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.express_id | zwbIdToName:deliveryDepartment.DeliverySer.expresses :]</span>\n' +
    '                                <div class="controls" ng-class="express_id.$invalid && express_id.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <select class="editable-input form-control input-sm" name="express_id" ng-model="row.express_id"\n' +
    '                                            ng-options="express.id as express.name for express in deliveryDepartment.DeliverySer.expresses"></select>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '                <div class="box-body">\n' +
    '                    <div class="floatLeft">\n' +
    '                        <ul class="pagination-sm no-margin" previous-text="上一页" next-text="下一页" uib-pagination ng-change="deliveryDepartment.fnPageChanged()" items-per-page="deliveryDepartment.searchRemoteInfo.itemsPerPage" num-pages="deliveryDepartment.searchRemoteInfo.numPages" total-items="deliveryDepartment.searchRemoteInfo.totalItems" ng-model="deliveryDepartment.searchRemoteInfo.currentPage" max-size="deliveryDepartment.searchRemoteInfo.maxSize" boundary-link-numbers="true"></ul>\n' +
    '                    </div>\n' +
    '                    <div class="floatRight">\n' +
    '                        <div class="btn-group">\n' +
    '                            <label class="btn btn-default" ng-click="deliveryDepartment.fnSetItemsPerPage(10)" ng-model="itemsPerPage" uib-btn-radio="10">10</label>\n' +
    '                            <label class="btn btn-default" ng-click="deliveryDepartment.fnSetItemsPerPage(20)" ng-model="itemsPerPage" uib-btn-radio="20">20</label>\n' +
    '                            <label class="btn btn-default" ng-click="deliveryDepartment.fnSetItemsPerPage(50)" ng-model="itemsPerPage" uib-btn-radio="50">50</label>\n' +
    '                            <label class="btn btn-default" ng-click="deliveryDepartment.fnSetItemsPerPage(100)" ng-model="itemsPerPage" uib-btn-radio="100">100</label>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="group-box">\n' +
    '        <h2>发货分组</h2>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-8">\n' +
    '                <label class="sr-only" for="shippingGroup">发货分组</label>\n' +
    '                <input type="text" class="form-control" id="shippingGroup" ng-model="deliveryDepartment.currentShippingGroup.name">\n' +
    '            </div>\n' +
    '            <div class="col-sm-4">\n' +
    '                <button class="btn btn-default btn-info" ng-click="deliveryDepartment.fnAddShippingGroup()"><i class="fa fa-plus-circle"></i>add</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-8">\n' +
    '                <label class="sr-only" for="selectShippingGroup">发货分组</label>\n' +
    '                <select name="shippingGroupSelect" class="form-control" ng-model="deliveryDepartment.shippingGroupSelect" ng-options="shippingGroup.name for shippingGroup in deliveryDepartment.shippingGroups"></select>\n' +
    '            </div>\n' +
    '            <div class="col-sm-4">\n' +
    '                <button class="btn btn-default btn-success" ng-click="deliveryDepartment.fnSelectShippingGroup()">select</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/express/add.html',
    '<section class="mt20">\n' +
    '    <!--新增货运方式-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增货运方式</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddExpress()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="expressName" class="col-md-3 control-label">货运方式</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="expressName" id="expressName" autofocus ng-model="expressInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="expressAbbreviation" class="col-md-3 control-label">简写</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="expressAbbreviation" id="express-abbreviation" autofocus ng-model="expressInfo.abbreviation">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="expressInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="expressInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增货运方式成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/express/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改货运方式-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改货运方式</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditExpress()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="expressName" class="col-md-3 control-label">货运方式</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="expressName" id="expressName" autofocus ng-model="expressInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="expressAbbreviation" class="col-md-3 control-label">简写</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="expressAbbreviation" id="order" autofocus ng-model="expressInfo.abbreviation">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="expressInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="expressInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改货运方式成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/express/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="express.filterValue" ng-change="express.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="order.express.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="express.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'货运方式\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'简写\'">[: row.abbreviation :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="order.express.edit({expressId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="express.fnDestoryExpress(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="express.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="express.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/expressCompany/add.html',
    '<section class="mt20">\n' +
    '    <!--新增快递发货公司-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增快递发货公司</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddExpressCompany()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="expressCompanyName" class="col-md-3 control-label">快递发货公司</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="expressCompanyName" id="expressCompanyName" autofocus ng-model="expressCompanyInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="expressCompanyAbbreviation" class="col-md-3 control-label">简写</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="expressCompanyAbbreviation" id="expressCompany-abbreviation" autofocus ng-model="expressCompanyInfo.abbreviation">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="expressCompanyInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="expressCompanyInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增快递发货公司成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/expressCompany/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改快递发货公司-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改快递发货公司</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditExpressCompany()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="expressCompanyName" class="col-md-3 control-label">快递发货公司</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="expressCompanyName" id="expressCompanyName" autofocus ng-model="expressCompanyInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="expressCompanyAbbreviation" class="col-md-3 control-label">简写</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="expressCompanyAbbreviation" id="order" autofocus ng-model="expressCompanyInfo.abbreviation">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="expressCompanyInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="expressCompanyInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改快递发货公司成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/expressCompany/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="expressCompany.filterValue" ng-change="expressCompany.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="order.expressCompany.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="expressCompany.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'快递发货公司\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'简写\'">[: row.abbreviation :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="order.expressCompany.edit({expressCompanyId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="expressCompany.fnDestoryExpress(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="expressCompany.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="expressCompany.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/orderDepartment/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div><a ui-sref="order.purchaseGroup.index">分组列表</a></div>\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box floatLeft">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="orderDepartment.filterValue" ng-change="orderDepartment.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <div class="btn-group pull-right">\n' +
    '                <button class="btn btn-default" ng-if="orderDepartment.isEditing" ng-click="orderDepartment.cancelChanges()">\n' +
    '                    <span class="glyphicon glyphicon-remove"></span>\n' +
    '                </button>\n' +
    '                <button class="btn btn-primary" ng-if="!orderDepartment.isEditing" ng-click="orderDepartment.isEditing = true">\n' +
    '                    <span class="glyphicon glyphicon-pencil"></span>\n' +
    '                </button>\n' +
    '                <button class="btn btn-primary" ng-if="orderDepartment.isEditing" ng-disabled="!orderDepartment.hasChanges() || orderDepartment.tableTracker.$invalid" ng-click="orderDepartment.saveChanges()">\n' +
    '                    <span class="glyphicon glyphicon-ok"></span>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="orderDepartment.tableParams" class="table table-bordered table-hover table-condensed editable-table"\n' +
    '                            ng-form="orderDepartment.tableForm" disable-filter="orderDepartment.isAdding" nbg-tracked-table="orderDepartment.tableTracker">\n' +
    '                        <tr ng-repeat="row in $data" ng-form="rowForm" nbg-tracked-table-row="row">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'" filter="{id: \'text\'}">[: row.id :]</td>\n' +
    '                            <td title="\'状态\'" filter="{od_status_id: \'select\'}" filter-data="orderDepartment.OrderDepartmentSer.arrOrderStatuses" ng-switch="orderDepartment.isEditing" ng-class="od_status_id.$dirty ? \'bg-warning\' : \'\'" ng-form="od_status_id" nbg-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.od_status_id | zwbIdToName:orderDepartment.OrderDepartmentSer.orderStatuses :]</span>\n' +
    '                                <div class="controls" ng-class="od_status_id.$invalid && od_status_id.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <select class="editable-input form-control input-sm" name="od_status_id" ng-model="row.od_status_id"\n' +
    '                                            ng-options="orderStatus.id as orderStatus.name for orderStatus in orderDepartment.OrderDepartmentSer.orderStatuses"></select>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                            <td title="\'订单状态\'" filter="{od_pay_after_status_id: \'select\'}" filter-data="orderDepartment.OrderDepartmentSer.arrOrderPayAfterStatuses" ng-switch="orderDepartment.isEditing" ng-class="od_pay_after_status_id.$dirty ? \'bg-warning\' : \'\'" ng-form="od_pay_after_status_id" nbg-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.od_pay_after_status_id | zwbIdToName:orderDepartment.OrderDepartmentSer.payAfterStatuses :]</span>\n' +
    '                                <div class="controls" ng-class="od_pay_after_status_id.$invalid && od_status_id.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <select class="editable-input form-control input-sm" name="od_pay_after_status_id" ng-model="row.od_pay_after_status_id"\n' +
    '                                            ng-options="payAfterStatus.id as payAfterStatus.name for payAfterStatus in orderDepartment.OrderDepartmentSer.payAfterStatuses"></select>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                            <td data-title="\'下单日期\'" filter="{date_purchased: \'text\'}">[: row.date_purchased :]</td>\n' +
    '                            <td title="\'备注\'" filter="{remark: \'text\'}" ng-switch="orderDepartment.isEditing" ng-class="name.$dirty ? \'bg-warning\' : \'\'" ng-form="remark" demo-tracked-table-cell>\n' +
    '                                <span ng-switch-default class="editable-text">[: row.remark :]</span>\n' +
    '                                <div class="controls" ng-class="remark.$invalid && remark.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <input type="text" name="remark" ng-model="row.remark" class="editable-input form-control input-sm" required />\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                            <td data-title="\'订单号\'" filter="{website_order_id: \'text\'}">[: row.website_order_id :]</td>\n' +
    '                            <td data-title="\'网站\'" filter="{website_name: \'text\'}">[: row.website_name :]</td>\n' +
    '                            <td data-title="\'客户名字\'" filter="{name: \'text\'}">[: row.customer_name :]</td>\n' +
    '                            <td data-title="\'金额\'" filter="{order_total: \'text\'}">[: row.order_total | currency:row.order_currency :]</td>\n' +
    '                            <td style="min-width: 350px;" data-title="\'商品信息|采购分组|发货分组\'">\n' +
    '                                <div class="row" ng-repeat="product in row.order_products">\n' +
    '                                    <div class="col-md-4"><span>[: product.quantity :] x </span><img class="order-small-image" ng-src="[: product.image_url :]" alt="[: product.product_name :]" title="[: product.product_name :]"></div>\n' +
    '                                    <div class="col-md-4">[: product.attributes_id :]</div>\n' +
    '                                    <div class="col-md-4 form-inline"><div class="checkbox"><label><input type="checkbox" ng-disabled="!orderDepartment.isCheckedAbled && product.purchase_group_id == 0" ng-checked="orderDepartment.isPurchaseGroupChecked(product)" ng-click="orderDepartment.addProductsToPurchaseGroup(product)">[: product.purchase_group_id | zwbIdToName:orderDepartment.purchaseGroups :]</label></div></div>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '                <div class="box-body">\n' +
    '                    <div class="floatLeft">\n' +
    '                        <ul class="pagination-sm no-margin" previous-text="上一页" next-text="下一页" uib-pagination ng-change="orderDepartment.fnPageChanged()" items-per-page="orderDepartment.searchRemoteInfo.itemsPerPage" num-pages="orderDepartment.searchRemoteInfo.numPages" total-items="orderDepartment.searchRemoteInfo.totalItems" ng-model="orderDepartment.searchRemoteInfo.currentPage" max-size="orderDepartment.searchRemoteInfo.maxSize" boundary-link-numbers="true"></ul>\n' +
    '                    </div>\n' +
    '                    <div class="floatRight">\n' +
    '                        <div class="btn-group">\n' +
    '                            <label class="btn btn-default" ng-click="orderDepartment.fnSetItemsPerPage(10)" ng-model="itemsPerPage" uib-btn-radio="10">10</label>\n' +
    '                            <label class="btn btn-default" ng-click="orderDepartment.fnSetItemsPerPage(20)" ng-model="itemsPerPage" uib-btn-radio="20">20</label>\n' +
    '                            <label class="btn btn-default" ng-click="orderDepartment.fnSetItemsPerPage(50)" ng-model="itemsPerPage" uib-btn-radio="50">50</label>\n' +
    '                            <label class="btn btn-default" ng-click="orderDepartment.fnSetItemsPerPage(100)" ng-model="itemsPerPage" uib-btn-radio="100">100</label>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '    <div class="group-box">\n' +
    '        <h2>采购分组</h2>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-8">\n' +
    '                <label class="sr-only" for="purchaseGroup">采购分组</label>\n' +
    '                <input type="text" class="form-control" id="purchaseGroup" ng-model="orderDepartment.currentPurchaseGroup.name">\n' +
    '            </div>\n' +
    '            <div class="col-sm-4">\n' +
    '                <button class="btn btn-default btn-info" ng-click="orderDepartment.fnAddPurchaseGroup()"><i class="fa fa-plus-circle"></i>add</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="row">\n' +
    '            <div class="col-sm-8">\n' +
    '                <label class="sr-only" for="selectPurchaseGroup">采购分组</label>\n' +
    '                <select name="purchaseGroupSelect" class="form-control" ng-model="orderDepartment.purchaseGroupSelect" ng-options="purchaseGroup.name for purchaseGroup in orderDepartment.purchaseGroups"></select>\n' +
    '            </div>\n' +
    '            <div class="col-sm-4">\n' +
    '                <button class="btn btn-default btn-success" ng-click="orderDepartment.fnSelectPurchaseGroup()">select</button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/orderPayAfterStatus/add.html',
    '<section class="mt20">\n' +
    '    <!--新增订单状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增付款后订单状态</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddOrderPayAfterStatus()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="orderPayAfterStatusName" class="col-md-3 control-label">订单状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="orderPayAfterStatusName" id="orderPayAfterStatusName" autofocus ng-model="orderPayAfterStatusInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="color" class="col-md-3 control-label">颜色标识(如: #0000FF)</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="color" id="color" autofocus ng-model="orderPayAfterStatusInfo.color">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="orderPayAfterStatusInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="orderPayAfterStatusInfo.addOrderPayAfterStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增付款后订单状态成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/orderPayAfterStatus/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改订单状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改付款后订单状态</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditOrderPayAfterStatus()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="orderStatusName" class="col-md-3 control-label">订单状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="orderStatusName" id="orderStatusName" autofocus ng-model="orderPayAfterStatusInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="color" class="col-md-3 control-label">颜色标识</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="color" id="order" autofocus ng-model="orderPayAfterStatusInfo.color">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="orderPayAfterStatusInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="orderPayAfterStatusInfo.editOrderPayAfterStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改付款后订单状态成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/orderPayAfterStatus/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="orderPayAfterStatus.filterValue" ng-change="orderPayAfterStatus.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="order.orderPayAfterStatus.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="orderPayAfterStatus.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'订单状态\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'color\'">[: row.color :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="order.orderPayAfterStatus.edit({orderPayAfterStatusId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="orderPayAfterStatus.fnDestoryPost(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="orderPayAfterStatus.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="orderPayAfterStatus.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/purchaseGroup/add.html',
    '<section class="mt20">\n' +
    '    <!--新增订货分组-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增订货分组</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddPurchaseGroup()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">订货分组</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="purchaseGroupInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="remark" class="col-md-3 control-label">备注</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="remark" id="remark" autofocus ng-model="purchaseGroupInfo.remark">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="purchaseGroupInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="purchaseGroupInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增订货分组成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/purchaseGroup/detail.html',
    '');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/purchaseGroup/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改订货分组-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改订货分组</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditPurchaseGroup()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">订货分组</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="purchaseGroupInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="remark" class="col-md-3 control-label">备注</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="remark" id="remark" autofocus ng-model="purchaseGroupInfo.remark">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="purchaseGroupInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="purchaseGroupInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改订货分组成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/purchaseGroup/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="purchaseGroup.filterValue" ng-change="purchaseGroup.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="order.purchaseGroup.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="purchaseGroup.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'名称\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'供应商\'" sortable="\'supplier_id\'">\n' +
    '                                <select name="superlier" id="superlier" ng-change="purchaseGroup.fnPurchaseGroupToSupplier(row.id, row.supplier_id)" ng-model="row.supplier_id" ng-options="supperlier.id as supperlier.name for supperlier in purchaseGroup.supperliers"></select>\n' +
    '                            </td>\n' +
    '                            <td data-title="\'创建人\'">[: row.charger_name :]</td>\n' +
    '                            <td data-title="\'创建时间\'">[: row.created_at :]</td>\n' +
    '                            <td data-title="\'备注\'">[: row.remark :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="order.purchaseGroup.edit({purchaseGroupId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="purchaseGroup.fnDestoryPurchaseGroup(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '\n' +
    '                                    <a style="margin:3px;" ui-sref="order.purchaseGroup.detail({purchaseGroupId:row.id})" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 查看详情</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="purchaseGroup.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="purchaseGroup.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/shippingGroup/add.html',
    '<section class="mt20">\n' +
    '    <!--新增发货分组-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增发货分组</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddShippingGroup()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">发货分组</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="shippingGroupInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="remark" class="col-md-3 control-label">备注</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="remark" id="remark" autofocus ng-model="shippingGroupInfo.remark">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="shippingGroupInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="shippingGroupInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增发货分组成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/shippingGroup/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改发货分组-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改发货分组</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditShippingGroup()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">发货分组</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="shippingGroupInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="remark" class="col-md-3 control-label">备注</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="remark" id="remark" autofocus ng-model="shippingGroupInfo.remark">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="shippingGroupInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="shippingGroupInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改发货分组成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/shippingGroup/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="shippingGroup.filterValue" ng-change="shippingGroup.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="order.shippingGroup.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="shippingGroup.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'名称\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'发货负责人\'" sortable="\'charger_name\'">[: row.charger_name :]</td>\n' +
    '                            <td data-title="\'创建时间\'" sortable="\'created_at\'">[: row.created_at :]</td>\n' +
    '                            <td data-title="\'备注\'">[: row.remark :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="order.shippingGroup.edit({shippingGroupId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="shippingGroup.fnDestoryShippingGroup(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="shippingGroup.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="shippingGroup.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/status/add.html',
    '<section class="mt20">\n' +
    '    <!--新增订单状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增订单状态</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddOrderStatus()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="orderStatusName" class="col-md-3 control-label">订单状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="orderStatusName" id="orderStatusName" autofocus ng-model="orderStatusInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="color" class="col-md-3 control-label">颜色标识(如: #0000FF)</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="color" id="color" autofocus ng-model="orderStatusInfo.color">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="orderStatusInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="orderStatusInfo.addOrderStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增订单状态成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/status/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改订单状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改订单状态</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditOrderStatus()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="orderStatusName" class="col-md-3 control-label">订单状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="orderStatusName" id="orderStatusName" autofocus ng-model="orderStatusInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="color" class="col-md-3 control-label">颜色标识</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="color" id="order" autofocus ng-model="orderStatusInfo.color">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="orderStatusInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="orderStatusInfo.editOrderStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改订单状态成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/status/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="orderStatus.filterValue" ng-change="orderStatus.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="order.orderStatus.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="orderStatus.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'订单状态\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'color\'">[: row.color :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="order.orderStatus.edit({orderStatusId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="orderStatus.fnDestoryPost(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="orderStatus.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="orderStatus.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/stock/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box floatLeft">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="stock.filterValue" ng-change="stock.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <div class="btn-group pull-right">\n' +
    '                <button class="btn btn-default" ng-if="stock.isEditing" ng-click="stock.cancelChanges()">\n' +
    '                    <span class="glyphicon glyphicon-remove"></span>\n' +
    '                </button>\n' +
    '                <button class="btn btn-primary" ng-if="!stock.isEditing" ng-click="stock.isEditing = true">\n' +
    '                    <span class="glyphicon glyphicon-pencil"></span>\n' +
    '                </button>\n' +
    '                <button class="btn btn-primary" ng-if="stock.isEditing" ng-disabled="!stock.hasChanges() || stock.tableTracker.$invalid" ng-click="stock.saveChanges()">\n' +
    '                    <span class="glyphicon glyphicon-ok"></span>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="stock.tableParams" class="table table-bordered table-hover table-condensed editable-table"\n' +
    '                            ng-form="stock.tableForm" disable-filter="stock.isAdding" nbg-tracked-table="stock.tableTracker">\n' +
    '                        <tr ng-repeat="row in $data" ng-form="rowForm" nbg-tracked-table-row="row">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'" filter="{id: \'text\'}">[: row.id :]</td>\n' +
    '                            <td data-title="\'产品名称\'" filter="{name: \'text\'}">[: row.name :]</td>\n' +
    '                            <td data-title="\'SKU\'" filter="{model: \'text\'}">[: row.model :]</td>\n' +
    '                            <td data-title="\'样图\'"><img zwb-magnifying-glass class="order-small-image" ng-src="[: row.image :]" alt="[: row.name :]" title="[: row.name :]" /></td>\n' +
    '                            <td data-title="\'price\'">[: row.price :]</td>\n' +
    '                            <td style="min-width: 350px;" data-title="\'库存信息\'" sortable="\'store_count\'" ng-switch="stock.isEditing" ng-class="stocks.$dirty ? \'bg-warning\' : \'\'" ng-form="stocks" demo-tracked-table-cell>\n' +
    '                                <div ng-switch-default class="row" ng-repeat="siglestock in row.stocks">\n' +
    '                                    <div class="col-md-6">属性：[: siglestock.attributes :]</div>\n' +
    '                                    <div class="col-md-6">库存量：<span class="editable-text">[: siglestock.store_count :]</span></div>\n' +
    '                                </div>\n' +
    '                                <div class="controls" ng-class="stocks.$invalid && stocks.$dirty ? \'has-error\' : \'\'" ng-switch-when="true">\n' +
    '                                    <div class="row" ng-repeat="siglestock in row.stocks">\n' +
    '                                        <div class="col-md-6">属性：[: siglestock.attributes :]</div>\n' +
    '                                        <div class="col-md-6">库存量：<input type="number" name="store_count" ng-model="siglestock.store_count" class="editable-input form-control input-sm" required /></div>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '                <div class="box-body">\n' +
    '                    <div class="floatLeft">\n' +
    '                        <ul class="pagination-sm no-margin" previous-text="上一页" next-text="下一页" uib-pagination ng-change="stock.fnPageChanged()" items-per-page="stock.searchRemoteInfo.itemsPerPage" num-pages="stock.searchRemoteInfo.numPages" total-items="stock.searchRemoteInfo.totalItems" ng-model="stock.searchRemoteInfo.currentPage" max-size="stock.searchRemoteInfo.maxSize" boundary-link-numbers="true"></ul>\n' +
    '                    </div>\n' +
    '                    <div class="floatRight">\n' +
    '                        <div class="btn-group">\n' +
    '                            <label class="btn btn-default" ng-click="stock.fnSetItemsPerPage(10)" ng-model="itemsPerPage" uib-btn-radio="10">10</label>\n' +
    '                            <label class="btn btn-default" ng-click="stock.fnSetItemsPerPage(20)" ng-model="itemsPerPage" uib-btn-radio="20">20</label>\n' +
    '                            <label class="btn btn-default" ng-click="stock.fnSetItemsPerPage(50)" ng-model="itemsPerPage" uib-btn-radio="50">50</label>\n' +
    '                            <label class="btn btn-default" ng-click="stock.fnSetItemsPerPage(100)" ng-model="itemsPerPage" uib-btn-radio="100">100</label>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/supplier/add.html',
    '<section class="mt20">\n' +
    '    <!--新增供应商-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增供应商</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddSupplier()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">供应商名</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="supplierInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="account" class="col-md-3 control-label">账户</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="account" id="account" autofocus ng-model="supplierInfo.account">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="password" class="col-md-3 control-label">密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="password" id="password" autofocus ng-model="supplierInfo.password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="description" class="col-md-3 control-label">描述</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="description" id="description" autofocus ng-model="supplierInfo.description">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="is_check" class="col-md-3 control-label">状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="is_check" id="is_check" autofocus ng-model="supplierInfo.is_check">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="contacts" class="col-md-3 control-label">联系人</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="contacts" id="contacts" autofocus ng-model="supplierInfo.contacts">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="phone" class="col-md-3 control-label">联系电话</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="phone" id="phone" autofocus ng-model="supplierInfo.phone">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="qq" class="col-md-3 control-label">qq</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="qq" id="qq" autofocus ng-model="supplierInfo.qq">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="remark" class="col-md-3 control-label">备注</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="remark" id="remark" autofocus ng-model="supplierInfo.remark">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="supplierInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="supplierInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增供应商成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/supplier/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改供应商-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改供应商</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditSupplier()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">供应商</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="supplierInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="account" class="col-md-3 control-label">账户</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="account" id="account" autofocus ng-model="supplierInfo.account">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="password" class="col-md-3 control-label">密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="password" id="password" autofocus ng-model="supplierInfo.password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="description" class="col-md-3 control-label">描述</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="description" id="description" autofocus ng-model="supplierInfo.description">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="is_check" class="col-md-3 control-label">状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="is_check" id="is_check" autofocus ng-model="supplierInfo.is_check">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="contacts" class="col-md-3 control-label">联系人</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="contacts" id="contacts" autofocus ng-model="supplierInfo.contacts">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="phone" class="col-md-3 control-label">联系电话</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="phone" id="phone" autofocus ng-model="supplierInfo.phone">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="qq" class="col-md-3 control-label">qq</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="qq" id="qq" autofocus ng-model="supplierInfo.qq">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="remark" class="col-md-3 control-label">备注</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="remark" id="remark" autofocus ng-model="supplierInfo.remark">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="supplierInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="supplierInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改供应商成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/order/supplier/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="supplier.filterValue" ng-change="supplier.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="order.supplier.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="supplier.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'供应商名\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'账户\'" sortable="\'account\'">[: row.account :]</td>\n' +
    '                            <td data-title="\'密码\'">[: row.password :]</td>\n' +
    '                            <td data-title="\'描述\'">[: row.description :]</td>\n' +
    '                            <td data-title="\'状态\'" sortable="\'is_check\'">[: row.is_check :]</td>\n' +
    '                            <td data-title="\'联系人\'" sortable="\'contacts\'">[: row.contacts :]</td>\n' +
    '                            <td data-title="\'联系电话\'" sortable="\'phone\'">[: row.phone :]</td>\n' +
    '                            <td data-title="\'qq\'" sortable="\'qq\'">[: row.qq :]</td>\n' +
    '                            <td data-title="\'备注\'">[: row.remark :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="order.supplier.edit({supplierId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="supplier.fnDestorySupplier(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="supplier.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="supplier.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/adStatus/add.html',
    '<section class="mt20">\n' +
    '    <!--新增网站广告状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增网站广告状态</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddAdStatus()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">广告状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="adStatusInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="order" class="col-md-3 control-label">排序</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="order" id="order" autofocus ng-model="adStatusInfo.order">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="adStatusInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="adStatusInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增广告状态成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/adStatus/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改广告状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改广告状态</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditAdStatus()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">广告状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="adStatusInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="order" class="col-md-3 control-label">排序</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="order" id="order" autofocus ng-model="adStatusInfo.order">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="adStatusInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="adStatusInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改广告状态成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/adStatus/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="adStatuses.filterValue" ng-change="adStatuses.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="website.adStatus.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="adStatuses.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'广告状态\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'排序\'">[: row.order :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="website.adStatus.edit({adStatusId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="adStatuses.fnDestoryPost(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="adStatuses.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="adStatuses.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/brand/add.html',
    '<section class="mt20">\n' +
    '    <!--新增服务器-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增品牌</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddBrand()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">品牌</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="brandInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="order" class="col-md-3 control-label">排序</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="order" id="order" autofocus ng-model="brandInfo.order">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="brandInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="brandInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增品牌成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/brand/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改品牌-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改品牌</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditBrand()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">品牌</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="brandInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="order" class="col-md-3 control-label">排序</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="order" id="order" autofocus ng-model="brandInfo.order">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="brandInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="brandInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改品牌成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/brand/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="brands.filterValue" ng-change="brands.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="website.brand.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="brands.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'品牌名称\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'排序\'">[: row.order :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="website.brand.edit({brandId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="brands.fnDestoryPost(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="brands.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="brands.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/country/add.html',
    '<section class="mt20">\n' +
    '    <!--新增服务器-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增国家</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddCountry()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">国家名</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="countryInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="abbreviation" class="col-md-3 control-label">国家缩写</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="abbreviation" id="abbreviation" autofocus ng-model="countryInfo.abbreviation">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="password" class="col-md-3 control-label">货币</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select class="form-control" ng-model="countryInfo.currency_id" ng-options="currency.currencyId as currency.currencyName for currency in currencies"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="countryInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="countryInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增国家成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/country/base.html',
    '<div ui-view=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/country/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改国家-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改国家</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditCountry()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">国家名</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="countryInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="abbreviation" class="col-md-3 control-label">国家缩写</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="abbreviation" id="abbreviation" autofocus ng-model="countryInfo.abbreviation">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="password" class="col-md-3 control-label">货币</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select class="form-control" ng-model="countryInfo.currency_id" ng-options="currency.currencyId as currency.currencyName for currency in currencies"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="countryInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="countryInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改服务器成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/country/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="countries.filterValue" ng-change="countries.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="website.country.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="countries.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'国家名称\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'国家简写\'">[: row.abbreviation :]</td>\n' +
    '                            <td data-title="\'国家货币id\'">[: row.currency_id :]</td>\n' +
    '                            <td data-title="\'国家货币\'">[: countries.currencies[row.currency_id-1].currencyName :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="website.country.edit({countryId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="countries.fnDestoryPost(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="countries.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="countries.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/host/add.html',
    '<section class="mt20">\n' +
    '    <!--新增host-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增host</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddHost()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">host</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="hostInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="user" class="col-md-3 control-label">用户名</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="user" id="user" autofocus ng-model="hostInfo.user">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="password" id="password" autofocus ng-model="hostInfo.password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="login_url" class="col-md-3 control-label">登陆地址</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="login_url" id="login_url" autofocus ng-model="hostInfo.login_url">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="email" class="col-md-3 control-label">邮箱</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="email" id="email" autofocus ng-model="hostInfo.email">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="email_password" class="col-md-3 control-label">邮箱密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="email_password" id="email_password" autofocus ng-model="hostInfo.email_password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="status" class="col-md-3 control-label">使用情况</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <label class="radio-inline">\n' +
    '                                        <input type="radio" name="status" id="status" value="1" ng-model="hostInfo.status" checked="checked"> 使用中\n' +
    '                                    </label>\n' +
    '                                    <label class="radio-inline">\n' +
    '                                        <input type="radio" name="status" id="status" value="0" ng-model="hostInfo.status"> 未使用\n' +
    '                                    </label>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="remark" class="col-md-3 control-label">备注</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <textarea class="form-control" name="remark" id="remark" rows="6" autofocus ng-model="hostInfo.remark"></textarea>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="hostInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="hostInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增host成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/host/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改host-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改host</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditHost()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">host</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="hostInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="user" class="col-md-3 control-label">用户名</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="user" id="user" autofocus ng-model="hostInfo.user">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="password" id="password" autofocus ng-model="hostInfo.password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="login_url" class="col-md-3 control-label">登陆地址</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="login_url" id="login_url" autofocus ng-model="hostInfo.login_url">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="email" class="col-md-3 control-label">邮箱</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="email" id="email" autofocus ng-model="hostInfo.email">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="email_password" class="col-md-3 control-label">邮箱密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="email_password" id="email_password" autofocus ng-model="hostInfo.email_password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="status" class="col-md-3 control-label">使用情况</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <label class="radio-inline">\n' +
    '                                        <input type="radio" name="status" id="status" value="1" ng-model="hostInfo.status"> 使用中\n' +
    '                                    </label>\n' +
    '                                    <label class="radio-inline">\n' +
    '                                        <input type="radio" name="status" id="status" value="0" ng-model="hostInfo.status"> 未使用\n' +
    '                                    </label>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="remark" class="col-md-3 control-label">备注</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <textarea class="form-control" name="remark" id="remark" rows="6" autofocus ng-model="hostInfo.remark"></textarea>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="hostInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="hostInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改host成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/host/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="hosts.filterValue" ng-change="hosts.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="website.host.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="hosts.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'Host\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'用户名\'">[: row.user :]</td>\n' +
    '                            <td data-title="\'密码\'">[: row.password :]</td>\n' +
    '                            <td data-title="\'登陆地址\'">[: row.login_url :]</td>\n' +
    '                            <td data-title="\'邮箱\'">[: row.email :]</td>\n' +
    '                            <td data-title="\'邮箱密码\'">[: row.email_password :]</td>\n' +
    '                            <td data-title="\'使用情况\'" sortable="\'status\'">[: row.status == 1? \'使用中\':\'暂停使用\' :]</td>\n' +
    '                            <td data-title="\'备注\'">[: row.remark :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="website.host.edit({hostId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="hosts.fnDestoryHost(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="hosts.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="hosts.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/server/add.html',
    '<section class="mt20">\n' +
    '    <!--新增服务器-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增服务器</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddServer()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">服务器名称</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="serverInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="parent-server" class="col-md-3 control-label">父级服务器</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select  class="form-control" ng-model="serverInfo.pid" ng-options="parentServer.id as parentServer.name for parentServer in parentServers">\n' +
    '                                        <option value="">0 级</option>\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="user_name" class="col-md-3 control-label">用户名</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="user_name" id="user_name" autofocus ng-model="serverInfo.user_name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="password" class="col-md-3 control-label">密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="password" id="password" autofocus ng-model="serverInfo.password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="login_url" class="col-md-3 control-label">登陆地址</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="login_url" id="login_url" autofocus ng-model="serverInfo.login_url">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="status" class="col-md-3 control-label">使用状态</label>\n' +
    '                                <div class="col-md-5" ng-init="serverInfo.status=1">\n' +
    '                                    <label class="radio-inline">\n' +
    '                                        <input type="radio" name="status" value="1" ng-model="serverInfo.status" checked="checked"> 使用中\n' +
    '                                    </label>\n' +
    '                                    <label class="radio-inline">\n' +
    '                                        <input type="radio" name="status" value="0" ng-model="serverInfo.status"> 暂停使用\n' +
    '                                    </label>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label class="control-label col-md-3" for="remark">\n' +
    '                                    备注\n' +
    '                                </label>\n' +
    '                                <div class="col-md-6">\n' +
    '                                    <textarea class="form-control" name="remark" id="remark" cols="30" rows="6" ng-model="serverInfo.remark"></textarea>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="serverInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="serverInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>添加服务器成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/server/base.html',
    '<div ui-view=""></div>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/server/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改服务器-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改服务器</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditServer()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">服务器名称</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="serverInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="parent-server" class="col-md-3 control-label">父级服务器</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select  class="form-control" ng-model="serverInfo.pid" ng-options="parentServer.id as parentServer.name for parentServer in parentServers">\n' +
    '                                        <option value="">0 级</option>\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="user_name" class="col-md-3 control-label">用户名</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="user_name" id="user_name" autofocus ng-model="serverInfo.user_name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="password" class="col-md-3 control-label">密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="password" id="password" autofocus ng-model="serverInfo.password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="login_url" class="col-md-3 control-label">登陆地址</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="login_url" id="login_url" autofocus ng-model="serverInfo.login_url">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="status" class="col-md-3 control-label">使用状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <label class="radio-inline">\n' +
    '                                        <input type="radio" name="status" value="1" ng-model="serverInfo.status"> 使用中\n' +
    '                                    </label>\n' +
    '                                    <label class="radio-inline">\n' +
    '                                        <input type="radio" name="status" value="0" ng-model="serverInfo.status"> 暂停使用\n' +
    '                                    </label>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label class="control-label col-md-3" for="remark">\n' +
    '                                    备注\n' +
    '                                </label>\n' +
    '                                <div class="col-md-6">\n' +
    '                                    <textarea class="form-control" name="remark" id="remark" cols="30" rows="6" ng-model="serverInfo.remark"></textarea>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="serverInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="serverInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改服务器成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/server/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="servers.filterValue" ng-change="servers.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="website.server.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="servers.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'服务器名称\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'父级服务器\'" sortable="\'pid\'">[: row.pid | zwbIdToName:servers.parentServers :]</td>\n' +
    '                            <td data-title="\'用户名\'">[: row.user_name :]</td>\n' +
    '                            <td data-title="\'密码\'">[: row.password :]</td>\n' +
    '                            <td data-title="\'登陆地址\'">[: row.login_url :]</td>\n' +
    '                            <td data-title="\'使用状态\'">[: row.status == 1 ? \'in use\':\'suspend\' :]</td>\n' +
    '                            <td data-title="\'备注\'">[: row.remark :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="website.server.edit({serverId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="servers.fnDestoryPost(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="servers.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="servers.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/website/add.html',
    '<section class="mt20">\n' +
    '    <!--新增网站-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增域名</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddWebsite()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">域名</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="websiteInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="domain_server" class="col-md-3 control-label">服务器</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select class="form-control" name="domain_server" id="domain_server" ng-model="websiteInfo.domain_server_id" ng-options="server.id as server.name for server in WebsiteSer.domainServers | orderBy:[\'name\']">\n' +
    '                                        <option value="">请选择服务器</option>\n' +
    '                                    </select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="domain_country" class="col-md-3 control-label">国家</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select class="form-control" name="domain_country" id="domain_country" ng-model="websiteInfo.domain_country_id" ng-options="country.id as country.name for country in WebsiteSer.domainCountries | orderBy:[\'name\']"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="domain_brand" class="col-md-3 control-label">品牌</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select class="form-control" name="domain_server" id="domain_brand" ng-model="websiteInfo.domain_brand_id" ng-options="brand.id as brand.name for brand in WebsiteSer.domainBrands | orderBy:[\'name\']"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="domain_ad_status" class="col-md-3 control-label">广告状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select class="form-control" name="domain_ad_status" id="domain_ad_status" ng-model="websiteInfo.domain_ad_status_id" ng-options="adStatus.id as adStatus.name for adStatus in WebsiteSer.domainAdStatuses | orderBy:[\'name\']"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="domain_website_status" class="col-md-3 control-label">网站状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select class="form-control" name="domain_website_status" id="domain_website_status" ng-model="websiteInfo.domain_website_status_id" ng-options="websiteStatus.id as websiteStatus.name for websiteStatus in WebsiteSer.domainWebsiteStatuses | orderBy:[\'name\']"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="user" class="col-md-3 control-label">负责人</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select class="form-control" name="user" id="user" ng-model="websiteInfo.user_id" ng-options="user.id as user.name for user in WebsiteSer.usersOptional | orderBy:[\'groupId\', \'name\']"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="ftp_ip" class="col-md-3 control-label">ftp ip</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="ftp_ip" id="ftp_ip" autofocus ng-model="websiteInfo.ftp_ip">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="ftp_username" class="col-md-3 control-label">ftp username</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="ftp_username" id="ftp_username" autofocus ng-model="websiteInfo.ftp_username">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="ftp_password" class="col-md-3 control-label">ftp password</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="ftp_password" id="ftp_password" autofocus ng-model="websiteInfo.ftp_password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="background_username" class="col-md-3 control-label">后台账号</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="background_username" id="background_username" autofocus ng-model="websiteInfo.background_username">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="background_password" class="col-md-3 control-label">密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="background_password" id="background_password" autofocus ng-model="websiteInfo.background_password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="database_username" class="col-md-3 control-label">数据库账号</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="database_username" id="database_username" autofocus ng-model="websiteInfo.database_username">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="database_password" class="col-md-3 control-label">数据库密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="database_password" id="database_password" autofocus ng-model="websiteInfo.database_password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="domain_host" class="col-md-3 control-label">host账户</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select class="form-control" name="domain_host" id="domain_host" ng-model="websiteInfo.domain_host_id" ng-options="server.id as server.name for server in WebsiteSer.domainHosts"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="remark" class="col-md-3 control-label">备注</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <textarea class="form-control" name="remark" id="remark" rows="6" ng-model="websiteInfo.remark"></textarea>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="websiteInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="websiteInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增域名成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/website/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改域名-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                        <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                        <h3 class="panel-title">修改域名</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditWebsite()">\n' +
    '                            <div class="form-group">\n' +
    '                                    <label for="name" class="col-md-3 control-label">域名</label>\n' +
    '                                    <div class="col-md-5">\n' +
    '                                        <input type="text" class="form-control" name="name" id="name" autofocus ng-model="websiteInfo.name">\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="form-group">\n' +
    '                                    <label for="domain_server" class="col-md-3 control-label">服务器</label>\n' +
    '                                    <div class="col-md-5">\n' +
    '                                        <select class="form-control" name="domain_server" id="domain_server" ng-model="websiteInfo.domain_server_id" ng-options="server.id as server.name for server in WebsiteSer.domainServers | orderBy:[\'name\']"></select>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="form-group">\n' +
    '                                    <label for="domain_country" class="col-md-3 control-label">国家</label>\n' +
    '                                    <div class="col-md-5">\n' +
    '                                        <select class="form-control" name="domain_country" id="domain_country" ng-model="websiteInfo.domain_country_id" ng-options="country.id as country.name for country in WebsiteSer.domainCountries | orderBy:[\'name\']"></select>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="form-group">\n' +
    '                                    <label for="domain_brand" class="col-md-3 control-label">品牌</label>\n' +
    '                                    <div class="col-md-5">\n' +
    '                                        <select class="form-control" name="domain_server" id="domain_brand" ng-model="websiteInfo.domain_brand_id" ng-options="brand.id as brand.name for brand in WebsiteSer.domainBrands | orderBy:[\'name\']"></select>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="form-group">\n' +
    '                                    <label for="domain_ad_status" class="col-md-3 control-label">广告状态</label>\n' +
    '                                    <div class="col-md-5">\n' +
    '                                        <select class="form-control" name="domain_ad_status" id="domain_ad_status" ng-model="websiteInfo.domain_ad_status_id" ng-options="adStatus.id as adStatus.name for adStatus in WebsiteSer.domainAdStatuses | orderBy:[\'name\']"></select>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="form-group">\n' +
    '                                    <label for="domain_website_status" class="col-md-3 control-label">网站状态</label>\n' +
    '                                    <div class="col-md-5">\n' +
    '                                        <select class="form-control" name="domain_website_status" id="domain_website_status" ng-model="websiteInfo.domain_website_status_id" ng-options="websiteStatus.id as websiteStatus.name for websiteStatus in WebsiteSer.domainWebsiteStatuses | orderBy:[\'name\']"></select>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="form-group">\n' +
    '                                    <label for="user" class="col-md-3 control-label">负责人</label>\n' +
    '                                    <div class="col-md-5">\n' +
    '                                        <select class="form-control" name="user" id="user" ng-model="websiteInfo.user_id" ng-options="user.id as user.name for user in WebsiteSer.usersOptional | orderBy:[\'groupId\', \'name\']"></select>\n' +
    '                                    </div>\n' +
    '                                </div>\n' +
    '                                <div class="form-group">\n' +
    '                                    <label for="ftp_ip" class="col-md-3 control-label">ftp ip</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="ftp_ip" id="ftp_ip" autofocus ng-model="websiteInfo.ftp_ip">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="ftp_username" class="col-md-3 control-label">ftp username</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="ftp_username" id="ftp_username" autofocus ng-model="websiteInfo.ftp_username">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="ftp_password" class="col-md-3 control-label">ftp password</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="ftp_password" id="ftp_password" autofocus ng-model="websiteInfo.ftp_password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="background_username" class="col-md-3 control-label">后台账号</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="background_username" id="background_username" autofocus ng-model="websiteInfo.background_username">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="background_password" class="col-md-3 control-label">密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="background_password" id="background_password" autofocus ng-model="websiteInfo.background_password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="database_username" class="col-md-3 control-label">数据库账号</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="database_username" id="database_username" autofocus ng-model="websiteInfo.database_username">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="database_password" class="col-md-3 control-label">数据库密码</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="database_password" id="database_password" autofocus ng-model="websiteInfo.database_password">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="domain_host" class="col-md-3 control-label">host账户</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <select class="form-control" name="domain_host" id="domain_host" ng-model="websiteInfo.domain_host_id" ng-options="server.id as server.name for server in WebsiteSer.domainHosts"></select>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="remark" class="col-md-3 control-label">备注</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <textarea class="form-control" name="remark" id="remark" rows="6" ng-model="websiteInfo.remark"></textarea>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="websiteInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="websiteInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改域名成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/website/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <a ng-click="websites.toggleSearch()" class="btn btn-success btn-md">\n' +
    '                    <i class="fa" ng-class="{true: \'fa-search-minus\', false: \'fa-search-plus\'}[websites.searchRemote]"></i> 搜索\n' +
    '                </a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="website.website.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <!--服务器搜索-->\n' +
    '    <div ng-show="websites.searchRemote" class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <form class="form-inline" role="form" ng-submit="websites.fnSearchRemote()">\n' +
    '                <div class="form-group">\n' +
    '                    <label for="name" class="sr-only">域名</label>\n' +
    '                    <input placeholder="域名" type="text" class="form-control" name="website-name" id="name" autofocus ng-model="websites.searchRemoteInfo.name">\n' +
    '                </div>\n' +
    '                <div class="form-group">\n' +
    '                    <label for="domain_server" class="sr-only">服务器</label>\n' +
    '                    <select class="form-control" name="domain_server" id="domain_server" ng-model="websites.searchRemoteInfo.domain_server_id" ng-options="server.id as server.name for server in websites.WebsiteSer.domainServers | orderBy:[\'name\']">\n' +
    '                        <option value="">请选择服务器</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div class="form-group">\n' +
    '                    <label for="domain_country" class="sr-only">国家</label>\n' +
    '                    <select class="form-control" name="domain_country" id="domain_country" ng-model="websites.searchRemoteInfo.domain_country_id" ng-options="country.id as country.name for country in websites.WebsiteSer.domainCountries | orderBy:[\'name\']">\n' +
    '                        <option value="">请选择国家</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div class="form-group">\n' +
    '                    <label for="domain_brand" class="sr-only">品牌</label>\n' +
    '                    <select class="form-control" name="domain_server" id="domain_brand" ng-model="websites.searchRemoteInfo.domain_brand_id" ng-options="brand.id as brand.name for brand in websites.WebsiteSer.domainBrands | orderBy:[\'name\']">\n' +
    '                        <option value="">请选择品牌</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div class="form-group">\n' +
    '                    <label for="domain_ad_status" class="sr-only">广告状态</label>\n' +
    '                    <select class="form-control" name="domain_ad_status" id="domain_ad_status" ng-model="websites.searchRemoteInfo.domain_ad_status_id" ng-options="adStatus.id as adStatus.name for adStatus in websites.WebsiteSer.domainAdStatuses | orderBy:[\'name\']">\n' +
    '                        <option value="">请选择广告状态</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div class="form-group">\n' +
    '                    <label for="domain_website_status" class="sr-only">网站状态</label>\n' +
    '                    <select class="form-control" name="domain_website_status" id="domain_website_status" ng-model="websites.searchRemoteInfo.domain_website_status_id" ng-options="websiteStatus.id as websiteStatus.name for websiteStatus in websites.WebsiteSer.domainWebsiteStatuses | orderBy:[\'name\']">\n' +
    '                        <option value="">请选择网站状态</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div class="form-group">\n' +
    '                    <label for="user" class="sr-only">负责人</label>\n' +
    '                    <select class="form-control" name="user" id="user" ng-model="websites.searchRemoteInfo.user_id" ng-options="user.id as user.name for user in websites.WebsiteSer.usersOptional | orderBy:[\'groupId\', \'name\']">\n' +
    '                        <option value="">请选择负责人</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div class="form-group">\n' +
    '                    <label for="ftp_ip" class="sr-only">ftp ip</label>\n' +
    '                    <input placeholder="ftp ip" type="text" class="form-control" name="ftp_ip" id="ftp_ip" autofocus ng-model="websites.searchRemoteInfo.ftp_ip">\n' +
    '                </div>\n' +
    '                <div class="form-group">\n' +
    '                    <label for="ftp_username" class="sr-only">ftp username</label>\n' +
    '                    <input placeholder="ftp username" type="text" class="form-control" name="ftp_username" id="ftp_username" autofocus ng-model="websites.searchRemoteInfo.ftp_username">\n' +
    '                </div>\n' +
    '                <div class="form-group">\n' +
    '                    <label for="background_username" class="sr-only">后台账号</label>\n' +
    '                    <input placeholder="后台账号" type="text" class="form-control" name="background_username" id="background_username" autofocus ng-model="websites.searchRemoteInfo.background_username">\n' +
    '                </div>\n' +
    '                <div class="form-group">\n' +
    '                    <label for="database_username" class="sr-only">数据库账号</label>\n' +
    '                    <input placeholder="数据库账号" type="text" class="form-control" name="database_username" id="database_username" autofocus ng-model="websites.searchRemoteInfo.database_username">\n' +
    '                </div>\n' +
    '                <div class="form-group">\n' +
    '                    <label for="domain_host" class="sr-only">host账户</label>\n' +
    '                    <select class="form-control" name="domain_host" id="domain_host" ng-model="websites.searchRemoteInfo.domain_host_id" ng-options="server.id as server.name for server in websites.WebsiteSer.domainHosts">\n' +
    '                        <option value="">请选择host账户</option>\n' +
    '                    </select>\n' +
    '                </div>\n' +
    '                <div class="checkbox">\n' +
    '                    <label ng-init="websites.searchRemoteInfo.isDeleted=false">\n' +
    '                        <input type="checkbox" ng-model="websites.searchRemoteInfo.isDeleted"> 已删除\n' +
    '                    </label>\n' +
    '                </div>\n' +
    '                <button type="submit" class="btn btn-info">搜索</button>\n' +
    '            </form>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body">\n' +
    '                    <label class="checkbox-inline" ng-repeat="col in websites.cols" ng-if="show | zwbExceptFields:col.title():[\'Id\',\'域名\',\'服务器\',\'国家\',\'服务器\',\'品牌\',\'广告状态\',\'网站状态\',\'负责人\',\'ftp ip\',\'操作\']">\n' +
    '                        <input type="checkbox" ng-model-options="{ getterSetter: true }" ng-model="col.show"/> [: col.title() :]\n' +
    '                    </label>\n' +
    '                </div>\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="websites.tableParams" class="table table-condensed table-bordered table-striped" ng-table-columns-binding="websites.cols">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td ng-if="true" data-title="\'Id\'" sortable="\'id\'" show="false">[: row.id :]</td>\n' +
    '                            <td ng-if="true" data-title="\'域名\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td ng-if="true" data-title="\'服务器\'" sortable="\'domain_server_id\'">[: row.domain_server_id | zwbIdToName:websites.WebsiteSer.domainServers :]</td>\n' +
    '                            <td ng-if="true" data-title="\'国家\'" sortable="\'domain_country_id\'">[: row.domain_country_id | zwbIdToName:websites.WebsiteSer.domainCountries :]</td>\n' +
    '                            <td ng-if="true" data-title="\'品牌\'" sortable="\'domain_brand_id\'">[: row.domain_brand_id | zwbIdToName:websites.WebsiteSer.domainBrands :]</td>\n' +
    '                            <td ng-if="true" data-title="\'广告状态\'" sortable="\'domain_ad_status_id\'">[: row.domain_ad_status_id | zwbIdToName:websites.WebsiteSer.domainAdStatuses :]</td>\n' +
    '                            <td ng-if="true" data-title="\'网站状态\'" sortable="\'domain_website_status_id\'">[: row.domain_website_status_id | zwbIdToName:websites.WebsiteSer.domainWebsiteStatuses :]</td>\n' +
    '                            <td ng-if="true" data-title="\'负责人\'" sortable="\'user_id\'">[: row.user_id | zwbIdToName:websites.WebsiteSer.usersOptional :]</td>\n' +
    '                            <td ng-if="true" data-title="\'ftp ip\'" sortable="\'ftp_ip\'">[: row.ftp_ip :]</td>\n' +
    '                            <td ng-if="false" data-title="\'ftp username\'" sortable="\'ftp_username\'">[: row.ftp_username :]</td>\n' +
    '                            <td ng-if="false" data-title="\'ftp password\'">[: row.ftp_password :]</td>\n' +
    '                            <td ng-if="false" data-title="\'后台user\'" sortable="\'background_username\'">[: row.background_username :]</td>\n' +
    '                            <td ng-if="false" data-title="\'后台 password\'">[: row.background_password :]</td>\n' +
    '                            <td ng-if="false" data-title="\'数据库 user\'" sortable="\'database_username\'">[: row.database_username :]</td>\n' +
    '                            <td ng-if="false" data-title="\'数据库 password\'">[: row.database_password :]</td>\n' +
    '                            <td ng-if="false" data-title="\'host账户\'" sortable="\'domain_host_id\'">[: row.domain_host_id | zwbIdToName:websites.WebsiteSer.domainHosts :]</td>\n' +
    '                            <td ng-if="true" data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="website.website.edit({websiteId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="websites.fnDestoryPost(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '                <div class="box-body">\n' +
    '                    <div class="floatLeft">\n' +
    '                        <ul class="pagination-sm no-margin" previous-text="上一页" next-text="下一页" uib-pagination ng-change="websites.fnPageChanged()" items-per-page="websites.searchRemoteInfo.itemsPerPage" num-pages="websites.searchRemoteInfo.numPages" total-items="websites.searchRemoteInfo.totalItems" ng-model="websites.searchRemoteInfo.currentPage" max-size="websites.searchRemoteInfo.maxSize" boundary-link-numbers="true"></ul>\n' +
    '                    </div>\n' +
    '                    <div class="floatRight">\n' +
    '                        <div class="btn-group">\n' +
    '                            <label class="btn btn-default" ng-model="itemsPerPage" uib-btn-radio="10">10</label>\n' +
    '                            <label class="btn btn-default" ng-model="itemsPerPage" uib-btn-radio="20">20</label>\n' +
    '                            <label class="btn btn-default" ng-model="itemsPerPage" uib-btn-radio="50">50</label>\n' +
    '                            <label class="btn btn-default" ng-model="itemsPerPage" uib-btn-radio="100">100</label>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="websites.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="websites.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/websiteStatus/add.html',
    '<section class="mt20">\n' +
    '    <!--新增网站状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">新增网站状态</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnAddWebsiteStatus()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">网站状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="websiteStatusInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="order" class="col-md-3 control-label">排序</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="order" id="order" autofocus ng-model="websiteStatusInfo.order">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        添加\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="websiteStatusInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="websiteStatusInfo.addStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>新增网站状态成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/websiteStatus/edit.html',
    '<section class="mt20">\n' +
    '    <!--修改网站状态-->\n' +
    '    <div class="main animsition">\n' +
    '        <div class="container-fluid">\n' +
    '\n' +
    '            <div class="row">\n' +
    '                <div class="panel panel-default">\n' +
    '                    <div class="panel-heading">\n' +
    '                         <a onclick="history.back()" class="panel-title floatRight"><i class="fa fa-reply"></i></a>\n' +
    '                         <h3 class="panel-title">修改网站状态</h3>\n' +
    '                    </div>\n' +
    '                    <div class="panel-body">\n' +
    '\n' +
    '                        <form class="form-horizontal" role="form" ng-submit="fnEditWebsiteStatus()">\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="name" class="col-md-3 control-label">网站状态</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="name" id="name" autofocus ng-model="websiteStatusInfo.name">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <label for="order" class="col-md-3 control-label">排序</label>\n' +
    '                                <div class="col-md-5">\n' +
    '                                    <input type="text" class="form-control" name="order" id="order" autofocus ng-model="websiteStatusInfo.order">\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                            <div class="form-group">\n' +
    '                                <div class="col-md-7 col-md-offset-3">\n' +
    '                                    <button type="submit" class="btn btn-primary btn-md">\n' +
    '                                        <i class="fa fa-plus-circle"></i>\n' +
    '                                        修改\n' +
    '                                    </button>\n' +
    '                                </div>\n' +
    '                            </div>\n' +
    '                        </form>\n' +
    '                        <div ng-show="websiteStatusInfo.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>正在提交...</strong>\n' +
    '                        </div>\n' +
    '                        <div ng-if="websiteStatusInfo.editStatus" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '                            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '                            <strong>修改网站状态成功!</strong>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</section>');
}]);
})();

(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./tpl/website/websiteStatus/index.html',
    '<section class="mt20">\n' +
    '    <div class="row" style="margin:5px;">\n' +
    '        <div class="col-sm-6 text-left">\n' +
    '            <div id="tags-table_filter" class="dataTables_filter search-box">\n' +
    '                <label>搜索:<input type="search" class="form-control input-sm" ng-model="websiteStatuses.filterValue" ng-change="websiteStatuses.fnSearchChange()"></label>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div class="col-sm-6 text-right">\n' +
    '            <a ui-sref="website.websiteStatus.add" class="btn btn-success btn-md">\n' +
    '                <i class="fa fa-plus-circle"></i> 新增\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div class="col-xs-12">\n' +
    '            <div class="box">\n' +
    '                <div class="box-body table-responsive">\n' +
    '                    <table  ng-table="websiteStatuses.tableParams" class="table table-condensed table-bordered table-striped">\n' +
    '                        <tr ng-repeat="row in $data">\n' +
    '                            <td data-title="\'Id\'" sortable="\'id\'">[: row.id :]</td>\n' +
    '                            <td data-title="\'网站状态\'" sortable="\'name\'">[: row.name :]</td>\n' +
    '                            <td data-title="\'排序\'">[: row.order :]</td>\n' +
    '                            <td data-title="\'操作\'">\n' +
    '                                <div class="operationbox">\n' +
    '                                    <a style="margin:3px;" ui-sref="website.websiteStatus.edit({websiteStatusId:row.id})" class="X-Small btn-xs text-success ">\n' +
    '                                        <i class="fa fa-edit"></i> 编辑\n' +
    '                                    </a>\n' +
    '                                    <a style="margin:3px;" ng-click="websiteStatuses.fnDestoryPost(row.id)" class="delBtn X-Small btn-xs text-danger ">\n' +
    '                                        <i class="fa fa-times-circle-o"></i> 删除</a>\n' +
    '                                </div>\n' +
    '                            </td>\n' +
    '                        </tr>\n' +
    '                    </table>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="row">\n' +
    '        <div ng-show="websiteStatuses.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>正在删除!</strong>\n' +
    '        </div>\n' +
    '        <div ng-if="websiteStatuses.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">\n' +
    '            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>\n' +
    '            <strong>删除成功!</strong>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</section>');
}]);
})();
