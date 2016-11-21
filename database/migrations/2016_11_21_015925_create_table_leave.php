<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTableLeave extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('leave', function (Blueprint $table) {
            $table->increments('id');
            $table->unsignedInteger('user_id');
            $table->string('type')->comment("请假类型");
            $table->string('leave_reson')->comment('请假事由');
            $table->timestamp('begin')->comment('开始时间');
            $table->timestamp('end')->comment('结束时间');
            $table->unsignedInteger('grant')->default(1)->comment('批假情况 1未处理，2同意，3不同意');
            $table->string('grant_info')->nullable()->comment('审批详情');
            $table->unsignedInteger('supervisor_id')->comment('主管id,权限和消息通知用');
            $table->string('total_time')->comment('请假总时间，超过一定天数需要更高层人员审核；sum请假时间');
            $table->timestamp('grant_time')->comment('请假审批时间');
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
        Schema::drop('leave');
    }
}
