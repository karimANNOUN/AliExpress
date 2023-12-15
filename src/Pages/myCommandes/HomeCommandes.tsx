import React,{useState} from 'react'
import Box from '@mui/material/Box';
import { CompteListe } from './components/CompteListe';
import Typography from '@mui/material/Typography';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { IconButton } from '@mui/material';
import Link from '@mui/material/Link';

export const HomeCommandes = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >
        <Box sx={{width:'70%',display:'flex',justifyContent:'space-between'}} >
           <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'23%',my:2}} >
                <Box sx={{width:'100%'}} >
                 <CompteListe/>
                </Box>
                <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',bgcolor:'Window',py:2,mt:2}} >
                <Typography sx={{fontWeight:'600'}}  variant='body2' gutterBottom>
                Application mobile AliExpress
</Typography>

<Typography sx={{fontWeight:'300',color:'#9e9e9e'}}  variant='caption' gutterBottom>
Explorez n'importe où, n'importe quand !
</Typography>

<IconButton sx={{bgcolor:'Window',":hover":{bgcolor:'Window'}}} >
    <QrCode2Icon sx={{fontSize:'120px'}} />
</IconButton>

<Link variant='caption' sx={{color:'#9e9e9e',":hover":{color:'#f44336'}}} href="#" underline="none">
Scannez le code ou cliquez ici pour télécharger
</Link>


                </Box>
           </Box>
           <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'73%'}} >
                       hh
           </Box>
        </Box>
    </div>
  )
}
