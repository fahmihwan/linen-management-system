<?php

use App\Models\Activity;
use App\Models\Detail_product;
use App\Models\Room;
use App\Models\Status;
use App\Models\User;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('histories', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(User::class);
            $table->foreignIdFor(Activity::class);
            $table->foreignIdFor(Detail_product::class);
            $table->dateTime('date');
            $table->foreignIdFor(Status::class);
            $table->foreignIdFor(Room::class);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('histories');
    }
};
