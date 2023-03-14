<?php

namespace App\Http\Controllers\Gazetteer;

use App\Http\Controllers\Controller;


class WeatherIconController extends Controller
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

        $weatherCondition = file_get_contents(public_path().'/json/weatherConditions.json');

        return json_decode($weatherCondition);

    }
}
