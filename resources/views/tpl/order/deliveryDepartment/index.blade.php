<section class="mt20">
    <div class="row" style="margin:5px;">
        <div class="col-sm-6 text-left">
            <div id="tags-table_filter" class="dataTables_filter search-box">
                <label>搜索:<input type="search" class="form-control input-sm" ng-model="deliveryDepartment.filterValue" ng-change="deliveryDepartment.fnSearchChange()"></label>
            </div>
        </div>
        <div class="col-sm-6 text-right">
            <div class="btn-group pull-right">
                <button class="btn btn-default" ng-if="deliveryDepartment.isEditing" ng-click="deliveryDepartment.cancelChanges()">
                    <span class="glyphicon glyphicon-remove"></span>
                </button>
                <button class="btn btn-primary" ng-if="!deliveryDepartment.isEditing" ng-click="deliveryDepartment.isEditing = true">
                    <span class="glyphicon glyphicon-pencil"></span>
                </button>
                <button class="btn btn-primary" ng-if="deliveryDepartment.isEditing" ng-disabled="!deliveryDepartment.hasChanges() || deliveryDepartment.tableTracker.$invalid" ng-click="deliveryDepartment.saveChanges()">
                    <span class="glyphicon glyphicon-ok"></span>
                </button>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body table-responsive">
                    <table  ng-table="deliveryDepartment.tableParams" class="table table-bordered table-hover table-condensed editable-table"
                            ng-form="deliveryDepartment.tableForm" disable-filter="deliveryDepartment.isAdding" nbg-tracked-table="deliveryDepartment.tableTracker">
                        <tr ng-repeat="row in $data" ng-form="rowForm" nbg-tracked-table-row="row">
                            <td data-title="'Id'" sortable="'id'" filter="{id: 'text'}">[: row.id :]</td>
                            <td title="'状态'" filter="{od_status_id: 'select'}" filter-data="deliveryDepartment.CustomerSer.arrOrderStatuses" ng-switch="deliveryDepartment.isEditing" ng-class="od_status_id.$dirty ? 'bg-warning' : ''" ng-form="od_status_id" nbg-tracked-table-cell>
                                <span ng-switch-default class="editable-text">[: row.od_status_id | zwbIdToName:deliveryDepartment.CustomerSer.orderStatuses :]</span>
                                <div class="controls" ng-class="od_status_id.$invalid && od_status_id.$dirty ? 'has-error' : ''" ng-switch-when="true">
                                    <select class="editable-input form-control input-sm" name="od_status_id" ng-model="row.od_status_id"
                                            ng-options="orderStatus.id as orderStatus.name for orderStatus in deliveryDepartment.CustomerSer.orderStatuses"></select>
                                </div>
                            </td>
                            <td title="'订单状态'" filter="{od_pay_after_status_id: 'select'}" filter-data="deliveryDepartment.CustomerSer.arrOrderPayAfterStatuses" ng-switch="deliveryDepartment.isEditing" ng-class="od_pay_after_status_id.$dirty ? 'bg-warning' : ''" ng-form="od_pay_after_status_id" nbg-tracked-table-cell>
                                <span ng-switch-default class="editable-text">[: row.od_pay_after_status_id | zwbIdToName:deliveryDepartment.CustomerSer.payAfterStatuses :]</span>
                                <div class="controls" ng-class="od_pay_after_status_id.$invalid && od_status_id.$dirty ? 'has-error' : ''" ng-switch-when="true">
                                    <select class="editable-input form-control input-sm" name="od_pay_after_status_id" ng-model="row.od_pay_after_status_id"
                                            ng-options="payAfterStatus.id as payAfterStatus.name for payAfterStatus in deliveryDepartment.CustomerSer.payAfterStatuses"></select>
                                </div>
                            </td>
                            <td data-title="'下单日期'" filter="{date_purchased: 'text'}">[: row.date_purchased :]</td>
                            <td data-title="'订单号'" filter="{website_order_id: 'text'}">[: row.website_order_id :]</td>
                            <td data-title="'客户名字'" filter="{name: 'text'}">[: row.name :]</td>
                            <td title="'备注'" filter="{remark: 'text'}" ng-switch="deliveryDepartment.isEditing" ng-class="name.$dirty ? 'bg-warning' : ''" ng-form="remark" demo-tracked-table-cell>
                                <span ng-switch-default class="editable-text">[: row.remark :]</span>
                                <div class="controls" ng-class="remark.$invalid && remark.$dirty ? 'has-error' : ''" ng-switch-when="true">
                                    <input type="text" name="remark" ng-model="row.remark" class="editable-input form-control input-sm" required />
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="box-body">
                    <div class="floatLeft">
                        <ul class="pagination-sm no-margin" previous-text="上一页" next-text="下一页" uib-pagination ng-change="deliveryDepartment.fnPageChanged()" items-per-page="deliveryDepartment.searchRemoteInfo.itemsPerPage" num-pages="deliveryDepartment.searchRemoteInfo.numPages" total-items="deliveryDepartment.searchRemoteInfo.totalItems" ng-model="deliveryDepartment.searchRemoteInfo.currentPage" max-size="deliveryDepartment.searchRemoteInfo.maxSize" boundary-link-numbers="true"></ul>
                    </div>
                    <div class="floatRight">
                        <div class="btn-group">
                            <label class="btn btn-default" ng-click="deliveryDepartment.fnSetItemsPerPage(10)" ng-model="itemsPerPage" uib-btn-radio="10">10</label>
                            <label class="btn btn-default" ng-click="deliveryDepartment.fnSetItemsPerPage(20)" ng-model="itemsPerPage" uib-btn-radio="20">20</label>
                            <label class="btn btn-default" ng-click="deliveryDepartment.fnSetItemsPerPage(50)" ng-model="itemsPerPage" uib-btn-radio="50">50</label>
                            <label class="btn btn-default" ng-click="deliveryDepartment.fnSetItemsPerPage(100)" ng-model="itemsPerPage" uib-btn-radio="100">100</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>