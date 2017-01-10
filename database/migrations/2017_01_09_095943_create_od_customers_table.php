<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOdCustomersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('od_customers', function (Blueprint $table) {
            $table->increments('id');
            $table->string('email', 50)->comment('邮箱');
            $table->string('name', 50)->comment('姓名');
            $table->char('gender', 5)->comment('性别');
            $table->timestamps();

            $table->unique('email');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('od_customers');
    }
}
