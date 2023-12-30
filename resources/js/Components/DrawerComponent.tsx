import React from 'react';
import { Drawer as MuiDrawer, Toolbar, IconButton, Divider, List, ListItemButton, ListItemIcon, ListItemText, Link, Theme, useTheme, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Typography, Drawer } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import DashboardIcon from '@mui/icons-material/Dashboard';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MapIcon from '@mui/icons-material/Map';
import LogOutIcon from '@mui/icons-material/Logout';
import {Link as LinkInertia} from '@inertiajs/react'


interface Props {
  open: boolean;
  setOpen: (value: boolean) => void;
}


const DrawerComponent = ({open , setOpen} : Props) => {

    const defaultTheme = useTheme();
   
    const [logoutModal, setLogoutModal] = React.useState(false);
    const toggleDrawer = () => {
        setOpen(!open);
      };
      const handleLogoutOpen = () => {
        setLogoutModal(true);
      }

      const handleLogoutClose = () => {
        setLogoutModal(false);
      }

  return (
    <>
    <Drawer variant="permanent" open={open} sx={{[defaultTheme.breakpoints.down('sm')]: open? {position : 'absolute'} : {}}} //left drawer
    >
      <Toolbar
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          px: [1],
          width: 240,
        }}
      >
        <IconButton onClick={toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
      <Link color="inherit" href="/dashboard" sx={{textDecoration : 'none'}}>
      <ListItemButton>  
  <ListItemIcon>
    <DashboardIcon />
  </ListItemIcon>
  <ListItemText primary="Home" />
</ListItemButton>
</Link>
<Link color="inherit" href="/urlocations" sx={{textDecoration : 'none'}}>
<ListItemButton>
  <ListItemIcon>
    <LocationOnIcon />
  </ListItemIcon>
  <ListItemText primary="Your Locations" />
</ListItemButton>
</Link>
<Link color="inherit" href="/osm" sx={{textDecoration : 'none'}}>
<ListItemButton >
  <ListItemIcon>
    <MapIcon />
  </ListItemIcon>
  <ListItemText primary="Map" />
</ListItemButton> 
</Link>
        <Divider sx={{ my: 1 }}  />
        <ListItemButton onClick={handleLogoutOpen}> {/* logout button */}
  <ListItemIcon>
    <LogOutIcon />
  </ListItemIcon>
  <ListItemText primary="Log Out" />
</ListItemButton>
      </List>

      
    </Drawer>
    <Dialog /* log out dialog */
  open={logoutModal}
  onClose={handleLogoutClose}
  aria-labelledby="alert-dialog-title"
  aria-describedby="alert-dialog-description"
  sx={{ '.MuiPaper-root': { border: '3px solid red' } }}
>
  <DialogTitle id="alert-dialog-title">
    {"Confirm Log Out"}
  </DialogTitle>
  <DialogContent>
    <DialogContentText id="alert-dialog-description">
      Are you sure you want to log out?
    </DialogContentText>
  </DialogContent>
  <DialogActions >
    <Button onClick={handleLogoutClose}>Back</Button>
    {/* 
// @ts-ignore */}
      <LinkInertia href={route('logout')} method="POST" >
      <Typography color="red" sx={{fontSize : 15}}>LOG OUT</Typography>
      </LinkInertia>
  </DialogActions>
</Dialog>
</>
    
  )
}

export default DrawerComponent