import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
export const UploadImage = () => {


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });


  return (
    <div style={{display:'flex',justifyContent:'center'}} >
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'70%',p:2}} >
            <Box sx={{display:'flex',alignItems:'center',width:'100%',borderBottom:'2px solid #e0e0e0',p:1}} >
            <Typography  sx={{textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
        Upload My Photo
        </Typography>
            </Box>

            <Box sx={{display:'flex',border:'1px solid #2196f3',alignItems:'center',borderRadius:'8px',p:1,my:2,width:'100%'}} >
                <InfoOutlinedIcon sx={{color:'#2196f3',mr:2}} />
            <Typography  sx={{textAlign:'left'}}  variant='subtitle2' gutterBottom>
            Your Photo will be displayed within 24 hours.
        </Typography>
            </Box>
       <Box sx={{display:'flex',alignItems:'flex-start',justifyContent:'space-between',width:'100%'}} >

        <Box sx={{display:'flex',flexDirection:'column',width:'70%',borderRadius:'6px',border:'1px dashed #e0e0e0',p:2}} >
            <img src='https://is.alicdn.com/images/eng/style/css_images/myalibaba/mempic_nophoto.gif' style={{width:'150px',height:'200px',borderRadius:'8px'}} />
            <Button sx={{width:'200px',mt:2,bgcolor:'#f4511e',":hover":{bgcolor:'#f4511e'}}} component="label" variant="contained" startIcon={<CloudUploadIcon />}>
      Upload Photo
      <VisuallyHiddenInput type="file" />
    </Button>
        </Box>

        <Box sx={{display:'flex',flexDirection:'column',width:'20%',borderRadius:'6px',border:'1px dashed #e0e0e0',position:'relative',p:2}} >
        <Typography  sx={{textAlign:'left',fontWeight:'700',position:'absolute',top:'-3%',left:'25%',transform: 'translateX(-50%)',backgroundColor: '#fff',padding: '0 8px'}}  variant='subtitle2' gutterBottom>
        Uploading Rules
        </Typography>
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',my:2,width:'flex'}} >
        <img src='https://i.pinimg.com/236x/38/a7/95/38a795fd5008ab241ded26d41f5b0b53.jpg' style={{width:'70px',height:'70px',borderRadius:'8px',transform: 'rotate(15deg)'}} />
        <img src='https://i.pinimg.com/236x/38/a7/95/38a795fd5008ab241ded26d41f5b0b53.jpg' style={{width:'70px',height:'70px',borderRadius:'8px'}} />
        <img src='https://i.pinimg.com/236x/38/a7/95/38a795fd5008ab241ded26d41f5b0b53.jpg' style={{width:'70px',height:'70px',borderRadius:'8px',transform: 'rotate(-15deg)'}} />
        </Box>
             
        <Typography  sx={{textAlign:'left'}}  variant='caption' gutterBottom>
           - Please upload a photo that matches the gender, age and status details in your personal profile.
        </Typography> 

        <Typography  sx={{textAlign:'left',my:1}}  variant='caption' gutterBottom>
           - Use a photo that is appropriate for a business setting. Group photos are not allowed.
        </Typography> 

        <Typography  sx={{textAlign:'left'}}  variant='caption' gutterBottom>
           - Photos violating the rules stated in the Terms of User will be removed without notice.
        </Typography> 
   
        </Box>

       </Box>
        </Box>
    </div>
  )
}
