import React, { useEffect } from 'react';
import { MapContainer, Popup, Marker, TileLayer, useMap } from 'react-leaflet';
import L, { LatLngTuple } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { usePage } from '@inertiajs/react';




const GreenSpacesMap: React.FC = () => {
    const { props } = usePage();
    const addressPoints: any = props.greenSpaces; 
    console.log(typeof addressPoints);
    console.log(addressPoints.map((item: any)=>{
        console.log(item)
    }))



    const parkIcon = L.icon({
        iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
        shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    const gardenIcon = L.icon({
        iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-red.png',
        shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        iconSize:     [38, 95], // size of the icon
        shadowSize:   [50, 64], // size of the shadow
        iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
        shadowAnchor: [4, 62],  // the same for the shadow
        popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });


    const coords: LatLngTuple = [42.7339, 25.4858];
    const fixedPoint: LatLngTuple = [27.648598, 41.2447142]

    
    const nodeData = addressPoints.filter((item: { type: string; })  => item.type === 'node');
    const filteredData = addressPoints.filter((item: { type: string; })  => item.type === 'way' || item.type === 'relation');
 

    return (
        <div style={{ height: "600px" }}>
    


  <MapContainer center={[42, 25]} zoom={7} style={{ height: '400px', width: '100%' }}>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    {addressPoints.map((item: { id: any | React.Key | null | undefined; leisure: any, lat: number; lon: number; type: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }) => (
     
     <Marker key={item.id} position={[item.lat, item.lon]}>
        <Popup>
          <div>
            <p>Type: {item.leisure}</p>
            <p>ID: {item.id}</p>
          </div>
        </Popup>
      </Marker>
    ))}
    
  </MapContainer>


        </div>
        
    );
};

export default GreenSpacesMap;
