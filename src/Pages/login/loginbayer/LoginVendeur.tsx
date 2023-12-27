import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { ModalEmailConfirmation } from './component/ModalEmailConfirmation';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { useNavigate } from 'react-router-dom';

export const LoginVendeur = () => {

   

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
      
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name,setName]=useState('')
    const [state,setState]=useState('')
    const [message, setMessage] = useState('');
    
  

    const options2 =["adrar","chlef","annaba","el taref","alger","guelma"]

    const steps = [
        'Créer un compte',
        'Renseignements sur l’entreprise',
        'Examen de la demande',
      ];


      const handleRegisterSeller = async () => {
        try {
         
          const response = await fetch(`http://localhost:8000/registerseller`,{
            method: 'POST',
            credentials:"include",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, state ,password ,name }),
           
          });

         
  
          const data = await response.json()
         console.log(data)
         setEmail(data.newUser.email)
        if (data.success == false) {
            setMessage(data.message)
        }if (data.success == true) {
            setOpen(true)     
        }
        //  console.log('User registered successfully.');
       
        } catch (error) {
          console.error('Registration failed.');
          setMessage('Registration failed , please try again')
        }
      };


      const handleChange = (event:any, newValue :any) => {
        setState(newValue);
        // Perform additional actions based on the selected value
      };



     
       


  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'#eeeeee'}} >
        
        <Header/>

        <Box sx={{ width: '50%' ,my:2 ,p:2  }}>
      <Stepper activeStep={0} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
           



        <Box sx={{width:'50%',display:'flex',height:'74vh',flexDirection:'column',alignItems:'center'}} >
            <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',bgcolor:'Window',p:2}} >
        <Typography  sx={{fontWeight:'700'}}  variant='h6' gutterBottom>
        Bienvenue, rejoignez le Centre mondial des vendeurs AliExpress
        </Typography>
           
        <Box sx={{display:'flex',flexDirection:'column',width:'35%',my:1}} >
            <label htmlFor='state' style={{textAlign:'left'}} > State </label>
            <Autocomplete
      id="state"
      options={options2}
      sx={{ width: '100%',my:1 }}
      size="small"
      placeholder='choose your state'
      value={state}
      onChange={handleChange}
      renderInput={(params) => <TextField required  {...params} placeholder='choose your state'  />}
    />

          
<label htmlFor='email' style={{textAlign:'left'}} > Email </label>
     

 <TextField
  id="email"
  sx={{ width: '100%' ,my:1}}
  placeholder="Enter your email "
  size='small'
  type='email'
  onChange={(e)=>setEmail(e.target.value)}
  required
    />

<label htmlFor='name' style={{textAlign:'left'}} > Name </label>
     

     <TextField
      id="name"
      sx={{ width: '100%' ,my:1}}
      placeholder="Enter your name "
      size='small'
      type='text'
      onChange={(e)=>setName(e.target.value)}
        required
        />

<label htmlFor='password' style={{textAlign:'left'}} > Password </label>
     

     <TextField
      id="password"
      sx={{ width: '100%' ,my:1}}
      placeholder="Enter your password "
      onChange={(e)=>setPassword(e.target.value)}
      type='password'
      required
      size='small'
      
        />


<label htmlFor='Confirm Password' style={{textAlign:'left'}} > Confirm Password </label>
     

     <TextField
      id="Confirm Password"
      sx={{ width: '100%' ,mt:1}}
      placeholder="Confirm Password "
      onChange={(e)=>setConfirmPassword(e.target.value)}
      type='password'
      required
      size='small'
      
        />


        </Box>

        <Typography  sx={{textAlign:'left',fontWeight:'300',color:'#d50000'}}  variant='subtitle2' gutterBottom>
        {message}
        </Typography>
 {password == confirmPassword && password !== "" && confirmPassword !== "" ?
    <Button variant='contained' onClick={handleRegisterSeller} sx={{color:'white',textTransform:'lowercase',my:2,bgcolor:'#d32f2f',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#d32f2f'} }} >
      S'inscrire
    </Button> : 
     <Button variant='contained' disabled  sx={{color:'white',textTransform:'lowercase',my:2,bgcolor:'#d32f2f',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#d32f2f'} }} >
     S'inscrire
   </Button>
    }
    </Box>
        </Box>

      <ModalEmailConfirmation open={open} setOpen={setOpen} email={email} />

       <Footer/>
    </div>
  )
}
