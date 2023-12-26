import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux'

export const ConfermationPassword = () => {

  const user = useSelector((state:any)=> state.app.userValid)
    const options =["arabic","english"]

    const navigate=useNavigate()

    const [password,setPassword]=useState('')
    const [newPassword,setNewPassword]=useState('')
    const [email,setEmail]=useState('')
    const [message,setMessage]=useState('')


    const  handelUpdatePassword = async () => {
       setEmail(user.email)
      try {
         
        const response = await fetch(`http://localhost:8000/updatepassword`,{
          method: 'POST',
          credentials:"include",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email ,password }),
         
        })

        const data = await response.json()
       
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
    Veuillez vous Changer Votre Password
    </Typography>
       
    <Typography  sx={{textAlign:'left',fontWeight:'300',color:'#9e9e9e'}}  variant='caption' gutterBottom>
    set new password And save it well
    </Typography>

    <TextField
id="nameess"
sx={{ width: '100%' ,mt:1}}
placeholder="Enter your new password "
type='password'
onChange={(e)=>setPassword(e.target.value)}
size='small'

/>

<TextField
id="nameAdress"
sx={{ width: '100%' ,my:2 }}
placeholder="confirmation new password "
type='password'
onChange={(e)=>setNewPassword(e.target.value)}
size='small'
/>

<Typography  sx={{textAlign:'left',fontWeight:'300',color:'#d50000'}}  variant='subtitle2' gutterBottom>
        {message}
        </Typography>

{ password == newPassword && password !== "" && newPassword !== "" ? <Button variant='contained' onClick={handelUpdatePassword} sx={{color:'white',width:'100%',textTransform:'lowercase',bgcolor:'#d32f2f',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#d32f2f'} }} >
  connexion
</Button>
     :
     <Button variant='contained' disabled sx={{color:'white',width:'100%',textTransform:'lowercase',bgcolor:'#d32f2f',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#d32f2f'} }} >
     connexion
   </Button>}

 
  



    </Box>
    <Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',py:1,bgcolor:'#f5f5f5',position:'fixed',bottom:0,left:0,right:0}} >
    <Typography  sx={{textAlign:'left',fontWeight:'300',color:'#9e9e9e'}}  variant='caption' gutterBottom>
    © 2010-2019 Khademni.com. All rights reserved.
    </Typography>
    </Box>
</div>
  )
}
