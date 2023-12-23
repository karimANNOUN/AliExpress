import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
export const PasswordUpdate = () => {

    const emailCodes = [
        { code: 'ABC123', email: 'example1@example.com' },
        { code: 'DEF456', email: 'example2@example.com' },
        { code: 'GHI789', email: 'example3@example.com' },
        // Add more email codes as needed
      ];
    


  return (
    <div style={{display:'flex',justifyContent:'center'}} >
        <Box sx={{width:'20%',display:'flex',flexDirection:'column',alignItems:'center',p:2,my:3}} >
            <Box sx={{display:'flex',flexDirection:'column',width:'100%'}} >
            <Typography  sx={{textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
            Code de vérification envoyé par e-mail
        </Typography>
        <Typography  sx={{textAlign:'left',fontWeight:'200'}}  variant='body1' gutterBottom>
        Entrez le code à 6 chiffres que nous avons envoyé sur l'email announk******@gmail.com
        </Typography>
            </Box>
      
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%',my:2}} >
      

      <Autocomplete
        options={emailCodes}
        getOptionLabel={(option) => option.code}
        sx={{width:'100%'}}
        renderInput={(params) => (
          <TextField {...params} label="Select Password Code" variant="outlined" />
        )}
      />
     
     <Button variant='text' sx={{color:'#2196f3',my:2 ,":hover":{color:'#2196f3'} }} >
        Renvoyer un Code
    </Button>
   
      </Box>

     

      <Button variant='contained' sx={{color:'white',width:'100%',bgcolor:'#d32f2f',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#d32f2f'} }} >
       Vérifier
    </Button>
        </Box>
    </div>
  )
}
