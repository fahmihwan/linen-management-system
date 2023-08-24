<?php

namespace App\Http\Controllers;

use App\Models\Profile;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class UserController extends Controller
{

    public function index(Request $request)
    {
        return response()->json([
            'message' => 'users retrieved successfully',
            'data' => User::with(['profile', 'role'])->latest()->paginate(5)
        ], 200);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'profile_name' => 'required|string',
            'address' => 'required',
            'telp' => 'required',
            'username' => 'required',
            'password' => 'required',
            'role_id' => 'required',
        ]);

        if ($request->file('image')) {
            $validated['image'] = $request->file('image')->store('profile_image', 'public');
        }

        try {
            $profile = Profile::create([
                'profile_name' => $validated['profile_name'],
                'address' => $validated['address'],
                'telp' => $validated['telp'],
            ]);

            User::create([
                'image' => $validated['image'],
                'username' => $validated['username'],
                'password' => Hash::make($validated['password']),
                'role_id' => $validated['role_id'],
                'profile_id' => $profile->id
            ]);
            return response()->json(['message' => 'user created successfully'], 201);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 404);
        }
    }
    public function show($id)
    {
        $user = User::with(['profile', 'role'])->find($id);
        if (!$user) {
            return response()->json(['message' => 'user not found'], 404);
        }
        return response()->json(['message' => 'user retrieved successfully', 'data' => $user], 200);
    }

    public function update(Request $request, $id)
    {
        $validated = $request->validate([
            'profile_name' => 'required|string',
            'address' => 'required',
            'telp' => 'required',
            'username' => 'required',
            'password' => 'required',
            'role_id' => 'required',
        ]);

        try {
            $user =  User::find($id);
            if ($user) {
                if ($request->file('image')) {
                    $validated['image'] = $request->file('image')->store('profile_image', 'public');
                    Storage::disk('public')->delete($user->image);
                }
            }
            Profile::where('id', $user->profile_id)->update([
                'profile_name' => $validated['profile_name'],
                'address' => $validated['address'],
                'telp' => $validated['telp'],
            ]);

            $user_data = [
                'image' => $request->image,
                'username' => $validated['username'],
                'password' => $validated['password'],
                'role_id' => $validated['role_id']
            ];
            if ($request->password) {
                $user_data['password'] = Hash::make($request->password);
            }
            User::where('id', $id)->update($user_data);
            return response()->json(['message' => 'user updated successfully'], 200);
        } catch (\Throwable $th) {
            return response()->json(['message' => $th->getMessage()], 404);
        }
    }

    public function destroy($id)
    {
        $user = User::find($id);
        if (!$user) {
            Profile::destroy($user->profle_id);
            return response()->json(['message' => 'user not found'], 404);
        }
        $user->delete();
        return response()->json(['message' => 'user deleted successfully'], 200);
    }
    // public function list()
    // {
    //     return response()->json([
    //         'message' => 'users retrieved successfully',
    //         'data' => User::select(['id as value', 'room_name as label'])->latest()->get()
    //     ], 200);
    // }
}
