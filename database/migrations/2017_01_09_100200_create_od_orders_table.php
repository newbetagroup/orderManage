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
            $table->string('customer_name', 50)->comment('收件人姓名，区别于下单客户');
            $table->unsignedInteger('od_delivery_address_id')->comment('收货地址id');
            $table->unsignedInteger('website_supervisor_id')->comment('网站负责人id');
            $table->timestamp('date_purchased')->comment('下单时间');
            $table->unsignedInteger('order_total')->comment('订单总金额');
            $table->char('order_currency', 6)->default('unsure')->comment('货币符号');
            $table->unsignedInteger('order_qty')->comment('订单商品总数');
            $table->unsignedInteger('od_status_id')->default(0)->comment('订单付款前状态，如未付款等');
            $table->unsignedInteger('od_pay_after_status_id')->default(0)->comment('订单付款后状态，如已发货等');
            $table->unsignedSmallInteger('express_id')->default(0)->comment('货运方式id');
            $table->unsignedSmallInteger('od_category_id')->default(0)->comment('产品分类，订单分类');
            $table->timestamp('order_pay_after_date')->default('0000-00-00 00:00:00')->comment('订单付款后状态修改时间,整单时间？');
            $table->string('remark')->nullable()->comment('订单备注');
            $table->timestamps();

            $table->index('website_order_id');
            $table->index('od_customer_id');
            $table->index('date_purchased');
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
