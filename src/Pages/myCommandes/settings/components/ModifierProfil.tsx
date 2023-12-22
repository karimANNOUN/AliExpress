import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ModalProfilUpdate } from './ModalProfilUpdate';

export const ModifierProfil = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

  return (
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'70%',p:2}} >
            <Box sx={{display:'flex',alignItems:'center',width:'100%',borderBottom:'2px solid #e0e0e0',p:1}} >
            <Typography  sx={{textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
            Rédiger le profil de membre
        </Typography>
            </Box>

            <Box sx={{display:'flex',border:'1px solid #2196f3',flexDirection:'column',alignItems:'center',borderRadius:'8px',p:1,my:2,width:'80%'}} >
               
            <Typography  sx={{}}  variant='subtitle2' gutterBottom>
            <b>Nom:</b>	announkarim
        </Typography>
        <Typography  sx={{}}  variant='subtitle2' gutterBottom>
            <b>E-Mail:</b>	announkarim23@gmail.com 
        </Typography>
        <Typography  sx={{}}  variant='subtitle2' gutterBottom>
            <b>ID de membre:</b>	dz1311297913hmuae
        </Typography>
        <Typography  sx={{}}  variant='subtitle2' gutterBottom>
            <b>Adresse de contact:</b> Algeria
        </Typography>
        <Typography  sx={{}}  variant='subtitle2' gutterBottom>
            <b>Code postal:</b>	announkarim
        </Typography>
        <Typography  sx={{}}  variant='subtitle2' gutterBottom>
            <b>Téléphone:</b> 213
        </Typography>
        <Typography  sx={{}}  variant='subtitle2' gutterBottom>
            <b>Télécopie:</b> 213		
        </Typography>

           <Box sx={{width:'100%',bgcolor:'Window',height:'60px',display:'flex',alignItems:'center',justifyContent:'center'}} >
           <Button onClick={()=>handleOpen()} variant='contained' sx={{color:'black',background:'linear-gradient(to right, #ffd54f 0%, #ffb300 40% , #ff6f00 70%)',textTransform:'lowercase', borderRadius: '8px' ,":hover":{color:'black',background:'linear-gradient(to right, #ffd54f 0%, #ffb300 40% , #ff6f00 70%)'} }} >
                       Modifier
                      </Button> 

           </Box>
             <ModalProfilUpdate open={open} setOpen={setOpen} />
            </Box>

        </Box>
    </div>
  )
}
