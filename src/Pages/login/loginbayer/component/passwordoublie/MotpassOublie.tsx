import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { ModalPasswordOblie } from './components/ModalPasswordOblie';
export const MotpassOublie = () => {

    const options =["arabic","english"]
    const [password,setPassword]=useState(1)

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',height:'100vh'}} >
        <Box sx={{display:'flex',width:'100%',py:2,justifyContent:'center',alignItems:'center',borderBottom:'2px solid #f5f5f5'}} >
            
             <Typography  sx={{textAlign:'left',color:'#f4511e',fontWeight:'700'}}  variant='h4' gutterBottom>
        Khademni
        </Typography>

        <Typography  sx={{textAlign:'left',color:'#e91e63',mx:2,fontWeight:'700'}}  variant='h6' gutterBottom>
Seller center
        </Typography>


        <Autocomplete
      id="grouped-demo"
      options={options}
      sx={{ width: '100px' }}
      size="small"
      renderInput={(params) => <TextField {...params} label="lang" />}
    />

           
        </Box>
        <Box sx={{width:'23%',display:'flex',flexDirection:'column',alignItems:'flex-start',p:2}} >
        <Typography  sx={{textAlign:'left',fontWeight:'700'}}  variant='body1' gutterBottom>
        Réinitialisez votre mot de passe
        </Typography>
           
        <Typography  sx={{textAlign:'left',fontWeight:'300',color:'#9e9e9e'}}  variant='subtitle2' gutterBottom>
        Saisissez votre e-mail, votre ID membre ou votre numéro de téléphone pour vous reconnecter à votre compte.
        </Typography>
   
        <FormControl sx={{my:2}} >
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="female"
        name="radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio color='error' onClick={()=>setPassword(1)} />} label="Email/ID de membre" />
        <FormControlLabel value="male" control={<Radio color='error' onClick={()=>setPassword(2)}  />} label="Numéro de téléphone" />
      </RadioGroup>
    </FormControl>
          

        { password === 1 && <TextField
  id="nameAdress"
  sx={{ width: '100%' ,my:2}}
  placeholder="Enter your email "
  size='small'
  
    />  }

{ password === 2 && <TextField
  id="nameAdress"
  sx={{ width: '100%' ,my:2 }}
  placeholder="Numéro de téléphone"
  size='small'
    />}

 
    <Button variant='contained' onClick={handleOpen} sx={{color:'white',width:'100%',textTransform:'lowercase',bgcolor:'#d32f2f',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#d32f2f'} }} >
      Continuer
    </Button>

       <ModalPasswordOblie open={open} setOpen={setOpen} />

        </Box>
        <Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',py:1,bgcolor:'#f5f5f5',position:'fixed',bottom:0,left:0,right:0}} >
        <Typography  sx={{textAlign:'left',fontWeight:'300',color:'#9e9e9e'}}  variant='caption' gutterBottom>
        © 2010-2019 Khademni.com. All rights reserved.
        </Typography>
        </Box>
    </div>
  )
}
