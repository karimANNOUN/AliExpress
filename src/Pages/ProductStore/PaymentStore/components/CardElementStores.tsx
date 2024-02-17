import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Link from '@mui/material/Link';
import { Button, Divider } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import React,{ useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setStorePayer } from '../../../../storeRedux/CartSlice';

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  
    
  });

export const CardElementStores = ({payer}:any) => {



  const [show,setShow]=useState(false)

    const dispatch = useDispatch()

    const [loading,setLoading]=useState(false)

    const [message,setMessage]=useState('')

    const [quantity,setQuantity]=useState(1)

   const token = Cookies.get('token');

   const [openAlert, setOpenAlert] = useState(false);


   const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };

  const storePayer=useSelector((state:any)=>state.app.storePayer)

  const checkedProduct = storePayer.find((fav:any)=> fav.productstoreId === payer.product.id ) 

      

      useEffect(()=>{

        if (checkedProduct) {
          setShow(true)
          const quantityStorePayerProduct=storePayer.find((quantity:any)=>quantity.productstoreId === payer.product.id)
          setQuantity(quantityStorePayerProduct.quantity)
        }else{
          setShow(false)
        } 

        

    
 
      },[storePayer])


  const handelUpdateAddNewQuantity=async()=>{

   
    const prod=payer
    
        try{
          const response = await fetch(`http://localhost:8000/updateaddquantity`,{
            method: 'PATCH',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            },
            body: JSON.stringify({ quantity ,prod }),
           
          });
          const data = await response.json()

          if (!data) {
            setLoading(true)
          }if (data.success == true) {
           dispatch(setStorePayer(data.findStorPayer))
            setLoading(false) 
            setShow(true)
          }if (data.success == false) {
            setMessage(data.message)
            setOpenAlert(true)
          }  
        } catch (error) {
          console.error('operation failed.');
        }
      
    
   
   }


   const handelUpdateMoinNewQuantity=async()=>{

    const prod=payer

        try{
          const response = await fetch(`http://localhost:8000/updatemoinquantity`,{
            method: 'PATCH',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            },
            body: JSON.stringify({ quantity ,prod }),
           
          });
          const data = await response.json()

          if (!data) {
            setLoading(true)
          }if (data.success == true) {
           dispatch(setStorePayer(data.findStorPayer))
            setLoading(false) 
            setShow(true)
          }if (data.success == false) {
            setMessage(data.message)
            setOpenAlert(true)
          }  
        } catch (error) {
          console.error('operation failed.');
        }
     
   }





  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}} >

<Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>

    <Box sx={{display:'flex',alignItems:'center',width:'100%',my:2,justifyContent:'space-between'}} >
       
     <Link variant='body2' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:2,":hover":{color:'#ff5722'}}} href="#" underline="none">
     
     {payer.store.productStoreName} Store
  </Link>

  <IconButton  >
      <CreateIcon sx={{fontSize:'14px'}} />
</IconButton>


                </Box>
    
                <Box sx={{display:'flex',alignItems:'center',width:'100%',ml:2}} >

    <img src={payer.store.imageUrl} style={{width:'110px',height:'130px',borderRadius:'8px'}} />
    <Box sx={{display:'flex',flexDirection:'column',height:'100%',width:'100%',px:2}} >
      <Box sx={{display:'flex',alignItems:'center',width:'100%',justifyContent:'space-between'}} >
      <Link variant='body1' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'#ff5722'}}} href="#" underline="none">
       
    {payer.product.title}

   </Link>
      </Box>

    <Button variant='outlined' sx={{border:'1px solid #f5f5f5 ',width:'250px',color:'black',fontSize:'8px',fontWeight:'700' ,borderRadius:'14px' ,bgcolor:'#e0e0e0',":hover":{color:'black',border:'1px solid #f5f5f5 ',bgcolor:'#e0e0e0'} }} >
        {payer.store.propertyType},{payer.store.colorProduct}
    </Button>

    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',my:1}} >
    <Typography variant='body1' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'black'}}} >
       
    US ${payer.product.solde === 0 ? payer.product.price : (payer.product.price- (payer.product.price*payer.product.solde/100) ) }
       
                    </Typography>
          <Box sx={{display:'flex',alignItems:'center'}} >
          {payer.quantity <=  1 ? <IconButton disabled sx={{bgcolor:'#eeeeee',":hover":{bgcolor:'#eeeeee'}}} >
<RemoveIcon sx={{fontSize:'14px'}} />
</IconButton>  :
<IconButton onClick={handelUpdateMoinNewQuantity}  sx={{bgcolor:'#eeeeee',":hover":{bgcolor:'#eeeeee'}}} >
<RemoveIcon sx={{fontSize:'14px'}} />
</IconButton>
}
<Typography sx={{fontWeight:'700',textAlign:'left',mx:1}}  variant='caption' gutterBottom>
{quantity}
</Typography>
{quantity === payer.store.quantity ? <IconButton disabled sx={{bgcolor:'#eeeeee',":hover":{bgcolor:'#eeeeee'}}} >
<AddIcon sx={{fontSize:'14px'}} />
</IconButton>:
<IconButton onClick={handelUpdateAddNewQuantity} sx={{bgcolor:'#eeeeee',":hover":{bgcolor:'#eeeeee'}}} >
<AddIcon sx={{fontSize:'14px'}} />
</IconButton>
}
          </Box>

         

    </Box>
   <Box sx={{width:'100%',display:'flex'}} >
    <Button variant='text' sx={{color:'#bdbdbd',fontSize:'14px',fontWeight:'100' ,":hover":{color:'#bdbdbd'} }} >
       Prix Livraison   { payer.product.prixlivraison == 0 ? "gratuite" : `${payer.product.prixlivraison}$` }
    </Button>
    </Box>
    </Box>

                </Box>

                <Divider sx={{width:'95%',mt:2}} />

    </Box>
  )
}
