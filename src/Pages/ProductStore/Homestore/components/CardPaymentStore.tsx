import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/Check';
import Link from '@mui/material/Link';
import DeleteIcon from '@mui/icons-material/Delete';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Divider from '@mui/material/Divider';
import { Button } from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';


export const CardPaymentStore = () => {

  const navigate=useNavigate()

    const [show,setShow]=useState(false)

  return (
    <Box sx={{width:'70%',display:'flex',justifyContent:'space-between',my:2}} >
    <Box sx={{display:'flex',flexDirection:'column',width:'60%',alignItems:'center'}} >
        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',width:'100%',height:'100px',borderRadius:'8px',bgcolor:'Window',border:'2px solid #f5f5f5'}} >
        <Typography sx={{fontWeight:'800',textAlign:'left',ml:2}} variant="h5" gutterBottom>
        Panier (2)
        </Typography>
        <Box sx={{display:'flex',alignItems:'center'}} >
       
 { !show ?

<IconButton onClick={()=>setShow(true)} sx={{width:'23px',height:'23px',ml:2,borderRadius:'50%',border:'2px solid #e0e0e0',bgcolor:'Window',":hover":{bgcolor:'Window',border:'2px solid #ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >

</IconButton>

 :  <IconButton onClick={()=>setShow(false)} sx={{width:'23px',ml:2,height:'23px',borderRadius:'50%',bgcolor:'#ff1744',":hover":{bgcolor:'#ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >
     <CheckIcon sx={{fontSize:'17px',color:'white'}} />
 </IconButton>
 
 }

<Link variant='caption' sx={{color:'#9e9e9e',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'#9e9e9e'}}} href="#" underline="none">
Sélectionner Tous Les articles |
</Link> 


<Button variant='text' sx={{color:'#03a9f4',fontSize:'12px',fontWeight:'300'  ,bgcolor:'Window',":hover":{color:'#03a9f4',bgcolor:'Window'} }} >
Supprimer les articles sélectionnés
    </Button>


        </Box>
          
        </Box>

        <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',bgcolor:'Window',borderRadius:'8px',border:'2px solid #f5f5f5',mt:2}} >
         
          
        <Box sx={{display:'flex',alignItems:'center',width:'100%',my:1}} >
       
 { !show ?

<IconButton onClick={()=>setShow(true)} sx={{width:'23px',height:'23px',ml:2,borderRadius:'50%',border:'2px solid #e0e0e0',bgcolor:'Window',":hover":{bgcolor:'Window',border:'2px solid #ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >

</IconButton>

 :  <IconButton onClick={()=>setShow(false)} sx={{width:'23px',ml:2,height:'23px',borderRadius:'50%',bgcolor:'#ff1744',":hover":{bgcolor:'#ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >
     <CheckIcon sx={{fontSize:'17px',color:'white'}} />
 </IconButton>
 
 }

<Link variant='body2' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'black'}}} href="#" underline="none">
Expédié par des vendeurs internationaux
</Link>

          </Box>

          <Divider sx={{width:'90%',mb:1}} />


    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}} >

    <Box sx={{display:'flex',alignItems:'center',width:'100%',my:2}} >
       
       { !show ?

<IconButton onClick={()=>setShow(true)} sx={{width:'23px',height:'23px',ml:2,borderRadius:'50%',border:'2px solid #e0e0e0',bgcolor:'Window',":hover":{bgcolor:'Window',border:'2px solid #ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >

</IconButton>

       :  <IconButton onClick={()=>setShow(false)} sx={{width:'23px',ml:2,height:'23px',borderRadius:'50%',bgcolor:'#ff1744',":hover":{bgcolor:'#ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >
           <CheckIcon sx={{fontSize:'17px',color:'white'}} />
       </IconButton>
       
       }

     <Link variant='body2' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'#ff5722'}}} href="#" underline="none">
     
    Line hair boutique Store
  </Link>

                </Box>
    
                <Box sx={{display:'flex',alignItems:'center',width:'100%'}} >
       
       { !show ?

<IconButton onClick={()=>setShow(true)} sx={{width:'23px',height:'23px',mx:2,borderRadius:'50%',border:'2px solid #e0e0e0',bgcolor:'Window',":hover":{bgcolor:'Window',border:'2px solid #ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >

</IconButton>

       :  <IconButton onClick={()=>setShow(false)} sx={{width:'23px',mx:2,height:'23px',borderRadius:'50%',bgcolor:'#ff1744',":hover":{bgcolor:'#ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >
           <CheckIcon sx={{fontSize:'17px',color:'white'}} />
       </IconButton>
       
       }

    <img src='https://i.pinimg.com/236x/40/ce/53/40ce539348cea23368e65d1a42cdc797.jpg' style={{width:'110px',height:'130px',borderRadius:'8px'}} />
    <Box sx={{display:'flex',flexDirection:'column',height:'100%',width:'100%',px:2}} >
      <Box sx={{display:'flex',alignItems:'center',width:'100%',justifyContent:'space-between'}} >
      <Link variant='body1' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'#ff5722'}}} href="#" underline="none">
       
Perruque Lace Front Wig 360 Brésilienne Naturelle, Cheveux Lisses...

   </Link>
   <Box sx={{display:'flex',alignItems:'center'}} >
   <IconButton><FavoriteBorderIcon sx={{fontSize:'18px',":hover":{color:'#ff5722'}}} /></IconButton>
     <IconButton><DeleteIcon sx={{fontSize:'18px',":hover":{color:'#ff5722'}}} /></IconButton>
     </Box>
      </Box>

    <Button variant='outlined' sx={{border:'1px solid #f5f5f5 ',width:'250px',color:'black',fontSize:'8px',fontWeight:'700' ,borderRadius:'14px' ,bgcolor:'#e0e0e0',":hover":{color:'black',border:'1px solid #f5f5f5 ',bgcolor:'#e0e0e0'} }} >
        size of your contained
    </Button>

    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',my:1}} >
    <Typography variant='body1' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'black'}}} >
       
    US $101.42
       
                    </Typography>
          <Box sx={{display:'flex',alignItems:'center'}} >
          <IconButton sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}} >
<RemoveIcon sx={{fontSize:'10px'}} />
</IconButton>
<Typography sx={{fontWeight:'700',textAlign:'left',mx:1}}  variant='caption' gutterBottom>
5
</Typography>
<IconButton sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}} >
<AddIcon sx={{fontSize:'13px'}} />
</IconButton>
          </Box>

         

    </Box>
   <Box sx={{width:'100%',display:'flex'}} >
    <Button variant='text' sx={{color:'#bdbdbd',fontSize:'14px',fontWeight:'100' ,":hover":{color:'#bdbdbd'} }} >
          Livraison gratuite
    </Button>
    </Box>
    </Box>

                </Box>

         

    </Box>






        </Box>
    </Box>

    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'30%'}} >
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',bgcolor:'Window',mb:2}} >
          <Box sx={{width:'90%',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:'8px'}} >
            <Box sx={{width:'100%',my:2}} >
            <Typography variant='h5' sx={{color:'black',fontWeight:'700',textAlign:'left',":hover":{color:'black'}}} >
          Résumé
           </Typography>
            </Box>
         

         <Box sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between'}} >
         <Typography variant='body1' sx={{color:'black',fontWeight:'700',textAlign:'left',":hover":{color:'black'}}} >
         Sous-total
           </Typography>
           <Typography variant='body1' sx={{color:'black',fontWeight:'500',textAlign:'left',":hover":{color:'black'}}} >
           US $213.82
           </Typography>
         </Box>

         <Box sx={{display:'flex',width:'100%',alignItems:'center',my:1,justifyContent:'space-between'}} >
         <Typography variant='body1' sx={{color:'black',fontWeight:'700',textAlign:'left',":hover":{color:'black'}}} >
         Frais de livraison
           </Typography>
           <Typography variant='body1' sx={{color:'black',fontWeight:'500',textAlign:'left',":hover":{color:'black'}}} >
           US $8.74
           </Typography>
         </Box>

         
         <Box sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between'}} >
         <Typography variant='body1' sx={{color:'black',fontWeight:'400',textAlign:'left',":hover":{color:'black'}}} >
         Total:
           </Typography>
           <Typography variant='h6' sx={{color:'black',fontWeight:'700',textAlign:'left',":hover":{color:'black'}}} >
           US $8.74
           </Typography>
         </Box>
          <Box sx={{width:'100%',alignItems:'center'}} >
         <Typography variant='body2' sx={{color:'#9e9e9e',fontWeight:'300',my:2,textAlign:'right',":hover":{color:'#9e9e9e'}}} >
         (≈DA29,972.11)
           </Typography>
           </Box>
           <Button onClick={()=>navigate("/stores/payment")} variant='contained' sx={{bgcolor:'#ff1744',color:'white',mb:2,width:'100%',borderRadius:'16px' ,":hover":{color:'white',bgcolor:'#ff1744'} }} >
          Payer(2)
    </Button>
          </Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',bgcolor:'Window',mb:2}} >
          <Box sx={{width:'90%',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:'8px'}} >
          <Box sx={{width:'100%',my:2}} >
            <Typography variant='h6' sx={{color:'black',fontWeight:'700',textAlign:'left',":hover":{color:'black'}}} >
            Payez avec
           </Typography>
            </Box>
            <Box sx={{display:'flex',flexWrap:'wrap',alignItems:'center',mb:1}} >
      
   <img src='https://img.alicdn.com/tfs/TB1xcMWdEKF3KVjSZFEXXXExFXa-68-48.png' style={{height:'30px',width:'50px'}} />
   <img src='https://ae01.alicdn.com/kf/S7b20ce778ba44e60a062008c35e98b57M/216x144.png' style={{height:'25px',width:'40px',marginRight:2}} />
   <img src='https://ae01.alicdn.com/kf/Sea8b6d9e957a4b4783785f087af30ba2r/216x144.png' style={{height:'25px',width:'40px',marginRight:2}} />
   <img src='https://ae01.alicdn.com/kf/S91ee3e0f4fde4535aad35f7c30f6bacfh/216x144.png' style={{height:'25px',width:'40px',marginRight:1}} />
   <img src='https://ae01.alicdn.com/kf/S8df1a1d99c8049d1b1a86c9a144719b6W/216x144.png' style={{height:'25px',width:'40px',marginRight:1}} />
   <img src='https://ae01.alicdn.com/kf/S173da9e53a234dcb9795cebd1856c4d7J/216x144.png' style={{height:'25px',width:'40px',marginRight:1}} />
   <img src='https://ae01.alicdn.com/kf/Sa4a89534ef694f1c8877ae3d864db6acz/216x144.png' style={{height:'25px',width:'40px',marginRight:1}} />
   <img src='https://ae01.alicdn.com/kf/S85aba413145f4b479fc18825603f87aaZ/216x144.png' style={{height:'25px',width:'40px',marginRight:1}} />
   <img src='https://ae01.alicdn.com/kf/S0321450614244c4dafba2517560de3b8s/216x144.png' style={{height:'25px',width:'40px'}} />
   <img src='https://ae01.alicdn.com/kf/Sffbd9fb9807e42d9a32feda7bc09121cA/216x144.png' style={{height:'25px',width:'40px',marginRight:1}} />
   <img src='https://ae01.alicdn.com/kf/S7774cbfd89914cad85c8b548087820308/216x144.png' style={{height:'25px',width:'40px',marginRight:1}} />
   <img src='https://ae01.alicdn.com/kf/Sf9caac85ebcd470a95d0ff441ebf609fc/216x144.png' style={{height:'25px',width:'40px',marginRight:1}} />
   <img src='https://ae01.alicdn.com/kf/S2a5881f5906b4fb58a0c6da600ddf7bf1/216x144.png' style={{height:'25px',width:'40px'}} />
 
   </Box>

   <Divider sx={{width:'90%',mb:2}} />

   <Box sx={{width:'100%',display:'flex',flexDirection:'column',my:2}} >
            <Typography variant='h6' sx={{color:'black',fontWeight:'700',textAlign:'left',":hover":{color:'black'}}} >
            Protection acheteur
           </Typography>
         
          
           <Typography variant='subtitle1' sx={{color:'black',display:'flex',alignItems:'center',fontWeight:'500',textAlign:'left',":hover":{color:'black'}}} >
           <VerifiedUserOutlinedIcon sx={{color:'#69f0ae',mr:1}} /> Obtenez un remboursement complet si l'article vous est livré en retard ou bien ne correspond pas à sa description.
           </Typography>
          
           

            </Box>
            </Box>
            </Box>
    </Box>
</Box>
  )
}
