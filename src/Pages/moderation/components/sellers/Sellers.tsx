import React, { useEffect, useState } from 'react'
import { Box,Typography } from '@mui/material'
import { TableProducts } from '../Dashbord/components/TableProducts'
import { TableSeller } from './components/TableSeller'

export const Sellers = ({seller,loading}:any) => {

    if (loading == true) return <div>...loading</div>
  return (
    <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Sellers
    </Typography>

    <Box sx={{display:'flex',flexDirection:'column',width:'100%',mt:2}} >
      <TableSeller seller={seller} />
    </Box>
 
</Box>
  )
}
