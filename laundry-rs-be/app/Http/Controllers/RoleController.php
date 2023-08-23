<?php

namespace App\Http\Controllers;

use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index()
    {
        return response()->json([
            'message' => 'roles retrieved successfully',
            'data' => Role::latest()->paginate(5)
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'role_name' => 'required|string'
        ]);

        $role = Role::create($validated);
        return response()->json(['message' => 'product created successfully', 'data' => $role], 201);
    }
    public function show($id)
    {
        $role = Role::find($id);
        if (!$role) {
            return response()->json(['message' => 'role not found'], 404);
        }
        return response()->json(['message' => 'product retrieved successfully', 'data' => $role], 200);
    }

    public function update(Request $request, $id)
    {
        $role = Role::find($id);
        if (!$role) {
            return response()->json(['message' => 'role not found'], 404);
        }
        $validated = $request->validate([
            'role_name' => 'required|string'
        ]);
        $role->update($validated);
        return response()->json(['message' => 'product updated successfully', 'data' => $role], 200);
    }

    public function destroy($id)
    {
        $role = Role::find($id);
        if (!$role) {
            return response()->json(['message' => 'role not found'], 404);
        }
        $role->delete();
        return response()->json(['message' => 'product deleted successfully'], 200);
    }
    public function list()
    {
        return response()->json([
            'message' => 'roles retrieved successfully',
            'data' => Role::select(['id as value', 'role_name as label'])->latest()->get()
        ], 200);
    }
}
