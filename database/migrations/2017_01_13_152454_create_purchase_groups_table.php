<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreatePurchaseGroupsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('purchase_groups', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('supplier_id')->comment('供应商id');
            $table->unsignedInteger('charger_id')->comment('负责人id');
            $table->string('name', 50)->comment('订货分组名称');
            $table->string('charger_name', 30)->comment('负责人');
            $table->string('remark')->comment('订货分组描述与备注');
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
        Schema::drop('purchase_groups');
    }
}
