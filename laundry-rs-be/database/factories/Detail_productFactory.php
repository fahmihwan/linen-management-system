<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Detail_product>
 */
class Detail_productFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'product_id' => fake()->numberBetween(1, 100),
            'room_id' => fake()->numberBetween(1, 100),
            'qr_code' => fake()->uuid(),
            'status_id' => fake()->numberBetween(1, 2)
        ];
    }
}
