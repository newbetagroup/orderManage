<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateServersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('servers', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('pid')->default(0)->comment('父级的id');
            $table->string('name')->comment('服务器名称');
            $table->string('user_name')->comment('用户名');
            $table->string('password')->comment('服务器密码');
            $table->string('login_url')->comment('服务器面板登陆地址');
            $table->unsignedTinyInteger('status')->comment('使用状态: 1 使用中');
            $table->text('remark')->nullable()->comment('备注');
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
        Schema::drop('servers');
    }
}
