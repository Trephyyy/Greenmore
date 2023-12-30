import { Box, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
interface SubHeroProps {
    theme: any;
  }


const SubHero : React.FC<SubHeroProps> = ({ theme }) => {
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
  return (
    <Box className="subhero" sx={{py : 30,  px: matches? 20 : 0, width: '100%', color : "#d0d0d0"}}>
        <Typography variant="h3" component="h3"  align={matches ? "left" : "center"}>Make your decision</Typography>
        <Typography variant="h3" component="h3"  align={matches ? "left" : "center"}>With data from OSM</Typography>
        <Typography variant="h3" component="h3"  align={matches ? "left" : "center"}>You can pick</Typography>
        <Typography variant="h3" component="h3"  align={matches ? "left" : "center"}>the places you like most</Typography>
    </Box>
  )
}

export default SubHero