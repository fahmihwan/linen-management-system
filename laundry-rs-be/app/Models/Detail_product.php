<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Detail_product extends Model
{
    use HasFactory;
    protected $guarded = ['id'];

    public function product()
    {
        return $this->belongsTo(Product::class);
    }
    public function room()
    {
        return $this->belongsTo(Room::class);
    }
    public function status()
    {
        return $this->belongsTo(Status::class);
    }
}
