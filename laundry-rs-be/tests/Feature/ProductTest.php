<?php

namespace Tests\Feature;

use App\Models\Product;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\WithoutMiddleware;
use Tests\TestCase;

class ProductTest extends TestCase
{
    /**
     * A basic feature test example.
     */

    use WithoutMiddleware;

    public function test_index(): void
    {
        $response = $this->get('/api/products');
        $response = $response->assertStatus(200);
    }

    public function test_store(): void
    {
        $response = $this->post('/api/product', [
            'product_name' => 'product baru'
        ]);

        $response = $response->assertStatus(201)
            ->assertJson([
                'message' => 'product created successfully',
                'data' => [
                    'product_name' => 'product baru'
                ]
            ]);
    }

    public function test_show()
    {
        $product  = Product::factory()->create();
        $response = $this->getJson("/api/product/" . $product->id);
        $product->delete();
        $response = $response->assertStatus(200);
    }

    public function test_destroy()
    {
        $product = Product::factory()->create();
        $response = $this->deleteJson("/api/product/" . $product->id);
        $response->assertStatus(200);
    }
}
