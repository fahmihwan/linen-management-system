<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

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
        // \App\Models\DetailProductFactory::factory(100)->create();
        \App\Models\Detail_product::factory(100)->create();

        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
