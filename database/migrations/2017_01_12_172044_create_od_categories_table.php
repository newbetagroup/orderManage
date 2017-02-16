<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOdCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('od_categories', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name')->comment('自定义分类中文名称');
            $table->string('english_name')->comment('自定义分类英文名称');
            $table->decimal('weight')->comment('重量');
            $table->decimal('price')->comment('价格');
            $table->tinyInteger('is_default')->default(0)->comment('值为1的设为默认分类');
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
        Schema::drop('od_categories');
    }
}
