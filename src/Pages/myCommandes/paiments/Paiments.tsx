import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { ProductAimiez } from '../components/ProductAimiez';
import { CompteListe } from '../components/CompteListe';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { AddCardInfo } from './components/AddCardInfo';
export const Paiments = () => {

    const [show,setShow]=useState(false)


  return (
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >
    <Box sx={{width:'70%',display:'flex',justifyContent:'space-between'}} >
      <CompteListe/>
       <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'73%'}} >
                   <Box sx={{width:'100%',bgcolor:'Window',display:'flex',alignItems:'center',justifyContent:'space-between',my:2,p:1}} >
                   <Typography sx={{color:'black',fontWeight:'700',textAlign:'left'}}  variant='body1' gutterBottom>
                         Paiment
                        </Typography>

                        <Button variant="text" sx={{color:'#9e9e9e',alignItems:'center',fontSize:'18px',bgcolor:'Window',":hover":{bgcolor:'Window',color:'#9e9e9e'}}} >
                            Réglages <ChevronRightIcon sx={{ml:1,fontSize:'18px'}} /> </Button>

                    

                   </Box>

                





                      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%',bgcolor:'Window',p:1,mb:2}} >
                      <Typography sx={{color:'black',fontWeight:'700',textAlign:'left'}}  variant='body1' gutterBottom>
                         Cartes
                        </Typography>
                        <Button onClick={()=>setShow(true)} variant="text" sx={{color:'#9e9e9e',my:2,alignItems:'center',height:'200px',width:'50%',borderRadius:'12px',fontSize:'16px',bgcolor:'#eeeeee',":hover":{bgcolor:'#eeeeee',color:'#9e9e9e'}}} >
                        <AddCircleOutlineOutlinedIcon sx={{mr:1,fontSize:'22px'}} /> Ajouter une carte
                        </Button>

                        <Typography sx={{color:'#9e9e9e',textAlign:'left'}}  variant='body1' gutterBottom>
                        C'est un peu vide ici ! Vous n'avez enregistré aucune carte.
                        </Typography>

                         <AddCardInfo show={show} setShow={setShow} /> 
                    
                      </Box>



                      <ProductAimiez/>


       </Box>
    </Box>
</div>
  )
}
