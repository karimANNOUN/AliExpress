import React from 'react'
import { Box,Typography } from '@mui/material'
import Rating from '@mui/material/Rating';
import Link from '@mui/material/Link';


export const ReviewsCollumn = ({rev}:any) => {
  return (
    <Box  sx={{display:'flex',alignItems:'center',width:'100%',height:'80px',borderBottom:'2px solid #eeeeee',justifyContent:'space-between'}} >
                   <Box sx={{height:'100%',width:'20%',display:'flex',pl:1,pt:1}} >
                   <Link variant='subtitle2' sx={{color:'black',textDecorationLine:'none',":hover":{color:'#03a9f4',textDecorationLine:'underline'}}} href="#" >
                   {rev.buyer.name}
  </Link>
            </Box>
             
            <Box sx={{height:'100%',width:'20%',display:'flex',flexDirection:'column',justifyContent:'space-between'}} >
                <Box sx={{display:'flex',alignItems:'center'}} >
                <Link variant='caption' sx={{textDecorationLine:'none',color:'black',mt:1,mr:1,textAlign:'left',":hover":{textDecorationLine:'none'}}} >                 
 {rev.comment}
  </Link>
                </Box>
           
              
  <Typography sx={{fontWeight:'200',textAlign:'left',mb:1}} variant='body2' gutterBottom>
          Quantity: {rev.quantity} pièce
  </Typography>
             
            </Box>

            <Box sx={{height:'100%',width:'20%',display:'flex',flexDirection:'column'}} >
                <Box sx={{display:'flex',alignItems:'center'}} >
            <Rating name="read-only" value={rev.rating} readOnly size='small' />
            <Typography sx={{fontWeight:'200',textAlign:'left',color:'#bdbdbd',mt:1}} variant='body2' gutterBottom>
            {rev.createdAt}
  </Typography>
  </Box>
  <Typography sx={{fontWeight:'200',textAlign:'left',color:'#bdbdbd',mt:1}} variant='body2' gutterBottom>
          likes Comment :({rev.likes.length})
  </Typography>
            </Box>


            <Box sx={{height:'100%',width:'20%',ml:1,display:'flex',flexDirection:'column'}} >
            <Link variant='subtitle2' sx={{color:'black',textDecorationLine:'none',mt:1,textAlign:'left',":hover":{color:'#03a9f4',textDecorationLine:'underline'}}} href={`/controlpanelseller/updateproduct/${rev.productId}`} >
            {rev.product.title}
  </Link>
            <img alt='imgsreveiws' src={rev.product.images[0].imageUrl} style={{width:'40px',height:'80%',borderRadius:'8px'}} />
            </Box>


            <Box sx={{height:'100%',width:'20%',ml:1,display:'flex',flexDirection:'column'}} >
            <Typography sx={{fontWeight:'200',textAlign:'left',color:'#bdbdbd',mt:1}} variant='body2' gutterBottom>
            {rev.colorProduct} ,{rev.propertyType}
  </Typography>
            </Box>
            





                   </Box>
                
  )
}
