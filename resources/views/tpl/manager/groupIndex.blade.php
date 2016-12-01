{{--group index--}}
<section>
    <div class="row page-title-row" style="margin:5px;">
        <div class="col-md-6">
        </div>
        <div class="col-md-6 text-right">
            <a ui-sref="manager.group.addGroup" class="btn btn-success btn-md">
                <i class="fa fa-plus-circle"></i> 增加部门
            </a>
        </div>
    </div>
    <div class="row page-title-row" style="margin:5px;">
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table class="table table-bordered table-hover">
                        <thead>
                        <tr>
                            <th class="hidden-sm">id</th>
                            <th class="hidden-md">部门名称</th>
                            <th class="hidden-sm">部门标签</th>
                            <th class="hidden-md">部门概述</th>
                            <th class="hidden-sm">部门创建日期</th>
                            <th class="hidden-sm">部门修改日期</th>
                            <th data-sortable="false">操作</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr ng-repeat="group in Manager.groupsInfo.data">
                                <td class="hidden-sm">[: group.id :]</td>
                                <td class="hidden-md">[: group.name :]</td>
                                <td class="hidden-sm">[: group.label :]</td>
                                <td class="hidden-md">[: group.description :]</td>
                                <td class="hidden-sm">[: group.created_at :]</td>
                                <td class="hidden-sm">[: group.updated_at :]</td>
                               <td>
                                    <a style="margin:3px;" ui-sref="manager.group.editGroup({groupId:group.id})" class="X-Small btn-xs text-success ">
                                        <i class="fa fa-edit"></i> 编辑
                                    </a>
                                    <a style="margin:3px;" ng-click="$parent.fnDestroyGroup(group.id)" class="delBtn X-Small btn-xs text-danger ">
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