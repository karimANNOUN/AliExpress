import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header/Header';
import { VendeurRating } from './Components/VendeurRating';
export const AvisVendeur = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
         <Header/>
         <VendeurRating/>
    </Box>
  )
}
