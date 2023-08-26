<?php

namespace App\Http\Controllers;

use App\Models\Activity;
use Illuminate\Http\Request;

class ActivityController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'activity retrieved successfully',
            'data' => Activity::latest()->paginate(5)
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'activity_name' => 'required|string'
        ]);
        $product = Activity::create($validated);
        return response()->json(['message' => 'activity created successfully', 'data' => $product], 201);
    }
    public function show($id)
    {
        $product = Activity::find($id);
        if (!$product) {
            return response()->json(['message' => 'activity not found'], 404);
        }
        return response()->json(['message' => 'activity retrieved successfully', 'data' => $product], 200);
    }

    public function update(Request $request, $id)
    {
        $product = Activity::find($id);
        if (!$product) {
            return response()->json(['message' => 'activity not found'], 404);
        }
        $validated = $request->validate([
            'activity_name' => 'required|string'
        ]);
        $product->update($validated);
        return response()->json(['message' => 'activity updated successfully', 'data' => $product], 200);
    }

    public function destroy($id)
    {
        $product = Activity::find($id);
        if (!$product) {
            return response()->json(['message' => 'activity not found'], 404);
        }
        $product->delete();
        return response()->json(['message' => 'activity deleted successfully'], 200);
    }
    public function list()
    {
        return response()->json([
            'message' => 'activity retrieved successfully',
            'data' => Activity::select(['id as value', 'activity_name as label'])->latest()->get()
        ], 200);
    }
}
