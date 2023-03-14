<?php

namespace App\Http\Controllers\Gazetteer;

use App\Http\Controllers\Controller;


class CountryWikiController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     *
     */
    public function index()
    {
        ini_set('display_errors', 'On');
        error_reporting(E_ALL);

        $executionStartTime = microtime(true);

        $city = $_GET['city'];
        $city = str_replace(' ', '-', $city);

        $url='http://api.geonames.org/wikipediaSearchJSON?formatted=true&q=' . $city . '&maxRows=10&username=alistair';

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_URL,$url);

        $result2=curl_exec($ch);

        curl_close($ch);

        $decode = json_decode($result2,true);

        $output['status']['code'] = "200";
        $output['status']['name'] = "ok";
        $output['status']['description'] = "success";
        $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
        $output['data'] = $decode['geonames'];

        return json_encode($output);

    }
}
