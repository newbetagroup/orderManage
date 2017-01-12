<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOdExpressCompaniesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('od_express_companies', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->comment('发货公司名');
            $table->string('abbreviation')->comment('发货公司名简称');
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
        Schema::drop('od_express_companies');
    }
}
