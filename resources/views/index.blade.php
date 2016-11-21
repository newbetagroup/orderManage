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
@endsection

@section('js')
    <script src="js/user.js"></script>
@endsection

@section('content')
    <div ui-view></div>
@endsection
