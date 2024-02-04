import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setUserInfo } from '../../../../storeRedux/CartSlice';
import { LoadingButton } from '@mui/lab';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
export const EmailUpdate = () => {

  const [opens, setOpens] = useState(false);
  
  const handleCloses = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpens(false);
  };
    
  const token = Cookies.get('token');

  const [loading,setLoading]=useState(false)
  const [message,setMessage]=useState('')

  const userInfo=useSelector((state:any)=>state.app.userInfo)

  const dispatch=useDispatch()
    

      const [selectedCode, setSelectedCode] = useState(null);
      const [sendedCode,setSendedCode]=useState('')

      const handelUpdateEmail=async()=>{

        const email=userInfo.email

        try{
        const response = await fetch(`http://localhost:8000/updateemail`,{
          method:'PATCH',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
          body: JSON.stringify({ email }),
         
        });
        const data = await response.json()
        console.log(data)
        if (!data) {
          setLoading(true)
        }if (data.success == true) {
        //  setSendedCode(data.confirmationCode)
          setLoading(false) 
        }if (data.success == false) {
          setMessage(data.message)
          setOpens(true)
        }  
      } catch (error) {
        console.error('operation failed.');
      }
       
      }
  
      const handelConfirmEmailCode=async()=>{

        const email=userInfo.email

        try{
        const response = await fetch(`http://localhost:8000/updateconfirmemail`,{
          method:'PATCH',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
          body: JSON.stringify({ email }),
         
        });
        const data = await response.json()
        console.log(data)
        if (!data) {
          setLoading(true)
        }if (data.success == true) {
        //  setSendedCode(data.confirmationCode)
          setLoading(false) 
        }if (data.success == false) {
          setMessage(data.message)
          setOpens(true)
        }  
      } catch (error) {
        console.error('operation failed.');
      }
       
      }

    

      function maskEmail(email:any) {
     
        const [localPart, domain] = email.split('@');
      
  
        const maskedLocalPart = localPart.slice(0, Math.min(localPart.length, 4)) + '*'.repeat(Math.max(0, localPart.length - 5));
      
       
        const maskedEmail = `${maskedLocalPart}@${domain}`;
      
        return maskedEmail;
      }

      const email = maskEmail(userInfo.email);

     

  return (
    <div style={{display:'flex',justifyContent:'center'}} >
         <Snackbar open={opens} autoHideDuration={3000} onClose={handleCloses}>
        <Alert
          onClose={handleCloses}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>
        <Box sx={{width:'20%',display:'flex',flexDirection:'column',alignItems:'center',p:2,my:3}} >
            <Box sx={{display:'flex',flexDirection:'column',width:'100%'}} >
            <Typography  sx={{textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
            Code de vérification envoyé par e-mail
        </Typography>
        <Typography  sx={{textAlign:'left',fontWeight:'200'}}  variant='body1' gutterBottom>
        Entrez le code à 4 chiffres que nous avons envoyé sur l'email {email}
        </Typography>
            </Box>
      
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'flex-start',width:'100%',my:2}} >
      

   

<TextField
  id="livraison time"
  sx={{ width: '100%' ,bgcolor:'white'}}
  placeholder="confirmation code"
  size='medium'
  label='Email confirmation code'
  type='number'
  required
  onChange={(e:any)=>setSelectedCode(e.target.value)}
    />
     
     <Button onClick={handelUpdateEmail} variant='text' sx={{color:'#2196f3',my:2,textTransform:'lowercase' ,":hover":{color:'#2196f3'} }} >
        Renvoyer un Code
    </Button>
   
      </Box>

      <LoadingButton
          color="secondary"
          onClick={handelUpdateEmail}
          loading={loading}
          loadingPosition="start"
          sx={{color:'white',width:'100%',bgcolor:'#d32f2f',borderRadius:'12px',my:2 ,":hover":{color:'white',bgcolor:'#d32f2f'} }}
          variant="contained"
        >
          <span> Vérifier</span>
        </LoadingButton>

        </Box>
    </div>
  )
}
