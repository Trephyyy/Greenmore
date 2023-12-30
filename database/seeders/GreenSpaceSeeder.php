<?php

namespace Database\Seeders;

use App\Models\GreenSpace;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class GreenSpaceSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $response = Http::asForm()->post('http://overpass-api.de/api/interpreter', [
            'data' => '
            [out:json];
                (
                    area["wikipedia"="bg:България"];
                    nwr["leisure"="park"](area);

                    area["wikipedia"="bg:България"];
                    nwr["leisure"="garden"](area);                
                );
                out geom;
            >;'
        ]);

        $data = $response->json();
        $result = $data['elements'];


        function dist2($a, $b)
        {
            $lat1 = deg2rad($a[0]);
            $lon1 = deg2rad($a[1]);
            $lat2 = deg2rad($b[0]);
            $lon2 = deg2rad($b[1]);

            $dlat = $lat2 - $lat1;
            $dlon = $lon2 - $lon1;

            $a = sin($dlat / 2) * sin($dlat / 2) +
                cos($lat1) * cos($lat2) *
                sin($dlon / 2) * sin($dlon / 2);
            $c = 2 * atan2(sqrt($a), sqrt(1 - $a));

            $radius = 6371000; // Earth's radius in meters
            $distance = $radius * $c;

            return $distance;
        }

        function fuse($points, $d)
        {
            $d2 = pow($d, 2);
            $n = count($points);
            $taken = array_fill(0, $n, false);
            $ret = array();

            for ($i = 0; $i < $n; $i++) {
                if (!$taken[$i]) {
                    $count = 1;
                    $point = array($points[$i][0], $points[$i][1], $points[$i][2]);
                    $taken[$i] = true;

                    for ($j = $i + 1; $j < $n; $j++) {
                        if (dist2($points[$i], $points[$j]) < $d2) {
                            $point[0] += $points[$j][0];
                            $point[1] += $points[$j][1];


                            $count++;
                            $taken[$j] = true;
                        }
                    }

                    $point[0] /= $count;
                    $point[1] /= $count;
                    $ret[] = $point;
                }
            }

            return $ret;
        }
        $fuse_points = [];

        foreach ($result as &$item) {
            if ($item['type'] != 'area') {
                if (isset($item['bounds'])) {
                    if (isset($item['bounds'])) {
                        $item['center'] = [
                            'lat' => ($item['bounds']['minlat'] + $item['bounds']['maxlat']) / 2,
                            'lon' => ($item['bounds']['minlon'] + $item['bounds']['maxlon']) / 2,
                        ];
                    }
                    if (isset($item['name'])) {
                        $fuse_points[] = [$item['center']['lat'], $item['center']['lon'], $item['name']];
                    } else if (isset($item['tags']['leisure'])) {
                        $fuse_points[] = [$item['center']['lat'], $item['center']['lon'], $item['tags']['leisure']];
                    } else {
                        $fuse_points[] = [$item['center']['lat'], $item['center']['lon'], $item['tags']['leisure']];

                    }


                }
                if (!isset($item['bounds'])) {
                    $fuse_points[] = [$item['lat'], $item['lon'], $item['tags']['leisure']];
                }
            }

        }


        $merged_points = fuse($fuse_points, 8);




        foreach ($merged_points as $point) {
            DB::table('green_spaces')->insert([
                'leisure' => $point[2],
                'lat' => $point[0],
                'lon' => $point[1],
            ]);
        }


    }
}
