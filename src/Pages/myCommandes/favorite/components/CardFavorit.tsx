import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom';
export const CardFavorit = () => {

    const navigate=useNavigate()

  return (
    <Box sx={{display:'flex',alignItems:'center',p:1,width:'100%'}} >
                                    <img src='https://media.post.rvohealth.io/wp-content/uploads/2023/08/3068928-Full-CE-NEW-Market-Tier-4-August-Updates-The-11-Best-Hair-Products-for-Men-of-2023-1296x728-Header-81b9bf.jpg' style={{width:'200px',height:'200px'}} />
                                      <Box sx={{display:'flex',flexDirection:'column',justifyContent:'flex-start',height:'100%',ml:1}} >
                                            <Typography sx={{color:'black',fontWeight:'500',textAlign:'left'}}  variant='subtitle2' gutterBottom>
                                
                                                Men's New Autumn and Winter Casual Warmth Thicken
                                            </Typography>   

                                            <Typography sx={{color:'#bdbdbd',fontWeight:'500',mb:2,textAlign:'left'}}  variant='caption' gutterBottom>
                                
                                            105 orders
                            </Typography>   


                            <Typography sx={{color:'black',fontWeight:'500',textAlign:'left'}}  variant='subtitle2' gutterBottom>
                                
                            DA30.45
                            </Typography>  

                                        </Box>
                                  
                                  <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',width:'40%',ml:2}} >
                                    
                                  <Button  variant='outlined' sx={{color:'black',width:'100%',mb:2,borderRadius:'30px',border:'2px solid black' ,textTransform:'lowercase' ,":hover":{color:'#f4511e',border:'2px solid #f4511e'} }} >
                        Ajouter Au Panier
                       </Button>

                        <Box sx={{display:'flex',alignItems:'center',width:'100%',justifyContent:'space-between'}} >
                        <Button onClick={()=>navigate("/")} variant='text' sx={{color:'black',width:'48%',borderRadius:'30px',border:'2px solid black' ,textTransform:'lowercase' ,":hover":{color:'#f4511e',border:'2px solid #f4511e'}}} >
                        Plus
                       </Button>
                       <Button  variant='text' sx={{color:'black',width:'48%',borderRadius:'30px',border:'2px solid black' ,textTransform:'lowercase' ,":hover":{color:'#f4511e',border:'2px solid #f4511e'} }} >
                       Suprimer
                       </Button>
                        </Box>

                                  </Box>



                                        </Box>
  )
}
