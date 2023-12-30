import { Paper, Typography, Box } from '@mui/material'
import React from 'react'
interface Props {
    props: any,
    myLoc: any
}
const Tile = ({ props, myLoc} : Props) => {
  return (
    <div className='rounded-md px-4 py-4 text-white bg-gray-800 m-8'>
      
      <img className='max-w-[450px] max-h-[225px]' src={"https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + props.lat + ',' + props.lon + "&fov=80&heading=70&pitch=0&key=AIzaSyAKd0XMNMihuvX21CYeOVeLQbfoUSp3JKI"}  alt="Placeholder"/>
       <p className='pt-2'>{props.lat}, {props.lon}</p>
       <p>{props.distance < 2 ? `${Math.round(props.distance * 1000)}m` : `${props.distance.toFixed(1)}km`} away</p>
       <div className='mt-5 mb-2 space-x-4'>
        <a href={'https://www.google.com/maps/dir/' + myLoc[0] + ',' + myLoc[1] + '/' + props.lat + ',' + props.lon }>
      <button  className='p-2 bg-green-700 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19 10c0 3.976-7 11-7 11s-7-7.024-7-11s3.134-7 7-7s7 3.024 7 7z"/><circle cx="12" cy="10" r="3"/></g></svg></button>
      </a>
      
       </div>
       
   
</div>
       
   
    

  )
}

export default Tile