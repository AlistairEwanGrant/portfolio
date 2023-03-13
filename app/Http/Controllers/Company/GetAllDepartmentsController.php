<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class GetAllDepartmentsController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     *
     */
    public function index()
    {
        $allData = DB::select('SELECT * FROM departments ORDER BY name');

        return json_encode($allData);
    }
}
