<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        collect([
            [
                'name' => 'Dityo Enggar',
                'email' => 'dityo.enggar@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ],
            [
                'name' => 'Admin',
                'email' => 'admin@sagansa.id',
                'email_verified_at' => now(),
                'password' => bcrypt('password'),
            ],
        ])->each(fn ($q) => User::create($q));
    }
}
