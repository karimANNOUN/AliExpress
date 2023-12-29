import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton,InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
export const ModalEmailConfirmation = ({open,setOpen,email}:any) => {

 const navigate=useNavigate()

  const [code,setCode]=useState('')
  const [message,setMessage]=useState('')

  const  handelConfirmSeller = async () => {
 
    try {
       
      const response = await fetch(`http://localhost:8000/confirmseller`,{
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
        Cookies.set('token', data.token, { expires: 7 });
        navigate("/loginvendeurboutique")
           
      }

    } catch (error) {
      
      console.error(error);
    }}


    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '30%',
        bgcolor: 'background.paper',
        border: '2px solid #e0e0e0',
        p: 2,
        display:'flex',
        flexDirection:'column',
        borderRadius:'8px'
        
      };

      const handleClose = () => setOpen(false);

   

  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <IconButton onClick={()=>setOpen(false)} sx={{position:'absolute' ,top:'3%',right:'1%'}} >
             <CloseIcon/>
          </IconButton>

          <Typography  sx={{textAlign:'left',fontWeight:'400'}}  variant='h6' gutterBottom>
          Vérifier l'adresse e-mail
        </Typography>

        <Box sx={{display:'flex',flexDirection:'column',width:'100%',my:1}} >
           
          
<label htmlFor='email' style={{textAlign:'left'}} > Email </label>
     

 <TextField
  id="email"
  sx={{ width: '100%' ,my:1}}
  size='small'
  value={email}
  disabled
    />

<label htmlFor='password' style={{textAlign:'left'}} > Code de vérification: </label>
     

     <TextField
      id="password"
      sx={{ width: '100%' ,mt:1}}
      placeholder="Enter your Code de vérification "
      size='small'
      onChange={(e)=>setCode(e.target.value)}
      
        />
      <Typography  sx={{textAlign:'left',color:'#bdbdbd'}}  variant='caption' gutterBottom>
      Le code de vérification a été envoyé à votre email, veuillez le vérifier.
        </Typography>


        </Box>

        <Typography  sx={{textAlign:'left',fontWeight:'300',color:'#d50000'}}  variant='subtitle2' gutterBottom>
        {message}
        </Typography>
            
        <Button onClick={handelConfirmSeller} variant='contained' sx={{color:'white',textTransform:'lowercase',my:2,bgcolor:'#2196f3',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#2196f3'} }} >
      Soumettre
    </Button>

        </Box>
      </Modal>
    </div>
  )
}
