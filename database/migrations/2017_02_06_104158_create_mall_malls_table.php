<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMallMallsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('mall_malls', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50)->comment('店铺名称');
            $table->string('website')->comment('店铺地址');
            $table->string('username', 30)->comment('用户名');
            $table->string('password', 50)->comment('密码');
            $table->unsignedInteger('mall_status_id')->comment('店铺状态');
            $table->unsignedInteger('user_id')->comment('负责人');
            $table->string('remark')->comment('备注');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('mall_malls');
    }
}
