<?php

namespace App\Http\Controllers\Gazetteer;

use App\Http\Controllers\Controller;


class OpenCageController extends Controller
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

        $lat = $_GET['lat'];
        $lng = $_GET['lng'];

        $url='https://api.opencagedata.com/geocode/v1/json?q=' . $lat . '+' . $lng . '&key=3fae4a1fb960434fbb38d7333d3efcf8';

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
        $output['data'] = $decode;

        header('Content-Type: application/json; charset=UTF-8');

        return json_encode($output);
    }
}
