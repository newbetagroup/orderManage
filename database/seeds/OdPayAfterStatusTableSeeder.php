<?php

use Illuminate\Database\Seeder;

class OdPayAfterStatusTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('od_pay_after_statuses')->insert([
            [
                'id' => 1,
                'name' => '已付款',
                'color' => '#FF0000',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'name' => '已发货',
                'color' => '#00CC00',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'name' => '已订货',
                'color' => '#006432',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'name' => '已退货',
                'color' => '#999999',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'name' => '待重发',
                'color' => '#DB6D00',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'name' => '已缺货',
                'color' => '#0000AA',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'name' => '待确认',
                'color' => '#BF0060',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'name' => '货不齐',
                'color' => '#DB6D00',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'name' => '已重发',
                'color' => '#DB6D00',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'name' => '待退款',
                'color' => '#999999',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'name' => '已换货',
                'color' => '#25A568',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'name' => '未到货',
                'color' => '#DB6D00',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'name' => '退款单',
                'color' => '#000000',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ]
        ]);
    }
}
