{{--post manage index--}}
<section>
    <div class="row page-title-row" style="margin:5px;">
        <div class="col-sm-6 text-left">
            <div id="tags-table_filter" class="dataTables_filter">
                <label>搜索:<input ng-model="filterValue" type="search" class="form-control input-sm"></label>
            </div>
        </div>
        <div class="col-sm-6 text-right">
            <a ui-sref="post.postManageAdd" class="btn btn-success btn-md">
                <i class="fa fa-plus-circle"></i> 添加
            </a>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table  ng-table="posts.tableParams" class="table table-condensed table-bordered table-striped">
                        <tr ng-repeat="row in $data">
                            <td data-title-text="标题" sortable="'title'">[: row.title :]</td>
                            <td data-title-text="创建时间">[: row.created_at :]</td>
                            <td data-title-text="最后修改时间">[: row.updated_at :]</td>
                            <td data-title-text="操作">
                                <a style="margin:3px;" ui-sref="post.postManageEdit({postId:row.id})" class="X-Small btn-xs text-success ">
                                    <i class="fa fa-edit"></i> 编辑
                                </a>
                                <a style="margin:3px;" ng-click="posts.fnConfirmDestory(row.id)" class="delBtn X-Small btn-xs text-danger ">
                                    <i class="fa fa-times-circle-o"></i> 删除</a>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>