import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { Header } from './Components/Header/Header';
import { NameStore } from './Components/Header/NameStore';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
//import { setSeller } from '../../storeRedux/CartSlice';

export const ProfilBayer = () => {

  const params=useParams()

  const dispatch = useDispatch()

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
    <div> 
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
        <Header seller={seller} setSeller={setSeller} />
        <NameStore seller={seller} />
        </Box>
    </div>
  )
}
