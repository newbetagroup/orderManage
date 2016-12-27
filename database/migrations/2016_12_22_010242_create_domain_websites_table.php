<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDomainWebsitesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('domain_websites', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name', 50)->comment('域名');
            $table->unsignedInteger('domain_server_id')->comment('服务器');
            $table->unsignedInteger('domain_country_id')->comment('所属国家');
            $table->unsignedInteger('domain_brand_id')->comment('所属品牌');
            $table->unsignedInteger('domain_ad_status_id')->comment('广告状态');
            $table->unsignedInteger('domain_website_status_id')->comment('网站状态');
            $table->unsignedInteger('user_id')->comment('负责人');
            $table->string('ftp_ip', 50)->comment('ftp ip');
            $table->string('ftp_username', 50)->comment('ftp 用户名');
            $table->string('ftp_password', 50)->comment('ftp 密码');
            $table->string('background_username', 50)->comment('网站后台用户名');
            $table->string('background_password', 50)->comment('网站后台密码');
            $table->string('database_username', 50)->comment('网站数据库用户名');
            $table->string('database_password', 50)->comment('网站数据库密码');
            $table->unsignedInteger('domain_host_id')->comment('域名账户');
            $table->timestamp('expiration_time')->nullable()->comment('域名过期时间');
            $table->timestamp('adstart')->nullable()->comment('广告上新时间');
            $table->timestamp('adend')->nullable()->comment('广告撤销时间');
            $table->text('remark')->nullable()->comment('备注');
            $table->softDeletes()->comment('软删除');
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
        Schema::drop('domain_websites');
    }
}
