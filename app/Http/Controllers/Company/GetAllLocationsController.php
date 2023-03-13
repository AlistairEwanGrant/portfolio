<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class GetAllLocationsController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     *
     */
    public function index()
    {
        $allData = DB::select('SELECT * FROM locations ORDER BY name');

        return json_encode($allData);
    }
}
