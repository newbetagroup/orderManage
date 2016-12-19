<?php
/**
 * Created by PhpStorm.
 * User: Geek-zwb
 * Date: 2016/11/18 0018
 * Time: 上午 11:02
 * 首页
 */
?>
@extends('layouts.base')
@section('css')
    <link rel="stylesheet" href="/css/user.css">
    <link rel="stylesheet" href="/css/textAngular.css">
    <link rel="stylesheet" href="/plugins/jquerydatetime/jquery.datetimepicker.css">
    <link rel="stylesheet" href="/plugins/ng-table/ng-table.min.css">

    <link href="/css/base.css" rel="stylesheet">
@endsection

@section('js')
    {{--angular--}}
    <script src="/node_modules/angular/angular.min.js"></script>
    <script src="/node_modules/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script src="/node_modules/oclazyload/dist/ocLazyLoad.min.js"></script>
    <script src="/app/base.js"></script>
    <script src="/app/ocLazyload.config.js"></script>
    <script src="/app/route.config.js"></script>

    <script src="/plugins/ng-table/ng-table.min.js"></script>

    {{--<script src="//cdnjs.cloudflare.com/ajax/libs/angular-sanitize/1.4.8/angular-sanitize.js"></script>--}}
    <script src="/node_modules/angular-ui-bootstrap/dist/ui-bootstrap-tpls.js"></script>
    <script src="/node_modules/angular-ui-bootstrap/dist/dialogs.min.js"></script>{{--依赖于ngSanitize和ui.bootstrap--}}

    <script src="/plugins/jquerydatetime/jquery.datetimepicker.js"></script>
    <script src="/app/common/directives/angular.datetime.js"></script>

    <script src="/app/common/service/common.js"></script>
    <script src="/app/user/user.js"></script>

    {{--延迟加载有问题？--}}
    <script src="/app/post/textAngular.min.js"></script>{{--依赖于ngSanitize和 rangy--}}
    {{--<script src="/app/manager/manager.js"></script>--}}
@endsection

@section('content')
    <div ui-view></div>
@endsection

