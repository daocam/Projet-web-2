<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\VoitureController;
use App\Http\Controllers\ConstructeurController;
use App\Http\Controllers\ModeleController;
use App\Http\Controllers\User\AuthController;
use App\Http\Controllers\ProfilController;
use App\Http\Controllers\VilleController;
use App\Http\Controllers\TransmissionController;
use App\Http\Controllers\CarrosserieController;
use App\Http\Controllers\CarburantController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['prefix' => 'v1'], function() {
    Route::apiResource('voiture', VoitureController::class);
    Route::apiResource('constructeur', ConstructeurController::class);
    Route::apiResource('modele', ModeleController::class);
    Route::apiResource('ville', VilleController::class);
    Route::apiResource('profil', ProfilController::class);
    Route::apiResource('transmission', TransmissionController::class);
    Route::apiResource('carrosserie', CarrosserieController::class);
    Route::apiResource('carburant', CarburantController::class);
});

Route::post('v1/register', [AuthController::class,'inscrire'])->name('inscrire');
Route::post('v1/inscription-client', [ProfilController::class,'store'])->name('inscrire.client');





