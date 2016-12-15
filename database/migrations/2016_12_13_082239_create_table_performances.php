<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTablePerformances extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('performances', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->timestamp('day_time')->nullable();
            $table->char('what_day')->nullable()->comment('星期几');
            $table->text('day_work')->nullable()->comment('一天工作内容');
            $table->unsignedTinyInteger('self_rating')->default('0')->comment('自我评分');
            $table->unsignedTinyInteger('efficiency_rating')->default('0')->comment('主管评效率分');
            $table->unsignedTinyInteger('quality_rating')->default('0')->comment('主管评质量分');
            $table->unsignedTinyInteger('overall_rating')->default('0')->comment('主管评综合分');
            $table->text('remark')->nullable()->comment('备注建议等');
            $table->text('week_target')->nullable()->comment('周计划');
            $table->text('week_completed_target')->nullable()->comment('周完成目标');
            $table->timestamps();

            $table->foreign('user_id')->references('id')->on('users');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('performances');
    }
}
