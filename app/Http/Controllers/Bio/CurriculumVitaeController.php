<?php

namespace App\Http\Controllers\Bio;

use App\Http\Controllers\Controller;

class CurriculumVitaeController extends Controller
{
    /**
     * Show the profile for the given user.
     *
     *
     */

    public function index()
    {
        $file= public_path(). "/images/AlistairGrantCV.pdf";

        $headers = [
            'Content-Type' => 'application/pdf',
        ];

        return response()->download($file, 'AlistairGrantCV.pdf', $headers);
    }
}
