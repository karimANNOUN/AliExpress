import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';

import Divider from '@mui/material/Divider';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import ReplyIcon from '@mui/icons-material/Reply';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  
    
  });


export const ImageCardSeller = ({activeSize,indexs,setIndexs}:any) => {

    const [openAlert, setOpenAlert] = useState(false);

  

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenAlert(false);
    };
  
    
    const art=useSelector((state:any)=>state.app.product)
  
    const token = Cookies.get('token');
  
     const [count,setCount]=useState(1)
     const [favorit,setFavorit]=useState(false)
     const [storeProd,setStoreProd]=useState(false)
     const dispatch=useDispatch()
     const [loading,setLoading]=useState(false)
  
    const [message,setMessage]=useState("")
  
     const optionSize=art.property[activeSize].detailsName;
  
     const quantitySize=art.property[activeSize].quantity;
  
     const favoritColor=art.images.filter((img:any)=> (img.color !== 'manyImages' && img.color !== 'imageDescription' ) )[indexs].color;
  
     const favoriteImage=art.images.filter((img:any)=> (img.color !== 'manyImages' && img.color !== 'imageDescription' ) )[indexs].imageUrl;
  
     const user=useSelector((state:any)=>state.app.userInfo)
  
     const productsStore=useSelector((state:any)=>state.app.productStore)

  return (
    <Box sx={{width:'95%',height:'95%',display:'flex',flexDirection:'column'}} >


    <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
              {message}
            </Alert>
          </Snackbar>
       
    
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
        <Typography sx={{fontWeight:'500',textAlign:'left'}}  variant='body1' gutterBottom>
        Livré vers
    </Typography>
    
     <Box sx={{display:'flex',alignItems:'center'}} >
         <IconButton>
             <LocationOnIcon sx={{fontSize:'25px'}} />
         </IconButton>
     <Typography sx={{fontWeight:'100',textAlign:'left'}}  variant='body1' gutterBottom>
     Algeria
    </Typography>
         </Box>       
    
        </Box>
    
       <Divider sx={{my:1}} />
        
        <Box sx={{display:'flex',flexDirection:'column'}} >
        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography sx={{fontWeight:'700',textAlign:'left'}}  variant='body1' gutterBottom>
        Livraison 
    </Typography>
           <IconButton>
             <ArrowRightAltIcon sx={{fontSize:'35px',fontWeight:'800'}} />
           </IconButton>
        </Box>
        <Typography sx={{fontWeight:'700',textAlign:'left'}}  variant='subtitle1' gutterBottom>
        Shipping: DA{art.prixlivraison}
    </Typography>
    <Typography sx={{textAlign:'left'}}  variant='subtitle2' gutterBottom>
    Temps estimé pour la livraison: {art.templivraison} jours 
    </Typography>
        </Box>
    
        <Divider sx={{my:1}} />
    
        <Box sx={{display:'flex',flexDirection:'column'}} >
        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography sx={{fontWeight:'700',textAlign:'left'}}  variant='body1' gutterBottom>
        Service 
    </Typography>
           <IconButton>
             <ArrowRightAltIcon sx={{fontSize:'35px',fontWeight:'800'}} />
           </IconButton>
        </Box>
    <Typography sx={{textAlign:'left'}}  variant='subtitle2' gutterBottom>
    Protection acheteur
    </Typography>
        </Box>
    
        <Divider sx={{my:1}} />
      
        <Box sx={{display:'flex',flexDirection:'column'}} >
       
        <Typography sx={{fontWeight:'700',textAlign:'left'}}  variant='body1' gutterBottom>
        Quantité
    </Typography>
           
    <Box sx={{display:'flex',alignItems:'center'}} >
    { count === 1 ? <IconButton disabled sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}} >
    <RemoveIcon sx={{fontSize:'10px'}} />
    </IconButton> : <IconButton onClick={()=>setCount(count - 1)} sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}} >
    <RemoveIcon sx={{fontSize:'10px'}} />
    </IconButton>}
    <Typography sx={{fontWeight:'700',textAlign:'left',mx:1}}  variant='body1' gutterBottom>
        {count}
    </Typography>
    { count === art.property[activeSize].quantity ? <IconButton disabled sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}} >
    <AddIcon sx={{fontSize:'10px'}} />
    </IconButton> : <IconButton onClick={()=>setCount(count + 1)}  sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}} >
    <AddIcon sx={{fontSize:'10px',fontWeight:'800'}} />
    </IconButton>}
    </Box>
    
    <Typography sx={{fontWeight:'100',color:'#757575',textAlign:'left'}}  variant='subtitle2' gutterBottom>
    {art.property[activeSize].quantity} unités disponibles
    </Typography>
      
    
    
        </Box>
    
      </Box>
  )
}
