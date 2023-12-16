import React,{useState} from 'react'
import Box from '@mui/material/Box';
import { CompteListe } from './components/CompteListe';
import Typography from '@mui/material/Typography';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import { Divider, IconButton } from '@mui/material';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
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
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

export const HomeCommandes = () => {


    const products =[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15}]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickRight = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 6) % products.length);
    };
  
    const handleClickLeft = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 6 + products.length) % products.length);
    };


  return (
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >
        <Box sx={{width:'70%',display:'flex',justifyContent:'space-between'}} >
           <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'23%',my:2}} >
                <Box sx={{width:'100%'}} >
                 <CompteListe/>
                </Box>
                <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',bgcolor:'Window',py:2,mt:2}} >
                <Typography sx={{fontWeight:'600'}}  variant='body2' gutterBottom>
                Application mobile AliExpress
</Typography>

<Typography sx={{fontWeight:'300',color:'#9e9e9e'}}  variant='caption' gutterBottom>
Explorez n'importe où, n'importe quand !
</Typography>

<IconButton sx={{bgcolor:'Window',":hover":{bgcolor:'Window'}}} >
    <QrCode2Icon sx={{fontSize:'120px'}} />
</IconButton>

<Link variant='caption' sx={{color:'#9e9e9e',":hover":{color:'#f44336'}}} href="#" underline="none">
Scannez le code ou cliquez ici pour télécharger
</Link>


                </Box>
           </Box>
           <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'73%'}} >
                       <Box sx={{width:'100%',bgcolor:'Window',display:'flex',flexDirection:'column',my:2,p:1}} >
                          <Box  sx={{display:'flex',alignItems:'center',mb:2}} >
                          <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 ,mr:2 }}
      />
                          <Typography sx={{fontWeight:'600'}}  variant='h6' gutterBottom>
                          announ karim
                        </Typography>
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



                          <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',bgcolor:'Window',width:'100%',p:1,mb:2}} >
                            <Box sx={{display:'flex',width:'100%',alignItems:'center'}} >
                            <Typography sx={{fontWeight:'800',textAlign:'left'}}  variant='h6' gutterBottom>
                          Sélectionné pour vous
                        </Typography>
                            </Box>
                            <Box sx={{display:'flex',alignItems:'center',width:'100%',overflow:'clip',position:'relative'}} >
                            {products.slice(currentIndex, currentIndex + 5).map( prod => <Box key={prod.id} sx={{width:'20%',mr:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',p:1 }}>
    <img src='https://i.pinimg.com/564x/6a/f3/fb/6af3fb0201c1f22c8281c5519faf5d44.jpg' alt='hhtr' style={{width:'95%',height:'200px'}} />
    <Box sx={{width:'95%',display:'flex',flexDirection:'column'}} >
    <Link variant='caption' sx={{color:'#9e9e9e',textAlign:'left',":hover":{color:'#9e9e9e'}}} href="#" underline="none">
Scannez le code ou clique..
</Link>


<Typography sx={{textAlign:'left',fontWeight:'700'}}  variant='body1' gutterBottom>
 DA 759
</Typography>

 <Typography sx={{textAlign:'left',color:'#9e9e9e'}}  variant='caption' gutterBottom>
  2809 commandes
</Typography>

    </Box>
  </Box>)}

  <IconButton onClick={handleClickLeft}  sx={{position:'absolute',width:'40px',top:'40%',left:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
        <ChevronLeftIcon sx={{fontSize:'40px',fontWeight:'800',color:'#f5f5f5'}} />
        </IconButton>
          <IconButton onClick={handleClickRight} sx={{position:'absolute',top:'40%',width:'40px',right:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
        <ChevronRightIcon sx={{fontSize:'40px',fontWeight:'800',color:'#f5f5f5'}} />
        </IconButton> 
                            </Box>
                          
                          </Box>


           </Box>
        </Box>
    </div>
  )
}
