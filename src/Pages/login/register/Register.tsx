import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
export const Register = () => {

    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [confirmPassword,setConfirmPassword]=useState('')
    const [code,setCode]=useState('')
    const [show,setShow]=useState(false)
    const [see,setSee]=useState(false)
    const [message,setMessage]=useState('')
    const [state,setState]=useState<any>({})
    const [gender,setGender]=useState<any>({})

    const handleChange = (event:any, newValue :any) => {
      setState(newValue);
    
    };

    const handleChange1 = (event:any, newValue :any) => {
      setGender(newValue);
     
    };

    const options =["arabic","english"]

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

    const options3 =[{name:"Male"},{name:"Female"}]

    const navigate=useNavigate()



    const handleRegister = async () => {
        try {
         
          const response = await fetch(`http://localhost:8000/register`,{
            method: 'POST',
            credentials:"include",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name ,password , gender , state }),
           
          });

         
  
          const data = await response.json()
         console.log(data)
         setEmail(data.newUser.email)
        if (data.success == false) {
            setMessage(data.message)
        }if (data.success == true) {
            setSee(true)
            setShow(true)     
        }
        
       
        } catch (error) {
          console.error('Registration failed.');
          setMessage('Registration failed , please try again')
        }
      };


   const  handelConfirm = async () => {
 
      try {
         
        const response = await fetch(`http://localhost:8000/confirm`,{
          method: 'POST',
          credentials:"include",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, code }),
         
        })

        const data = await response.json()
        console.log(data)
        if (data.success == false) {
            setMessage(data.message)
        }if (data.success == true) {
            navigate("/")
             
        }

      } catch (error) {
        
        console.error(error);
      }}
      
     



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
        Veuillez vous Register 
        </Typography>
           
        <Typography  sx={{textAlign:'left',fontWeight:'300',color:'#9e9e9e'}}  variant='caption' gutterBottom>
        open your  account  ?<Link href="/login" underline="none" >Login</Link>
        </Typography>

     { !see ? <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'flex-start'}} >
        <TextField
  id="nameAdress"
  sx={{ width: '100%' ,mt:1}}
  placeholder="Enter your email "
  size='small'
   onChange={(e)=>setEmail(e.target.value)}
    />

<TextField
  id="nameAdress"
  sx={{ width: '100%' ,my:1}}
  placeholder="Enter your name "
  size='small'
  onChange={(e)=>setName(e.target.value)}
    />


            <Autocomplete
      id="state"
      options={options2}
      sx={{ width: '100%' }}
      size="small"
      placeholder='choose your wilaya'
      getOptionLabel={(option) => option.name}
      onChange={handleChange}
      renderInput={(params) => <TextField required  {...params} placeholder='choose your wilaya'  />}
    />


  
            <Autocomplete
      id="Gender"
      options={options3}
      sx={{ width: '100%',mt:1 }}
      size="small"
      placeholder='choose your gender'
      getOptionLabel={(option) => option.name}
      onChange={handleChange1}
      renderInput={(params) => <TextField required  {...params} placeholder='choose your gender'  />}
    />

<TextField
  id="nameAdre"
  sx={{ width: '100%' ,mt:1}}
  placeholder="Enter your password "
  size='small'
  type='password'
  onChange={(e)=>setPassword(e.target.value)}
    />

<TextField
  id="nameAdress"
  sx={{ width: '100%' ,my:1 }}
  placeholder="confirme your password"
  size='small'
  type='password'
  onChange={(e)=>setConfirmPassword(e.target.value)}
    />



  
  <Typography  sx={{textAlign:'left',fontWeight:'300',color:'#d50000'}}  variant='subtitle2' gutterBottom>
        {message}
        </Typography>


        { password == confirmPassword && password !== "" && confirmPassword !== "" ? <Button variant='contained' onClick={handleRegister} sx={{color:'white',width:'100%',textTransform:'lowercase',bgcolor:'#d32f2f',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#d32f2f'} }} >
      connexion
    </Button>
     :
    <Button variant='contained'  disabled sx={{color:'white',width:'100%',textTransform:'lowercase',bgcolor:'#d32f2f',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#d32f2f'} }} >
      connexion
    </Button>}

 
    </Box> : '' }


{ show ? <Box sx={{width:'100%' ,display:'flex',flexDirection:'column',alignItems:'center' }} >

<TextField
  sx={{ width: '100%' ,my:1}}
  placeholder="Enter your confermation code "
  type='text'
  size='small'
  onChange={(e)=>setCode(e.target.value)}
    />
 
 <Typography  sx={{textAlign:'left',fontWeight:'300',color:'#d50000'}}  variant='subtitle2' gutterBottom>
        {message}
        </Typography>

<Button onClick={handelConfirm} variant='text' sx={{color:'#2196f3',mb:2,textTransform:'lowercase' ,":hover":{color:'#2196f3'} }} >
       confirm your code
    </Button>

    </Box> : '' }
 
   

        </Box>


     






        <Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',py:1,bgcolor:'#f5f5f5',position:'fixed',bottom:0,left:0,right:0}} >
        <Typography  sx={{textAlign:'left',fontWeight:'300',color:'#9e9e9e'}}  variant='caption' gutterBottom>
        © 2010-2019 Khademni.com. All rights reserved.
        </Typography>
        </Box>
    </div>
  )
}
