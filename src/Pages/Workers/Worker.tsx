import React from 'react'
import Box from '@mui/material/Box';
import { Header } from './components/Header';
import { PersonelCard } from './components/PersonelCard';
import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch  } from 'react-redux';
import { setProduct } from '../../storeRedux/CartSlice';
export const Worker = () => {

  const params=useParams()

  const dispatch = useDispatch()

  const [loading,setLoading]=useState(false)

   useEffect( ()=>{
    setLoading(true)
       const getOneProduct =async()=>{
         const response=await fetch(`http://localhost:8000/getproduct/${params.id}`, {
          method: 'GET',
          credentials: 'include', 
          headers: {
            'Content-Type': 'application/json', 
          },
        })
        const data = await response.json()
     
      if (data.success == true) {
       
          setLoading(false)
          dispatch(setProduct(data.product))   
       
       
      }
        
      }
       getOneProduct()
   },[])




  return (
    <div>
        <Box sx={{}} >
        <Header loading={loading} />
          <PersonelCard loading={loading}  />
        </Box>
    </div>
  )
}
