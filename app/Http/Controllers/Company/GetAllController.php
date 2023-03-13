<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Models\Personnel;
use Illuminate\Support\Facades\DB;

class GetAllController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     *
     */
    public function index()
    {
        $personnel = DB::select('SELECT p.lastName, p.firstName, p.jobTitle, p.id, p.email, d.name as department, l.name as location FROM personnels p LEFT JOIN departments d ON (d.id = p.departmentID) LEFT JOIN locations l ON (l.id = d.locationID) ORDER BY p.lastName, p.firstName, d.name, l.name');

        return json_encode($personnel);
    }
}
