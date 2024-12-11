<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AuthAdminTest extends TestCase
{
    /**
     * A basic feature test example.
     */
    public function test_auth_admin_success(): void
    {
        User::where('username', 'admin')->delete();

        $user = User::factory()->create([
            'username' => 'admin',
            'password' => bcrypt('password'),
            'role_id' => 1,
            "profile_id" => 1
        ]);

        // Lakukan request ke endpoint auth_admin
        $response = $this->postJson('/api/auth/admin', [
            'username' => 'admin',
            'password' => 'password',
        ]);

        // Periksa apakah response statusnya 200
        $response->assertStatus(200)
            ->assertJson([
                'status' => 'success',
                'user' => [
                    'id' => $user->id,
                    'username' => 'admin',
                ],
                'authorisation' => [
                    'type' => 'bearer',
                ],
            ]);
    }


    public function test_auth_admin_invalid_password()
    {
        User::where('username', 'admin')->delete();

        $user = User::factory()->create([
            'username' => 'admin',
            'password' => bcrypt('password'),
            'role_id' => 1,
            "profile_id" => 1
        ]);

        // Lakukan request ke endpoint auth_admin
        $response = $this->postJson('/api/auth/admin', [
            'username' => 'admin',
            'password' => 'passwordd',
        ]);

        // User::where('username', 'admin')->delete();

        $response->assertStatus(401)->assertJson([
            'status' => 'error',
            'message' => 'Unauthorized',
        ]);
    }

    public function test_auth_admin_validation_fail()
    {
        // Siapkan data untuk request yang tidak valid
        $data = [
            'username' => '', // username kosong
            'password' => '', // password kosong
        ];

        // Lakukan request ke endpoint auth_admin
        $response = $this->postJson('/api/auth/admin', $data);

        // Periksa apakah response statusnya 422
        $response->assertStatus(422)
            ->assertJsonValidationErrors(['username', 'password']);
    }
}
