
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import { ImageCard } from './personelCardComponents/ImageCard';
import { FirstCard } from './personelCardComponents/FirstCard';
import Divider from '@mui/material/Divider';
import { CompletedCard } from './personelCardComponents/CompletedCard';
import { Description } from './personelCardComponents/Description';
import { Reviews } from './personelCardComponents/Reviews';
import { ProductLikely } from './personelCardComponents/ProductLikely';
import Skeleton from '@mui/material/Skeleton';


export const PersonelCard = ({product,loading }:any) => {


  
    
    const [activeSize,setActiveSize]=useState(0)
    const [indexs,setIndexs]=useState(0)
    

  return (
    <Box sx={{display:'flex',justifyContent:'space-around',mt:3}} >

{loading == true ? 
        
        <Box sx={{width:'100%',bgcolor:'#424242',display:'flex',alignItems:'center'}} >
        <Skeleton variant="circular" width={40} height={40} />
         <Skeleton variant="rectangular" width={210} height={60} />
        </Box>
     
     : 
     <Box sx={{display:'flex',flexDirection:'column'}} >
     <FirstCard activeSize={activeSize} setActiveSize={setActiveSize} indexs={indexs} setIndexs={setIndexs} />
     <Divider sx={{my:2}} />
     <CompletedCard/>
     <Divider sx={{my:2}} />
     <Description/>
     <Divider sx={{my:2}} />
     <Reviews/>
     <Divider sx={{my:2}} />
     <ProductLikely/>
     </Box> }
           


     {loading == true ? 
        
        <Box sx={{width:'100%',bgcolor:'#424242',display:'flex',alignItems:'center'}} >
        <Skeleton variant="circular" width={40} height={40} />
         <Skeleton variant="rectangular" width={210} height={60} />
        </Box>
     : 
     <Box sx={{width:'350px',height:'600px',borderRadius:'10px',border:'2px solid #eeeeee',display:'flex',justifyContent:'center',alignItems:'center',position:'sticky',top:'2%',right:0}} >
        <ImageCard activeSize={activeSize} setActiveSize={setActiveSize} indexs={indexs} setIndexs={setIndexs}/>
     </Box>}
    
    </Box>
  )
}
