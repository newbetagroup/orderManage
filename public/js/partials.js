(function(module) {
try {
  module = angular.module('orderApp.partials');
} catch (e) {
  module = angular.module('orderApp.partials', []);
}
module.run(['$templateCache', function($templateCache) {
  $templateCache.put('./views/order/express/add.html',
    '<section class="mt20">\n' +
    '    <!----新增货运方式---->\n' +
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
  $templateCache.put('./views/order/express/edit.html',
    '<section class="mt20">\n' +
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
  console.log($templateCache);
  $templateCache.put('./views/order/express/index.html',
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
