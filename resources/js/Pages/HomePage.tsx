import React, { useEffect, useState } from 'react';
import { makeStyles , Box, Typography, createTheme, useMediaQuery, Button, ThemeProvider, responsiveFontSizes, Paper, Grid } from '@mui/material';
import NavbarHome from '@/Components/NavbarHome';
import Hero from '@/Components/Hero';
import SubHero from '@/Components/SubHero';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Footer from '@/Components/Footer';
import HomePageTile from '@/Components/HomePageTile';
import { Head, Link } from '@inertiajs/react';
import axios from 'axios';
import { PageProps } from '@/types';
import { WindowSharp } from '@mui/icons-material';




const HomePage = ({ auth }: PageProps) => {

   const user = auth.user;
    let theme = createTheme({
        palette: {
            primary: {
              main: '#FF8F8F',
            },
            secondary: {
              main: '#EEF296',
            },
            success: {
              main: '#9ADE7B',
            },
          },
          typography: {
            fontFamily: 'OpenSans',
            h1: {
              fontSize: '3.5rem',
              letterSpacing: '0.025em',
            },
            h2: {
              fontSize: '3rem',
              letterSpacing: '0.02em',
            },
            h3: {
              fontSize: '2rem',
              letterSpacing: '0.015em',
            },
            h4: {
              fontSize: '1.5rem',
            },
            h5: {
              fontSize: '0.875rem',
            },
            h6: {
              fontSize: '0.75rem',
            },
          },
        components: {
          MuiButtonBase: {
            defaultProps: {
              disableRipple: true,
            },
          },
        },
      });

      theme = responsiveFontSizes(theme);

    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
      const scrollListener = () => {
        setIsTop(window.scrollY < 500);
      };

   

      window.addEventListener('scroll', scrollListener);

      return () => {
        window.removeEventListener('scroll', scrollListener);
      };}, []);

      const [lat, setLat] = useState(0);
      const [lon, setLon] = useState(0);
      const [greenSpaces, setGreenSpaces] = useState([]);


      useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);
            console.log("Latitude is :", position.coords.latitude);
            console.log("Longitude is :", position.coords.longitude);
            
        });
        
    }, []);
    function getLocation ()  {
      navigator.geolocation.getCurrentPosition(function(position) {
        setLat(position.coords.latitude);
        setLon(position.coords.longitude);
});
    }

    useEffect(() => {
      // Check if lat and lon are not 0 before sending the POST request
      if (lat !== 0 && lon !== 0) {
        axios.post('/api/v1/sortGreenSpaces', {
          lat: lat,
          lon: lon
        })
        .then((res) => {
           setGreenSpaces(res.data); 
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      }
    }, [lat, lon]);
    const [likedGreenSpacesIds, setLikedGreenSpacesIds] = useState<number[]>([]);

  
  return (
    

    <ThemeProvider theme={theme}>
        <Head title="Home" />

        <NavbarHome isTop={isTop} logged={user && user.name ? true : false}/>
        <Hero theme={theme}/>
        <Box sx={{bgcolor : '#181818', color : "#d0d0d0"}}>
        <Typography align={matches ? "left" : "center"} variant="h2" sx={{py : 5, pl : matches? 20 : 0}}>Take a breath of fresh air!</Typography>
        <Typography align={matches ? "left" : "center"} variant="h3" sx={{py : 1, pl : matches? 22 : 0, color : "grey"}}>
          <p className='flex flex-row items-center'>Current location: {lat}, {lon}
        <svg className='ml-4 cursor-pointer' onClick={getLocation} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4s4-1.79 4-4s-1.79-4-4-4zm8.94 3A8.994 8.994 0 0 0 13 3.06V1h-2v2.06A8.994 8.994 0 0 0 3.06 11H1v2h2.06A8.994 8.994 0 0 0 11 20.94V23h2v-2.06A8.994 8.994 0 0 0 20.94 13H23v-2h-2.06zM12 19c-3.87 0-7-3.13-7-7s3.13-7 7-7s7 3.13 7 7s-3.13 7-7 7z"/></svg>
        </p></Typography>
        <Paper sx={{ height: 'auto', padding: '1em' , display: 'flex', justifyContent : 'space-evenly', bgcolor : '#181818', color : '#d0d0d0'}}>
          
        <Grid container justifyContent="center" className="gap-x-8 gap-y-12" spacing={0} >
        
        {greenSpaces.map((space, index) => (
        <HomePageTile
          key={index}
          props={space}
          myLoc={[lat, lon]}
          likedPosts={likedGreenSpacesIds}
        />
      ))}
      </Grid>

    </Paper>
    <div className='w-full flex'>
      <Link className='mx-auto' href="maps">
      <button  className='text-center mx-auto py-4 px-8 bg-red-800 my-12'>View our map</button>
      </Link>
    </div>
    </Box>
        <Footer/>
    </ThemeProvider>
  )
}

export default HomePage