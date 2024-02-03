import {useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ModalProfilUpdate } from './ModalProfilUpdate';
import { useDispatch, useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import { setUserInfo } from '../../../../storeRedux/CartSlice';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';


export const ModifierProfil = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);

    const [opens, setOpens] = useState(false);

  
  
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpens(false);
    };

    const token = Cookies.get('token');

    const [loading,setLoading]=useState(false)

    const [message,setMessage]=useState('')

    const dispatch=useDispatch()

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
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'#eeeeee'}} >
        <Snackbar open={opens} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="error"
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>



        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'70%',p:2}} >
            <Box sx={{display:'flex',alignItems:'center',width:'100%',borderBottom:'2px solid #e0e0e0',p:1}} >
            <Typography  sx={{textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
            Rédiger le profil de membre
        </Typography>
            </Box>
            <Box sx={{width:'100%'}} >
             { loading == true ? 
             <Stack spacing={1}  >
            
             <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
       
           
             <Skeleton variant="rectangular" width="80%" height={60} />
             <Skeleton variant="rounded" width="80%" height={60} />
           </Stack> :

<Box sx={{display:'flex',border:'1px solid #2196f3',flexDirection:'column',alignItems:'center',borderRadius:'8px',p:1,my:2,width:'80%'}} >
               
<Typography  sx={{}}  variant='subtitle2' gutterBottom>
<b>Nom:</b>	{ !userInfo ? "" : userInfo.name}
</Typography>
<Typography  sx={{}}  variant='subtitle2' gutterBottom>
<b>E-Mail:</b>	{ !userInfo ? "" :  userInfo.email}
</Typography>
<Typography  sx={{}}  variant='subtitle2' gutterBottom>
<b>ID de membre:</b>	{ !userInfo ? "" :  userInfo.id}
</Typography>
<Typography  sx={{}}  variant='subtitle2' gutterBottom>
<b>Adresse de contact:</b> {!userInfo ? "" : ( !userInfo.locationUser.length ? "no Location" : userInfo.locationUser[0].rueAdress) }
</Typography>
<Typography  sx={{}}  variant='subtitle2' gutterBottom>
<b>Wilaya:</b> {!userInfo ? ""  : userInfo.state }
</Typography>
<Typography  sx={{}}  variant='subtitle2' gutterBottom>
<b>Country:</b> {!userInfo ? "" : ( !userInfo.locationUser.length ? "no Country" : userInfo.locationUser[0].country) }
</Typography>
<Typography  sx={{}}  variant='subtitle2' gutterBottom>
<b>Code postal:</b>	{!userInfo ? "" : ( !userInfo.locationUser.length ? "no Postal Code" : userInfo.locationUser[0].postalCode) }
</Typography>
<Typography  sx={{}}  variant='subtitle2' gutterBottom>
<b>Téléphone:</b> {!userInfo ? "" : ( !userInfo.locationUser.length ? "no phone number" : userInfo.locationUser[0].phoneNumber) }
</Typography>
<Box sx={{width:'100%',bgcolor:'Window',height:'60px',display:'flex',alignItems:'center',justifyContent:'center'}} >
<Button onClick={()=>handleOpen()} variant='contained' sx={{color:'black',background:'linear-gradient(to right, #ffd54f 0%, #ffb300 40% , #ff6f00 70%)',textTransform:'lowercase', borderRadius: '8px' ,":hover":{color:'black',background:'linear-gradient(to right, #ffd54f 0%, #ffb300 40% , #ff6f00 70%)'} }} >
           Modifier
          </Button> 

</Box>
 <ModalProfilUpdate open={open} setOpen={setOpen} />
</Box>
                     
             }
            </Box>
         

        </Box>
    </div>
  )
}
