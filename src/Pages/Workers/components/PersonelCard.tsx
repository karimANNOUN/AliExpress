
import Box from '@mui/material/Box';

import { ImageCard } from './personelCardComponents/ImageCard';
import { FirstCard } from './personelCardComponents/FirstCard';
import Divider from '@mui/material/Divider';
import { CompletedCard } from './personelCardComponents/CompletedCard';
import { Description } from './personelCardComponents/Description';
import { Reviews } from './personelCardComponents/Reviews';
import { ProductLikely } from './personelCardComponents/ProductLikely';
export const PersonelCard = () => {

   
    

    const catergories=[
        {id:1,name:'mobile,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:2,name:'mahdi,phone',image:'https://i.pinimg.com/236x/ba/ba/08/baba08b6e1e35b3e896f60a5249a3698.jpg'},
        {id:3,name:'ishak,phone',image:'https://i.pinimg.com/236x/a0/7a/89/a07a89d110a22a768e4f357f7513d654.jpg'},
        {id:4,name:'kikou,phone',image:'https://i.pinimg.com/236x/8f/56/3b/8f563b2de19b659a5136c288681b2b53.jpg'},
        {id:5,name:'toka,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:6,name:'papa,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:7,name:'marwa,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:8,name:'mama,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:9,name:'lycra,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:10,name:'chihani,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:11,name:'ben mhidi,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:12,name:'ghoza,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        
    ]

    const sizes=[
        {id:1,number:39},{id:2,number:40},{id:3,number:41},{id:4,number:42},{id:5,number:43},{id:6,number:44},{id:7,number:45},{id:8,number:46},{id:9,number:47},{id:10,number:48}
    ]

    

  


  return (
    <Box sx={{display:'flex',justifyContent:'space-around',mt:3}} >


     <Box sx={{display:'flex',flexDirection:'column'}} >
     <FirstCard sizes={sizes} catergories={catergories}  />
     <Divider sx={{my:2}} />
     <CompletedCard/>
     <Divider sx={{my:2}} />
     <Description/>
     <Divider sx={{my:2}} />
     <Reviews/>
     <Divider sx={{my:2}} />
     <ProductLikely/>
     </Box>




     <Box sx={{width:'350px',height:'600px',borderRadius:'10px',borderStyle:'solid',borderColor:'#eeeeee',display:'flex',justifyContent:'center',alignItems:'center',position:'sticky',top:'2%',right:0}} >
        <ImageCard/>
     </Box>
    
    </Box>
  )
}
