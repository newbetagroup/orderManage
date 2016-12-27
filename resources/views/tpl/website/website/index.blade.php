<section class="mt20">
    <div class="row" style="margin:5px;">
        <div class="col-sm-6 text-left">
            <div id="tags-table_filter" class="dataTables_filter search-box">
                <a ng-click="websites.toggleSearch()" class="btn btn-success btn-md">
                    <i class="fa" ng-class="{true: 'fa-search-minus', false: 'fa-search-plus'}[websites.searchRemote]"></i> 搜索
                </a>
            </div>
        </div>
        <div class="col-sm-6 text-right">
            <a ui-sref="website.website.add" class="btn btn-success btn-md">
                <i class="fa fa-plus-circle"></i> 新增
            </a>
        </div>
    </div>

    {{--服务器搜索--}}
    <div ng-show="websites.searchRemote" class="row">
        <div class="col-xs-12">
            <form class="form-inline" role="form" ng-submit="websites.fnSearchRemote()">
                <div class="form-group">
                    <label for="name" class="sr-only">域名</label>
                    <input placeholder="域名" type="text" class="form-control" name="website-name" id="name" autofocus ng-model="websites.searchRemoteInfo.name">
                </div>
                <div class="form-group">
                    <label for="domain_server" class="sr-only">服务器</label>
                    <select class="form-control" name="domain_server" id="domain_server" ng-model="websites.searchRemoteInfo.domain_server_id" ng-options="server.id as server.name for server in websites.WebsiteSer.domainServers | orderBy:['name']">
                        <option value="">请选择服务器</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="domain_country" class="sr-only">国家</label>
                    <select class="form-control" name="domain_country" id="domain_country" ng-model="websites.searchRemoteInfo.domain_country_id" ng-options="country.id as country.name for country in websites.WebsiteSer.domainCountries | orderBy:['name']">
                        <option value="">请选择国家</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="domain_brand" class="sr-only">品牌</label>
                    <select class="form-control" name="domain_server" id="domain_brand" ng-model="websites.searchRemoteInfo.domain_brand_id" ng-options="brand.id as brand.name for brand in websites.WebsiteSer.domainBrands | orderBy:['name']">
                        <option value="">请选择品牌</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="domain_ad_status" class="sr-only">广告状态</label>
                    <select class="form-control" name="domain_ad_status" id="domain_ad_status" ng-model="websites.searchRemoteInfo.domain_ad_status_id" ng-options="adStatus.id as adStatus.name for adStatus in websites.WebsiteSer.domainAdStatuses | orderBy:['name']">
                        <option value="">请选择广告状态</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="domain_website_status" class="sr-only">网站状态</label>
                    <select class="form-control" name="domain_website_status" id="domain_website_status" ng-model="websites.searchRemoteInfo.domain_website_status_id" ng-options="websiteStatus.id as websiteStatus.name for websiteStatus in websites.WebsiteSer.domainWebsiteStatuses | orderBy:['name']">
                        <option value="">请选择网站状态</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="user" class="sr-only">负责人</label>
                    <select class="form-control" name="user" id="user" ng-model="websites.searchRemoteInfo.user_id" ng-options="user.id as user.name for user in websites.WebsiteSer.usersOptional | orderBy:['groupId', 'name']">
                        <option value="">请选择负责人</option>
                    </select>
                </div>
                <div class="form-group">
                    <label for="ftp_ip" class="sr-only">ftp ip</label>
                    <input placeholder="ftp ip" type="text" class="form-control" name="ftp_ip" id="ftp_ip" autofocus ng-model="websites.searchRemoteInfo.ftp_ip">
                </div>
                <div class="form-group">
                    <label for="ftp_username" class="sr-only">ftp username</label>
                    <input placeholder="ftp username" type="text" class="form-control" name="ftp_username" id="ftp_username" autofocus ng-model="websites.searchRemoteInfo.ftp_username">
                </div>
                <div class="form-group">
                    <label for="background_username" class="sr-only">后台账号</label>
                    <input placeholder="后台账号" type="text" class="form-control" name="background_username" id="background_username" autofocus ng-model="websites.searchRemoteInfo.background_username">
                </div>
                <div class="form-group">
                    <label for="database_username" class="sr-only">数据库账号</label>
                    <input placeholder="数据库账号" type="text" class="form-control" name="database_username" id="database_username" autofocus ng-model="websites.searchRemoteInfo.database_username">
                </div>
                <div class="form-group">
                    <label for="domain_host" class="sr-only">host账户</label>
                    <select class="form-control" name="domain_host" id="domain_host" ng-model="websites.searchRemoteInfo.domain_host_id" ng-options="server.id as server.name for server in websites.WebsiteSer.domainHosts">
                        <option value="">请选择host账户</option>
                    </select>
                </div>
                <div class="checkbox">
                    <label ng-init="websites.searchRemoteInfo.isDeleted=false">
                        <input type="checkbox" ng-model="websites.searchRemoteInfo.isDeleted"> 已删除
                    </label>
                </div>
                <button type="submit" class="btn btn-info">搜索</button>
            </form>
        </div>
    </div>

    <div class="row">
        <div class="col-xs-12">
            <div class="box">
                <div class="box-body">
                    <label class="checkbox-inline" ng-repeat="col in websites.cols" ng-if="show | zwbExceptFields:col.title():['Id','域名','服务器','国家','服务器','品牌','广告状态','网站状态','负责人','ftp ip','操作']">
                        <input type="checkbox" ng-model-options="{ getterSetter: true }" ng-model="col.show"/> [: col.title() :]
                    </label>
                </div>
                <div class="box-body table-responsive">
                    <table  ng-table="websites.tableParams" class="table table-condensed table-bordered table-striped" ng-table-columns-binding="websites.cols">
                        <tr ng-repeat="row in $data">
                            <td ng-if="true" data-title="'Id'" sortable="'id'" show="false">[: row.id :]</td>
                            <td ng-if="true" data-title="'域名'" sortable="'name'">[: row.name :]</td>
                            <td ng-if="true" data-title="'服务器'" sortable="'domain_server_id'">[: row.domain_server_id | zwbIdToName:websites.WebsiteSer.domainServers :]</td>
                            <td ng-if="true" data-title="'国家'" sortable="'domain_country_id'">[: row.domain_country_id | zwbIdToName:websites.WebsiteSer.domainCountries :]</td>
                            <td ng-if="true" data-title="'品牌'" sortable="'domain_brand_id'">[: row.domain_brand_id | zwbIdToName:websites.WebsiteSer.domainBrands :]</td>
                            <td ng-if="true" data-title="'广告状态'" sortable="'domain_ad_status_id'">[: row.domain_ad_status_id | zwbIdToName:websites.WebsiteSer.domainAdStatuses :]</td>
                            <td ng-if="true" data-title="'网站状态'" sortable="'domain_website_status_id'">[: row.domain_website_status_id | zwbIdToName:websites.WebsiteSer.domainWebsiteStatuses :]</td>
                            <td ng-if="true" data-title="'负责人'" sortable="'user_id'">[: row.user_id | zwbIdToName:websites.WebsiteSer.usersOptional :]</td>
                            <td ng-if="true" data-title="'ftp ip'" sortable="'ftp_ip'">[: row.ftp_ip :]</td>
                            <td ng-if="false" data-title="'ftp username'" sortable="'ftp_username'">[: row.ftp_username :]</td>
                            <td ng-if="false" data-title="'ftp password'">[: row.ftp_password :]</td>
                            <td ng-if="false" data-title="'后台user'" sortable="'background_username'">[: row.background_username :]</td>
                            <td ng-if="false" data-title="'后台 password'">[: row.background_password :]</td>
                            <td ng-if="false" data-title="'数据库 user'" sortable="'database_username'">[: row.database_username :]</td>
                            <td ng-if="false" data-title="'数据库 password'">[: row.database_password :]</td>
                            <td ng-if="false" data-title="'host账户'" sortable="'domain_host_id'">[: row.domain_host_id | zwbIdToName:websites.WebsiteSer.domainHosts :]</td>
                            <td ng-if="true" data-title="'操作'">
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
                <div class="box-body">
                    <div class="floatLeft">
                        <ul class="pagination-sm no-margin" previous-text="上一页" next-text="下一页" uib-pagination ng-change="websites.fnPageChanged()" items-per-page="websites.searchRemoteInfo.itemsPerPage" num-pages="websites.searchRemoteInfo.numPages" total-items="websites.searchRemoteInfo.totalItems" ng-model="websites.searchRemoteInfo.currentPage" max-size="websites.searchRemoteInfo.maxSize" boundary-link-numbers="true"></ul>
                    </div>
                    <div class="floatRight">
                        <div class="btn-group">
                            <label class="btn btn-default" ng-model="itemsPerPage" uib-btn-radio="10">10</label>
                            <label class="btn btn-default" ng-model="itemsPerPage" uib-btn-radio="20">20</label>
                            <label class="btn btn-default" ng-model="itemsPerPage" uib-btn-radio="50">50</label>
                            <label class="btn btn-default" ng-model="itemsPerPage" uib-btn-radio="100">100</label>
                        </div>
                    </div>
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