<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Profile;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        \App\Models\Room::factory(100)->create();
        \App\Models\Product::factory(100)->create();
        \App\Models\Status::factory(2)->create();
        \App\Models\Role::factory(2)->create();
        \App\Models\Activity::factory(3)->create();

        // \App\Models\DetailProductFactory::factory(100)->create();
        \App\Models\Detail_product::factory(100)->create();

        // \App\Models\User::factory(10)->create();
        Profile::create([
            'profile_name' => 'fahmi ihwan',
            'address' => 'dsds',
            'telp' => '082334335',
        ]);
        \App\Models\User::create([
            'profile_id' => 1,
            'username' => 'fahmihwan',
            'password' => Hash::make('qweqwe123'),
            'role_id' => 1,
        ]);


        Profile::create([
            'profile_name' => 'brian',
            'address' => 'dsadasdsa',
            'telp' => '081231235',
        ]);
        \App\Models\User::create([
            'profile_id' => 2,
            'username' => 'brian',
            'password' => Hash::make('qweqwe123'),
            'role_id' => 2,
        ]);

        // 'profile_name' => 'required|string',
        // 'address' => 'required',
        // 'telp' => 'required',
        // 'username' => 'required',
        // 'password' => 'required',
        // 'role_id' => 'required',


        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
