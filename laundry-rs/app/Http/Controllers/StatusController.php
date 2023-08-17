<?php

namespace App\Http\Controllers;


use App\Models\Status;
use Illuminate\Http\Request;

class StatusController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'status retrieved successfully',
            'data' => Status::latest()->paginate(5)
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'status_name' => 'required|string'
        ]);
        $product = Status::create($validated);
        return response()->json(['message' => 'status created successfully', 'data' => $product], 201);
    }
    public function show($id)
    {
        $product = Status::find($id);
        if (!$product) {
            return response()->json(['message' => 'status not found'], 404);
        }
        return response()->json(['message' => 'status retrieved successfully', 'data' => $product], 200);
    }

    public function update(Request $request, $id)
    {
        $product = Status::find($id);
        if (!$product) {
            return response()->json(['message' => 'status not found'], 404);
        }
        $validated = $request->validate([
            'status_name' => 'required|string'
        ]);
        $product->update($validated);
        return response()->json(['message' => 'status updated successfully', 'data' => $product], 200);
    }

    public function destroy($id)
    {
        $product = Status::find($id);
        if (!$product) {
            return response()->json(['message' => 'status not found'], 404);
        }
        $product->delete();
        return response()->json(['message' => 'status deleted successfully'], 204);
    }
}
