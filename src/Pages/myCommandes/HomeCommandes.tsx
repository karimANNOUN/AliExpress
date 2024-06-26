import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import { CompteListe } from './components/CompteListe';
import Typography from '@mui/material/Typography';
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
import { ProductAimiez } from './components/ProductAimiez';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { setUserInfo } from '../../storeRedux/CartSlice';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export const HomeCommandes = () => {

  const [opens, setOpens] = useState(false);
  
  const handleCloses = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpens(false);
  };


  const [loading,setLoading]=useState(false)
  const [message,setMessage]=useState('')

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const token = Cookies.get('token');

  

  useEffect(()=>{
    const getUserInfo = async()=>{
        try{
            const response = await fetch(`http://localhost:8000/userInfo`,{
              method:'GET',
              credentials:"include", 
              headers: {
                'Content-Type': 'application/json',
                 authorization:`${token}`
              }
            });
            const data = await response.json()
          
           if (!data) {
              setLoading(true)
            }if (data.success == true) {
              dispatch(setUserInfo(data.userInfo))
              setLoading(false) 
            }if (data.success == false) {
              setMessage(data.message)
              setOpens(true)
            }  
          } catch (error) {
            console.error('operation failed.');
          }
    }
    getUserInfo()

},[])

const userInfo=useSelector((state:any)=>state.app.userInfo)



  return (
    <>
    { loading == true ? "loading" :
       <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >

       <Snackbar open={opens} autoHideDuration={3000} onClose={handleCloses}>
               <Alert
                 onClose={handleCloses}
                 severity="error"
                 variant="filled"
                 sx={{ width: '100%' }}
               >
                 {message}
               </Alert>
             </Snackbar>
       
               <Box sx={{width:'70%',display:'flex',justifyContent:'space-between'}} >
                 <CompteListe/>
                  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'73%'}} >
                              <Box sx={{width:'100%',bgcolor:'Window',display:'flex',flexDirection:'column',my:2,p:1}} >
                                 <Box  sx={{display:'flex',alignItems:'center',mb:2}} >
                                 <Avatar
               alt="Remy Sharp"
               src={ userInfo.imageProfle == null ? "/static/images/avatar/1.jpg" : userInfo.imageProfle }
               sx={{ width: 56, height: 56 ,mr:2 }}
             />
                                 <Typography sx={{fontWeight:'600'}}  variant='h6' gutterBottom>
                                 {userInfo.name}
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
       
       
       
                                 <ProductAimiez/>
       
       
                  </Box>
               </Box>
           </div>
    }
    </>
    
  )
}
