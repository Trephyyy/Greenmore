<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class YourLocationsController extends Controller
{
    public function index()
    {
        return Inertia::render('Profile/YourLocations');
    }
}