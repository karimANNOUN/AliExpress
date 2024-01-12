// @ts-nocheck
import React,{useEffect, useState} from 'react'
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
import Cookies from 'js-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { setProductStore, setProducts } from '../../storeRedux/CartSlice';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { use } from 'i18next';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;

  
});

export const ImageCardModal = ({setOpen,art,activeSize,toggleDrawer,indexs}:any) => {

  const [openAlert, setOpenAlert] = useState(false);

  

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };






  const [count,setCount]=useState(1)

  const [favorit,setFavorit]=useState(false)

  const [loading,setLoading]=useState(false)

  const [message,setMessage]=useState("")

  const dispatch = useDispatch()

   const token = Cookies.get('token');

   const optionSize=art.property[activeSize].detailsName;

   const quantitySize=art.property[activeSize].quantity;

   const favoritColor=art.images.filter((img:any)=> (img.color !== 'manyImages' && img.color !== 'imageDescription' ) )[indexs].color;

   const favoriteImage=art.images.filter((img:any)=> (img.color !== 'manyImages' && img.color !== 'imageDescription' ) )[indexs].imageUrl;

 //  toggleDrawer('right', true)

  const handleStoreProducts = async () => {
    try {
     
      const response = await fetch(`http://localhost:8000/addstoreproduct`,{
        method: 'POST',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        },
        body: JSON.stringify({ art , optionSize ,quantitySize , favoritColor , favoriteImage }),
       
      });
    
      const data = await response.json()
      

      if (!data) {
        setLoading(true)
      }if (data.success == false) {
        setMessage(data.message)
        setOpenAlert(true)
      }
      if (data.success == true) {
        dispatch(setProductStore(data.storeProductUser))
        setLoading(false)
        setOpen(false)
        

      } 
     
    
    } catch (error) {
      console.error('operation failed.');
    }
  };

  const handelFavoritProduct=async()=>{
    try {
     
    const response = await fetch(`http://localhost:8000/favoritproduct`,{
      method: 'POST',
      credentials:"include", 
      headers: {
        'Content-Type': 'application/json',
         authorization:`${token}`
      },
      body: JSON.stringify({ art }),
     
    });
    const data = await response.json()
    if (!data) {
      setLoading(true)
    }if (data.success == true) {
      dispatch(setProducts(data.products))
      setLoading(false) 
    } 

  } catch (error) {
    console.error('operation failed.');
  }
   
  }


  const handelDeleteFavoritProduct=async()=>{
    try{
    const response = await fetch(`http://localhost:8000/deletefavoritproduct`,{
      method: 'DELETE',
      credentials:"include", 
      headers: {
        'Content-Type': 'application/json',
         authorization:`${token}`
      },
      body: JSON.stringify({ art }),
     
    });
    const data = await response.json()
    if (!data) {
      setLoading(true)
    }if (data.success == true) {
      dispatch(setProducts(data.products))
      setLoading(false) 
    }if (data.success == false) {
      setMessage(data.message)
      setOpenAlert(true)
    }  
  } catch (error) {
    console.error('operation failed.');
  }
   
  }


  


  const user=useSelector((state:any)=>state.app.user)

  useEffect(()=>{

    
  
    const existUser = art.favoritList.find(fav=> fav.userId === user.id ) 
    console.log(existUser)
    if (existUser) {
      setFavorit(true)
  }else{
      setFavorit(false)
  }
  },[])

  





        if (count > art.property[activeSize].quantity) {
           setCount(art.property[activeSize].quantity)
        }



  return (
    <Box sx={{width:'95%',height:'95%',mb:1,display:'flex',flexDirection:'column'}} >

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
    Shipping: DA1{art.prixlivraison} 
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
    {count }
</Typography>
{ count === art.property[activeSize].quantity ? <IconButton disabled sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}} >
<AddIcon sx={{fontSize:'10px'}} />
</IconButton> : <IconButton onClick={()=>setCount(count + 1)}  sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}} >
<AddIcon sx={{fontSize:'10px',fontWeight:'800'}} />
</IconButton>}
</Box>

<Typography sx={{fontWeight:'100',color:'#757575',textAlign:'left'}}  variant='subtitle2' gutterBottom>
{   art.property[activeSize].quantity} unités disponibles
</Typography>

<Button onClick={ toggleDrawer('right', true)} sx={{width:'100%',height:'40px',my:2,borderRadius:'20px',color:'white',bgcolor:'#e64a19',":hover":{bgcolor:'#e64a19'}}} variant="contained">Ajouter au Panier</Button>
<Box  sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between'}} >
<Button sx={{width:'45%',height:'40px',my:2,borderRadius:'20px',color:'black',":hover":{color:'black'}}} color='inherit' variant="outlined">
 <ReplyIcon/>
 Détails
 </Button>

 { !user  ? {} : 
 (  favorit == true   ? (<Button onClick={handelDeleteFavoritProduct} sx={{width:'45%',height:'40px',my:1,borderRadius:'20px',color:'#e64a19',":hover":{color:'#e64a19'}}} color='inherit' variant="outlined">
 <FavoriteBorderOutlinedIcon/>
 {art.favoritList.length == 0 ? 0  : art.favoritList.length }
 </Button>) : 
 (<Button onClick={handelFavoritProduct} sx={{width:'45%',height:'40px',my:1,borderRadius:'20px',color:'black',":hover":{color:'black'}}} color='inherit' variant="outlined">
 <FavoriteBorderOutlinedIcon/>
 {art.favoritList.length == 0 ? 0  : art.favoritList.length }
 </Button>))
  }

</Box>
    </Box>
 


  </Box>
  )
}
