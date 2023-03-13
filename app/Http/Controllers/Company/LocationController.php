<?php

namespace App\Http\Controllers\Company;

use App\Http\Controllers\Controller;

use App\Models\Location;
use Illuminate\Http\Request;

class LocationController extends Controller
{
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     *
     */
    public function store(Request $request)
    {
        $location = new Location;

        $location->name = $request->name;

        $location->save();

        return response()->json($location);
    }

    public function edit(Request $request)
    {
        $location = Location::find($request->locationID);

        $location->name = $request->locationName;

        $location->save();

        return response()->json($location);
    }

    public function destroy(Request $request)
    {

        $location = Location::find($request->locationID);

        $location->delete();

        return response()->json($location);
    }
}
