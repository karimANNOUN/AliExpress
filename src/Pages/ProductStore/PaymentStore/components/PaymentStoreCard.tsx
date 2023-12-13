import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import { Button } from '@mui/material';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import PaymentIcon from '@mui/icons-material/Payment';

import { CardElementStores } from './CardElementStores';
import { BoxLocation } from './BoxLocation';

export const PaymentStoreCard = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);

    const [show,setShow]=useState(false)
    const [adress,setAdress]=useState(false)

const infoAdress=[]


  return (
    <Box sx={{width:'70%',display:'flex',justifyContent:'space-between',my:2}} >
    <Box sx={{display:'flex',flexDirection:'column',width:'60%',alignItems:'center'}} >


    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',width:'100%',borderRadius:'8px',mb:2,bgcolor:'Window',border:'2px solid #f5f5f5'}} >
            <Box sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between'}} >
            <Typography sx={{fontWeight:'800',textAlign:'left',ml:2}} variant="h6" gutterBottom>
            Adresse de livraison
        </Typography>
          
        { infoAdress.length ? "" : <Button onClick={handleOpen} variant='text' sx={{color:'#03a9f4',bgcolor:'Window',fontSize:'12px',fontWeight:'100' ,":hover":{color:'#03a9f4',bgcolor:'Window'} }} >
        Ajouter Votre adress
    </Button>}

             </Box>
       
        <Box sx={{display:'flex',alignItems:'center'}} >
       






        { infoAdress.length ?   
        
        <Box sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between',my:2,mx:2}} >

          <Box sx={{display:'flex',flexDirection:'column'}} >
            <Box sx={{display:'flex',alignItems:'center'}} >
            <Typography sx={{fontWeight:'300',textAlign:'left',mr:2}} variant='body1' gutterBottom>
            Karim Announ
        </Typography>
        <Typography sx={{fontWeight:'100',color:'#bdbdbd',textAlign:'left'}} variant='body1' gutterBottom>
        +213 656256738
        </Typography>
              </Box>

              <Box sx={{display:'flex',alignItems:'center'}} >

        <Typography sx={{fontWeight:'100',color:'#bdbdbd',textAlign:'left'}} variant='body1' gutterBottom>
        rue alwi amara
        </Typography>
              </Box>
              <Box sx={{display:'flex',alignItems:'center'}} >

<Typography sx={{fontWeight:'100',color:'#bdbdbd',textAlign:'left'}} variant='body1' gutterBottom>
Chihani, el taref, Algeria, 36014
</Typography>
      </Box>

          </Box>


          <Button onClick={handleOpen} variant='text' sx={{color:'#03a9f4',bgcolor:'Window',fontSize:'12px',fontWeight:'100' ,":hover":{color:'#03a9f4',bgcolor:'Window'} }} >
        Modifier
    </Button>
        </Box>
        
        :<Typography variant='subtitle1' sx={{color:'#9e9e9e',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'#9e9e9e'}}} >
 Aucune Adress
</Typography> }





        </Box>




    <BoxLocation open={open} setOpen={setOpen} />

          
        </Box>















        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'space-around',width:'100%',height:'100px',borderRadius:'8px',bgcolor:'Window',border:'2px solid #f5f5f5'}} >
            <Box sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between'}} >
            <Typography sx={{fontWeight:'800',textAlign:'left',ml:2}} variant="h6" gutterBottom>
        Moyens de paiement
        </Typography>
          
        <Button variant='text' sx={{color:'#03a9f4',bgcolor:'Window',fontSize:'12px',fontWeight:'100' ,":hover":{color:'#03a9f4',bgcolor:'Window'} }} >
        Voir plus
    </Button>

             </Box>
       
        <Box sx={{display:'flex',alignItems:'center'}} >
       


<IconButton  sx={{width:'23px',height:'23px',ml:2,borderRadius:'50%',border:'2px solid #e0e0e0',bgcolor:'Window',":hover":{bgcolor:'Window'},display:'flex',justifyContent:'center',alignItems:'center'}} >

</IconButton>



<Button variant='text' sx={{color:'black',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'black'}}} >
 <PaymentIcon sx={{fontSize:'16px',mr:1}} />  Ajouter une carte
</Button> 





        </Box>
          
        </Box>

        <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',bgcolor:'Window',borderRadius:'8px',border:'2px solid #f5f5f5',mt:2}} >
         

   <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}} >
         <CardElementStores/>
         <CardElementStores/>
         <CardElementStores/>
         <CardElementStores/>
   </Box>






        </Box>
    </Box>

    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'30%'}} >
      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',bgcolor:'Window',mb:2}} >
          <Box sx={{width:'90%',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:'8px'}} >
            <Box sx={{width:'100%',my:2}} >
            <Typography variant='h5' sx={{color:'black',fontWeight:'700',textAlign:'left',":hover":{color:'black'}}} >
            Sommaire
           </Typography>
            </Box>
         

         <Box sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between'}} >
         <Typography variant='body1' sx={{color:'black',fontWeight:'700',textAlign:'left',":hover":{color:'black'}}} >
         Prix total des articles
           </Typography>
           <Typography variant='body1' sx={{color:'black',fontWeight:'500',textAlign:'left',":hover":{color:'black'}}} >
           US $213.82
           </Typography>
         </Box>

         <Box sx={{display:'flex',width:'100%',alignItems:'center',my:1,justifyContent:'space-between'}} >
         <Typography variant='body1' sx={{color:'black',fontWeight:'700',textAlign:'left',":hover":{color:'black'}}} >
         Total des frais d'envoi
           </Typography>
           <Typography variant='body1' sx={{color:'black',fontWeight:'500',textAlign:'left',":hover":{color:'black'}}} >
           gratuit
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
           <Button variant='contained' sx={{bgcolor:'#ff1744',color:'white',mb:2,width:'100%',borderRadius:'16px' ,":hover":{color:'white',bgcolor:'#ff1744'} }} >
          Commander
    </Button>
          </Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',bgcolor:'Window',mb:2}} >
          <Box sx={{width:'90%',display:'flex',flexDirection:'column',alignItems:'center',borderRadius:'8px'}} >
          <Box sx={{width:'100%',my:2}} >
            <Typography variant='h6' sx={{color:'black',fontWeight:'700',textAlign:'left',":hover":{color:'black'}}} >
            Payment secuire
           </Typography>
            </Box>
     

   <Box sx={{width:'100%',display:'flex',flexDirection:'column',my:2}} >
            <Typography variant='h6' sx={{color:'black',display:'flex',alignItems:'center',fontWeight:'700',textAlign:'left',":hover":{color:'black'}}} >
            <VerifiedUserOutlinedIcon sx={{color:'#69f0ae',mr:1}} /> Khademni
           </Typography>
         
          
           <Typography variant='subtitle1' sx={{color:'#757575',fontWeight:'300',textAlign:'left',":hover":{color:'#757575'}}} >
           Khademni keeps your information and payment safe
           </Typography>
          
           

            </Box>
            </Box>
            </Box>
    </Box>
</Box>
  )
}
