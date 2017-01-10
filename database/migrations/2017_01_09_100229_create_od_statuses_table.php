<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOdStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('od_statuses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50)->comment('订单状态名称');
            $table->char('color', 10)->comment('状态颜色标识');
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
        Schema::drop('od_statuses');
    }
}
