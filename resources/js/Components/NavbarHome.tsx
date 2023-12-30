import { Link } from '@inertiajs/react'
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material'
import React from 'react'

interface NavbarHomeProps {
    isTop: boolean;
    logged: boolean;
  }
  
  const NavbarHome: React.FC<NavbarHomeProps> = ({ isTop , logged}) => {
  return (
    <AppBar elevation={isTop? 0 : 3} position="sticky" sx={{height : "4em" , bgcolor : isTop ? 'transparent' : 'secondary.main', zIndex: 1000,}}>
    <Toolbar >
    {isTop ? null : 
   <Box sx={{height : 1}}>
    <div className='flex flex-row items-center text-xl font-bold'>
   <img src="/images/LogoShort.png" alt="Logo" style={{height : '4rem', marginTop : '0.2rem'}}/>
  <div className='-space-y-1 text-center'>
  <p className='text-[28px] text-green-800 font-bold font-["OpenSans"]'>Greenmore</p>
  <p className='text-[12px] font-["OpenSans"]'>Your guide to nature</p>
    </div> </div>
 </Box>
    }

{logged ? (
          <>
            <Button variant="contained" sx={{ ml: 'auto', bgcolor: isTop? 'success.main' : 'primary.main' }}>
              <Link href={route('dashboard')} style={{fontFamily : 'opensansbold'}}>
                Dashboard
              </Link>
            </Button>
            <Button sx={{color: isTop? 'white': 'black'}}>
              <Link className="px-4 " href={route('logout')} method="post">
                Log out
              </Link>
            </Button>
          </>
        ) : (
          <>
            <Button variant="contained" sx={{ ml: 'auto', bgcolor: isTop? 'success.main' : 'primary.main' }}>
              <Link href={route('register')} style={{fontFamily : 'opensansbold'}}>
                Register
              </Link>
            </Button>
            <Button sx={{color: isTop? 'white': 'black'}}>
              <Link className="px-4 " href={route('login')}>
                Log in
              </Link>
            </Button>
          </>
        )}

  
  

        
    </Toolbar>
  </AppBar>
  )
}

export default NavbarHome