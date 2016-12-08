{{--post manage index--}}
<section>
    <div class="row page-title-row" style="margin:5px;">
        <div class="col-md-6">
        </div>
        <div class="col-md-6 text-right">
            <a ui-sref="post.postManageAdd" class="btn btn-success btn-md">
                <i class="fa fa-plus-circle"></i> 添加
            </a>
        </div>
    </div>

    <div class="row page-title-row" style="margin:5px;">
        <div class="col-md-6">
            <div class="dataTables_length" id="tags-table_length">
                <label>显示
                    <select name="tags-table_length" class="form-control input-sm">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select> 项结果</label>
            </div>
        </div>
        <div class="col-md-6 text-right">
            <div id="tags-table_filter" class="dataTables_filter">
                <label>搜索:<input ng-model="searchKey" type="search" class="form-control input-sm"></label>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table  ng-table-dynamic="posts.tableParams with posts.cols" class="table table-condensed table-bordered table-striped">
                        <tr ng-repeat="row in $data">
                            <td ng-repeat="col in $columns">[: row[col.field] :]</td>
                            <td>
                                <a style="margin:3px;" ui-sref="post.postManageEdit({postId:row.id})" class="X-Small btn-xs text-success ">
                                    <i class="fa fa-edit"></i> 编辑
                                </a>
                                <a style="margin:3px;" ng-click="posts.fnDestroyPost(row.id)" class="delBtn X-Small btn-xs text-danger ">
                                    <i class="fa fa-times-circle-o"></i> 删除</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>