<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'products retrieved successfully',
            'data' => Product::latest()->paginate(5)
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'product_name' => 'required|string'
        ]);

        $product = Product::create($validated);
        return response()->json(['message' => 'product created successfully', 'data' => $product], 201);
    }
    public function show($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'product not found'], 404);
        }
        return response()->json(['message' => 'product retrieved successfully', 'data' => $product], 200);
    }

    public function update(Request $request, $id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'product not found'], 404);
        }
        $validated = $request->validate([
            'product_name' => 'required|string'
        ]);
        $product->update($validated);
        return response()->json(['message' => 'product updated successfully', 'data' => $product], 200);
    }

    public function destroy($id)
    {
        $product = Product::find($id);
        if (!$product) {
            return response()->json(['message' => 'product not found'], 404);
        }
        $product->delete();
        return response()->json(['message' => 'product deleted successfully'], 200);
    }
    public function list()
    {
        return response()->json([
            'message' => 'products retrieved successfully',
            'data' => Product::select(['id as value', 'product_name as label'])->latest()->get()
        ], 200);
    }
}
