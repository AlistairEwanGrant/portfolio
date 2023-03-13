<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;
use App\Models\Personnel;
use Illuminate\Http\Request;

class PersonnelController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     */
    public function store(Request $request)
    {

        $personnel = new Personnel;
        $personnel->firstName = $request->firstNameEdit;
        $personnel->lastName = $request->lastNameForEdit;
        $personnel->email = $request->emailForEdit;
        $personnel->jobTitle = $request->jobTitleForEdit;
        $personnel->departmentID = $request->departmentForEdit;

        $personnel->save();

        return response()->json($personnel);
    }

    public function show(Request $request)
    {
        $personnel = Personnel::find($request->id);

        return response()->json($personnel);
    }

    public function edit(Request $request)
    {
        $personnel = Personnel::find($request->personnelID);

        $personnel->firstName = $request->firstNameEdit;
        $personnel->lastName = $request->lastNameForEdit;
        $personnel->jobTitle = $request->jobTitleForEdit;
        $personnel->email = $request->emailForEdit;
        $personnel->departmentID = $request->departmentForEdit;

        $personnel->save();

        return response()->json($personnel);
    }

    public function destroy(Request $request)
    {

        $personnel = Personnel::find($request->personnelID);

        $personnel->delete();

        return response()->json($personnel);
    }
}
