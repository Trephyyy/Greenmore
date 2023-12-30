import { Inertia } from '@inertiajs/inertia';
import { Link, router } from '@inertiajs/react'
import { Box, Typography, Button, Grid } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

interface HomePageTileProps {
  props: any; // replace 'any' with the actual type of your props
  likedPosts: any;
  myLoc: any;
}

const HomePageTile = ({props, likedPosts, myLoc}: HomePageTileProps) => {



  return (
    <div className='rounded-md'>
    <img className='max-w-[450px] max-h-[225px]' src={"http://placehold.it/600x300"}  alt="Placeholder"/>
{/*     <img className='max-w-[450px] max-h-[225px]' src={"https://maps.googleapis.com/maps/api/streetview?size=600x300&location=" + props.lat + ',' + props.lon + "&fov=80&heading=70&pitch=0&key="}  alt="Placeholder"/> */}
       <p className='pt-2'>{props.lat}, {props.lon}</p>
       <p>{props.distance < 2 ? `${Math.round(props.distance * 1000)}m` : `${props.distance.toFixed(1)}km`} away</p>
       <div className='mt-5 space-x-4'>
        <a href={'https://www.google.com/maps/dir/' + myLoc[0] + ',' + myLoc[1] + '/' + props.lat + ',' + props.lon }>

      <button  className='p-2 bg-green-700 rounded-md'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M19 10c0 3.976-7 11-7 11s-7-7.024-7-11s3.134-7 7-7s7 3.024 7 7z"/><circle cx="12" cy="10" r="3"/></g></svg></button>
      </a>
      
       </div>
       
   
</div>
    

  )
}

export default HomePageTile