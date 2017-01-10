<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOdDeliveryAddressesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('od_delivery_addresses', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('od_customer_id')->comment('客户id');
            $table->string('country', 50)->comment('国家');
            $table->string('state', 50)->comment('州、省');
            $table->string('city', 50)->comment('城市');
            $table->string('address')->comment('街道地址');
            $table->string('postcode', 10)->comment('邮编');
            $table->timestamps();

            $table->index('od_customer_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('od_delivery_addresses');
    }
}
