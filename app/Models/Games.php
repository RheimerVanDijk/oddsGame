<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Games extends Model
{
    protected $fillable = [
        'thuis',
        'uit',
        'tijd',
        'win',
        'gelijk',
        'verlies',
    ];
}
