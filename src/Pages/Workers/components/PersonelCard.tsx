
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
import { useSelector } from 'react-redux';


export const PersonelCard = ({loading }:any) => {

   const product=useSelector((state:any)=>state.app.product)
    
    const [activeSize,setActiveSize]=useState(0)
    const [indexs,setIndexs]=useState(product.images.filter((img:any)=> img.color !== 'imageDescription')[0].id)
    const [favColor,setFavColor]=useState(product.images.filter((img:any)=> img.color !== 'imageDescription')[0].id)

   


    const totalQuantity  =  product.article.reduce((accumulator:any, currentProduct:any) => {
      return accumulator + (currentProduct.quantity );
    }, 0);

    const totalRating =  product.review.reduce((accumulator:any, currentProduct:any) => {
      return accumulator + ( parseInt(currentProduct.rating));
    }, 0); 
    

  return (
    <Box sx={{display:'flex',justifyContent:'space-around',mt:3}} >



{loading == true ? 
        
        <Box sx={{width:'100%',bgcolor:'#424242',display:'flex',alignItems:'center'}} >
        <Skeleton variant="circular" width={40} height={40} />
         <Skeleton variant="rectangular" width={210} height={60} />
        </Box>
     
     : 
     <Box sx={{display:'flex',flexDirection:'column'}} >
     <FirstCard activeSize={activeSize} setActiveSize={setActiveSize} indexs={indexs} setIndexs={setIndexs} totalQuantity={totalQuantity} totalRating={totalRating} setFavColor={setFavColor} />
     <Divider sx={{my:2}} />
     <CompletedCard/>
     <Divider sx={{my:2}} />
     <Description/>
     <Divider sx={{my:2}} />
     <Reviews totalQuantity={totalQuantity} totalRating={totalRating} product={product} />
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
        <ImageCard activeSize={activeSize} setActiveSize={setActiveSize} indexs={indexs} setIndexs={setIndexs} favColor={favColor} />
     </Box>}
    
    </Box>
  )
}
