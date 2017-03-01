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
            'identity' => '超级管理员',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
        ));
        DB::table('users')->insert(array(
            'name' => 'boss',
            'email' => 'newbeta@boss.com',
            'password' => Hash::make('newbeta'),
            'identity' => 'boss',
            'created_at' => \Carbon\Carbon::now()->toDateTimeString(),
            'updated_at' => \Carbon\Carbon::now()->toDateTimeString(),
        ));
    }
}
