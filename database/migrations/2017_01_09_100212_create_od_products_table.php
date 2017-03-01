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
            $table->unsignedInteger('product_id')->comment('产品id');
            $table->string('product_name', 120)->comment('冗余字段，产品名');
            $table->unsignedSmallInteger('quantity')->comment('订单中该商品的数量');
            $table->string('image_url')->nullable()->comment('产品图片地址');
            $table->string('attributes_id')->comment("属性集合, json格式，如{'1':'MENSIZE:XL'},1是产品属性id");
            $table->unsignedInteger('purchase_group_id')->default(0)->comment('采购分组id');
            $table->timestamp('purchase_date')->default('0000-00-00 00:00:00')->comment('将产品添加进采购分组的时间');
            $table->decimal('purchase_price', 8, 2)->default(0)->comment('采购价');
            //$table->unsignedSmallInteger('express_id')->default(0)->comment('货运方式id');
            $table->unsignedInteger('shipping_group_id')->default(0)->comment('发货分组id');
            $table->timestamp('shipping_group_date')->default('0000-00-00 00:00:00')->comment('将产品加入发货分组的时间');
            $table->unsignedMediumInteger('order_quantity_status')->default(0)->comment('更改订单状态是否影响库存，0代表可以');
            $table->text('remark')->comment('备注');
            $table->string('sku', 50)->comment('模型号，一个产品对应一个,格式:品牌名+...');
            $table->timestamps();

            $table->index('od_order_id');
            $table->index('sku');
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
