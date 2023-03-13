<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Personnel extends Model
{
    protected $fillable = ['firstName', 'lastName', 'jobTitle', 'email', 'departmentID'];


    public function department()
    {
        return $this->belongsTo(Department::class);
    }
}
