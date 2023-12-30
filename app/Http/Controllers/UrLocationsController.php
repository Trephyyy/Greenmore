<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class UrLocationsController extends Controller
{
    public function showDashboard()
    {
        return Inertia::render('Dashboard');
    }
}