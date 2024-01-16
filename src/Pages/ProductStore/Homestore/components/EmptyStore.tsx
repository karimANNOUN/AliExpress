import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export const EmptyStore = () => {


  const navigate=useNavigate()

  return (
    <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',height:'500px'}} >
        <Box sx={{width:'50%',display:'flex',flexDirection:'column',alignItems:'center'}} >
        <LocalGroceryStoreOutlinedIcon sx={{fontSize:'150px'}} />
           <Typography sx={{my:1,textAlign:'left'}}  variant='h6' gutterBottom>
           Vous ne trouvez pas d'articles ? Continuez votre shopping pour en découvrir plus
</Typography>
<Button onClick={()=>navigate('/')} variant="contained" sx={{bgcolor:'#f50057',color:'Window',my:1,borderRadius:'20px',":hover":{bgcolor:'#f50057',color:'Window'}}} >Parcourir Les Article</Button> 
        </Box>
          
    </Box>
  )
}
