
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
export const ImageCard = () => {
  return (
    <Box sx={{width:'95%',height:'95%',display:'flex',flexDirection:'column'}} >

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
    Shipping: DA18,497.19 
</Typography>
<Typography sx={{textAlign:'left'}}  variant='subtitle2' gutterBottom>
Temps estimé pour la livraison: 7-15 jours 
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
<IconButton sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}} >
<RemoveIcon sx={{fontSize:'10px'}} />
</IconButton>
<Typography sx={{fontWeight:'700',textAlign:'left',mx:1}}  variant='body1' gutterBottom>
    5
</Typography>
<IconButton sx={{bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'}}} >
<AddIcon sx={{fontSize:'10px'}} />
</IconButton>
</Box>

<Typography sx={{fontWeight:'100',color:'#757575',textAlign:'left'}}  variant='subtitle2' gutterBottom>
759 unités disponibles
</Typography>

<Button sx={{width:'100%',height:'40px',my:2,borderRadius:'20px',color:'white',bgcolor:'#e64a19',":hover":{bgcolor:'#e64a19'}}} variant="contained">Acheter Maintenant</Button>
<Button sx={{width:'100%',height:'40px',my:2,borderRadius:'20px',color:'#bf360c',bgcolor:'#fbe9e7',":hover":{bgcolor:'#fbe9e7'}}} variant="contained">Acheter Maintenant</Button>
<Box sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between'}} >
<Button sx={{width:'45%',height:'40px',my:2,borderRadius:'20px',color:'black',":hover":{color:'black'}}} color='inherit' variant="outlined">
 <ReplyIcon/>
 Partager
 </Button>
 <Button sx={{width:'45%',height:'40px',my:1,borderRadius:'20px',color:'black',":hover":{color:'black'}}} color='inherit' variant="outlined">
 <FavoriteBorderOutlinedIcon/>
 10.9K
 </Button>
</Box>
    </Box>

  </Box>
  )
}
