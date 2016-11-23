<section id="userAction" class="clearfix">
    <div ng-controller="GetLeavesController as leave">
        <table  ng-table-dynamic="leave.tableParams with leave.cols" class="table table-condensed table-bordered table-striped">
            <tr ng-repeat="row in $data">
                <td ng-repeat="col in $columns">[: row[col.field] :]</td>
            </tr>
        </table>
    </div>
</section>