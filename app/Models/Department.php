<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Department extends Model
{
    protected $fillable = ['name', 'locationID'];



    public function personnel()
    {
        return $this->belongsTo(Personnel::class);
    }

    public function locations()
    {
        return $this->hasMany(Location::class);
    }
}
