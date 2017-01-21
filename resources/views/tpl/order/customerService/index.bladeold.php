<section class="mt20">
    <div class="row" style="margin:5px;">
        <div class="col-sm-6 text-left">
            <div id="tags-table_filter" class="dataTables_filter search-box">
                <label>搜索:<input type="search" class="form-control input-sm" ng-model="serviceDepartment.filterValue" ng-change="serviceDepartment.fnSearchChange()"></label>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body table-responsive">
                    <table  ng-table="serviceDepartment.tableParams" class="table table-condensed table-bordered table-striped">
                        <tr ng-repeat="row in $data">
                            <td data-title="'Id'" sortable="'id'">[: row.id :]</td>
                            <td title="'Age'" filter="{od_status_id: 'number'}" ng-switch="serviceDepartment.isEditing" ng-class="od_status_id.$dirty ? 'bg-warning' : ''" ng-form="od_status_id" demo-tracked-table-cell>
                                <span ng-switch-default class="editable-text">[: row.od_status_id :]</span>
                                <div class="controls" ng-class="od_status_id.$invalid && od_status_id.$dirty ? 'has-error' : ''" ng-switch-when="true">
                                    <input type="number" name="od_status_id" ng-model="row.od_status_id" class="editable-input form-control input-sm" required/>
                                </div>
                            </td>
                            <td data-title="'状态'" sortable="'od_status_id'">[: row.od_status_id :]</td>
                            <td data-title="'订单状态'" sortable="'od_pay_after_status_id'">[: row.od_pay_after_status_id :]</td>
                            <td data-title="'下单日期'">[: row.date_purchased :]</td>
                            <td data-title="'网站'">[: row.website_name :]</td>
                            <td data-title="'订单号'">[: row.website_order_id :]</td>
                            <td data-title="'客户名字'">[: row.customer_name :]</td>
                            <td data-title="'客户邮箱'">[: row.customer_email :]</td>
                            <td data-title="'金额'">[: row.order_total | currency:row.order_currency :]</td>
                            <td data-title="'备注'">[: row.remark :]</td>
                            <td data-title="'操作'">
                                <div class="operationbox">
                                    <a style="margin:3px;" ui-sref="order.serviceDepartment.edit({serviceDepartmentId:row.id})" class="X-Small btn-xs text-success ">
                                        <i class="fa fa-edit"></i> 编辑
                                    </a>
                                    <a style="margin:3px;" ng-click="serviceDepartment.fnDestoryExpress(row.id)" class="delBtn X-Small btn-xs text-danger ">
                                        <i class="fa fa-times-circle-o"></i> 删除</a>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div ng-show="serviceDepartment.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <strong>正在删除!</strong>
        </div>
        <div ng-if="serviceDepartment.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <strong>删除成功!</strong>
        </div>
    </div>

</section>