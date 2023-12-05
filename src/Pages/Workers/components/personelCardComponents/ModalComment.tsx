import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
export const ModalComment = ({open,setOpen,reviewsTypes,comments,show,setShow,index,setIndex}:any) => {

    const handleClose = () => setOpen(false);

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1200,
        height:800,
        bgcolor: 'background.paper',
        border: '2px solid #eeeeee',
        boxShadow: 24,
        p: 4,
        overflow:'auto',
        borderRadius:'12px'
      };


      const [active,setActive]=useState(0)

  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <IconButton onClick={handleClose} sx={{position:'absolute',bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'},top:'2%',right:'3%'}} ><CloseOutlinedIcon sx={{fontSize:'20px',color:'#9e9e9e'}} /></IconButton>
        <Box sx={{display:'flex',flexDirection:'column'}} >
         <Typography sx={{fontWeight:'800',textAlign:'left'}} variant="h6" gutterBottom>
         Customer Reviews (591)
      </Typography>
      <Box sx={{display:'flex',justifyContent:'space-between'}} >
       <Box sx={{display:'flex',flexDirection:'column'}} >
       <Typography sx={{fontWeight:'800',textAlign:'left'}} variant="h2" gutterBottom>
       4.3
      </Typography>

      <Rating sx={{color:'black',mb:1}} name="half-rating-read" defaultValue={4.3} precision={0.1} size="large" readOnly />
      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      Tous les avis proviennent d'acheteurs vérifiés
      </Typography>
       </Box>
       <Box sx={{display:'flex',flexDirection:'column'}} >

        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
        5 Étoiles
      </Typography>
      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      385
      </Typography>
        </Box>

        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
        4 Étoiles
      </Typography>
      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      385
      </Typography>
        </Box>

        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
        3 Étoiles
      </Typography>
      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      385
      </Typography>
        </Box>

        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
        2 Étoiles
      </Typography>
      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      385
      </Typography>
        </Box>

        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
        1 Étoiles
      </Typography>
      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      385
      </Typography>
        </Box>

       </Box>
      </Box>
      <Box sx={{display:'flex',flexWrap:'wrap'}} >
      { reviewsTypes.map((review:any)=> <div key={review.id} >

        { review.id - 1 === active ?
     <Button onClick={()=>setActive(review.id - 1)}  sx={{bgcolor:'#ffab91',mx:1,my:1,color:'#bf360c',borderRadius:'8px',borderColor:'#bf360c',":hover":{color:'#bf360c',borderColor:'#bf360c',bgcolor:'#ffab91'}}} variant="outlined">{review.type}(612)</Button> : 
     <Button onClick={()=>setActive(review.id - 1)}  sx={{bgcolor:'#e0e0e0',mx:1,my:1,color:'black',borderRadius:'8px',borderColor:'#fafafa',":hover":{color:'black',borderColor:'#fafafa',bgcolor:'#e0e0e0'}}} variant="outlined">{review.type}(612)</Button>
     }
        
        </div>)}
      </Box>
 
       <Box sx={{display:'flex',flexDirection:'column',my:2}} >
  
    {comments.map((com:any)=> <Box sx={{display:'flex',flexDirection:'column'}} >
       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
       <Rating sx={{color:'black',mb:1}} name="half-rating-read" defaultValue={4.3} precision={0.1} size='medium' readOnly />
       <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
       27 Nov 2023
      </Typography>
       </Box> 
       <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
       <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
       Color:black 02 Shoe Size:45
      </Typography>
       <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
       J***z
      </Typography>
       </Box> 
       <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
       Ils ont l'air bien d'avoir une telle sa durabilité et ses rêves parce que je le vois frajil et d'usure rapide...
      </Typography>
      <Box sx={{display:'flex',alignItems:'center'}} >
        { com.puctures.map((rev:any)=> <img key={rev.id} onClick={()=>(setShow(false),setIndex(rev.id - 1))} src={rev.img}  style={{width:'80px',height:'80px',borderRadius:'8px',marginRight:5}} />)}
      </Box>

      { !show ? <Box sx={{width:'350px',height:'400px',my:1,position:'relative'}} >
       <img src={com.puctures[index].img} style={{width:'100%',height:'100%',borderRadius:'12px'}} />
       <IconButton onClick={()=>{setShow(true)  }} sx={{position:'absolute',bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'},top:'5%',right:'5%'}} ><CloseOutlinedIcon sx={{fontSize:'20px',color:'#9e9e9e'}} /></IconButton>
        </Box> : "" }

      <Button sx={{width:'150px',color:'black',my:1,borderRadius:'12px',":hover":{color:'black'}}} variant='text'> <ThumbUpOutlinedIcon sx={{fontSize:'18px',mr:1}} /> Serviable(0)</Button>
     </Box>
     )}
     

     </Box>
</Box>
        </Box>
      </Modal>
    </div>
  )
}
