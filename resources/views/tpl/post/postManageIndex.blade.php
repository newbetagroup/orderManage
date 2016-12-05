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
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table ng-table="" class="table table-condensed table-bordered table-striped table-hover">
                        <thead>
                        <tr>
                            <th class="hidden-xs">id</th>
                            <th>title</th>
                            <th>创建日期</th>
                            <th>最后修改日期</th>
                            <th data-sortable="false">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="post in posts.data">
                            <td class="hidden-xs">[: post.id :]</td>
                            <td>[: post.name :]</td>
                            <td>[: post.description :]</td>
                            <td>[: post.created_at :]</td>
                            <td>[: post.updated_at :]</td>
                            <td>
                                <a style="margin:3px;" ui-sref="post.postManageEdit({postId:post.id})" class="X-Small btn-xs text-success ">
                                    <i class="fa fa-edit"></i> 编辑
                                </a>
                                <a style="margin:3px;" ng-click="$parent.fnDestroyPost(post.id)" class="delBtn X-Small btn-xs text-danger ">
                                    <i class="fa fa-times-circle-o"></i> 删除</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>