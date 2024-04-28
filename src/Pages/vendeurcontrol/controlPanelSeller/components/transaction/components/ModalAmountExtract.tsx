import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

export const ModalAmountExtract = ({open,setOpen}:any) => {


    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height:'60%',
        bgcolor: 'background.paper',
        p: 2,
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-around',
        borderRadius:'8px',
        backgroundImage: 'url("https://media.istockphoto.com/id/1370737372/fr/photo/jeune-femme-faisant-ses-achats-en-ligne-%C3%A0-laide-de-lordinateur-portable-%C3%A0-la-maison.jpg?s=612x612&w=0&k=20&c=IOHb-RzRl_SQMXoNgesKWPpFjnuskfPiyNO_V0LZ53g=")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };


      const handleClose = () => setOpen(false);


  return (
    <Modal
    open={open}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography sx={{fontWeight:'700',color:'#8e24aa'}} id="modal-modal-title" variant="h6" component="h2">
        Add Your Amount 
      </Typography>

<Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}} >


<TextField
  id="Amount"
  sx={{ width: '80%',my:2, border:'2px solid #311b92' ,borderRadius:'8px','&:hover fieldset':{border:'2px solid #311b92'} }}
  placeholder='Amount'
  size='small'
  label='Amount'
  InputLabelProps={{
    color:'success'
  }}
  type='text'
   InputProps={{
    style:{color:'white',borderColor:'#311b92'}
   }}
    />

<Button sx={{bgcolor:'#8e24aa',textTransform:'lowercase',color:'white',mr:3,":hover":{bgcolor:'#8e24aa',color:'white'}}}  variant="text">Get Now</Button>

</Box>
     

    
      <IconButton onClick={handleClose} sx={{bgcolor:'#424242',":hover":{bgcolor:'#424242'},position:'absolute',top:'1%',right:'0%'}} > <CloseIcon sx={{fontSize:'15px',color:'white'}} /> </IconButton>
    </Box>
  </Modal>
  )
}
