import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';
export const GridItem1 = () => {
  return (
    <Box sx={{height:'33%',mb:2,borderRadius:'20px',display:'flex',flexDirection:'column',justifyContent:'center',bgcolor:'#eeeeee'}} >
          <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center'}} >
         <Button sx={{width:'40%',height:'50px',borderRadius:'24px',bgcolor:'black',fontWeight:'600',color:'white',":hover":{bgcolor:'black'}}} variant="contained">S'inscrire</Button>
         <Button sx={{width:'40%',height:'50px',borderRadius:'24px',bgcolor:'window',fontWeight:'600',color:'black',":hover":{bgcolor:'window'}}} variant="contained">Connexion</Button>
         </Box>

         <Typography sx={{textAlign:'center',my:3}}  variant='caption' gutterBottom>
         Ou continuer avec
      </Typography>

      <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
      <IconButton >
        <FacebookIcon sx={{fontSize:'40px'}} />
      </IconButton>

      <IconButton >
        <GoogleIcon sx={{fontSize:'40px'}} />
      </IconButton>

      </Box>

         </Box>
  )
}
