<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOdPayAfterStatusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('od_pay_after_statuses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50)->comment('付款后订单状态名称');
            $table->char('color', 10)->default('normal')->comment('状态颜色标识');
            $table->timestamps();

            $table->unique('name');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('od_pay_after_statuses');
    }
}
