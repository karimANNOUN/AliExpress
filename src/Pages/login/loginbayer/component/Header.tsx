import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
export const Header = () => {

    const options =["arabic","english"]
    const navigate=useNavigate()

  return (
    <Box sx={{display:'flex',width:'100%',py:2,justifyContent:'space-around',alignItems:'center',bgcolor:'Window',borderBottom:'2px solid #f5f5f5'}} >
            
    <Typography  sx={{textAlign:'left',color:'#f4511e',fontWeight:'700'}}  variant='h4' gutterBottom>
Khademni
</Typography>

<Box sx={{display:'flex',alignItems:'center'}} >

<Autocomplete
id="grouped-demo"
options={options}
sx={{ width: '100px' }}
size="small"
renderInput={(params) => <TextField {...params} label="lang" />}
/>

<Button variant='contained' onClick={()=>navigate("/login")} sx={{color:'white',ml:2,textTransform:'lowercase',bgcolor:'#d32f2f',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#d32f2f'} }} >
connexion
</Button>

</Box>

</Box>

  )
}
