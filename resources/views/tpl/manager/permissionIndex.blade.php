{{--所有权限信息--}}
<section>
    <div class="row page-title-row" style="margin:5px;">
        <div class="col-md-6">
        </div>
        <div class="col-md-6 text-right">
            <a ui-sref="manager.permission.addPermission" class="btn btn-success btn-md">
                <i class="fa fa-plus-circle"></i> 添加权限
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
                <label>搜索:<input type="search" class="form-control input-sm"></label>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th class="hidden-sm">id</th>
                            <th class="hidden-md">权限名称</th>
                            <th class="hidden-sm">权限标签</th>
                            <th class="hidden-md">权限概述</th>
                            <th class="hidden-md">权限级别</th>
                            <th class="hidden-sm">权限创建日期</th>
                            <th class="hidden-sm">权限修改日期</th>
                            <th data-sortable="false">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="permission in Manager.permissionsInfo.data">
                            <td class="hidden-sm">[: permission.id :]</td>
                            <td class="hidden-md">[: permission.name :]</td>
                            <td class="hidden-sm">[: permission.label :]</td>
                            <td class="hidden-md">[: permission.description :]</td>
                            <td class="hidden-md">[: permission.cid :]</td>
                            <td class="hidden-sm">[: permission.created_at :]</td>
                            <td class="hidden-sm">[: permission.updated_at :]</td>
                            <td>
                                <a style="margin:3px;" ui-sref="manager.permission.editPermission({permissionId:permission.id})" class="X-Small btn-xs text-success ">
                                    <i class="fa fa-edit"></i> 编辑
                                </a>
                                <a style="margin:3px;" ng-click="$parent.fnDestroyPermission(permission.id)" class="delBtn X-Small btn-xs text-danger ">
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
