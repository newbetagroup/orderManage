<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOdOrdersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('od_orders', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('website_id')->comment('网站id');
            $table->unsignedInteger('website_order_id')->comment('网站订单id');
            $table->string('website_name', 50)->comment('网站域名');
            $table->unsignedInteger('od_customer_id')->comment('客户id');
            $table->unsignedInteger('od_delivery_address_id')->comment('收货地址id');
            $table->unsignedInteger('website_supervisor_id')->comment('网站负责人id');
            $table->timestamp('date_purchased')->comment('下单时间');
            $table->unsignedInteger('order_total')->comment('订单总金额');
            $table->unsignedInteger('order_qty')->comment('订单商品总数');
            $table->unsignedInteger('od_status_id')->comment('订单状态');

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
        Schema::drop('od_orders');
    }
}
