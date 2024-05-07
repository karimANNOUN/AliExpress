import { useState } from 'react'
import { Box,Typography } from '@mui/material'
import Link from '@mui/material/Link';
import { UploadImageSeller } from './components/UploadImageSeller';
import Button from '@mui/material/Button';
import { ModifierProfilSeller } from './components/ModifierProfilSeller';
import { CountrySeller } from './components/CountrySeller';
import { EmailUpdateSeller } from './components/EmailUpdateSeller';
import { PasswordUpdateSeller } from './components/PasswordUpdateSeller';
import { NotificationEmailSeller } from './components/NotificationEmailSeller';

export const Settings = () => {

    const [active,setActive]=useState(0)


  return (
    <Box sx={{width:'85%',height:'100%',display:'flex',flexDirection:'column',px:2}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Settings
    </Typography>

    <Box sx={{bgcolor:'Window',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'99%',mb:2,borderRadius:'6px',p:1}} >
   
                         <Box sx={{display:'flex',flexDirection:'column',width:'100%'}} >
                         <Typography  sx={{textAlign:'left',fontWeight:'700'}}  variant='subtitle1' gutterBottom>
                         Informations personnelles
                     </Typography>
                     <Box sx={{display:'flex',alignItems:'center'}} >
                    
                     <Button sx={{mr:3 , textTransform:'lowercase' ,":hover":{color:'#f4511e'} }} onClick={()=>setActive(0)} variant="text">
                     Télécharger une photo
                     </Button>
                        
                     <Button sx={{mr:3 , textTransform:'lowercase' ,":hover":{color:'#f4511e'} }} onClick={()=>setActive(1)} variant="text">
                        Modifier le profil
                           </Button>
                           <Button sx={{mr:3 , textTransform:'lowercase' ,":hover":{color:'#f4511e'} }} onClick={()=>setActive(2)} variant="text">
                      Country/region
                        </Button>
                     </Box>
                         </Box>
                         <Box sx={{display:'flex',flexDirection:'column',my:2,width:'100%'}} >
                         <Typography  sx={{textAlign:'left',fontWeight:'700'}}  variant='subtitle1' gutterBottom>
                         Informations de sécurité
                     </Typography>
                     <Box sx={{display:'flex',alignItems:'center'}} >
                     <Button sx={{mr:3 , textTransform:'lowercase' ,":hover":{color:'#f4511e'} }} onClick={()=>setActive(3)} variant="text">
                     Changer l'adresse e-mail
                        </Button>  
                        <Button sx={{mr:3 , textTransform:'lowercase' ,":hover":{color:'#f4511e'} }} onClick={()=>setActive(4)} variant="text">
                        Changer le mot de passe
                           </Button>
                         </Box>    
                         </Box>
                         <Box sx={{display:'flex',flexDirection:'column',width:'100%'}} >
                         <Typography  sx={{textAlign:'left',fontWeight:'700'}}  variant='subtitle1' gutterBottom>
                         Activer les notifications par e-mail
                     </Typography>
                     <Box sx={{display:'flex',alignItems:'center'}} >
                     <Button sx={{mr:3 , textTransform:'lowercase' ,":hover":{color:'#f4511e'} }} onClick={()=>setActive(5)} variant="text">
                     Activer
                        </Button>  
                         </Box>
                     
                      </Box>

                       
        </Box>


        <Box sx={{bgcolor:'Window',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'99%',mb:2,borderRadius:'6px',p:1}} >
              
        { active === 0 ? <UploadImageSeller/> : "" }
        { active === 1 ? <ModifierProfilSeller/> : "" }
        { active === 2 ? <CountrySeller/> : "" }
        { active === 3 ? <EmailUpdateSeller/> : "" }
        { active === 4 ? <PasswordUpdateSeller/> : "" }
        { active === 5 ? <NotificationEmailSeller/> : "" }

            </Box>


        </Box>
  )
}
