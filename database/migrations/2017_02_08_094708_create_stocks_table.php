<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateStocksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('stocks', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('product_id')->comment('商品id');
            $table->string('product_name', 100)->comment('商品名称');
            $table->string('attributes')->comment('商品属性json,能确定到具体某一商品');
            $table->unsignedInteger('store_count')->default(0)->comment('库存数量');
            $table->string('bar_code', 32)->default('')->comment('商品条形码');
            $table->string('sku', 128)->comment('SKU');
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
        Schema::drop('stocks');
    }
}
