<?php

namespace App\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Stevebauman\Location\Facades\Location;
use Illuminate\Support\Fluent;

class FrontController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get_pamm_accounts()
    {




        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://secure.cabanacapitals.com/rest/pamm/accounts?version=1.0.0',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
		CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_HTTPHEADER => array(
            'Authorization: Bearer MzllZjQ4ZGM5MGU3NzVkYzY0Yzc5ZjVhYjAxODg4ZTlkZGY0M2NlOTAwYTZmY2QxNjk2MzVlYTcwMjgwNjQwOQ',
            'Cookie: device_view=full'
        ),
        ));

        $res = curl_exec($curl);
				curl_close($curl);

		//$response = ['status' => 200 , 'response' => $res , 'info' => curl_getinfo($curl) , 'errorno' =>  curl_errno($curl) , 'error' => curl_error($curl)];
        return $res;

    }
    public function get_pamm_account_detail($id)
    {




        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://secure.cabanacapitals.com/rest/pamm/account/'.$id.' ?version=1.0.0',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
		CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_HTTPHEADER => array(
            'Authorization: Bearer MzllZjQ4ZGM5MGU3NzVkYzY0Yzc5ZjVhYjAxODg4ZTlkZGY0M2NlOTAwYTZmY2QxNjk2MzVlYTcwMjgwNjQwOQ',
            'Cookie: device_view=full'
        ),
        ));

        $res = curl_exec($curl);
				curl_close($curl);

		//$response = ['status' => 200 , 'response' => $res , 'info' => curl_getinfo($curl) , 'errorno' =>  curl_errno($curl) , 'error' => curl_error($curl)];
        return $res;

    }
    protected function url($ip)
    {
        return "http://www.geoplugin.net/php.gp?ip=$ip";
    }
    public function get_client_location(Request $request){
        // $position = Location::get($request->ip());
        // $response = ['res' => $position];
        // return $response;


        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://www.geoplugin.net/php.gp?ip='.$request->ip,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
		CURLOPT_SSL_VERIFYPEER => false,

        ));

        $res = curl_exec($curl);
		curl_close($curl);
        $res = unserialize($res);
        return $res;

        // try {
        //     $response = unserialize($this->url($request->ip));
        //     return new Fluent($response);
        // } catch (Exception $e) {
        //     return false;
        // }
    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
