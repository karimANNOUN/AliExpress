import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Cookies from 'js-cookie';
import { IconButton } from '@mui/material';
import { CloseOutlined } from '@mui/icons-material';
import Rating from '@mui/material/Rating';



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

export const UpdateRating = ({openRating,setOpenRating,setMessage,setOpens,review,setIsError,setCommandes}:any) => {


    const handleClose = () => setOpenRating(false);
    const [rating,setRating]=useState<number | null>(Number);
    const [loading,setLoading]=useState(false)

    const token = Cookies.get('token');


    const updateRating = async()=>{
        try{
            const response = await fetch(`http://localhost:8000/UpdateRatingReview`,{
              method:'PATCH',
              credentials:"include", 
              headers: {
                'Content-Type': 'application/json',
                 authorization:`${token}`
              },
              body:JSON.stringify({review,rating})
            });
            const data = await response.json()
    
    
            
          
           if (!data) {
              setLoading(true)
            }if (data.success == true) {
              setLoading(false) 
              setMessage(data.message)
              setIsError(false)
              setOpenRating(false)
              setOpens(true)
              setCommandes(data.getCommandeReviews)
            }if (data.success == false) {
              setMessage(data.message)
              setIsError(true)
              setOpenRating(false)
              setOpens(true)
            }  
          } catch (error) {
            console.error('operation failed.');
          }
    }



  return (
    <Modal
    open={openRating}
    onClose={handleClose}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
  >
    <Box sx={style}>
      <Typography id="modal-modal-title" sx={{fontWeight:'800'}} variant='body2' component="h2">
        Update New Rating
      </Typography>
      <Rating
      sx={{my:2}}
  name="simple-controlled"
  onChange={(event, newValue) => {
    setRating(newValue);
  }}
/>

{ loading == true ? 
 <Button onClick={updateRating} disabled sx={{color:'white',width:'47%',textTransform:'lowercase',borderRadius:'12px' ,":hover":{color:'white'}}}  variant="contained">Update</Button>
:
<Button onClick={updateRating} sx={{color:'white',width:'47%',textTransform:'lowercase',borderRadius:'12px' ,":hover":{color:'white'}}}  variant="contained">Update</Button>

}

<IconButton onClick={handleClose} sx={{position:'absolute',":hover":{bgcolor:'#eeeeee'}, top:'2%',right:'1%'}} >
      <CloseOutlined sx={{fontSize:'15px'}} /> 
   </IconButton>

    </Box>
  </Modal>
  )
}
