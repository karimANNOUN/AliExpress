
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Skeleton from '@mui/material/Skeleton';
export const Header = ({loading}:any) => {

        const navigate=useNavigate()

        const product=useSelector((state:any)=>state.app.product)

      
  return (
      
    <div>
        {loading == true ? 
        
        <Box sx={{width:'100%',bgcolor:'#424242',display:'flex',alignItems:'center'}} >
        <Skeleton variant="circular" width={40} height={40} />
         <Skeleton variant="rectangular" width={210} height={60} />
        </Box>
     
     : <Box sx={{width:'100%',height:'80px',bgcolor:'#424242',display:'flex',alignItems:'center',justifyContent:'space-around'}} >
              <Box component='div' onClick={()=>navigate(`/store/${product.userId}`)} sx={{display:'flex',alignItems:'center'}} >
              <Avatar
           alt="Remy Sharp"
               src={product.user.imageProfle == null ? "" : product.user.imageProfle }
               sx={{ width: 50, height: 50 }}
              />
              <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',justifyContent:'center',mx:1}} >
              <Typography sx={{fontWeight:'800',color:'white'}} variant="subtitle2" gutterBottom>
              {product.user.name}
      </Typography>
      <Box>
      <Typography sx={{color:'#2196f3',bgcolor:'white',textAlign:'left'}} variant="caption" gutterBottom>
              Silver
      </Typography>
      </Box>
              </Box> 
             <ChevronRightIcon sx={{color:'white',fontSize:'30px'}} />
              </Box>
              <Box sx={{display:'flex',alignItems:'center',color:'white'}} >
              <Typography sx={{fontWeight:'800',color:'white',mr:2}} variant="subtitle2" gutterBottom>
              88.6% Avis positifs 
      </Typography> |
      <Typography sx={{fontWeight:'800',color:'white',mx:2}} variant="subtitle2" gutterBottom>
      15.8K Abonnés
      </Typography>

      <Button sx={{bgcolor:'white',color:'black',":hover":{bgcolor:'white',color:'black'},mr:2,borderRadius:'25px'}} variant="contained"> <AddIcon  /> Suivre</Button>
      <Button sx={{bgcolor:'white',color:'black',":hover":{bgcolor:'white',color:'black'},mr:2,borderRadius:'25px'}} variant="contained"> <ChatBubbleOutlineIcon  /> Messages</Button>

              </Box>
          </Box>}
          {loading == true ? 
        
        <Box sx={{width:'100%',bgcolor:'#424242',display:'flex',alignItems:'center'}} >
         <Skeleton variant="rectangular" width={210} height='60px' />
        </Box>
     
     : <Box sx={{height:'60px',width:'100%',bgcolor:'#eeeeee',display:'flex',justifyContent:'center'}} >
          
          <Box sx={{display:'flex',alignItems:'center',height:'100%',width:'70%'}} >
      <Button sx={{color:'#424242',height:'100%',":hover":{borderBottomStyle:'solid',borderBottomWidth:'3px',borderBottomColor:'#ff5722'}}}  variant="text">Page d'Acceille</Button>
      <Button sx={{mx:2,color:'#424242',height:'100%',":hover":{borderBottomStyle:'solid',borderBottomWidth:'3px',borderBottomColor:'#ff5722'}}}  variant="text"> Catégory <ExpandMoreIcon/> </Button>
      <Button sx={{mx:2,color:'#424242',height:'100%',":hover":{borderBottomStyle:'solid',borderBottomWidth:'3px',borderBottomColor:'#ff5722'}}}  variant="text">Article en Promo</Button>
      <Button sx={{mx:2,color:'#424242',height:'100%',":hover":{borderBottomStyle:'solid',borderBottomWidth:'3px',borderBottomColor:'#ff5722'}}}  variant="text">Meilleurs Ventes</Button>
      <Button sx={{mx:2,color:'#424242',height:'100%',":hover":{borderBottomStyle:'solid',borderBottomWidth:'3px',borderBottomColor:'#ff5722'}}}  variant="text">Avis sur le vendeur</Button>
     
      </Box>
      
          </Box>}
          
    
          </div>
        
  )
}
