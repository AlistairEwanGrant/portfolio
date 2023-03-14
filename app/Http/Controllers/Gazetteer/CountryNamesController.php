<?php

namespace App\Http\Controllers\Gazetteer;

use App\Http\Controllers\Controller;

use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;

class CountryNamesController extends Controller
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

        $countryBordersFileContent = file_get_contents(public_path().'/json/countryBorders.geo.json');
        $decode = json_decode($countryBordersFileContent,true);

        $country_names_and_iso_codes = [];

        foreach($decode['features'] as $country_data){
            array_push(
                $country_names_and_iso_codes,
                array(
                    "name"=> $country_data["properties"]["name"],
                    "iso_a2"=> $country_data["properties"]["iso_a2"],
                    "iso_a3"=> $country_data["properties"]["iso_a3"],
                )
            );
        };

        sort($country_names_and_iso_codes);

        $output['status']['code'] = "200";
        $output['status']['name'] = "ok";
        $output['status']['description'] = "success";
        $output['status']['returnedIn'] = intval((microtime(true) - $executionStartTime) * 1000) . " ms";
        $output['data'] = $country_names_and_iso_codes;

        header('Content-Type: application/json; charset=UTF-8');

        return json_encode($output);
    }
}
