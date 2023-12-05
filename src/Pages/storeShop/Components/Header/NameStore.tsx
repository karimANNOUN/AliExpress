import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Button from '@mui/material/Button';
export const NameStore = () => {

    const [expand,setExpand]=useState(false)
    const [show,setShow]=useState(false)

  return (
    <Box sx={{display:'flex',width:'100%',flexDirection:'column'}} >
         <Box sx={{height:'60px',width:'100%'}} >
    <Typography sx={{fontWeight:'800'}} variant='h5' gutterBottom>
    ChicSoleHQ Store
 </Typography>
    </Box>
    <Box sx={{display:'flex',justifyContent:'center',height:'50px',bgcolor:'black',width:'100%',alignItems:'center'}}>
     <Box sx={{display:'flex',width:'60%',height:'100%'}} >
     
     <Button  sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Page d'accueil
   
   </Button>

     <Button onMouseEnter={()=>(setExpand(true),setShow(true))} onMouseLeave={()=>(setExpand(false),setShow(false))} sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Catégories { !expand ? <ExpandMoreIcon sx={{fontSize:'20px'}} /> : <ExpandLessIcon sx={{fontSize:'20px'}} /> } 
   </Button>
          
   <Button  sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Article en promos
   
   </Button>

   <Button  sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Meilleur Ventes
   
   </Button>

   <Button  sx={{color:'white',fontFamily:'unset',":hover":{bgcolor:'#757575',fontFamily:'unset',color:'white'}}} variant="text">
   Avis sur le vendeur
   
   </Button>



     </Box>





   
    </Box>


    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'250px'}} >
        <Box sx={{width:'330px',pl:2,height:'65%',bgcolor:'#fff9c4',display:'flex',flexDirection:'column'}} >
        <Typography sx={{textAlign:'left',fontWeight:'800'}} variant='h6' gutterBottom>
        DA113.66
       </Typography>
       <Typography sx={{textAlign:'left'}} variant='subtitle2' gutterBottom>
       Dépensez DA113.85 et obtenez DA113.66 de réduction(Exclut les frais d'expédition)
       </Typography>
       <Typography sx={{textAlign:'left'}} variant='caption' gutterBottom>
       Expire 2023/12/31
       </Typography>
       <Box sx={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center'}} >
       <Button sx={{bgcolor:'white',color:'black',borderStyle:'dashed',borderColor:'black',":hover":{bgcolor:'white',color:'black',borderStyle:'dashed',borderColor:'black'}}} variant="outlined">M2F958DNNGJB</Button>
       <Button sx={{color:'white',fontSize:'12px',bgcolor:'#d84315',borderRadius:'8px',":hover":{color:'white',bgcolor:'#d84315'}}} variant="contained">en profiter</Button>
       </Box>
        </Box>
   </Box>

    </Box>
   
  )
}
