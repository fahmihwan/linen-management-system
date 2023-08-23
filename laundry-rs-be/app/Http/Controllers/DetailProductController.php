<?php

namespace App\Http\Controllers;

use App\Models\Detail_product;
use Illuminate\Http\Request;
use App\Models\Product;

class DetailProductController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'detail products retrieved successfully',
            'data' => Detail_product::with(['product:id,product_name', 'room:id,room_name', 'status:id,status_name'])->latest()->paginate(10)
        ], 200);
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'product_id' => 'required',
            'room_id' => 'required',
            'qr_code' => 'required',
            'status_id' => 'required'
        ]);

        $product = Detail_product::create($validated);
        return response()->json(['message' => 'detail product created successfully', 'data' => $product], 201);
    }
    public function show($id)
    {
        $product = Detail_product::with(['product:id,product_name', 'room:id,room_name', 'status:id,status_name'])->find($id);
        if (!$product) {
            return response()->json(['message' => 'detail product not found'], 404);
        }
        return response()->json(['message' => 'detail product retrieved successfully', 'data' => $product], 200);
    }

    public function update(Request $request, $id)
    {
        $product = Detail_product::find($id);
        if (!$product) {
            return response()->json(['message' => 'detail product not found'], 404);
        }
        $validated = $request->validate([
            'product_id' => 'required',
            'room_id' => 'required',
            'qr_code' => 'required',
            'status_id' => 'required'
        ]);
        $product->update($validated);
        return response()->json(['message' => 'detail product updated successfully', 'data' => $product], 200);
    }

    public function destroy($id)
    {
        $product = Detail_product::find($id);
        if (!$product) {
            return response()->json(['message' => 'detail product not found'], 404);
        }
        $product->delete();
        return response()->json(['message' => 'detail product deleted successfully'], 200);
    }
}
