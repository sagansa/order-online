<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\HomeController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', HomeController::class)->name('home');

Route::middleware('auth')->group(function() {
    Route::get('/dashboard', DashboardController::class)->name('dashboard');
});

require __DIR__.'/auth.php';
