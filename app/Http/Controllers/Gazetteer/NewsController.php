<?php

namespace App\Http\Controllers\Gazetteer;

use App\Http\Controllers\Controller;


class NewsController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     *
     */
    public function index()
    {
        $curl = curl_init();

        $country = $_GET['country'];

        curl_setopt_array($curl, [
            CURLOPT_URL => "https://newscatcher.p.rapidapi.com/v1/search?q=" . $country .  "&lang=en&page=1",
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_ENCODING => "",
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 30,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => "GET",
            CURLOPT_HTTPHEADER => [
                "x-rapidapi-host: free-news.p.rapidapi.com",
                "x-rapidapi-key: 49b1a7f4f2msh38d3aed72cbf6f9p108492jsnac14dbae4067"
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
