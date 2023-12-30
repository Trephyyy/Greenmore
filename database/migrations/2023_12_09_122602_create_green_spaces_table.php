<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('green_spaces', function (Blueprint $table) {
            $table->id();
            $table->string('name')->nullable();
            $table->string('leisure')->nullable();
            $table->double('lat')->nullable();
            $table->double('lon')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('green_spaces');
    }
};
