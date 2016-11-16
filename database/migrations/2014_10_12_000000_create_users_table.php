<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->string('password', 255);
            $table->text('avatar_url')->nullable()->comment('头像');
            $table->string('domicile',255)->nullable()->comment('户籍所在地');
            $table->string('graduated_school',100)->nullable()->comment('毕业院校');
            $table->string('address',100)->nullable()->comment('住宅地址');
            $table->char('sex')->nullable()->comment("性别");
            $table->string('phone')->nullable()->comment("手机");
            $table->string('qq')->nullable()->comment("qq");
            //$table->string('entry_date')->nullable()->comment('入职日期');
            $table->text('remark')->nullable()->comment("备注");

            $table->rememberToken();
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
        Schema::drop('users');
    }
}
