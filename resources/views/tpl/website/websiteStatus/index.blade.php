<section class="mt20">
    <div class="row" style="margin:5px;">
        <div class="col-sm-6 text-left">
            <div id="tags-table_filter" class="dataTables_filter search-box">
                <label>搜索:<input type="search" class="form-control input-sm" ng-model="websiteStatuses.filterValue" ng-change="websiteStatuses.fnSearchChange()"></label>
            </div>
        </div>
        <div class="col-sm-6 text-right">
            <a ui-sref="website.websiteStatus.add" class="btn btn-success btn-md">
                <i class="fa fa-plus-circle"></i> 新增
            </a>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body table-responsive">
                    <table  ng-table="websiteStatuses.tableParams" class="table table-condensed table-bordered table-striped">
                        <tr ng-repeat="row in $data">
                            <td data-title="'Id'" sortable="'id'">[: row.id :]</td>
                            <td data-title="'网站状态'" sortable="'name'">[: row.name :]</td>
                            <td data-title="'排序'">[: row.order :]</td>
                            <td data-title="'操作'">
                                <a style="margin:3px;" ui-sref="website.websiteStatus.edit({websiteStatusId:row.id})" class="X-Small btn-xs text-success ">
                                    <i class="fa fa-edit"></i> 编辑
                                </a>
                                <a style="margin:3px;" ng-click="websiteStatuses.fnDestoryPost(row.id)" class="delBtn X-Small btn-xs text-danger ">
                                    <i class="fa fa-times-circle-o"></i> 删除</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div ng-show="websiteStatuses.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <strong>正在删除!</strong>
        </div>
        <div ng-if="websiteStatuses.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <strong>删除成功!</strong>
        </div>
    </div>

</section>