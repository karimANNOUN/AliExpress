import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IconButton,InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
export const ModalEmailConfirmation = ({open,setOpen}:any) => {


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

   const navigate=useNavigate()

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
  value="announkarim23@gmail.com"
  disabled
    />

<label htmlFor='password' style={{textAlign:'left'}} > Code de vérification: </label>
     

     <TextField
      id="password"
      sx={{ width: '100%' ,mt:1}}
      placeholder="Enter your Code de vérification "
      size='small'
      InputProps={{
        endAdornment:(
            <InputAdornment sx={{height:'100%',right:0,position:'absolute'}} position='end' >
                <Button variant='text' sx={{color:'#2196f3',textTransform:'lowercase' ,":hover":{color:'#2196f3'} }} >
        Renvoyer
    </Button>
            </InputAdornment>
        )}}
      
        />
      <Typography  sx={{textAlign:'left',color:'#bdbdbd'}}  variant='caption' gutterBottom>
      Le code de vérification a été envoyé à votre email, veuillez le vérifier.
        </Typography>


        </Box>
            
        <Button onClick={()=>navigate("/loginvendeurboutique")} variant='contained' sx={{color:'white',textTransform:'lowercase',my:2,bgcolor:'#2196f3',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#2196f3'} }} >
      Soumettre
    </Button>

        </Box>
      </Modal>
    </div>
  )
}
