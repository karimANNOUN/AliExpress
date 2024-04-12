import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { EmptyStore } from '../Homestore/components/EmptyStore';
import { PaymentStoreCard } from './components/PaymentStoreCard';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../../storeRedux/CartSlice';
import Cookies from 'js-cookie';
export const PaymentStores = () => {

  const [loading,setLoading]=useState(false)
  const dispatch=useDispatch()
  const token = Cookies.get('token');

  useEffect(()=>{
    setLoading(true)
    const getUserInfo = async()=>{
        try{
            const response = await fetch(`http://localhost:8000/userInfo`,{
              method:'GET',
              credentials:"include", 
              headers: {
                'Content-Type': 'application/json',
                 authorization:`${token}`
              }
            });
            const data = await response.json()
          
          if (data.success == true) {
              dispatch(setUserInfo(data.userInfo))
              setLoading(false) 
            }
          } catch (error) {
            console.error('operation failed.');
          }
    }
    getUserInfo()

},[])


const storePayer=useSelector((state:any)=>state.app.storePayer)

if (loading == true) return <div>...loading</div>


  return (
    <Box sx={{width:'100%',bgcolor:'#eeeeee',display:'flex',flexDirection:'column',alignItems:'center'}} >
    { !storePayer ? "" : (storePayer.length ? <PaymentStoreCard/> : <EmptyStore/>) }


  </Box>
  )
}
