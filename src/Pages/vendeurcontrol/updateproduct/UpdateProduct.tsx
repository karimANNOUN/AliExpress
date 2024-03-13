import { Box} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Header } from '../controlPanelSeller/components/Header'
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';
import { FirstCardSeller } from './components/FirstCardSeller';
import { DescriptionSeller } from './components/DescriptionSeller';
import { ImageCardSeller } from './components/ImageCardSeller';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setProductSeller } from '../../../storeRedux/CartSlice';


export const UpdateProduct = () => {

    const [loading,setLoading]=useState(false)
    const [activeSize,setActiveSize]=useState(0)
    const [indexs,setIndexs]=useState(0)

    const params=useParams()
    const dispatch=useDispatch()

    const token = Cookies.get('token');

    useEffect(()=>{

        const handelGetProductSeller=async()=>{
          try {
           
          const response = await fetch(`http://localhost:8000/seller/getprod/${params.prodId}`,{
            method: 'GET',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            }
          });
          const data = await response.json()

       
          
          if (!data) {
            setLoading(true)
          }if (data.success == true) {
            dispatch(setProductSeller(data.productSeller))
            setLoading(false) 
          } 
      
        } catch (error) {
          console.error('operation failed.');
        }
         
        }
  
        handelGetProductSeller()
    
        
      },[])

 
      

  return (
    <Box sx={{bgcolor:'#e0e0e0'}} >
    <Header/>
    <Box sx={{display:'flex',justifyContent:'space-around',mt:3}} >

    {loading == true  ? 
        
        <Box sx={{width:'100%',display:'flex',alignItems:'center'}} >
        <Skeleton variant="circular" width={350} height={400} />
         <Skeleton variant="rectangular" width={210} height={160} />
        </Box>
     
     : 
     <Box sx={{display:'flex',flexDirection:'column'}} >
        <FirstCardSeller activeSize={activeSize} setActiveSize={setActiveSize} indexs={indexs} setIndexs={setIndexs}  /> 
     <Divider sx={{my:2}} />
     <DescriptionSeller />
     </Box> }
           


     {loading == true  ? 
        
        <Box sx={{width:'100%',display:'flex',alignItems:'center'}} >
        <Skeleton variant="circular" width={350} height={400} />
         <Skeleton variant="rectangular" width={210} height={160} />
        </Box>
     : 
     <Box sx={{width:'350px',height:'600px',borderRadius:'10px',borderStyle:'solid',borderColor:'#eeeeee',display:'flex',justifyContent:'center',alignItems:'center',position:'sticky',top:'2%',right:0}} >
       <ImageCardSeller activeSize={activeSize} setActiveSize={setActiveSize} indexs={indexs} setIndexs={setIndexs} />
     </Box>}
    
    </Box>

     
    </Box>
  )
}
