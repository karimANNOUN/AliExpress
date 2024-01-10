import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { CardStoreProduct } from './components/CardStoreProduct';
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setProductStore } from '../../storeRedux/CartSlice';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';



export const ProductStoreShop = ({toggleDrawer,state}:any) => {

  const token = Cookies.get('token');

  const dispatch=useDispatch()
  const [loading,setLoading]=useState(false)

     useEffect(()=>{
      const handleStoreProducts = async () => {
        try {
         
          const response = await fetch(`http://localhost:8000/getstoreproduct`,{
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
          }
          if (data.success == true) {
            dispatch(setProductStore(data.storeProductUser))
            setLoading(false)
           
            
          } 

        }catch(error) {
          console.error('operation failed.');
          } }
          handleStoreProducts()

     },[])

     const productStore= useSelector((state :any) =>state.app.productStore)

     console.log(productStore)

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
            {loading == true ? 
              
              <Stack spacing={1}>
  
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />


      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>

           : <Box
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


          
  { productStore.length ==0 ? "" : 
  productStore.map((product:any)=>
  <CardStoreProduct product={product} key={product.id} />)}
 

        </Box>}


        <IconButton onClick={toggleDrawer(anchor, false)} sx={{bgcolor:'#424242',":hover":{bgcolor:'#424242'},position:'absolute',top:0,right:'5%'}} > <CloseIcon sx={{fontSize:'15px',color:'white'}} /> </IconButton>

          </Drawer>
        </React.Fragment>
      ))}
    </div>
  )
}
