<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateShippingGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('shipping_groups', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50)->comment('发货分组名称');
            $table->unsignedInteger('user_id')->comment('负责人id');
            $table->string('charger_name', 30)->comment('负责人');
            $table->string('remark')->comment('发货分组描述与备注');
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
        Schema::drop('shipping_groups');
    }
}
