<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSuppliersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('suppliers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->comment('供应商名称');
            $table->string('description')->comment('供应商描述');
            $table->unsignedTinyInteger('is_check')->comment('供应商状态');
            $table->string('contacts', 60)->comment('供应商联系人');
            $table->string('phone', 16)->comment('供应商联系电话');
            $table->unsignedBigInteger('qq')->comment('供应商联系qq');
            $table->mediumText('remark')->comment('备注');
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
        Schema::drop('suppliers');
    }
}
