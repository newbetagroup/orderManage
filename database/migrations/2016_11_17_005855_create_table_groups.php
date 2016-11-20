<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableGroups extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('groups', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->comment('用户分组名');
            $table->string('label')->comment('分组解释名称');
            $table->string('description')->nullable()->comment('描述与备注');
            $table->unsignedInteger('supervisor_id')->default(1)->comment('主管');
            $table->tinyInteger('pid')->default(0)->comment('父组id');//存疑：需要吗？本表的键关联呢
            $table->string('icon')->nullable()->comment('图标');
            $table->timestamps();

            $table->foreign('supervisor_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('groups');
    }
}
