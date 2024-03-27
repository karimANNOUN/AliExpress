import {useEffect, useState} from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { CompteListe } from '../components/CompteListe';
import { AddLocations } from './components/AddLocations';
import { ProductAimiez } from '../components/ProductAimiez';
import { UpdateLocation } from './components/UpdateLocation';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUserInfo } from '../../../storeRedux/CartSlice';

export const AdressLivraison = () => {

   

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


  const handelDeleteLocationUser = async()=>{
    try{
        const response = await fetch(`http://localhost:8000/deleteuserInfo`,{
          method:'DELETE',
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


     
      const userInfo=useSelector((state:any)=>state.app.userInfo)

    

      

    const [showLocation,setShowLocation]=useState(false)

    const [active,setActive]=useState(false)

  return (
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
       <Box sx={{display:'flex',flexDirection:'column',width:'73%'}} >
                   <Box sx={{width:'100%',display:'flex',alignItems:'center',my:2,p:1}} >
                   <Typography sx={{color:'black',textAlign:'left'}}  variant='h6' gutterBottom>
                   Adresse de livraison
                        </Typography>

                        
 
                    

                   </Box>


               { !(showLocation || active ) && <Box sx={{display:'flex',flexDirection:'column'}} >
               { userInfo.locationUser !== null ? "" : <Button onClick={()=>setActive(true)} variant='contained' sx={{color:'white',mb:2,width:'300px',bgcolor:'#f4511e',borderRadius:'12px' ,":hover":{color:'white',bgcolor:'#f4511e'} }} >
        Ajouter une nouvelle adress
    </Button>}
     
              { userInfo.locationUser == null ? "" : <Box sx={{display:'flex',mb:2,flexDirection:'column',width:'400px',p:2,border:'2px solid #ff5722',borderRadius:'8px',bgcolor:'#fbe9e7'}} >
              <Typography sx={{color:'#f4511e',textAlign:'right'}}  variant='caption' gutterBottom>
                   Adresse par default
                        </Typography> 

                        <Typography sx={{color:'black',display:'flex',alignItems:'center',fontWeight:'700',textAlign:'left'}}  variant='body2' gutterBottom>
                            <Person2OutlinedIcon/>  {!userInfo ? "" : userInfo.name},+{!userInfo ? "" : userInfo.locationUser.phoneNumber}
                        </Typography> 

                        <Typography sx={{color:'black',display:'flex',alignItems:'center',textAlign:'left'}}  variant='body2' gutterBottom>
                            <LocationOnIcon/>  {!userInfo ? "" : userInfo.locationUser.rueAdress}
                        </Typography> 

                        <Typography sx={{color:'black',ml:1,display:'flex',alignItems:'center',textAlign:'left',mb:2}}  variant='body2' gutterBottom>
                        {!userInfo ? "" : userInfo.locationUser.commune}, {!userInfo ? "" : userInfo.state}, {!userInfo ? "" : userInfo.locationUser.country}, {!userInfo ? "" : userInfo.locationUser.postalCode}
                        </Typography> 
                    
                    <Box sx={{display:'flex',alignItems:'center'}} >
                    <Button onClick={()=>setShowLocation(true)} variant='text' sx={{color:'#2196f3' ,":hover":{color:'#2196f3'} }} >
       Modifier
    </Button>
    <Button onClick={handelDeleteLocationUser} variant='text' sx={{color:'#2196f3' ,":hover":{color:'#2196f3'} }} >
      Suprimer
    </Button>
                    </Box>

              </Box>}

               </Box>}

                { active && <AddLocations setActive={setActive} />}

                { showLocation && <UpdateLocation setShowLocation={setShowLocation} />}




                      

                      <ProductAimiez/>


       </Box>
    </Box>
</div>
  )
}
