<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDomainCountriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('domain_countries', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50)->comment("国家名");
            $table->string('abbreviation', 10)->nullable()->comment('国家简写');
            $table->unsignedInteger('currency_id')->nullable()->comment('代表货币符号');
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
        Schema::drop('domain_countries');
    }
}
