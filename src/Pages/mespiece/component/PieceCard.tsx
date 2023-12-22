import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
export const PieceCard = () => {

    const navigate=useNavigate()

  return (
    <Box component="div" onClick={()=>navigate('/1')} sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'240px',borderRadius:'10px',mr:2,mb:2,":hover":{bgcolor:'#eeeeee'}}} >
    <img src='https://i.pinimg.com/564x/ea/a2/e2/eaa2e28cb6f3ea8704e952f4ef477425.jpg' style={{width:'100%',height:'240px',borderRadius:'10px'}} />
    <Typography  sx={{textAlign:'left',color:'#9e9e9e',mt:1}}  variant='caption' gutterBottom>
Économisez avec les pièces
</Typography> 

<Typography  sx={{textAlign:'left',color:'black',fontWeight:'700'}}  variant='subtitle1' gutterBottom>
4,738.79 DA
</Typography> 
<Typography sx={{textAlign:'left',color:'#ff1744'}}  variant='caption' gutterBottom>
10% de réduction bonus
</Typography> 
</Box>
  )
}
