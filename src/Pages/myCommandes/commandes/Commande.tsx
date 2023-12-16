import React,{useState} from 'react'
import Box from '@mui/material/Box';
import { CompteListe } from '../components/CompteListe';
import Typography from '@mui/material/Typography';
import { Divider, IconButton } from '@mui/material';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Person4OutlinedIcon from '@mui/icons-material/Person4Outlined';
import HistoryToggleOffOutlinedIcon from '@mui/icons-material/HistoryToggleOffOutlined';
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import PaymentsIcon from '@mui/icons-material/Payments';
import HourglassBottomIcon from '@mui/icons-material/HourglassBottom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import SummarizeIcon from '@mui/icons-material/Summarize';
import PaidOutlinedIcon from '@mui/icons-material/PaidOutlined';
import { ProductAimiez } from '../components/ProductAimiez';
import DeleteIcon from '@mui/icons-material/Delete';



export const Commande = () => {

    const [active,setActive]=useState(0)

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

                      <Box sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-around'}} >
                        <IconButton sx={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:'15px',":hover":{bgcolor:'Window'}}} >
                            <FavoriteBorderIcon sx={{fontSize:'34px',mb:1}} />
                            Mes favoris
                        </IconButton>
                          
                        <IconButton sx={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:'15px',":hover":{bgcolor:'Window'}}} >
                            <Person4OutlinedIcon sx={{fontSize:'34px',mb:1}} />
                            Abonnements
                        </IconButton>

                        <IconButton sx={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:'15px',":hover":{bgcolor:'Window'}}} >
                            <HistoryToggleOffOutlinedIcon sx={{fontSize:'34px',mb:1}} />
                            Vus récemment
                        </IconButton>

                        <IconButton sx={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:'15px',":hover":{bgcolor:'Window'}}} >
                            <ReplyOutlinedIcon sx={{fontSize:'34px',mb:1}} />
                            Coupons
                        </IconButton>

                      </Box>

                   </Box>


                      <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%',bgcolor:'Window',p:1,mb:2}} >
                       <Box sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-between'}} >
                       <Typography sx={{fontWeight:'800',textAlign:'left'}}  variant='h6' gutterBottom>
                       Commandes
                    </Typography>
                    <IconButton sx={{display:'flex',alignItems:'center',fontSize:'15px',":hover":{bgcolor:'Window'}}} >
                        Voir Tout
                            <ChevronRightOutlinedIcon sx={{fontSize:'18px'}} />
                        
                        </IconButton>
                       </Box>
                     
                     <Divider sx={{width:'97%',my:2}} />
                        
                     <Box sx={{display:'flex',width:'100%',alignItems:'center',justifyContent:'space-around'}} >
                        <IconButton sx={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:'15px',":hover":{bgcolor:'Window'}}} >
                            <PaymentsIcon sx={{fontSize:'34px',color:'#f44336',mb:1}} />
                            Non-payées
                        </IconButton>
                          
                        <IconButton sx={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:'15px',":hover":{bgcolor:'Window'}}} >
                            <HourglassBottomIcon sx={{fontSize:'34px',color:'#f44336',mb:1}} />
                            En attente d'expédition
                        </IconButton>

                        <IconButton sx={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:'15px',":hover":{bgcolor:'Window'}}} >
                            <LocalShippingIcon sx={{fontSize:'34px',color:'#f44336',mb:1}} />
                            Expédiées
                        </IconButton>

                        <IconButton sx={{display:'flex',flexDirection:'column',alignItems:'center',fontSize:'15px',":hover":{bgcolor:'Window'}}} >
                            <LibraryAddCheckIcon sx={{fontSize:'34px',color:'#f44336',mb:1}} />
                            En attente d'évaluation
                        </IconButton>

                      </Box>

                    
                      <Divider sx={{width:'97%',my:2}} />

                      <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
                      <IconButton sx={{display:'flex',alignItems:'center',fontSize:'15px',":hover":{bgcolor:'Window'}}} >
                            <SummarizeIcon sx={{fontSize:'20px',mr:1}} />
                            Réclamations
                        </IconButton>
                        <ChevronRightOutlinedIcon sx={{fontSize:'18px'}} />
                      </Box>

                      <Divider sx={{width:'97%',my:2}} />

                      <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
                      <IconButton sx={{display:'flex',alignItems:'center',fontSize:'15px',":hover":{bgcolor:'Window'}}} >
                            <PaidOutlinedIcon sx={{fontSize:'20px',mr:1}} />
                            Remboursements et retours
                        </IconButton>
                        <ChevronRightOutlinedIcon sx={{fontSize:'18px'}} />
                      </Box>

                      </Box>



                      <ProductAimiez/>


       </Box>
    </Box>
</div>
  )
}

