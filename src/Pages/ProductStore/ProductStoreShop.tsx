import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/Check';
import { CardStoreProduct } from './components/CardStoreProduct';
type Anchor = 'right';


export const ProductStoreShop = ({toggleDrawer,state}:any) => {

  const [show,setShow]=useState(false)
    
     


  return (
    <div>
       {([ 'right'] as const).map((anchor) => (
        <React.Fragment key={anchor}>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
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


          
  <CardStoreProduct/>
  <CardStoreProduct/>
  <CardStoreProduct/>
  <CardStoreProduct/>
  <CardStoreProduct/>
  <CardStoreProduct/>
  <CardStoreProduct/>
  <CardStoreProduct/>
  <CardStoreProduct/>
  <CardStoreProduct/>
  <CardStoreProduct/>
  <CardStoreProduct/>
  <CardStoreProduct/>
  <CardStoreProduct/>

        </Box>
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
