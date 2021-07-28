<?php

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

Route::get('/education/meta-trader-4', function () {
    return view('welcome');
});
Route::get('/trading-memory/{id}', function () {
    return view('welcome');
});
Route::get('/adminpanel/add-promotion', function () {
    return view('welcome');
});

Route::get('/adminpanel/promotions', function () {
    return view('welcome');
});
Route::get('/adminpanel/edit-promotion/{id}', function () {
    return view('welcome');
});
Route::get('/adminpanel/add-slider', function () {return view('welcome');});
Route::get('/adminpanel/edit-slider/{id}', function () {return view('welcome');});
Route::get('/adminpanel/manage-sliders', function () {return view('welcome');});

// Route::get('/', function () {
//     return view('home');
// });
Route::view('/{path?}', 'welcome');
Route::get('{reactRoutes}', function () {
    return view('welcome');
});
