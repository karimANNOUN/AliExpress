import {useState} from 'react'
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { CompteListe } from '../components/CompteListe';
import { ProductAimiez } from '../components/ProductAimiez';
import Typography from '@mui/material/Typography';

export const Setting = () => {
  return (
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >
    <Box sx={{width:'70%',display:'flex',justifyContent:'space-between'}} >
      <CompteListe/>
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'73%'}} >
                   <Box sx={{width:'100%',bgcolor:'Window',display:'flex',alignItems:'center',my:2,p:1}} >
                    
                   <Typography  sx={{textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
                   Paramètres
                  </Typography>


                   </Box>

     
                      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',bgcolor:'Window',p:1,mb:2}} >
                         <Box sx={{display:'flex',flexDirection:'column',width:'100%'}} >
                         <Typography  sx={{textAlign:'left',fontWeight:'700'}}  variant='subtitle1' gutterBottom>
                         Informations personnelles
                     </Typography>
                     <Box sx={{display:'flex',alignItems:'center'}} >
                     <Link sx={{mr:3 , ":hover":{color:'#f4511e'} }} target="_blank" href="/Uploadimage" underline="none">
                     Télécharger une photo
                        </Link>  
                        <Link sx={{mr:3 , ":hover":{color:'#f4511e'} }} target="_blank" href="/UpdateProfil" underline="none">
                        Modifier le profil
                           </Link>
                      <Link sx={{ ":hover":{color:'#f4511e'} }} target="_blank" href="/contryUpdates" underline="none">
                      Country/region
                        </Link>
                     </Box>
                         </Box>
                         <Box sx={{display:'flex',flexDirection:'column',my:2,width:'100%'}} >
                         <Typography  sx={{textAlign:'left',fontWeight:'700'}}  variant='subtitle1' gutterBottom>
                         Informations de sécurité
                     </Typography>
                     <Box sx={{display:'flex',alignItems:'center'}} >
                     <Link sx={{mr:3 , ":hover":{color:'#f4511e'} }} target="_blank" href="/emailUpdates" underline="none">
                     Changer l'adresse e-mail
                        </Link>  
                        <Link sx={{mr:3 , ":hover":{color:'#f4511e'} }} target="_blank"  href="/passwordUpdates" underline="none">
                        Changer le mot de passe
                           </Link>
                         </Box>    
                         </Box>
                         <Box sx={{display:'flex',flexDirection:'column',width:'100%'}} >
                         <Typography  sx={{textAlign:'left',fontWeight:'700'}}  variant='subtitle1' gutterBottom>
                         Activer les notifications par e-mail
                     </Typography>
                     <Box sx={{display:'flex',alignItems:'center'}} >
                     <Link sx={{ ":hover":{color:'#f4511e'} }} target="_blank" href="/emailnotification" underline="none">
                     Activer
                        </Link>  
                         </Box>
                     
                      </Box>

                       </Box>

                      <ProductAimiez/>


       </Box>
    </Box>
</div>
  )
}
