{{--添加权限--}}
<div class="main animsition">
    <div class="container-fluid">

        <div class="row">
            <div class="">
                <div class="panel panel-default">
                    <div class="panel-heading">
                        <h3 class="panel-title">编辑权限</h3>
                    </div>
                    <div class="panel-body">

                        <form class="form-horizontal" role="form">
                            <input type="hidden" name="_token" value="{{ csrf_token() }}">
                            <input type="hidden" name="cove_image"/>
                            <div class="form-group">
                                <label for="name" class="col-md-3 control-label">权限名称</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="name" id="name" autofocus>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="tag" class="col-md-3 control-label">权限名称</label>
                                <div class="col-md-5">
                                    <input type="text" class="form-control" name="label" id="tag" autofocus>
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="tag" class="col-md-3 control-label">权限概述</label>
                                <div class="col-md-5">
                                    <textarea name="description" class="form-control" rows="3"></textarea>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="tag" class="col-md-3 control-label">权限列表</label>
                            </div>
                            <div class="form-group">
                                <div class="form-group">
                                    <div class="form-group">
                                        <label class="control-label col-md-3 all-check">
                                            一级权限：
                                        </label>
                                        <div class="col-md-6">
                                            <div class="col-md-4" style="float:left;padding-left:20px;margin-top:8px;">
                                                <span class="checkbox-custom checkbox-default">
                                                <i class="fa"></i>
                                                <input class="form-actions" id="inputChekbox1" type="Checkbox" value="" name="permissions[]">
                                                    <label for="inputChekbox1">
                                                        一级
                                                    </label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <div class="col-md-7 col-md-offset-3">
                                    <button type="submit" class="btn btn-primary btn-md">
                                        <i class="fa fa-plus-circle"></i>
                                        添加
                                    </button>
                                </div>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>