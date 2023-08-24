<?php

use App\Http\Controllers\DetailProductController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\StatusController;
use App\Http\Controllers\UserController;
use App\Models\Status;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('/products', [ProductController::class, 'index']);
Route::get('/products/list', [ProductController::class, 'list']);
Route::post('/product', [ProductController::class, 'store']);
Route::get('/product/{id}', [ProductController::class, 'show']);
Route::put('/product/{id}', [ProductController::class, 'update']);
Route::delete('/product/{id}', [ProductController::class, 'destroy']);


Route::get('/rooms', [RoomController::class, 'index']);
Route::get('/rooms/list', [RoomController::class, 'list']);
Route::post('/room', [RoomController::class, 'store']);
Route::get('/room/{id}', [RoomController::class, 'show']);
Route::put('/room/{id}', [RoomController::class, 'update']);
Route::delete('/room/{id}', [RoomController::class, 'destroy']);

Route::get('/status', [StatusController::class, 'index']);
Route::get('/status/list', [StatusController::class, 'list']);
Route::post('/status', [StatusController::class, 'store']);
Route::get('/status/{id}', [StatusController::class, 'show']);
Route::put('/status/{id}', [StatusController::class, 'update']);
Route::delete('/status/{id}', [StatusController::class, 'destroy']);

Route::get('/roles', [RoleController::class, 'index']);
Route::get('/roles/list', [RoleController::class, 'list']);
Route::post('/role', [RoleController::class, 'store']);
Route::get('/role/{id}', [RoleController::class, 'show']);
Route::put('/role/{id}', [RoleController::class, 'update']);
Route::delete('/role/{id}', [RoleController::class, 'destroy']);

Route::get('/detail-products', [DetailProductController::class, 'index']);
Route::post('/detail-product', [DetailProductController::class, 'store']);
Route::get('/detail-product/{id}', [DetailProductController::class, 'show']);
Route::put('/detail-product/{id}', [DetailProductController::class, 'update']);
Route::delete('/detail-product/{id}', [DetailProductController::class, 'destroy']);

Route::get('/users', [UserController::class, 'index']);
Route::post('/user', [UserController::class, 'store']);
Route::get('/user/{id}', [UserController::class, 'show']);
Route::put('/user/{id}', [UserController::class, 'update']);
Route::delete('/user/{id}', [UserController::class, 'destroy']);
