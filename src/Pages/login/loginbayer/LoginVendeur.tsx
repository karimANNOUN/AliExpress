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
    const [loading,setLoading]=useState(Boolean)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [name,setName]=useState('')
    const [state,setState]=useState<any>({})
    const [gender,setGender]=useState<any>({})
    const [message, setMessage] = useState('');
    
  

    const options2 =[
      {name:'Adrar',region:'region sud'},
      {name:'Chlef',region:'region centre'},
      {name:'Laghouat',region:'region sud'},
      {name:'Oum El Bouaghi',region:'region est'},
      {name:'Batna',region:'region est'},
      {name:'Béjaïa',region:'region est'},
      {name:'Biskra',region:'region sud'},
      {name:'Béchar',region:'region sud'},
      {name:'Blida',region:'region centre'},
      {name:'Bouira',region:'region centre'},
      {name:'Tamanrasset',region:'region sud'},
      {name:'Tébessa',region:'region est'},
      {name:'Tlemcen',region:'region ouest'},
      {name:'Tiaret',region:'region ouest'},
      {name:'Tizi Ouzou',region:'region centre'},
      {name:'Alger',region:'region centre'},
      {name:'Djelfa',region:'region centre'},
      {name:'Jijel',region:'region est'},
      {name:'Sétif',region:'region est'},
      {name:'Saïda',region:'region ouest'},
      {name:'Skikda',region:'region est'},
      {name:'Sidi Bel Abbès',region:'region ouest'},
      {name:'Annaba',region:'region est'},
      {name:'Guelma',region:'region est'},
      {name:'Constantine',region:'region est'},
      {name:'Médéa',region:'region centre'},
      {name:'Mostaganem',region:'region ouest'},
      {name:'MSila',region:'region centre'},
      {name:'Mascara',region:'region ouest'},
      {name:'Ouargla',region:'region sud'},
      {name:'Oran',region:'region ouest'},
      {name:'El Bayadh',region:'region ouest'},
      {name:'Illizi',region:'region sud'},
      {name:'Bordj Bou Arréridj',region:'region est'},
      {name:'Boumerdès',region:'region centre'},
      {name:'El Tarf',region:'region est'},
      {name:'Tindouf',region:'region sud'},
      {name:'Tissemsilt',region:'region centre'},
      {name:'El Oued',region:'region sud'},
      {name:'Khenchela',region:'region est'},
      {name:'Souk Ahras',region:'region est'},
      {name:'Tipaza',region:'region centre'},
      {name:'Mila',region:'region est'},
      {name:'Aïn Defla',region:'region centre'},
      {name:'Naâma',region:'region ouest'},
      {name:'Aïn Témouchent',region:'region ouest'},
      {name:'Ghardaïa',region:'region sud'},
      {name:'Relizane',region:'region ouest'}
    ];
    const steps = [
        'Créer un compte',
        'Renseignements sur l’entreprise',
        'Examen de la demande',
      ];


      const options3 =[{name:"Male"},{name:"Female"}]

      
      const handleRegisterSeller = async () => {
        try {
           setLoading(true)
          const response = await fetch(`http://localhost:8000/registerseller`,{
            method: 'POST',
            credentials:"include",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, state ,password ,name ,gender }),
           
          });

         
  
          const data = await response.json()
         setEmail(data.newUser.email)
        if (data.success == false) {
            setMessage(data.message)
            setLoading(false)
        }if (data.success == true) {
            setOpen(true) 
            setLoading(false)    
        }
        //  console.log('User registered successfully.');
       
        } catch (error) {
          console.error('Registration failed.');
          setMessage('Registration failed , please try again')
        }
      };


      const handleChange = (event:any, newValue :any) => {
        setState(newValue);
      
      };

      const handleChange1 = (event:any, newValue :any) => {
        setGender(newValue);
       
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
      getOptionLabel={(option) => option.name}
      onChange={handleChange}
      renderInput={(params) => <TextField required  {...params} placeholder='choose your state'  />}
    />


   <label htmlFor='Gender' style={{textAlign:'left'}} > Gender </label>
            <Autocomplete
      id="Gender"
      options={options3}
      sx={{ width: '100%',my:1 }}
      size="small"
      placeholder='choose your state'
      getOptionLabel={(option) => option.name}
      onChange={handleChange1}
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
    <Button 
       variant='contained' 
       onClick={handleRegisterSeller}  
       sx={{color:'white',textTransform:'lowercase',my:2,bgcolor:'#d32f2f',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#d32f2f'} }} 
       disabled={loading == true ? true : false}
       >
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
