import {useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Divider, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import solde from '../../assets/solde.png'
import { PieceCard } from './component/PieceCard';


export const Piece = () => {

  
const offre=[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15},{id:16},{id:17},{id:18},{id:19},{id:20},{id:21},{id:22},{id:23},{id:24},{id:25},{id:26}]    


  return (
    <div>
        <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center'}} >
              <Box sx={{width:'100%',background: 'linear-gradient(to right, #ffd54f 0%, #ffb300 40% , #ff6f00 70%)',display:'flex',justifyContent:'center',alignItems:'center'}} >



                   <Box sx={{width:'70%',display:'flex',justifyContent:'space-between',p:1}} >



                      <Box sx={{display:'flex',flexDirection:'column',width:'50%'}} >



                        <Box sx={{p:1,display:'flex',flexDirection:'column',width:'200px',bgcolor:'black',borderRadius:'10px'}} >
                           <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%'}} >
                           <Typography sx={{color:'white',fontWeight:'700',textAlign:'left'}}  variant='body1' gutterBottom>
                           Mes Piece
                        </Typography> 
                        <IconButton>
                            <ChevronRightIcon sx={{color:'white'}} />
                        </IconButton>
                           </Box>
                           <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',bgcolor:'Window',borderRadius:'10px'}} >
                            <Box sx={{width:'50%',alignItems:'center',justifyContent:'center'}} >
                            <Typography sx={{fontWeight:'700',textAlign:'center'}}  variant='body1' gutterBottom>
                           20
                        </Typography> 
                            </Box>
                          
                        <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderLeft:'2px solid #9e9e9e',width:'50%'}} >
                        <Typography sx={{fontWeight:'700'}}  variant='body1' gutterBottom>
                        économisé
                        </Typography> 
                        <Typography sx={{color:'#ff1744',fontWeight:'400'}}  variant='subtitle2' gutterBottom>
                           5%
                        </Typography> 
                        </Box>
                           </Box>
                        </Box>



                        <Typography sx={{textAlign:'left',my:2}}  variant='h3' gutterBottom>
                        <b>Jetons </b> <br/>
                        Collectez, achetez et économisez
                        </Typography> 
                       
                             <Divider sx={{width:'80%',color:'black',fontWeight:'800',mb:2}} />

                             <Button variant='text' sx={{color:'black',border:'2px solid #ffca28',borderRadius:'8px',width:'40%',textTransform:'lowercase',display:'flex',justifyContent:'space-between',alignItems:'center' ,":hover":{color:'black',fontWeight:'800'} }} >
                                <img src='https://c8.alamy.com/compfr/2gpbayt/timbre-rouge-avec-icone-cadeau-entrez-pour-gagner-francais-participez-et-gagnez-2gpbayt.jpg' style={{width:'20px',height:'20px',borderRadius:'8px'}} />
                      Decouvrer votre produit <KeyboardArrowDownIcon  />
                      </Button>
       

                      </Box>

                  

                        <Box sx={{width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}} >
                         <img src={solde} style={{width:'80%',height:'90%',borderRadius:'12px'}} />
                        </Box>


                   </Box>


                     
              </Box>

                <Box sx={{display:'flex',flexDirection:'column',width:'70%',p:1}} >
                <Typography sx={{textAlign:'left',fontWeight:'700',my:2}}  variant='h5' gutterBottom>
                Économisez avec les pièces
                        </Typography> 


                        <Box sx={{width:'100%',display:'flex',alignItems:'center',flexWrap:'wrap'}} >

                        { offre.map(offr=> <PieceCard key={offr.id} /> ) }
                  </Box>

                </Box>
                
                




        </Box>
    </div>
  )
}
