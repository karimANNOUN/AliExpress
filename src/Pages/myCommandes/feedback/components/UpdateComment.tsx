import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Cookies from 'js-cookie';
import { IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';




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

export const UpdateComment = ({OpenComment,setOpenComment,setMessage,setOpens,review,setIsError,setCommandes}:any) => {

    const handleClose = () => setOpenComment(false);
    const [comment,setComment]=useState('');
    const [loading,setLoading]=useState(false)

    const token = Cookies.get('token');


    const updateCommentReview = async()=>{
        try{
          setLoading(true)
            const response = await fetch(`http://localhost:8000/UpdateCommentReview`,{
              method:'PATCH',
              credentials:"include", 
              headers: {
                'Content-Type': 'application/json',
                 authorization:`${token}`
              },
              body:JSON.stringify({review,comment})
            });
            const data = await response.json()
    
    
            
          
           if (data.success == true) {
              setLoading(false) 
              setMessage(data.message)
              setIsError(false)
              setOpenComment(false)
              setOpens(true)
              setCommandes(data.getCommandeReviews)
            }if (data.success == false) {
              setMessage(data.message)
              setIsError(true)
              setOpenComment(false)
              setOpens(true)
            }  
          } catch (error) {
            console.error('operation failed.');
          }
    }


  return (
    <Modal
    open={OpenComment}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" sx={{fontWeight:'800'}} variant='body2' component="h2">
        Create New Comment
      </Typography>
      <TextField
                      id="commentReview"
                      sx={{width:'100%',my:2}}
                      label='Comment'
                      size="medium"
                      onChange={(e:any)=>setComment(e.target.value)}
                       />

{ loading == true ? 
 <Button onClick={updateCommentReview} disabled sx={{color:'white',width:'47%',textTransform:'lowercase',borderRadius:'12px' ,":hover":{color:'white'}}}  variant="contained">Update</Button>
:
<Button onClick={updateCommentReview} sx={{color:'white',width:'47%',textTransform:'lowercase',borderRadius:'12px' ,":hover":{color:'white'}}}  variant="contained">Update</Button>

}

<IconButton onClick={handleClose} sx={{position:'absolute',":hover":{bgcolor:'#eeeeee'}, top:'2%',right:'1%'}} >
      <CloseOutlined sx={{fontSize:'15px'}} /> 
   </IconButton>

    </Box>
  </Modal>
  )
}
