<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class GreenSpace extends Model
{
    use HasFactory;

    protected $table = 'green_spaces';

    protected $fillable = [
        'name',
        'likes',
        'leisure',
        'lat',
        'lon',
    ];
   
}