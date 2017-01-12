<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOdPackagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('od_packages', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('od_order_id')->comment('订单号');
            $table->unsignedInteger('od_express_id')->comment('货运方式id');
            $table->unsignedInteger('consigner_id')->comment('发货人id');
            $table->unsignedInteger('od_express_company_id')->comment('发货公司id');
            $table->unsignedInteger('parent_id')->default(0)->comment('如果是转单号，则为上一个快递单号id');
            $table->timestamp('date_delivery')->default('0000-00-00 00:00:00')->comment('发货时间');
            $table->string('tracking_number', 64)->comment('快递单号');
            $table->string('tracking_remark')->comment('快递备注,包裹备注');
            $table->timestamps();

            $table->index('od_order_id');
            $table->index('consigner_id');
            $table->index('od_express_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('od_packages');
    }
}
