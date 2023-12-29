//@ts-nocheck
import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../storeRedux/CartSlice';
import Cookies from 'js-cookie';

export const Login = () => {

    const options =["arabic","english"]

    const dispatch=useDispatch()

    const navigate=useNavigate()

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [message,setMessage]=useState('')

    const handleLogin = async () => {
      try {
       
        const response = await fetch(`http://localhost:8000/login`,{
          method: 'POST',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email , password }),
         
        });
      
        const data = await response.json()

    //    Cookies.set('token', data.token, { expires: 7 });
        
    //    const Token=Cookies.get('token')
       
        const response2 = await fetch(`http://localhost:8000/user`,{
          method: 'GET',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
            authorization:`${data.token}`
          }
        })

        const user = await response2.json()
     
        if (user.sucess == true) {
         
          if (data.success == false) {
              setMessage(data.message)
          }if (data.success == true && user.user.user.role =="simple"  ) {
            Cookies.set('token', data.token, { expires: 7 });
              navigate("/")   
          }if (data.success == true && user.user.user.role =="seller attente1" ) {
            Cookies.set('token', data.token, { expires: 7 });
             navigate("/loginvendeurboutique")
          }if (data.success == true && user.user.user.role =="seller attente2") {
            Cookies.set('token', data.token, { expires: 7 });
            navigate("/decisionvendeurboutique")
          }if (data.success == true && user.user.user.role =="seller") {
            Cookies.set('token', data.token, { expires: 7 });
            navigate("/") 
          }
          
        }
       

   //     const data = await response.json()
     //   console.log(data)

      //  console.log('User registered successfully.');
      } catch (error) {
        console.error('login failed.');
      }
    };




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
        Veuillez vous connecter en utilisant le compte vendeur AliExpress (n'utilisez pas le compte acheteur)
        </Typography>
           
        <Typography  sx={{textAlign:'left',fontWeight:'300',color:'#9e9e9e'}}  variant='caption' gutterBottom>
        No account yet?<Link href="/loginvendeur" underline="none" >Join now for free</Link>
        </Typography>

        <TextField
  id="nameAdress"
  sx={{ width: '100%' ,mt:1}}
  placeholder="Enter your email "
  type='email'
  size='small'
  onChange={(e)=>setEmail(e.target.value)}
  
    />

<TextField
  id="nameAd"
  sx={{ width: '100%' ,my:2 }}
  placeholder="Enter your password "
  type='password'
  onChange={(e)=>setPassword(e.target.value)}
  size='small'
    />

<Typography  sx={{textAlign:'left',fontWeight:'300',color:'#d50000'}}  variant='subtitle2' gutterBottom>
        {message}
        </Typography>

<Button onClick={()=>navigate("/login/motpassoublie")} variant='text' sx={{color:'#2196f3',mb:2,textTransform:'lowercase' ,":hover":{color:'#2196f3'} }} >
       Mot de pass oublié ?
    </Button>


 
    <Button onClick={handleLogin} variant='contained' sx={{color:'white',width:'100%',textTransform:'lowercase',bgcolor:'#d32f2f',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#d32f2f'} }} >
      connexion
    </Button>

        </Box>
        <Box sx={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',py:1,bgcolor:'#f5f5f5',position:'fixed',bottom:0,left:0,right:0}} >
        <Typography  sx={{textAlign:'left',fontWeight:'300',color:'#9e9e9e'}}  variant='caption' gutterBottom>
        © 2010-2019 Khademni.com. All rights reserved.
        </Typography>
        </Box>
    </div>
  )
}
