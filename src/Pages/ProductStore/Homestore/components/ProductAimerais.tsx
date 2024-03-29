import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export const ProductAimerais = ({product}:any) => {

  const navigate=useNavigate()

    
  return (
    <div>
         <Box component='div' onClick={()=>navigate(`/${product.id}`)} sx={{width:'290px',height:'480px',borderRadius:'20px',mb:2,mr:2,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderColor:'#eeeeee',borderStyle:'solid' }}>
    <img src={product.images[0].imageUrl} alt='hhtr' style={{width:'90%',height:'60%',borderRadius:'20px'}} />
    <Box sx={{width:'90%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{my:1,textAlign:'left'}}  variant='body1' gutterBottom>
  {product.title}
</Typography>
 <Box sx={{display:'flex',mb:1}} >
 <Rating name="read-only" value={2} readOnly size="small" sx={{color:'black',mr:1}} />
 <Typography sx={{textAlign:'left'}}  variant='caption' gutterBottom>
  + 2000 Vendu(s)
</Typography>
 </Box>
 <Box sx={{display:'flex',alignItems:'center'}} >
 <Typography sx={{textAlign:'left',fontWeight:'700'}}  variant='caption' gutterBottom>
  DA
</Typography>
<Typography sx={{textAlign:'left',fontWeight:'700',mr:2}}  variant='body1' gutterBottom>
  {product.price-(product.price*product.solde/100)}
</Typography>
<Typography sx={{textAlign:'left',fontWeight:'5',textDecorationLine:'line-through',color: '#bdbdbd'}}  variant='caption' gutterBottom>
  DA{product.price}
</Typography>
 </Box>

 { product.solde == 0 ? "" :<Box sx={{display:'flex',alignItems:'center'}} >
 <Typography sx={{textAlign:'left',color:'Window',bgcolor:'#ff5722',mr:1}}  variant='caption' gutterBottom>
  Offre Bienvenue 
</Typography>
<Typography sx={{textAlign:'left',fontWeight:'700',color:'#ff5722'}}  variant='caption' gutterBottom>
  . -DA{product.price*product.solde/100}
</Typography>
 </Box>}

 <Button variant="contained" sx={{bgcolor:'black',color:'Window',width:'100%',my:1,borderRadius:'20px',":hover":{bgcolor:'black',color:'Window'}}} >Apercu</Button> 

    </Box>
  </Box>
    </div>
  )
}
