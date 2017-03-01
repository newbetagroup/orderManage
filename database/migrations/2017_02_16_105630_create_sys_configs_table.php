<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSysConfigsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('sys_configs', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 60)->comment('字段名，如od_category_id');
            $table->string('val', 60)->default(0)->comment('值，如2');
            $table->string('desc')->comment('描述，如订单产品默认分类id');
            $table->timestamps();

            $table->index('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('sys_configs');
    }
}
