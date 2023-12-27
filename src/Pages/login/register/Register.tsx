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
    const [open,setOpen]=useState(false)
    const [see,setSee]=useState(false)
    const [message,setMessage]=useState('')
    const [userEmail,setUserEmail]=useState('')

    const options =["arabic","english"]

    const navigate=useNavigate()



    const handleRegister = async () => {
        try {
         
          const response = await fetch(`http://localhost:8000/register`,{
            method: 'POST',
            credentials:"include",
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, name ,password }),
           
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
        //  console.log('User registered successfully.');
       
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

     { !see ? <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}} >
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
