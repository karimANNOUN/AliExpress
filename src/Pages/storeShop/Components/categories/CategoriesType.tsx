import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header/Header';
import { CategoryVendeur } from './components/CategoryVendeur';


export const CategoriesType = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
       <Header/>
       <CategoryVendeur/>
        </Box>
  )
}
