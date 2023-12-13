import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import Link from '@mui/material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { Button, Divider } from '@mui/material';

import CreateIcon from '@mui/icons-material/Create';
export const CardElementStores = () => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}} >

    <Box sx={{display:'flex',alignItems:'center',width:'100%',my:2,justifyContent:'space-between'}} >
       
     <Link variant='body2' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:2,":hover":{color:'#ff5722'}}} href="#" underline="none">
     
     Digitaling Store
  </Link>

  <IconButton  >
      <CreateIcon sx={{fontSize:'14px'}} />
</IconButton>


                </Box>
    
                <Box sx={{display:'flex',alignItems:'center',width:'100%',ml:2}} >

    <img src='https://i.pinimg.com/236x/40/ce/53/40ce539348cea23368e65d1a42cdc797.jpg' style={{width:'110px',height:'130px',borderRadius:'8px'}} />
    <Box sx={{display:'flex',flexDirection:'column',height:'100%',width:'100%',px:2}} >
      <Box sx={{display:'flex',alignItems:'center',width:'100%',justifyContent:'space-between'}} >
      <Link variant='body1' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'#ff5722'}}} href="#" underline="none">
       
Perruque Lace Front Wig 360 Brésilienne Naturelle, Cheveux Lisses...

   </Link>
      </Box>

    <Button variant='outlined' sx={{border:'1px solid #f5f5f5 ',width:'250px',color:'black',fontSize:'8px',fontWeight:'700' ,borderRadius:'14px' ,bgcolor:'#e0e0e0',":hover":{color:'black',border:'1px solid #f5f5f5 ',bgcolor:'#e0e0e0'} }} >
        size of your contained
    </Button>

    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',my:1}} >
    <Typography variant='body1' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'black'}}} >
       
    US $101.42
       
                    </Typography>
          <Box sx={{display:'flex',alignItems:'center'}} >
          <IconButton disabled sx={{bgcolor:'#212121',":hover":{bgcolor:'#212121'}}} >
<RemoveIcon sx={{fontSize:'14px'}} />
</IconButton>
<Typography sx={{fontWeight:'700',textAlign:'left',mx:1}}  variant='caption' gutterBottom>
5
</Typography>
<IconButton disabled sx={{bgcolor:'#212121',":hover":{bgcolor:'#212121'}}} >
<AddIcon sx={{fontSize:'14px'}} />
</IconButton>
          </Box>

         

    </Box>
   <Box sx={{width:'100%',display:'flex'}} >
    <Button variant='text' sx={{color:'#bdbdbd',fontSize:'14px',fontWeight:'100' ,":hover":{color:'#bdbdbd'} }} >
          Livraison gratuite
    </Button>
    </Box>
    </Box>

                </Box>

                <Divider sx={{width:'95%',mt:2}} />

    </Box>
  )
}
