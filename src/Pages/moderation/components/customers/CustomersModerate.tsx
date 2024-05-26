import { Box, Typography } from '@mui/material'
import React from 'react'

export const CustomersModerate = () => {
  return (
    <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Customers
    </Typography>
    </Box>
  )
}
