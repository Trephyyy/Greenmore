<?php
use App\Http\Controllers\MapsController;
use App\Http\Controllers\YourLocationsController;
use App\Http\Controllers\GreenSpaceController;
use App\Http\Controllers\OSMDataController;
use App\Http\Controllers\ProfileController;
use App\Models\GreenSpace;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    // return Inertia::render('Welcome', [
    return Inertia::render('HomePage', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/osm', [OSMDataController::class, 'index']);

Route::get('/yourlocations', [YourLocationsController::class, 'index']);

Route::get('/maps', [MapsController::class, 'showMap']);


Route::resource('/GreenSpaces', GreenSpaceController::class);

require __DIR__ . '/auth.php';
