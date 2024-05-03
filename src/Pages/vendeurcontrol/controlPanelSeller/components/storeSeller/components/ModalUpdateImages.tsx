import {useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles'; 
import {  Divider, LinearProgress } from '@mui/material';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import { CloseOutlined } from '@mui/icons-material';
import Cookies from 'js-cookie';
import axios from 'axios';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'30%',
    height:'80%',
    bgcolor: 'background.paper',
    borderRadius: '8px',
    p:2,
    display:'flex',
    flexDirection:'column',
    alignItems:'center'
  };

export const ModalUpdateImages = ({openModal,setOpenModal,setAnchorEl,setAnchorEl1,state,setStore}:any) => {


    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
      });
    
      const [uploadProgress, setUploadProgress] = useState(0);
      const [hiden,setHiden]=useState(false)
      const [image1, setImage1] = useState<string | null | any >(null);
      const [descriptionImage1,setDescriptionImage1]=useState<File | null>()

      const handleChangeImageDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDescriptionImage1(e.target.files?.[0] || null )
    
        
    
       const file =e.target.files?.[0] 
    
        if (file) {
          const reader = new FileReader();
    
          reader.onload = (e) => {
            if (e.target && e.target.result) {
              const progress = Math.round((e.loaded / e.total ) * 100);
              setUploadProgress(progress)
              setImage1(e.target.result as string);
              setHiden(true)
             
            }
          };
    
        
          reader.readAsDataURL( file);
        }
    
      };

    const handleClose = () => {
        setOpenModal(false)
        if (state=="update1") {
            setAnchorEl(null)    
        }  if (state=="update2") {
            setAnchorEl1(null)
        }
        
    
    };

    const token = Cookies.get('token');
    const [loading,setLoading]=useState(false)
    const [message,setMessage]=useState('')
    const [isError,setIsError]=useState(Boolean)
    const [opens, setOpens] = useState(false);

    const handleCloses = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
    
        setOpens(false);
      };


    const updateImageStoreSeller= async ()=>{

        try{
          setLoading(true)
          const formData : any = new FormData();
          formData.append('file', descriptionImage1);
          formData.append('state', state);
           
          
            axios.patch(`http://localhost:8000/updateImageSellerStore`,formData, {
              withCredentials:true,
              headers:{authorization:`${token}`},
            }) 
            .then(res=>{
              if (res.data.success == false) {
                setMessage(res.data.message)
                setIsError(true)
                setOpens(true)
              }if (res.data.success == true) {
                setIsError(false)
                setMessage(res.data.message)
                setOpens(true)
                setStore(res.data.storeSeller)
                setLoading(false)   
                setHiden(false)
                setUploadProgress(0)
              }
            } )
            .catch(err=>console.log(err)) 
            
               
          }catch(error){
            console.log(error)
          }
    
    
       }

     

  return (
    <div> 
    <Modal
    open={openModal}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>

    <Snackbar open={opens} autoHideDuration={3000} onClose={handleCloses}>
        <Alert
          onClose={handleCloses}
          severity={ isError == true ? "error" : 'success' }
          variant="filled"
          sx={{ width: '100%' }}
        >
          {message}
        </Alert>
      </Snackbar>

    <Typography variant='body2' sx={{mt:1,fontWeight:'700',fontFamily:'serif'}} >  
          Upload your image now 
        </Typography>

        <Divider sx={{width:'100%',my:1}} />
     <Box sx={{height:'90%',width:'100%',display:'flex',alignItems:'center',justifyContent:'center'}} >
      
        { hiden == false ?
        <Box sx={{height:'100%',width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
             <InsertPhotoIcon sx={{fontSize:'40px'}} />
       <Typography variant='body2' sx={{my:1,color:'#9e9e9e'}} >  
       Faites glisser les photos et les vidéos ici
        </Typography>
        <Button variant="outlined"  component='label' sx={{width:'220px',color:'white',bgcolor:'#1976d2',borderRadius:'6px',my:1,":hover":{color:'white',bgcolor:'#1976d2'}}} >
        Upload file
        <VisuallyHiddenInput id='description'  onChange={handleChangeImageDescription} type="file" />
        </Button>
        </Box>
         : "" }

        {uploadProgress !== 0 ? <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%',height:'100%',my:1,position:'relative'}} >
        <img src={image1} style={{height:'90%',width:'100%'}} />

         {uploadProgress == 100 ? 
         <Button onClick={updateImageStoreSeller} disabled={ !loading  ? false : true} variant='contained' color='primary'  sx={{color:'white',mt:2,textTransform:'lowercase',borderRadius:'12px' ,":hover":{color:'white'} }} >
         Update Image
       </Button>
         : "" }
         <IconButton onClick={()=>(setHiden(false),setUploadProgress(0))} sx={{":hover":{bgcolor:'#bbbbbb'},bgcolor:'#bbbbbb',position:'absolute',top:'2%',right:'3%'}} >
          <CloseOutlined sx={{fontSize:'14px'}} />
         </IconButton>
         </Box> : "" }

     </Box>
        
           
   
      <IconButton onClick={handleClose} sx={{bgcolor:'#424242',":hover":{bgcolor:'#424242'},position:'absolute',top:'-2%',right:'-1%'}} > <CloseIcon sx={{fontSize:'15px',color:'white'}} /> </IconButton>
    </Box>
  </Modal>
  </div>
  )
}
