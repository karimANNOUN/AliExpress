import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export const EmpltyCard = () => {

  const navigate=useNavigate()

  return (
    <Box sx={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',width:'100%',height:'400px'}} >
                                    
    <img src='https://ae01.alicdn.com/kf/S772223533cf2496d9b7e706dbca0e0e4n/180x175.png_.webp' style={{width:'200px',height:'200px'}} />

<Typography sx={{color:'black',fontWeight:'700',my:1}}  variant='h6' gutterBottom>
It is empty here.
</Typography>   

<Button onClick={()=>navigate('/')} variant='outlined' sx={{color:'black',borderColor:'black',borderRadius:'14px',textTransform:'lowercase' ,":hover":{color:'#ff5722',borderColor:'#ff5722'} }} >
start Shopping
</Button>
</Box>
  )
}
