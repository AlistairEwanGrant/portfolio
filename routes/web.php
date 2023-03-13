<?php

use App\Http\Controllers\Bio\CurriculumVitaeController;
use App\Http\Controllers\Company\DepartmentController;
use App\Http\Controllers\Company\GetAllController;
use App\Http\Controllers\Company\GetAllDepartmentsController;
use App\Http\Controllers\Company\GetAllLocationsController;
use App\Http\Controllers\Company\LocationController;
use App\Http\Controllers\Company\PersonnelController;
use App\Http\Controllers\MailController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

//Bio Site
Route::get('/', function () {
    return view('home/welcome');
});

Route::get('/under_construction', function () {
    return view('home/construction');
});

Route::get('/skills', function () {
    return view('home/skills');
})->name('skills');

Route::get('/experience', function () {
    return view('home/experience');
})->name('experience');

Route::get('/cv', function () {
    return view('home/cv');
})->name('cv');

Route::get('/portfolio', function () {
    return view('home/portfolio');
});

Route::get('/contact', function () {
    return view('home/contact');
})->name('contact');;

Route::get('/curriculum-vitae/download', [CurriculumVitaeController::class, 'index'])->name('curriculumVitae.index');
Route::put('/mail', [MailController::class, 'store'])->name('mail');



require __DIR__ . '/auth.php';
