import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CheckIcon from '@mui/icons-material/Check';

export const CardStoreProduct = () => {
    const [show,setShow]=useState(false)
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',my:1}} >

    <Typography sx={{fontWeight:'800',textAlign:'center'}}  variant='body2' gutterBottom>
 Shop1103199137 Store
 </Typography>
 
       <Box sx={{width:'70px',height:'70px',position:'relative'}} >
         <img src='https://i.pinimg.com/236x/b7/5c/e2/b75ce23ce1bec2a6585aff0db4cea102.jpg' style={{width:'100%',height:'100%',borderRadius:'8px'}} />
         <Box sx={{clipPath:'circle(50% at 50% 50%)',height:'20px',width:'20px',bgcolor:'Window',position:'absolute',top:'9%',left:'5%',display:'flex',justifyContent:'center',alignItems:'center'}} >
           { show ?
 
 <IconButton onClick={()=>setShow(true)} sx={{width:'23px',height:'23px',borderRadius:'50%',bgcolor:'Window',":hover":{bgcolor:'Window'},display:'flex',justifyContent:'center',alignItems:'center'}} >
 
 </IconButton>
  
           :  <IconButton onClick={()=>setShow(false)} sx={{width:'23px',height:'23px',borderRadius:'50%',bgcolor:'#ff1744',":hover":{bgcolor:'#ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >
               <CheckIcon sx={{fontSize:'17px',color:'white'}} />
           </IconButton>
           
           }
         </Box>
       </Box>
       <Typography sx={{fontWeight:'800',textAlign:'center',my:1}}  variant='body2' gutterBottom>
       US $7.45
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
    </Box>
  )
}
