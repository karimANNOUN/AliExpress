import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Cookies from 'js-cookie';
import { IconButton ,LinearProgress } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import axios from 'axios';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { styled } from '@mui/material/styles'; 





const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '8px',
    p: 2,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
  };

export const UpdateImageComment = ({openImage,setOpenImage,setMessage,setOpens,img,setIsError,setCommandes}:any) => {


    


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


    const handleClose = () => setOpenImage(false);
    const [loading,setLoading]=useState(false)
    const [image,setImage]=useState<File | null>()
    const [uploadProgress, setUploadProgress] = useState(0);
    const [images, setImages] = useState<string | null | any >(null);
    const [hiden,setHiden]=useState(false)

    const Token = Cookies.get('token');




    const handleUpdateImageReview = (e: React.ChangeEvent<HTMLInputElement>) => {
        setImage(e.target.files?.[0] || null )
       const file =e.target.files?.[0] 
    
        if (file) {
          const reader = new FileReader();
    
          reader.onload = (e) => {
            if (e.target && e.target.result) {
              const progress = Math.round((e.loaded / e.total ) * 100);
              setUploadProgress(progress)
              setImages(e.target.result as string);
              setHiden(true)
             
            }
          };
    
          reader.readAsDataURL( file);
        }
    
      };



    const updateReviewImages= async ()=>{

        try{
          const formData : any = new FormData();
          formData.append('file', image);
          formData.append('viewImage', JSON.stringify(img));
    
            axios.patch(`http://localhost:8000/updateImageReview`,formData, {
              withCredentials:true,
              headers:{authorization:`${Token}`},
            }) 
            .then(res=>{
              if (!res.data) {
                setLoading(true)
              }
              if (res.data.success == false) {
                setMessage(res.data.message)
                setIsError(true)
                setOpens(true)
              }if (res.data.success == true) {
                setIsError(false)
                setMessage(res.data.message)
                setOpens(true)
                setCommandes(res.data.getCommandeReviews)
                setLoading(false)
                handleClose()
              }
            } )
            .catch(err=>console.log(err)) 
             
               
          }catch(error){
            console.log(error)
          }
    
    
       }


  return (
    <Modal
    open={openImage}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" sx={{fontWeight:'800'}} variant='body2' component="h2">
        Update Image
      </Typography>
      
      { hiden == false ?  <Button variant="outlined"  component='label' sx={{width:'120px',height:'140px',color:'black',bgcolor:'white',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',borderRadius:'6px',border:'1px dashed #bdbdbd',my:1,":hover":{border:'1px dashed #bdbdbd',color:'white'}}} >
          <InsertPhotoOutlinedIcon/>
          <Typography variant='caption' sx={{mt:1}} >  
          Upload
        </Typography>
        <VisuallyHiddenInput  onChange={handleUpdateImageReview} type="file" name='colorImage1' />
        </Button> : "" }
        {uploadProgress !== 0 ?  <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'120px',position:'relative'}} >
        <img src={images} style={{height:'140px',width:'100%'}} />
         <LinearProgress sx={{my:1,width:'100%'}} variant="determinate" value={uploadProgress} />
         <IconButton onClick={()=>(setHiden(false),setUploadProgress(0))} sx={{":hover":{bgcolor:'#e0e0e0'},position:'absolute',top:'2%',right:'3%'}} >
          <CloseOutlined sx={{fontSize:'8px'}} />
         </IconButton>
         </Box> : "" }

{ loading == true ? 
 <Button onClick={updateReviewImages} disabled sx={{color:'white',width:'47%',textTransform:'lowercase',borderRadius:'12px' ,":hover":{color:'white'}}}  variant="contained">Update</Button>
:
<Button onClick={updateReviewImages} sx={{color:'white',width:'47%',textTransform:'lowercase',borderRadius:'12px' ,":hover":{color:'white'}}}  variant="contained">Update</Button>

}

<IconButton onClick={handleClose} sx={{position:'absolute',":hover":{bgcolor:'#eeeeee'}, top:'2%',right:'1%'}} >
      <CloseOutlined sx={{fontSize:'15px'}} /> 
   </IconButton>

    </Box>
  </Modal>
  )
}
