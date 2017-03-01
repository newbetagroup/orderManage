<?php

use Illuminate\Database\Seeder;

class SysConfigsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('sys_configs')->insert([
            [
                'id' => 1,
                'name' => 'od_category_id',
                'val' => '0',
                'desc' => '订单产品默认分类id'
            ]
        ]);
    }
}
