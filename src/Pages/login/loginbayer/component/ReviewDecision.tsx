import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { Header } from './Header';
import { Footer } from './Footer';
export const ReviewDecision = () => {

    const options2 =["adrar","chlef","annaba","el taref","alger","guelma"]

    const steps = [
        'Créer un compte',
        'Renseignements sur l’entreprise',
        'Examen de la demande',
      ];



  return (
    <div style={{display:'flex',flexDirection:'column',alignItems:'center',backgroundColor:'#eeeeee'}} >
        
        <Header/>

        <Box sx={{ width: '50%' ,my:2 ,p:2  }}>
      <Stepper activeStep={2} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
           



        <Box sx={{width:'50%',display:'flex',height:'74vh',flexDirection:'column',alignItems:'center'}} >
            <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',bgcolor:'Window',p:2}} >
        <Typography  sx={{fontWeight:'700'}}  variant='h6' gutterBottom>
        Bienvenue, rejoignez le Centre mondial des vendeurs AliExpress
        </Typography>



        <Typography  sx={{textAlign:'center'}}  variant='subtitle2' gutterBottom>
                   Votre demande est en cour de traitement 
        </Typography>
           
    </Box>
        </Box>

      

       <Footer/>
    </div>
  )
}
