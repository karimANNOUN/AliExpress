import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { EmptyStore } from '../Homestore/components/EmptyStore';
import { PaymentStoreCard } from './components/PaymentStoreCard';
import { useSelector } from 'react-redux';
export const PaymentStores = () => {



const storePayer=useSelector((state:any)=>state.app.storePayer)




  return (
    <Box sx={{width:'100%',bgcolor:'#eeeeee',display:'flex',flexDirection:'column',alignItems:'center'}} >
    { !storePayer ? "" : (storePayer.length ? <PaymentStoreCard/> : <EmptyStore/>) }


  </Box>
  )
}
