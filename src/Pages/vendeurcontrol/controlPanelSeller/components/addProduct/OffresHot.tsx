import React from 'react'
import { Box,Typography } from '@mui/material'
import { VendeurPage } from './components/VendeurPage'

export const OffresHot = () => {
  return (
    <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column',mb:2}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    New Produit
    </Typography>

    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',width:'99%',borderRadius:'6px',p:1}} >
         <VendeurPage/>
        </Box>

    </Box>
  )
}
