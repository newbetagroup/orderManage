<section class="mt20">
    <div class="row" style="margin:5px;">
        <div class="col-sm-6 text-left">
            <div id="tags-table_filter" class="dataTables_filter search-box">
                <label>搜索:<input type="search" class="form-control input-sm" ng-model="websites.filterValue" ng-change="websites.fnSearchChange()"></label>
            </div>
        </div>
        <div class="col-sm-6 text-right">
            <a ui-sref="website.website.add" class="btn btn-success btn-md">
                <i class="fa fa-plus-circle"></i> 新增
            </a>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body table-responsive">
                    <table  ng-table="websites.tableParams" class="table table-condensed table-bordered table-striped">
                        <tr ng-repeat="row in $data">
                            <td data-title="'Id'" sortable="'id'">[: row.id :]</td>
                            <td data-title="'域名'" sortable="'name'">[: row.name :]</td>
                            <td data-title="'服务器'">[: row.domain_server_id | zwbIdToName:websites.WebsiteSer.domainServers :]</td>
                            <td data-title="'国家'">[: row.domain_country_id | zwbIdToName:websites.WebsiteSer.domainCountries :]</td>
                            <td data-title="'品牌'">[: row.domain_brand_id | zwbIdToName:websites.WebsiteSer.domainBrands :]</td>
                            <td data-title="'广告状态'">[: row.domain_ad_status_id | zwbIdToName:websites.WebsiteSer.domainAdStatuses :]</td>
                            <td data-title="'网站状态'">[: row.domain_website_status_id | zwbIdToName:websites.WebsiteSer.domainWebsiteStatuses :]</td>
                            <td data-title="'负责人'">[: row.user_id | zwbIdToName:websites.WebsiteSer.usersOptional :]</td>
                            <td data-title="'ftp ip'">[: row.ftp_ip :]</td>
                            <td data-title="'ftp username'">[: row.ftp_username :]</td>
                            <td data-title="'ftp password'">[: row.ftp_password :]</td>
                            <td data-title="'后台user'">[: row.background_username :]</td>
                            <td data-title="'后台 password'">[: row.background_password :]</td>
                            <td data-title="'数据库 user'">[: row.database_username :]</td>
                            <td data-title="'数据库 password'">[: row.database_password :]</td>
                            <td data-title="'host账户'">[: row.domain_host_id | zwbIdToName:websites.WebsiteSer.domainHosts :]</td>
                            <td data-title="'操作'">
                                <div class="operationbox">
                                    <a style="margin:3px;" ui-sref="website.website.edit({websiteId:row.id})" class="X-Small btn-xs text-success ">
                                        <i class="fa fa-edit"></i> 编辑
                                    </a>
                                    <a style="margin:3px;" ng-click="websites.fnDestoryPost(row.id)" class="delBtn X-Small btn-xs text-danger ">
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
        <div ng-show="websites.deleteAction.pending" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <strong>正在删除!</strong>
        </div>
        <div ng-if="websites.deleteAction.status" class="col-sm-offset-2 col-sm-6 alert alert-success alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
            <strong>删除成功!</strong>
        </div>
    </div>

</section>