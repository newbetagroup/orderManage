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
    <link rel="stylesheet" href="/plugins/jquerydatetime/jquery.datetimepicker.css">
    <link rel="stylesheet" href="/plugins/ng-table/ng-table.min.css">
@endsection

@section('js')
    <script src="/app/base.js"></script>
    <script src="/plugins/ng-table/ng-table.min.js"></script>
    <script src="/plugins/jquerydatetime/jquery.datetimepicker.js"></script>
    <script src="/app/common/directives/angular.datetime.js"></script>
    <script src="/app/common/service/common.js"></script>
    <script src="/app/user/user.js"></script>
    <script src="/app/manager/manager.js"></script>
@endsection

@section('content')
    <div ui-view></div>
@endsection
