<?php

namespace App\Http\Controllers\Company;


use App\Http\Controllers\Controller;
use App\Models\Department;
use App\Models\Personnel;
use Illuminate\Http\Request;

class DepartmentController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     */
    public function store(Request $request)
    {

        $department = new Department;

        $department->name = $request->name;

        $department->locationID = $request->locationID;

        $department->save();

        return response()->json($department);
    }

    public function edit(Request $request)
    {
        $department = Department::find($request->locationID);

        $department->name = $request->locationName;
        $department->locationID = $request->locationID;

        $department->save();

        return response()->json($department);
    }

    public function show(Request $request)
    {
        $Personnel = Personnel::where('departmentID', $request->departmentID)
        ->get();

        return response()->json($Personnel);
    }

    public function destroy(Request $request)
    {

        $location = Department::find($request->departmentID);

        $location->delete();

        return response()->json($location);
    }
}
