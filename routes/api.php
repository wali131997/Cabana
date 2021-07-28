<?php

use Illuminate\Http\Request;

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
Route::post('/get_pamm_accounts', 'FrontController@get_pamm_accounts');
Route::post('/get_pamm_account_detail/{id}', 'FrontController@get_pamm_account_detail');
Route::post('/get_client_location', 'FrontController@get_client_location');
Route::post('/get_countries', 'FrontController@get_countries');
Route::post('/admin_login', 'FrontController@admin_login');
Route::post('/admin_check_auth', 'FrontController@admin_check_auth');
Route::post('/add_promotion', 'FrontController@add_promotion');
Route::post('/get_promotions', 'FrontController@get_promotions');

Route::post('/update_promotion', 'FrontController@update_promotion');
Route::post('/get_promotion_by_id', 'FrontController@get_promotion_by_id');
Route::post('/get_all_promotions', 'FrontController@get_all_promotions');
Route::post('/delete_promotion', 'FrontController@delete_promotion');

Route::post('/add_slider', 'FrontController@add_slider');
Route::post('/update_slider', 'FrontController@update_slider');
Route::post('/get_all_sliders', 'FrontController@get_all_sliders');
Route::post('/get_slider_by_id', 'FrontController@get_slider_by_id');
Route::post('/delete_slider', 'FrontController@delete_promotion');

Route::post('/upload_image', 'FrontController@upload_image');
Route::post('/get_home_sliders', 'FrontController@get_home_sliders');


Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
