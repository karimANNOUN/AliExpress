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

import CreateIcon from '@mui/icons-material/Create';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import { setProductSeller } from '../../../../storeRedux/CartSlice';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  
    
  });


export const ImageCardSeller = ({activeSize,indexs}:any) => {

    const [openAlert, setOpenAlert] = useState(false);

  

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenAlert(false);
    };

    const product=useSelector((state:any)=>state.app.productSeller)

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose0 = () => {
      setAnchorEl(null);
    };

    const [anchorEl1, setAnchorEl1] = React.useState<null | HTMLElement>(null);
    const open1 = Boolean(anchorEl1);
    const handleClick1 = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl1(event.currentTarget);
    };
    const handleClose1 = () => {
      setAnchorEl1(null);
    };

    const [anchorEl2, setAnchorEl2] = React.useState<null | HTMLElement>(null);
    const open2 = Boolean(anchorEl2);
    const handleClick2 = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleClose2 = () => {
      setAnchorEl2(null);
    };


    const [prixLivraison,setPrixLivraison]=useState(0)
    const [tempLivraison,setTempLivraison]=useState(0)
    const [quantity,setQuantity]=useState(0)
  
  
    
  
    const token = Cookies.get('token');
  
     const [count,setCount]=useState(1)
     const [favorit,setFavorit]=useState(false)
     const [storeProd,setStoreProd]=useState(false)
     const dispatch=useDispatch()
     const [loading,setLoading]=useState(false)
  
    const [message,setMessage]=useState("")
  
    const [alert,setAlert]=useState(false)
    const [type,setType]=useState({})

 //    const optionSize=product.property[activeSize].detailsName;
  
 //    const quantitySize=product.property[activeSize].quantity;
  
 //    const favoritColor=product.images.filter((img:any)=> (img.color !== 'manyImages' && img.color !== 'imageDescription' ) )[indexs].color;
  
//     const favoriteImage=product.images.filter((img:any)=> (img.color !== 'manyImages' && img.color !== 'imageDescription' ) )[indexs].imageUrl;
  
//     const user=useSelector((state:any)=>state.app.userInfo)
  
 //    const productsStore=useSelector((state:any)=>state.app.productStore)

 useEffect(()=>{
  const typeSize=product.property[activeSize];
  setType(typeSize)
},[activeSize])


 const handelUpdatePrixLivraison=async()=>{
  try {
   
  const response = await fetch(`http://localhost:8000/updateprixlivraison`,{
    method: 'PATCH',
    credentials:"include", 
    headers: {
      'Content-Type': 'application/json',
       authorization:`${token}`
    },
    body:JSON.stringify({ prixLivraison , product }),
  });
  const data = await response.json()

  
  if (!data) {
    setLoading(true)
  } if (data.success == false) {
    setOpenAlert(true)
    setAlert(false)
    setMessage(data.message)
  }
  if (data.success == true) {
    setOpenAlert(true)
    setAlert(true)
    setMessage(data.message)
    dispatch(setProductSeller(data.productSeller))
    setLoading(false)
    handleClose0()
  } 

} catch (error) {
  console.error('operation failed.');
}
 
}


const handelUpdateTempLivraison=async()=>{
  try {
   
  const response = await fetch(`http://localhost:8000/updatetemplivraison`,{
    method: 'PATCH',
    credentials:"include", 
    headers: {
      'Content-Type': 'application/json',
       authorization:`${token}`
    },
    body:JSON.stringify({ tempLivraison , product }),
  });
  const data = await response.json()

  
  if (!data) {
    setLoading(true)
  } if (data.success == false) {
    setOpenAlert(true)
    setAlert(false)
    setMessage(data.message)
  }
  if (data.success == true) {
    setOpenAlert(true)
    setAlert(true)
    setMessage(data.message)
    dispatch(setProductSeller(data.productSeller))
    setLoading(false)
    handleClose1()
  } 

} catch (error) {
  console.error('operation failed.');
}
 
}


const handelUpdateQuantity=async()=>{
  try {
   
  const response = await fetch(`http://localhost:8000/updatequantityunique`,{
    method: 'PATCH',
    credentials:"include", 
    headers: {
      'Content-Type': 'application/json',
       authorization:`${token}`
    },
    body:JSON.stringify({ quantity , type , product }),
  });
  const data = await response.json()

  
  if (!data) {
    setLoading(true)
  } if (data.success == false) {
    setOpenAlert(true)
    setAlert(false)
    setMessage(data.message)
  }
  if (data.success == true) {
    setOpenAlert(true)
    setAlert(true)
    setMessage(data.message)
    dispatch(setProductSeller(data.productSeller))
    setLoading(false)
    handleClose2()
  } 

} catch (error) {
  console.error('operation failed.');
}
 
}




  return (
    <Box sx={{width:'95%',height:'95%',display:'flex',flexDirection:'column'}} >


    <Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity={alert == false ? "error" : "success" } sx={{ width: '100%' }}>
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
        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography sx={{fontWeight:'700',textAlign:'left'}}  variant='subtitle1' gutterBottom>
        Shipping: DA{ !product ? "" :  product.prixlivraison}
    </Typography>

        <IconButton onClick={handleClick} >
    <CreateIcon sx={{fontSize:'20px'}} />
  </IconButton>

  <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose0}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{width:'2150px',height:'800px',display:'flex'}}
      >
       
       <Typography sx={{fontWeight:'800',mx:2,textAlign:'left'}} variant='h6' gutterBottom>
    update prix livraison 
  </Typography>

  <TextField
  id="livraison time"
  sx={{ width: '80%',my:2 ,mx:2 ,bgcolor:'white'}}
  placeholder='prix livraison'
  size='small'
  label='prix livraison'
  type='number'
  onChange={(e:any)=>setPrixLivraison(e.target.value)}
    />

<Button variant="contained" onClick={handelUpdatePrixLivraison} sx={{mx:2,bgcolor:'#7b1fa2',color:'white',":hover":{bgcolor:'#7b1fa2',color:'white'}}} >Update</Button>

      </Menu>

        </Box>
        
        <Box sx={{display:'flex',alignItems:'center'}} >
       
        <Typography sx={{textAlign:'left'}}  variant='subtitle2' gutterBottom>
    Temps estimé pour la livraison: { !product ? "" :  product.templivraison} jours 
    </Typography>

        <IconButton onClick={handleClick1} >
    <CreateIcon sx={{fontSize:'20px'}} />
  </IconButton>

  <Menu
        id="basic-menu"
        anchorEl={anchorEl1}
        open={open1}
        onClose={handleClose1}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{width:'2150px',height:'800px',display:'flex'}}
      >
       
       <Typography sx={{fontWeight:'800',mx:2,textAlign:'left'}} variant='h6' gutterBottom>
    update temp livraison 
  </Typography>

  <TextField
  id="livraison time"
  sx={{ width: '80%',my:2 ,mx:2 ,bgcolor:'white'}}
  placeholder='temp livraison'
  size='small'
  label='temp livraison'
  type='number'
  onChange={(e:any)=>setTempLivraison(e.target.value)}
    />

<Button variant="contained" onClick={handelUpdateTempLivraison} sx={{mx:2,bgcolor:'#7b1fa2',color:'white',":hover":{bgcolor:'#7b1fa2',color:'white'}}} >Update</Button>

      </Menu>

        </Box>
   
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

    <Typography sx={{fontWeight:'100',color:'#757575',textAlign:'left'}}  variant='subtitle2' gutterBottom>
    { !product ? "" :  product.property[activeSize].quantity} unités disponibles
    </Typography>
       
    <IconButton onClick={handleClick2} >
    <CreateIcon sx={{fontSize:'20px'}} />
  </IconButton>

  <Menu
        id="basic-menu"
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{width:'2150px',height:'800px',display:'flex'}}
      >
       
       <Typography sx={{fontWeight:'800',mx:2,textAlign:'left'}} variant='h6' gutterBottom>
    update quantity
  </Typography>

  <TextField
  id="quantity"
  sx={{ width: '80%',my:2 ,mx:2 ,bgcolor:'white'}}
  placeholder='quantity'
  size='small'
  label='quantity'
  type='number'
  onChange={(e:any)=>setQuantity(e.target.value)}
    />

<Button variant="contained" onClick={handelUpdateQuantity} sx={{mx:2,bgcolor:'#7b1fa2',color:'white',":hover":{bgcolor:'#7b1fa2',color:'white'}}} >Update</Button>

      </Menu>

    </Box>
    
      
    
    
        </Box>
    
      </Box>
  )
}
