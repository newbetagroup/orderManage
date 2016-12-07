<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert(array(
            'name' => 'root',
            'email' => 'newbeta@admin.com',
            'password' => Hash::make('newbeta'),
            'identity' => '超级管理员'
        ));
        DB::table('users')->insert(array(
            'name' => 'boss',
            'email' => 'newbeta@boss.com',
            'password' => Hash::make('newbeta'),
            'identity' => 'boss'
        ));
    }
}
