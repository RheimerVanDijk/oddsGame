<?php

use Illuminate\Database\Seeder;

// Models
use App\Models\User;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);

        User::create([
            'email' => 'admin@test.com',
            'password' => Hash::make('admin'),
            'roles' => 2
        ]);

        User::create([
            'email' => 'user@test.com',
            'password' => Hash::make('secret'),
            'roles' => 1
        ]);
    }
}
