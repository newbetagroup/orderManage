{{--所有员工信息--}}
<section>
    <div class="row page-title-row" style="margin:5px;">
        <div class="col-md-6">
        </div>
        <div class="col-md-6 text-right">
            <a ui-sref="manager.staff.addStaff" class="btn btn-success btn-md">
                <i class="fa fa-plus-circle"></i> 增加用户
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
                            <th class="hidden-md">员工</th>
                            <th class="hidden-md">岗位</th>
                            <th class="hidden-sm">部门</th>
                            <th class="hidden-sm">住宅地址</th>
                            <th class="hidden-sm">手机</th>
                            <th class="hidden-md">入职日期</th>
                            <th>操作</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr ng-repeat="staff in Manager.staffsInfo.data">
                            <td class="hidden-sm">[: staff.id :]</td>
                            <td class="hidden-md">[: staff.name :]</td>
                            <td class="hidden-md">[: staff.identity :]</td>
                            <td class="hidden-sm">[: staff.groups[0].name :]</td>
                            <td class="hidden-sm">[: staff.address :]</td>
                            <td class="hidden-sm">[: staff.phone :]</td>
                            <td class="hidden-md">[: staff.created_at :]</td>
                            <td>
                                <a style="margin:3px;" ui-sref="manager.staff.editStaff({staffId:staff.id})" class="X-Small btn-xs text-success ">
                                    <i class="fa fa-edit"></i> 编辑
                                </a>
                                <a style="margin:3px;" ui-sref="manager.staff.destoryStaff({staffId:staff.id})" class="delBtn X-Small btn-xs text-danger ">
                                    <i class="fa fa-times-circle-o"></i> 删除</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="modal-delete" tabIndex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">
                        ×
                    </button>
                    <h4 class="modal-title">提示</h4>
                </div>
                <div class="modal-body">
                    <p class="lead">
                        <i class="fa fa-question-circle fa-lg"></i>
                        确认要删除这个角色吗?
                    </p>
                </div>
                <div class="modal-footer">
                    <form class="deleteForm" method="POST" action="/admin/user">
                        <input type="hidden" name="_token" value="{{ csrf_token() }}">
                        <input type="hidden" name="_method" value="DELETE">
                        <button type="button" class="btn btn-default" data-dismiss="modal">取消</button>
                        <button type="submit" class="btn btn-danger">
                            <i class="fa fa-times-circle"></i>确认
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>
</section>