<?php

namespace App\Http\Controllers;

use App\Models\GreenSpace;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;
use Inertia\Response;

class Cluster
{
    public $points = [];
    public function addPoint($point)
    {
        $this->points[] = $point;
    }
}
class OSMDataController extends Controller
{

    public function index()
    {
        $data = GreenSpace::all();

        //return Inertia::render('GreenSpacesMap', [
        return Inertia::render('MapPage', [
            'greenSpaces' => $data,
        ]);
    }
    public function sort(Request $request)
    {
        $points = GreenSpace::all();

        $lat = $request->lat;
        $lon = $request->lon;

        function distance($lat1, $lon1, $lat2, $lon2, $unit)
        {
            if (($lat1 == $lat2) && ($lon1 == $lon2)) {
                return 0;
            } else {
                $theta = $lon1 - $lon2;
                $dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) + cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
                $dist = acos($dist);
                $dist = rad2deg($dist);
                $miles = $dist * 60 * 1.1515;
                $unit = strtoupper($unit);

                if ($unit == "K") {
                    return ($miles * 1.609344);
                } else if ($unit == "N") {
                    return ($miles * 0.8684);
                } else {
                    return $miles;
                }
            }
        }

        foreach ($points as $point) {
            $distance_km = distance($lat, $lon, $point['lat'], $point['lon'], "K");
            $point['distance'] = $distance_km;
        }
        $points = $points->sortBy('distance')->values();

        $points = $points->take(100);




        return $points;


        /*   return Inertia::render('GreenSpacesMap', [
              'greenSpaces' => $data,
          ]); */
    }






}