<?php

namespace App\Http\Controllers\Gazetteer;

use App\Http\Controllers\Controller;


class CitiesInformationController extends Controller
{
    public function index()
    {
        $countryCode = $_GET['country_code'];

        $curl = curl_init();

        curl_setopt_array($curl, [
            CURLOPT_URL => "https://countries-cities.p.rapidapi.com/location/country/" . $countryCode . "/city/list?format=json&min_population=200000",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => [
                "X-RapidAPI-Host: countries-cities.p.rapidapi.com",
                "X-RapidAPI-Key: 49b1a7f4f2msh38d3aed72cbf6f9p108492jsnac14dbae4067"
            ],
        ]);

        $response = curl_exec($curl);
        $err = curl_error($curl);

        curl_close($curl);

        if ($err) {
            return "cURL Error #:" . $err;
        } else {
            return $response;
        }
    }
}
