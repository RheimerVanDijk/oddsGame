<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bids extends Model
{
    protected $fillable = [
        'bidType',
        'bid',
        'user_id',
        'game_id',
    ];
}
