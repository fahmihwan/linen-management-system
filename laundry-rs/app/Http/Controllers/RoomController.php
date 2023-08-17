<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'rooms retrieved successfully',
            'data' => Room::latest()->paginate(5)
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'room_name' => 'required|string'
        ]);
        $product = Room::create($validated);
        return response()->json(['message' => 'room created successfully', 'data' => $product], 201);
    }
    public function show($id)
    {
        $product = Room::find($id);
        if (!$product) {
            return response()->json(['message' => 'room not found'], 404);
        }
        return response()->json(['message' => 'room retrieved successfully', 'data' => $product], 200);
    }

    public function update(Request $request, $id)
    {
        $product = Room::find($id);
        if (!$product) {
            return response()->json(['message' => 'room not found'], 404);
        }
        $validated = $request->validate([
            'room_name' => 'required|string'
        ]);
        $product->update($validated);
        return response()->json(['message' => 'room updated successfully', 'data' => $product], 200);
    }

    public function destroy($id)
    {
        $product = Room::find($id);
        if (!$product) {
            return response()->json(['message' => 'room not found'], 404);
        }
        $product->delete();
        return response()->json(['message' => 'room deleted successfully'], 204);
    }
}