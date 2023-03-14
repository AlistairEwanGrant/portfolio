<?php

namespace App\Http\Controllers\Gazetteer;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;


class CountryBordersController extends Controller
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

        $countryCode = $_GET['country_code'];

        $countryBordersFileContent = file_get_contents(public_path().'/json/countryBorders.geo.json');
        $decode = json_decode($countryBordersFileContent,true);

        $country_borders = [];

        foreach($decode['features'] as $country_data){
            if($country_data['properties']["iso_a2"] == $countryCode){
                $country_borders=$country_data;
                break;
            }
        }

        $output['status']['code'] = "200";
        $output['status']['name'] = "ok";
        $output['status']['description'] = "success";     $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
        $output['data'] = $country_borders;


        header('Content-Type: application/json; charset=UTF-8');

        return json_encode($output);

    }
}
