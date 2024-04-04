import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import Link from '@mui/material/Link';
import Rating from '@mui/material/Rating';
import { ReviewEvaluation } from './ReviewEvaluation';

export const CollumnTableReview = ({command}:any) => {

    const [rating, setRating] = React.useState<number | null>(0);
    const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

  return (

    <>


    <Box sx={{display:'flex',alignItems:'center',width:'100%',bgcolor:'Window'}} >

    <Box sx={{width:'33%'}} >
     <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}} >

   
    
<Box sx={{display:'flex',alignItems:'center',width:'100%',my:2}} >
   
 <Link variant='body2' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:2,":hover":{color:'#ff5722'}}} href={`/store/${command.sellerId}`} underline="none">
 
 {command.seller.name} Store
</Link>


            </Box>

            <Box sx={{display:'flex',alignItems:'center',width:'100%',ml:2}} >

<img src={command.imageUrl} style={{width:'25%',height:'30px',borderRadius:'8px'}} />
<Box sx={{display:'flex',flexDirection:'column',height:'100%',width:'100%',px:2}} >
  <Box sx={{display:'flex',alignItems:'center',width:'100%',justifyContent:'space-between'}} >
  <Link variant='body1' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'#ff5722'}}} href={`/${command.productId}`} underline="none">
   
{command.product.title}

</Link>
  </Box>

<Button variant='outlined' sx={{border:'1px solid #f5f5f5 ',width:'150px',color:'black',fontSize:'8px',fontWeight:'700' ,borderRadius:'14px' ,bgcolor:'#e0e0e0',":hover":{color:'black',border:'1px solid #f5f5f5 ',bgcolor:'#e0e0e0'} }} >
{command.propertyType},{command.colorProduct}
</Button>

<Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',my:1}} >
<Typography variant='body1' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'black'}}} >
   
US ${ command.priceProduct}
   
                </Typography>
     

     

</Box>
<Box sx={{width:'100%',display:'flex'}} >
<Button variant='text' sx={{color:'#bdbdbd',fontSize:'14px',fontWeight:'100' ,":hover":{color:'#bdbdbd'} }} >
   Prix Livraison   { command.priceLivraison == 0 ? "gratuite" : `${command.priceLivraison}$` }
</Button>
</Box>
</Box>

            </Box>

</Box>


                                    </Box>
                                    <Box sx={{width:'33%'}} >

                                    { !command.product.review.length  ? 
                                    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
                                     
                                     <Typography sx={{color:'black',textAlign:'left',mb:2,fontWeight:'800'}}  variant='body1' gutterBottom>
                                        Aucun Review for this commande 
                                      </Typography>
                                    <Button onClick={handleOpen} variant="text">Add Review</Button>

                                    </Box>
                                    :
                                    <Box sx={{width:'100%',p:1 ,display:'flex',flexDirection:'column'}} >
                                        <Box sx={{display:'flex',alignItems:'center',mb:1}} >
                                        <Typography sx={{color:'black',textAlign:'left',fontWeight:'800'}}  variant='body1' gutterBottom>
                                     Comments : 
                                   </Typography>
                                   <Typography sx={{color:'black',textAlign:'left'}}  variant='subtitle2' gutterBottom>
                                     {command.product.review[0].comment}
                                   </Typography>
                                        </Box>

                                        <Box sx={{display:'flex',alignItems:'center'}} >
                                           { command.product.review[0].images.map( (imge:any) => <img key={imge.id} src={imge.imageUrl} style={{width:'22%',marginRight:1,height:'30px',borderRadius:'8px'}} />)}
                                        </Box>
                                      
                                    </Box>
                                    }                                    

                                    </Box>
                                   
                                    <Box sx={{width:'33%'}} >

                                    {  !command.product.review.length  ?  <Typography sx={{color:'black',textAlign:'center'}}  variant='body1' gutterBottom>
                                     No Action
                                   </Typography> : 
                                    <Rating name="half-rating" defaultValue={2.5} precision={0.5}  readOnly />
                                   }
 
                                    </Box>
 </Box>
  <ReviewEvaluation open={open} setOpen={setOpen} />
<Divider/>
 </>
  )
}
