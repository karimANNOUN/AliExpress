import {useState} from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import CloseIcon from '@mui/icons-material/Close';

import { CompteListe } from '../components/CompteListe';
import { AddLocations } from './components/AddLocations';
import { ProductAimiez } from '../components/ProductAimiez';
import { Divider, IconButton, InputLabel } from '@mui/material'
import { UpdateLocation } from './components/UpdateLocation';

export const AdressLivraison = () => {

    const options = ['Tous', 'Encore' , 'En attente du retour des article(s)' ,'Finalisé'];

    const [showLocation,setShowLocation]=useState(false)

    const [active,setActive]=useState(false)

  return (
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >
    <Box sx={{width:'70%',display:'flex',justifyContent:'space-between'}} >
      <CompteListe/>
       <Box sx={{display:'flex',flexDirection:'column',width:'73%'}} >
                   <Box sx={{width:'100%',display:'flex',alignItems:'center',my:2,p:1}} >
                   <Typography sx={{color:'black',textAlign:'left'}}  variant='h6' gutterBottom>
                   Adresse de livraison
                        </Typography>

                        
 
                    

                   </Box>


               { !(showLocation || active ) && <Box sx={{display:'flex',flexDirection:'column'}} >
               <Button onClick={()=>setActive(true)} variant='contained' sx={{color:'white',width:'300px',bgcolor:'#f4511e',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#f4511e'} }} >
        Ajouter une nouvelle adress
    </Button>
     
              <Box sx={{display:'flex',my:2,flexDirection:'column',width:'400px',p:2,border:'2px solid #ff5722',borderRadius:'8px',bgcolor:'#fbe9e7'}} >
              <Typography sx={{color:'#f4511e',textAlign:'right'}}  variant='caption' gutterBottom>
                   Adresse par default
                        </Typography> 

                        <Typography sx={{color:'black',display:'flex',alignItems:'center',fontWeight:'700',textAlign:'left'}}  variant='body2' gutterBottom>
                            <Person2OutlinedIcon/>  Karim Announ, +213 656256738
                        </Typography> 

                        <Typography sx={{color:'black',display:'flex',alignItems:'center',textAlign:'left'}}  variant='body2' gutterBottom>
                            <LocationOnIcon/>  rue alwi amara
                        </Typography> 

                        <Typography sx={{color:'black',ml:1,display:'flex',alignItems:'center',textAlign:'left',mb:2}}  variant='body2' gutterBottom>
                        Chihani, el taref, Algeria, 36014
                        </Typography> 
                    
                    <Box sx={{display:'flex',alignItems:'center'}} >
                    <Button onClick={()=>setShowLocation(true)} variant='text' sx={{color:'#2196f3' ,":hover":{color:'#2196f3'} }} >
       Modifier
    </Button>
    <Button variant='text' sx={{color:'#2196f3' ,":hover":{color:'#2196f3'} }} >
      Suprimer
    </Button>
                    </Box>

              </Box>

               </Box>}

                { active && <AddLocations setActive={setActive} />}

                { showLocation && <UpdateLocation setShowLocation={setShowLocation} />}




                      

                      <ProductAimiez/>


       </Box>
    </Box>
</div>
  )
}
