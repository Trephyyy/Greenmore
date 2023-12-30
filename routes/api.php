<?php

use App\Http\Controllers\OSMDataController;
use App\Models\GreenSpace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('/v1/getGreenSpaces', function (Request $request) {
    return GreenSpace::all();
});

Route::post('/v1/sortGreenSpaces', [OSMDataController::class, 'sort'])->name('likePlace');