import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { EmptyStore } from '../Homestore/components/EmptyStore';
import { PaymentStoreCard } from './components/PaymentStoreCard';
export const PaymentStores = () => {

const ProductStore=[{id:1},{id:2}]

  return (
    <Box sx={{width:'100%',bgcolor:'#eeeeee',display:'flex',flexDirection:'column',alignItems:'center'}} >
    { ProductStore.length ? <PaymentStoreCard/> : <EmptyStore/> }












  </Box>
  )
}
