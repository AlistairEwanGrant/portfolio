<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;

class CompanyController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     *
     */
    public function show()
    {
        return view('company.company-home');
    }
}
