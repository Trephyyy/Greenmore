<?php

namespace App\Http\Controllers;

use App\Models\GreenSpace;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MapsController extends Controller
{
    public function showMap()
    {
        $data = GreenSpace::all();


        return Inertia::render('Profile/MapPage', [
            'greenSpaces' => $data,
        ]);

        // public function index()
        // {
        //     $data = GreenSpace::all();
        //     foreach ($data as $item) {
        //         $user = auth()->user();
        //         if ($user) {
        //             $item['$isLiked'] = $user->greenSpaces()->where('green_space_id', $item)->exists();
        //         }

        //         return Inertia::render('GreenSpacesMap', [
        //             'Profile/Maps' => $data,
        //         ]);
    }
}