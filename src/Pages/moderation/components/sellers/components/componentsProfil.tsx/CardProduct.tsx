import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const CardProduct = ({product}:any) => {


    const calculateTotalPieces = (product:any) =>{

        let total = 0;
    
        product.article.filter((art:any)=> art.state == "terminees" ).forEach((prod:any) => {
          total +=  prod.quantity 
      });
    
      return total;
       
      }

  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',borderRadius:'8px',mr:2,p:1,width:'400px'}} >
    <img src={product.images[0].imageUrl} style={{width:'99%',height:'200px',borderRadius:'10px'}} />
    
    <Box sx={{width:'99%',display:'flex',justifyContent:'space-between',alignItems:'center',my:1}} >
    <Typography sx={{fontWeight:'200',color:'#9e9e9e',textAlign:'left'}} variant='subtitle2' gutterBottom>
     product price : { product.price - (product.price*product.solde/100)} (DA)
</Typography>

{ product.solde > 0 ? <Typography sx={{fontWeight:'500',color:'#f44336',textAlign:'left'}} variant='subtitle2' gutterBottom>
     Solde : {product.solde}%
</Typography> : "" }
    </Box>


<Typography sx={{fontWeight:'700',textAlign:'left'}} variant="body1" gutterBottom>
{product.title}
</Typography>

<Typography sx={{fontWeight:'200',color:'#9e9e9e',textAlign:'left'}} variant='subtitle2' gutterBottom>
{product.description}
</Typography>

<Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'99%'}} >
<Button sx={{borderRadius:'8px',textTransform:'lowercase'}} color='error' variant="outlined">View Product</Button>

<Typography sx={{fontWeight:'200',color:'#9e9e9e',textAlign:'left',my:2}} variant='subtitle2' gutterBottom>
     {calculateTotalPieces(product)} pièce vendue
</Typography>

</Box>


 </Box>

  )
}
