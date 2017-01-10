<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOdProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('od_products', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('od_order_id')->comment('订单id');
            $table->unsignedInteger('od_products_id')->comment('产品');
            $table->string('attribute_id', 50)->comment('属性集合，用,隔开');
            $table->unsignedInteger('purchase_id')->comment('');
            $table->timestamp('purchase_date')->default('0000-00-00 00:00:00')->comment('');
            $table->decimal('purchase_price', 8, 2)->default(0)->comment();
            $table->unsignedInteger('check_id')->comment('');
            $table->timestamp('check_date')->default('0000-00-00 00:00:00')->comment('');
            $table->unsignedInteger('order_quantity_status')->comment('');
            $table->text('remark')->comment('备注');
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
        Schema::drop('od_products');
    }
}
