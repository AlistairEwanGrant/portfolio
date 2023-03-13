<?php

use App\Http\Controllers\Company\CompanyController;
use App\Http\Controllers\Company\DepartmentController;
use App\Http\Controllers\Company\GetAllController;
use App\Http\Controllers\Company\GetAllDepartmentsController;
use App\Http\Controllers\Company\GetAllLocationsController;
use App\Http\Controllers\Company\LocationController;
use App\Http\Controllers\Company\PersonnelController;
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

//company
Route::get('/company-directory', [CompanyController::class, 'show']);
Route::get('/company-directory/get-all', [GetAllController::class, 'index']);
Route::get('/company-directory/get-all-departments', [GetAllDepartmentsController::class, 'index']);
Route::get('/company-directory/get-all-locations', [GetAllLocationsController::class, 'index']);
Route::resource('/company-directory/location', LocationController::class);
Route::resource('/company-directory/department', DepartmentController::class);
Route::resource('/company-directory/personnel', PersonnelController::class);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
