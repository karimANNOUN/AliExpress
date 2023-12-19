import {useState} from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


import { CompteListe } from '../components/CompteListe';
import { ProductAimiez } from '../components/ProductAimiez';
import { Divider } from '@mui/material';

export const Remboursement = () => {

  const options = ['Tous', 'Encore' , 'En attente du retour des article(s)' ,'Finalisé'];

  const [active,setActive]=useState(0)

  return (
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >
    <Box sx={{width:'70%',display:'flex',justifyContent:'space-between'}} >
      <CompteListe/>
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'73%'}} >
                   <Box sx={{width:'100%',display:'flex',alignItems:'center',my:2,p:1}} >
                   <Typography sx={{color:'black',textAlign:'left'}}  variant='h6' gutterBottom>
                   Retours et remboursements
                        </Typography>

                        

                    

                   </Box>

                





                      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%',bgcolor:'Window',p:1,mb:2}} >
                     <Box sx={{display:'flex',alignItems:'center',width:'100%',mb:2}} >
                         
                      { active === 0 ? <Button onClick={()=>setActive(0)} variant="text" sx={{color:'#f4511e',alignItems:'center',":hover":{color:'#f4511e'}}} >
                         En cours(0)
                        </Button> :
                        <Button onClick={()=>setActive(0)}  variant="text" sx={{color:'black',alignItems:'center',":hover":{color:'black'}}} >
                        En cours(0)
                       </Button>
                        }

{ active === 1 ?   <Button onClick={()=>setActive(1)}  variant="text" sx={{color:'#f4511e',alignItems:'center',":hover":{color:'#f4511e'}}} >
                        En attente du retour des article(s)(0)
                        </Button> :
                         <Button onClick={()=>setActive(1)}  variant="text" sx={{color:'black',alignItems:'center',":hover":{color:'black'}}} >
                         En attente du retour des article(s)(0)
                         </Button>}

                     </Box>
                       
                       <Box sx={{display:'flex',alignItems:'center'}} >

                       <TextField
  id="Phone"
   sx={{width:'200px',mr:1}}
  placeholder="Commandes Number"
  size='small'
  
  />

                        <TextField
  id="Phone"
   sx={{width:'200px',mr:1}}
  placeholder="Boutique name"
  size='small'
  
  />

                       <Autocomplete
        sx={{width:'200px',mr:1}}
          options={options}
          size='small'
         
          renderInput={(params) => (
            <TextField {...params}  variant="outlined" />
          )}
        />


<Button variant='contained' sx={{color:'white',bgcolor:'#d32f2f',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#d32f2f'} }} >
        Rechercher
    </Button>
    
 

                       </Box>
                    
                      </Box>

                      <Box sx={{display:'flex',flexDirection:'column',width:'100%',bgcolor:'Window',p:1,mb:2}} >
                                 <Box sx={{display:'flex',alignItems:'center',width:'100%'}} >
                                    <Box sx={{width:'50%'}} >
                                    <Typography sx={{color:'black',textAlign:'left'}}  variant='body1' gutterBottom>
                                    Informations de commande
                                   </Typography>
                                    </Box>
                                    <Box sx={{width:'50%'}} >
                                    <Typography sx={{color:'black',textAlign:'left'}}  variant='body1' gutterBottom>
                                     Statut
                                   </Typography>
 
                                    </Box>
                                 </Box>
                                 <Divider sx={{width:'100%',my:1}} />
                                  
                                  <Box sx={{width:'100%',alignItems:'center'}} >
                                  <Typography sx={{color:'#bdbdbd',textAlign:'left'}}  variant='body1' gutterBottom>
                                    Informations de commandeRefund_returns_list_not_order </Typography>
                                  </Box>

                       </Box>
                       

                      <ProductAimiez/>


       </Box>
    </Box>
</div>
  )
}
