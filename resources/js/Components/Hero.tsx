import { Link } from '@inertiajs/react';
import { Box, Typography, Button, useMediaQuery , withTheme} from '@mui/material'
import { fontWeight } from '@mui/system';
import React from 'react'

interface HeroProps {
    theme: any;
  }

  const Hero: React.FC<HeroProps> = ({ theme }) => {
  return (  
    <div className='flex max-h-[100vh] min-h-[100vh] justify-center -mt-[4em]  bg-center bg-[url("/images/hero.jpg")] bg-cover w-full items-center h-[700px] flex-col text-white font-["OpenSans"] text-center'>
<Box sx={{py : 3 ,fontFamily : 'opensansbold'}}>
<h1 className='text-4xl text-transparent bg-gradient-to-r from-green-200 to-lime-300 bg-clip-text sm:text-6xl md:text-8xl'>Greenmore</h1>
  </Box>    

  <Box sx={{py : 3}}>
  <h2 className='text-2xl text-gray-200'>Your guide to nature</h2>
  </Box>
    </div>



  )
}

export default Hero