import React,{useState} from 'react'
import Box from '@mui/material/Box';
import { CompteListe } from '../components/CompteListe';
import Typography from '@mui/material/Typography';
import { IconButton, InputAdornment } from '@mui/material';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';

import { ProductAimiez } from '../components/ProductAimiez';
import DeleteIcon from '@mui/icons-material/Delete';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import SearchIcon from '@mui/icons-material/Search';
import ListAltIcon from '@mui/icons-material/ListAlt';
import CheckIcon from '@mui/icons-material/Check';



export const Commande = () => {

    

    const [active,setActive]=useState(0)

    const options = ['Commandes', 'Suivre'];

    const topOption = ['Tous', 'Le dernier 6 mois', 'Depuis 1 ans','Depuis 2 ans'];

    const [show,setShow]=useState(false)

    const commandes=[]

  return (
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >
    <Box sx={{width:'70%',display:'flex',justifyContent:'space-between'}} >
      <CompteListe/>
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'73%'}} >
                   <Box sx={{width:'100%',bgcolor:'Window',display:'flex',flexDirection:'column',my:2,p:1}} >
                      <Box  sx={{display:'flex',alignItems:'center',mb:2,justifyContent:'space-between'}} >
                        <Box sx={{display:'flex',alignItems:'center'}} >
                      { active === 0 ? <Button onClick={()=>setActive(0)} variant="text" sx={{color:'black',bgcolor:'Window',fontWeight:'800',borderBottom:"2px solid #ff5722 ",":hover":{bgcolor:'Window'}}} >Tout</Button> 
                      : <Button onClick={()=>setActive(0)} variant="text" sx={{color:'#212121',bgcolor:'Window',":hover":{bgcolor:'Window',color:'#ff5722'}}} >Tout</Button>}
                      
                      { active === 1 ? <Button onClick={()=>setActive(1)} variant="text" sx={{color:'black',bgcolor:'Window',fontWeight:'800',borderBottom:"2px solid #ff5722 ",":hover":{bgcolor:'Window'}}} >Non payées</Button> 
                      : <Button onClick={()=>setActive(1)} variant="text" sx={{color:'#212121',bgcolor:'Window',":hover":{bgcolor:'Window',color:'#ff5722'}}} >Non payées</Button>}

{ active === 2 ? <Button onClick={()=>setActive(2)} variant="text" sx={{color:'black',bgcolor:'Window',fontWeight:'800',borderBottom:"2px solid #ff5722 ",":hover":{bgcolor:'Window'}}} >En cours</Button> 
                      : <Button onClick={()=>setActive(2)} variant="text" sx={{color:'#212121',bgcolor:'Window',":hover":{bgcolor:'Window',color:'#ff5722'}}} >En cours</Button>}

{ active === 3 ? <Button onClick={()=>setActive(3)} variant="text" sx={{color:'black',bgcolor:'Window',fontWeight:'800',borderBottom:"2px solid #ff5722 ",":hover":{bgcolor:'Window'}}} >Expédiées</Button> 
                      : <Button onClick={()=>setActive(3)} variant="text" sx={{color:'#212121',bgcolor:'Window',":hover":{bgcolor:'Window',color:'#ff5722'}}} >Expédiées</Button>}

{ active === 4 ? <Button onClick={()=>setActive(4)} variant="text" sx={{color:'black',bgcolor:'Window',fontWeight:'800',borderBottom:"2px solid #ff5722 ",":hover":{bgcolor:'Window'}}} >Terminées</Button> 
                      : <Button onClick={()=>setActive(4)} variant="text" sx={{color:'#212121',bgcolor:'Window',":hover":{bgcolor:'Window',color:'#ff5722'}}} >Terminées</Button>}

                      </Box>

                     { active ===5 ? <Button onClick={()=>setActive(5)} variant="text" sx={{color:'black',fontWeight:'800',alignItems:'center',fontSize:'10px',bgcolor:'Window',":hover":{bgcolor:'Window',color:'black',fontWeight:'800'}}} > <DeleteIcon sx={{mr:1,fontSize:'12px'}} /> Commandes supprimées</Button>
                     
                     :
                     <Button variant="text" onClick={()=>setActive(5)} sx={{color:'#212121',alignItems:'center',fontSize:'10px',bgcolor:'Window',":hover":{bgcolor:'Window',color:'black',fontWeight:'800'}}} > <DeleteIcon sx={{mr:1,fontSize:'12px'}} /> Commandes supprimées</Button>
                     }
                      </Box>

                      <Box sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between'}} >

                <Box sx={{display:'flex',alignItems:'center'}} >


                <Autocomplete
        sx={{width:'150px'}}
          options={options}
          size='small'
          renderInput={(params) => (
            <TextField {...params}  variant="outlined" />
          )}
        />
    
        <TextField
  id="Phone"
   sx={{width:'350px'}}
  placeholder="commandes or product vendeur"
  size='small'
  InputProps={{
    endAdornment:(
        <InputAdornment sx={{bgcolor:'#f4511e',height:'100%',right:0,position:'absolute'}} position='end' >
            <IconButton >
            <SearchIcon sx={{color:'white'}} />
            </IconButton>
        </InputAdornment>
    ),
    size:'small'
    
  }}
  />

                </Box>
    
   

   <Autocomplete
      disablePortal
      id="combo-box-demo"
      size='small'
      options={topOption}
      sx={{ width: '200px' }}
      renderInput={(params) => <TextField  {...params} />}
    />
       
       
            
         
     
                      
                      </Box>

                   </Box>

                


        { active === 1 && <Box sx={{display:'flex',width:'100%',alignItems:'center',mb:2}} >
       
 { !show ?

<IconButton onClick={()=>setShow(true)} sx={{width:'23px',height:'23px',ml:2,borderRadius:'50%',border:'2px solid #e0e0e0',bgcolor:'Window',":hover":{bgcolor:'Window',border:'2px solid #ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >

</IconButton>

 :  <IconButton onClick={()=>setShow(false)} sx={{width:'23px',ml:2,height:'23px',borderRadius:'50%',bgcolor:'#ff1744',":hover":{bgcolor:'#ff1744'},display:'flex',justifyContent:'center',alignItems:'center'}} >
     <CheckIcon sx={{fontSize:'17px',color:'white'}} />
 </IconButton>
 
 }


{ commandes.length ? <Button variant='text' sx={{color:'white',ml:1,borderRadius:'12px',fontSize:'12px',fontWeight:'300'  ,bgcolor:'#ff5722',":hover":{color:'white',bgcolor:'#ff5722'} }} >
Payer les commandes sélectionnés
    </Button> 
:

<Button variant='text' disabled sx={{color:'white',ml:1,borderRadius:'12px',fontSize:'12px',fontWeight:'700'  ,bgcolor:'#ff5722',":hover":{color:'white',bgcolor:'#ff5722'} }} >
Payer les commandes sélectionnés
    </Button>

}


        </Box>   }




                      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',width:'100%',bgcolor:'Window',p:1,mb:2,height:'500px'}} >
                     
                       <ListAltIcon sx={{fontSize:'130px',color:'#bdbdbd'}} />

                       <Typography sx={{color:'#bdbdbd'}}  variant='body1' gutterBottom>
                       Aucune commande S'il vous plaît <Link href="#" sx={{color:'#616161',":hover":{color:'#616161'}}} underline="none">
                       Connectez-vous
      </Link>  ou <Link sx={{color:'#616161',":hover":{color:'#616161'}}} href="#" underline="none"> Ajoutez une suggestion </Link>
                        </Typography>

                      </Box>



                      <ProductAimiez/>


       </Box>
    </Box>
</div>
  )
}

