<?php

namespace App\Http\Controllers\Gazetteer;

use App\Http\Controllers\Controller;


class GetCountryInfoController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     *
     */
    public function index()
    {
        $country = $_GET['country_code'];

        ini_set('display_errors', 'On');
        error_reporting(E_ALL);

        $executionStartTime = microtime(true);

        $url = 'http://api.geonames.org/countryInfoJSON?formatted=true&country=' . $country . '&username=alistair';

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL, $url);

        $result = curl_exec($ch);

        curl_close($ch);

        $decode = json_decode($result, true);


        $output['status']['code'] = "200";
        $output['status']['name'] = "ok";
        $output['status']['description'] = "success";
        $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
        $output['data'] = $decode['geonames'];

        header('Content-Type: application/json; charset=UTF-8');

        return json_encode($output);
    }
}
