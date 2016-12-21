<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDomainHostsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('domain_hosts', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50);
            $table->string('user', 30)->nullable()->comment('用户名');
            $table->string('password')->nullable()->comment('密码');
            $table->string('login_url')->nullable()->comment('登陆地址');
            $table->string('email')->nullable()->comment('邮箱');
            $table->string('email_password')->nullable()->comment('邮箱密码');
            $table->tinyInteger('status')->nullable()->comment('使用情况');
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
        Schema::drop('domain_hosts');
    }
}
