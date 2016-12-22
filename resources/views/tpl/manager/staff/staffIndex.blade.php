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
                <label>共有[: staffs.tableParams.data.length :]项结果</label>
            </div>
        </div>
        <div class="col-md-6 text-right">
            <div id="tags-table_filter" class="dataTables_filter">
                <label>搜索:<input ng-model="filterValue" type="search" class="form-control input-sm"></label>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <table  ng-table="staffs.tableParams" class="table table-condensed table-bordered table-striped">
                        <tr ng-repeat="row in $data">
                            <td class="hidden-xs" data-title="'id'" sortable="'id'">[: row.id :]</td>
                            <td data-title="'员工'">[: row.name :]</td>
                            <td data-title="'岗位'" sortable="'identity'">[: row.identity :]</td>
                            <td data-title="'部门'">[: row.groups[0].name :]</td>
                            <td class="hidden-xs" data-title="'住宅地址'">[: row.address :]</td>
                            <td class="hidden-xs" data-title="'手机'">[: row.phone :]</td>
                            <td class="hidden-xs" data-title="'入职日期'" sortable="'created_at'">[: row.created_at :]</td>
                            <td data-title="'操作'">
                                <div class="operationbox">
                                    <a style="margin:3px;" ui-sref="manager.staff.editStaff({staffId:row.id})" class="X-Small btn-xs text-success ">
                                        <i class="fa fa-edit"></i> 编辑
                                    </a>
                                    <a style="margin:3px;" ng-click="staffs.fnDestroyStaff(row.id)" class="delBtn X-Small btn-xs text-danger ">
                                        <i class="fa fa-times-circle-o"></i> 删除</a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</section>
