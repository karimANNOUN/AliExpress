import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { Header } from './Components/Header/Header';
import { NameStore } from './Components/Header/NameStore';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setSeller } from '../../storeRedux/CartSlice';

export const ProfilBayer = () => {

  const params=useParams()

  const dispatch = useDispatch()

  const [loading,setLoading]=useState(false)

   useEffect( ()=>{
       const getStoreSeller =async()=>{
         const response=await fetch(`http://localhost:8000/store/${params.storeId}`, {
          method: 'GET',
          credentials: 'include', 
          headers: {
            'Content-Type': 'application/json', 
          },
        })
        const data = await response.json()
        if (!data) {
          setLoading(true)
        }
      if (data.success == true) {
       
          setLoading(false)
          dispatch(setSeller(data.seller))   
      }
        
      }
       getStoreSeller()
   },[])



   
   
  return (
    <div>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
        <Header/>
        <NameStore/>
        </Box>
    </div>
  )
}
