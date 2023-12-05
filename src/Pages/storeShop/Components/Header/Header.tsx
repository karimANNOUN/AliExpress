
import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import WorkspacePremiumOutlinedIcon from '@mui/icons-material/WorkspacePremiumOutlined';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { DetailVendeur } from './components/DetailVendeur';


export const Header = () => {
    const [expand,setExpand]=useState(false)
    const [show,setShow]=useState(false)
  return (
 
    <Box sx={{display:'flex',height:'70px',width:'60%',alignItems:'center'}} >
    <Button onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} sx={{color:'black',fontFamily:'unset',":hover":{bgcolor:'Window',fontFamily:'unset',color:'#ef6c00',textDecorationLine:'underline'}}} variant="text">ChicSoleHQ Store</Button>
 
    <div onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} style={{width:'60px',height:'40px',backgroundColor:'#e1f5fe',display:'flex',justifyContent:'center',alignItems:'center'}} >
      <WorkspacePremiumOutlinedIcon sx={{fontSize:'18px',height:'100%',color:'#2196f3'}} />
    <Typography sx={{color:'#2196f3',textAlign:'left'}} variant="caption" gutterBottom>
         Silver
 </Typography>
   
 </div>

 <Button onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} sx={{color:'black',fontFamily:'unset',":hover":{bgcolor:'Window',fontFamily:'unset',color:'#ef6c00',textDecorationLine:'underline'}}} variant="text">88.7 %</Button>

 <Button onMouseEnter={()=>(setExpand(true),setShow(true))} onMouseLeave={()=>(setExpand(false),setShow(false))} sx={{color:'black',fontFamily:'unset',":hover":{bgcolor:'Window',fontFamily:'unset',color:'#ef6c00',textDecorationLine:'underline'}}} variant="text">
   Critique Positive { !expand ? <ExpandMoreIcon sx={{fontSize:'20px'}} /> : <ExpandLessIcon sx={{fontSize:'20px'}} /> } 
   
   </Button>
  
   <Button sx={{color:'black',mr:1,borderColor:'#e0e0e0',":hover":{bgcolor:'Window',borderColor:'#e0e0e0',color:'black'}}} variant="outlined">Suivre</Button>
       
   <Typography sx={{textAlign:'left',fontWeight:'800'}} variant='body2' gutterBottom>
   15.9KAbonnés
 </Typography>
 { show ? <DetailVendeur setShow={setShow} /> : "" }
    </Box>
    
    
  )
}
