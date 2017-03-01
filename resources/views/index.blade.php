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
    {{--bootstrap.css and font-awesome.css--}}
    <link rel="stylesheet" href="{!! elixir('css/less.css') !!}">

    {{--adminLTE require css file--}}
    <link rel="stylesheet" href="/libs/ionicons/2.0.1/css/ionicons.min.css">
    <!-- Theme style -->
    <link rel="stylesheet" href="/dist/css/AdminLTE.min.css">
    <link rel="stylesheet" href="/dist/css/skins/skin-blue.min.css">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link rel="stylesheet" href="{!! elixir('css/vendor.css') !!}">
    <link rel="stylesheet" href="{!! elixir('css/app.css') !!}">
@endsection

@section('js')
    <script src="{!! elixir('js/vendor.js') !!}"></script>

    <!-- AdminLTE App -->
    <script src="/dist/js/app.min.js"></script>

    <script src="{!! elixir('js/partials.js') !!}"></script>

    <script src="{!! elixir('js/appinit.js') !!}"></script>
    <script src="{!! elixir('js/app.js') !!}"></script>
@endsection

@section('content')
    <div ui-view></div>
@endsection

