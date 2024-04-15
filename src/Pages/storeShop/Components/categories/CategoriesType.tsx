import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Header } from '../Header/Header';
import { CategoryVendeur } from './components/CategoryVendeur';
import { useParams } from 'react-router-dom';


export const CategoriesType = () => {

const params=useParams()
  
  const [loading,setLoading]=useState(Boolean)
  const [seller,setSeller]=useState<any>({})


  useEffect( ()=>{
    
    setLoading(true)
       const getStoreSeller =async()=>{
         const response=await fetch(`http://localhost:8000/store/${params.storeId}`, {
          method: 'GET',
          credentials: 'include', 
          headers: {
            'Content-Type': 'application/json', 
          },
        })
        const data = await response.json()
      if (data.success == true) {
          setSeller(data.seller)  
          setLoading(false)
        }
        
      }
       getStoreSeller()
   },[])


  if (loading == true ) return <div>'Loading...'</div> 


  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
       <Header seller={seller} />
       <CategoryVendeur/>
        </Box>
  )
}
