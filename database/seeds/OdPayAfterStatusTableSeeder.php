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
                'en_name' => 'paid',
                'color' => '#FF0000',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 2,
                'name' => '已发货',
                'en_name' => 'delivered',
                'color' => '#00CC00',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 3,
                'name' => '已订货',
                'en_name' => 'ordered',
                'color' => '#006432',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 4,
                'name' => '已退货',
                'en_name' => 'returned',
                'color' => '#999999',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 5,
                'name' => '待重发',
                'en_name' => 'toresend',
                'color' => '#DB6D00',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 6,
                'name' => '已缺货',
                'en_name' => 'stockout',
                'color' => '#0000AA',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 7,
                'name' => '待确认',
                'en_name' => 'toconfirm',
                'color' => '#BF0060',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 8,
                'name' => '货不齐',
                'en_name' => 'lackgoods',
                'color' => '#DB6D00',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 9,
                'name' => '已重发',
                'en_name' => 'resent',
                'color' => '#DB6D00',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 10,
                'name' => '待退款',
                'en_name' => 'torefund',
                'color' => '#999999',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 11,
                'name' => '已换货',
                'en_name' => 'swapped',
                'color' => '#25A568',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 12,
                'name' => '未到货',
                'en_name' => 'afloat',
                'color' => '#DB6D00',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ],
            [
                'id' => 13,
                'name' => '退款单',
                'en_name' => 'refundorder',
                'color' => '#000000',
                'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
                'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
            ]
        ]);
    }
}
