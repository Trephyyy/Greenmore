<?php

namespace App\Http\Controllers;

use App\Models\GreenSpace;
use Illuminate\Http\Request;

class GreenSpaceController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return GreenSpace::all();
    }

    /**
     * Show the form for creating a new resource.
     *//* 
public function create()
{
//TODO: ADD IF TIME REMAINING
}
*/
    /**
     * Store a newly created resource in storage.
     */
    /*   public function store(Request $request)
      {
          
      } */

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return GreenSpace::findOrFail([$id]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(GreenSpace $greenSpace)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, GreenSpace $greenSpace)
    {

    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(GreenSpace $greenSpace)
    {
        //
    }
}
