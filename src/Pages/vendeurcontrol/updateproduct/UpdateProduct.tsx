import { Box } from '@mui/material'
import React, { useState } from 'react'
import { Header } from '../controlPanelSeller/components/Header'
import Skeleton from '@mui/material/Skeleton';
import Divider from '@mui/material/Divider';
import { FirstCardSeller } from './components/FirstCardSeller';
import { DescriptionSeller } from './components/DescriptionSeller';
import { ImageCardSeller } from './components/ImageCardSeller';

export const UpdateProduct = () => {

    const [loading,setLoading]=useState(false)
    const [activeSize,setActiveSize]=useState(0)
    const [indexs,setIndexs]=useState(0)

  return (
    <Box sx={{bgcolor:'#e0e0e0'}} >
    <Header/>
    <Box sx={{display:'flex',justifyContent:'space-around',mt:3}} >

{loading == true ? 
        
        <Box sx={{width:'100%',bgcolor:'#424242',display:'flex',alignItems:'center'}} >
        <Skeleton variant="circular" width={40} height={40} />
         <Skeleton variant="rectangular" width={210} height={60} />
        </Box>
     
     : 
     <Box sx={{display:'flex',flexDirection:'column'}} >
     <FirstCardSeller activeSize={activeSize} setActiveSize={setActiveSize} indexs={indexs} setIndexs={setIndexs} />
     <Divider sx={{my:2}} />
     <DescriptionSeller/>
     </Box> }
           


     {loading == true ? 
        
        <Box sx={{width:'100%',bgcolor:'#424242',display:'flex',alignItems:'center'}} >
        <Skeleton variant="circular" width={40} height={40} />
         <Skeleton variant="rectangular" width={210} height={60} />
        </Box>
     : 
     <Box sx={{width:'350px',height:'600px',borderRadius:'10px',borderStyle:'solid',borderColor:'#eeeeee',display:'flex',justifyContent:'center',alignItems:'center',position:'sticky',top:'2%',right:0}} >
        <ImageCardSeller activeSize={activeSize} setActiveSize={setActiveSize} indexs={indexs} setIndexs={setIndexs}/>
     </Box>}
    
    </Box>

     
    </Box>
  )
}
