import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import {  Link, useNavigate  } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {CardModalProduct} from '../CardProducts/CardModalProduct'
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { CardProductHome } from './components/CardProductHome';
export const CardProduct = ({ toggleDrawer,loading }:any) => {


  const navigate=useNavigate()

  
 

  const [over, setOver] = useState(false);
  const handleFermer = () => {
    setOver(false);
  };

 
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOver(true)

    setTimeout(() => {
      setOver(false)
      setOpen(true)
    }, 1000);
   
  
  }

  const products=useSelector((state:any)=>state.app.products)


  return (
    <div>
         {loading == true ?
         <Stack spacing={1}>
  
         <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
   
   
         <Skeleton variant="circular" width={40} height={40} />
         <Skeleton variant="rectangular" width={210} height={60} />
         <Skeleton variant="rounded" width={210} height={60} />
       </Stack>
   
        : 
        <Box sx={{width:'100%',display:'flex',flexDirection:'column'}} >
        <Typography sx={{my:2,pl:3,textAlign:'left',fontWeight:'700'}}  variant='h5' gutterBottom>
        Vous aimerez aussi
      </Typography>
      <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap',my:3}}  >
        { !products   ? [] : products.map( (art:any)=> <CardProductHome key={art.id} art={art} toggleDrawer={toggleDrawer} /> )} 
       
      </Box>
     

     <Box sx={{display:'flex',justifyContent:'center',alignItems:'center' , my:2}} >
     <Box sx={{display:'flex'}} >
     <Typography sx={{color:'#757575',textAlign:'center'}} variant="caption" gutterBottom>
     Découvrir plus  <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >legging sport femme</Link>  | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >veste chauffante homme</Link> | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >robe verte sauge</Link> | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >grand miroir</Link> | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >appareil photo instantané</Link> | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} > arche de ballon</Link>
</Typography>
     </Box>
     </Box>



        </Box>}
    </div>
  )
}
