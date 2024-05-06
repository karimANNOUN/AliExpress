import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Cookies from 'js-cookie';

export const CardLuneProduct = ({prod,setNewProdUsed,setOpenModal1,setProducts}:any) => {

    const token = Cookies.get('token');

    const [loading,setLoading]=useState(false)

    const Quantities = (prod:any) => {
        let totalQuantity = 0;
        prod.property.forEach((product:any) => {
            totalQuantity += product.quantity;
          });
          return totalQuantity
    }


    const handelUpdateProductState=async()=>{
        try {
          setLoading(true)
        const response = await fetch(`http://localhost:8000/updateStateProd`,{
          method: 'PATCH',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
          body:JSON.stringify({prod})
        });
        const data = await response.json()
       if (data.success == true) {
          setProducts(data.productNonLune)
          setNewProdUsed(data.productSellerLune)
          setLoading(false)
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }




  return (
    <Box sx={{display:'flex',alignItems:'center',height:'100px',borderBottom:'solid 2px #e0e0e0',borderRadius:'6px',width:'100%',p:1}} >
         
    <img src={prod.images[0].imageUrl} alt='news' style={{height:'100%',width:'150px',borderRadius:'6px'}}  />

    <Box sx={{height:'100%',width:'50%',display:'flex',flexDirection:'column',justifyContent:'space-between',mx:1}} >

       <Box sx={{display:'flex',flexDirection:'column'}} >
       <Link href={`/controlpanelseller/updateproduct/${prod.id}`} underline="none" variant='subtitle2' sx={{fontWeight:'500',fontFamily:'serif',color:'#9e9e9e'}} >  
     {prod.title} 
   </Link>

   <Typography variant='caption' sx={{fontWeight:'700',color:'#616161'}} >  
     Quantity: {Quantities(prod)} piece
   </Typography>


   <Typography variant='caption' sx={{fontWeight:'500',fontFamily:'serif',color:'#9e9e9e'}} >  
    Prix: {prod.price - (prod.price*prod.solde/100) } DA
   </Typography>
       </Box>
   

       { prod.solde === 0 ? "" : <Typography variant='caption' sx={{fontWeight:'500',fontFamily:'serif',color:'#e64a19'}} >  
      solde : {prod.solde} % 
   </Typography>}

    </Box>

     <Box sx={{display:'flex',height:'100%',width:'20%',alignItems:'center',justifyContent:'center'}} >
     <Button 
       onClick={handelUpdateProductState} 
       variant="contained" 
       disabled={loading ? true : false}
       sx={{color:'white',bgcolor:'#ad1457',textTransform:'lowercase',":hover":{color:'white',bgcolor:'#ad1457'}}} 
       >
         Add 
      </Button>
     </Box>
   

   </Box>
  )
}
