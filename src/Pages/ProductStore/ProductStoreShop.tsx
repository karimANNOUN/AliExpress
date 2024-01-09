import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { CardStoreProduct } from './components/CardStoreProduct';



export const ProductStoreShop = ({toggleDrawer,state}:any) => {

     


  return (
    <div>
      
       {([ 'right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
           sx={{position:'relative'}}
           onClose={toggleDrawer(anchor, false)}
          >
            <Box
          sx={{ width: '300px',display:'flex',flexDirection:'column',alignItems:'center',overflow:'auto',py:2 }}
          role="presentation"
         
        >
          <Typography sx={{fontWeight:'800',textAlign:'center'}}  variant='body2' gutterBottom>
          US $71.95
</Typography>

<Button  sx={{width:'70%',height:'40px',my:2,borderRadius:'20px',color:'white',bgcolor:'#e64a19',":hover":{bgcolor:'#e64a19'}}} variant="contained">Payer</Button>

<Button  sx={{width:'70%',height:'40px',borderRadius:'20px',color:'black',borderColor:'black',":hover":{borderColor:'black'}}} variant="outlined">Aller au Panier</Button>

<Typography sx={{fontWeight:'800',textAlign:'center',my:1}}  variant='body2' gutterBottom>
Expédié par des vendeurs internationaux
</Typography>


          
  {<CardStoreProduct/>}
 

        </Box>


        <IconButton onClick={toggleDrawer(anchor, false)} sx={{bgcolor:'#424242',":hover":{bgcolor:'#424242'},position:'absolute',top:0,right:'5%'}} > <CloseIcon sx={{fontSize:'15px',color:'white'}} /> </IconButton>

          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
