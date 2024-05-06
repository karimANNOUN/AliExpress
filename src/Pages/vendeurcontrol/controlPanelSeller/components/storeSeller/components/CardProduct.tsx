import { Box,Typography ,Button } from '@mui/material';
import Link from '@mui/material/Link';
import Cookies from 'js-cookie';
import { useState } from 'react';

export const CardProduct = ({product,setNewProdUsed}:any) => {

  const [loading,setLoading]=useState(false)
  const token = Cookies.get('token');

  const handelDeleteProductState=async()=>{
    try {
      setLoading(true)
    const response = await fetch(`http://localhost:8000/deleteStateProduct`,{
      method: 'PATCH',
      credentials:"include", 
      headers: {
        'Content-Type': 'application/json',
         authorization:`${token}`
      },
      body:JSON.stringify({product})
    });
    const data = await response.json()
   if (data.success == true) {
      setNewProdUsed(data.productSellerLune)
      setLoading(false)
    } 

  } catch (error) {
    console.error('operation failed.');
  }
   
  }

  return (
    <Box sx={{width:'30%',height:'200px',display:'flex',bgcolor:'Window',justifyContent:'space-around',alignItems:'center',borderWidth:'2px',borderRadius:'6px',borderStyle:'solid',borderColor:'#ffd600'}} >
               <img src={product.images[0].imageUrl} style={{width:'40%',height:'90%',borderRadius:'8px'}} />
               <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',height:'90%',width:'50%'}} >
                <Box sx={{display:'flex',flexDirection:'column',height:'90%',width:'50%'}} >
                <Link variant='caption' sx={{color:'#9e9e9e',textAlign:'left',mb:2,textDecorationLine:'none',":hover":{color:'#9e9e9e',textDecorationLine:'underline'}}} href={`/controlpanelseller/updateproduct/${product.id}`}>
               {product.title}
               </Link>
               
               <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='h6' gutterBottom>
               DA{product.price - (product.price*product.solde/100) }
       </Typography>
                </Box>
               
                <Button 
       variant="contained" 
       disabled={loading ? true : false}
       onClick={handelDeleteProductState}
       sx={{color:'white',bgcolor:'red',textTransform:'lowercase',":hover":{color:'white',bgcolor:'red'}}} 
       >
         Delete Lune 
      </Button>

               </Box>
            </Box>
  )
}
