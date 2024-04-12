import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import { motion  } from "framer-motion"
import { LinearProgress } from '@mui/material';
import { BoxCommentModal } from './BoxCommentModal';

export const ModalComment = ({open,setOpen,reviewsTypes,comments,show,setShow,index,setIndex,product,totalRating}:any) => {

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


      const [activeReview,setActiveReview]=useState(0)

      const filterReviews  = (revs:any)=>{
        if (activeReview == 0 ) {
          return revs
         }if (activeReview == 1 ) {
         return revs.rating == 5
         }if (activeReview == 2 ) {
          return revs.rating == 4
         }if (activeReview == 3) {
          return revs.rating == 3
         }if (activeReview == 4 ) {
          return revs.rating == 2
         }if (activeReview == 5 ) {
          return revs.rating == 1
         }
     }

  

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
        <motion.div 
         style={{display:'flex',flexDirection:'column'}}
         initial={{y:-200,opacity:0,scale:0.5}}
         animate={{y:0,opacity:1,scale:1}}
         transition={{duration:1,ease:'easeInOut',stiffness:1000,damping:10}}
         >
         <Typography sx={{fontWeight:'800',textAlign:'left'}} variant="h6" gutterBottom>
         Customer Reviews ({product.review.length})
      </Typography>
      <Box sx={{display:'flex',justifyContent:'space-between'}} >
       <Box sx={{display:'flex',flexDirection:'column'}} >
       <Typography sx={{fontWeight:'800',textAlign:'left'}} variant="h2" gutterBottom>
       { !product.review.length ? "0" : totalRating/product.review.length} 
      </Typography>

      <Rating name="read-only" value={totalRating/product.review.length} readOnly size="large" sx={{color:'black',mb:1}} />
      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      Tous les avis proviennent d'acheteurs vérifiés
      </Typography>
       </Box>
       <Box sx={{display:'flex',flexDirection:'column'}} >

        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
        5 Étoiles
      </Typography>
      <LinearProgress sx={{width:'300px',height:'10px',borderRadius:'8px',mx:1,bgcolor:'#eeeeee'}} color='success' variant="determinate" value={product.review.filter((rev:any)=>(rev.rating == '5')).length*100/product.review.length} />
      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      {product.review.filter((rev:any)=>rev.rating == '5').length}
      </Typography>
        </Box>

        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
        4 Étoiles
      </Typography>
      <LinearProgress sx={{width:'300px',height:'10px',borderRadius:'8px',mx:1,bgcolor:'#eeeeee'}} color='success' variant="determinate" value={product.review.filter((rev:any)=>(rev.rating == '4')).length*100/product.review.length} />
      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      {product.review.filter((rev:any)=>rev.rating == '4').length}
      </Typography>
        </Box>

        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
        3 Étoiles
      </Typography>
      <LinearProgress sx={{width:'300px',height:'10px',borderRadius:'8px',mx:1,bgcolor:'#eeeeee'}} color='success' variant="determinate" value={product.review.filter((rev:any)=>(rev.rating == '3')).length*100/product.review.length} />

      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      {product.review.filter((rev:any)=>rev.rating == '3').length}
      </Typography>
        </Box>

        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
        2 Étoiles
      </Typography>
      <LinearProgress sx={{width:'300px',height:'10px',borderRadius:'8px',mx:1,bgcolor:'#eeeeee'}} color='success' variant="determinate" value={product.review.filter((rev:any)=>(rev.rating == '2')).length*100/product.review.length} />

      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      {product.review.filter((rev:any)=>rev.rating == '2').length}
      </Typography>
        </Box>

        <Box sx={{display:'flex',alignItems:'center'}} >
        <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
        1 Étoiles
      </Typography>
      <LinearProgress sx={{width:'300px',height:'10px',borderRadius:'8px',mx:1,bgcolor:'#eeeeee'}} color='success' variant="determinate" value={product.review.filter((rev:any)=>(rev.rating == '1')).length*100/product.review.length} />

      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      {product.review.filter((rev:any)=>rev.rating == '1').length}
      </Typography>
        </Box>

       </Box>
      </Box>
      <Box sx={{display:'flex',flexWrap:'wrap'}} >
      { reviewsTypes.map((review:any)=> <div key={review.id} >

        { review.id - 1 === activeReview ?
     <Button onClick={()=>setActiveReview(review.id - 1)}  sx={{bgcolor:'#ffab91',mx:1,my:1,color:'#bf360c',borderRadius:'8px',borderColor:'#bf360c',":hover":{color:'#bf360c',borderColor:'#bf360c',bgcolor:'#ffab91'}}} variant="outlined">{review.type}({review.review})</Button> : 
     <Button onClick={()=>setActiveReview(review.id - 1)}  sx={{bgcolor:'#e0e0e0',mx:1,my:1,color:'black',borderRadius:'8px',borderColor:'#fafafa',":hover":{color:'black',borderColor:'#fafafa',bgcolor:'#e0e0e0'}}} variant="outlined">{review.type}({review.review})</Button>
     }
        
        </div>)}
      </Box>
 
       <Box sx={{display:'flex',flexDirection:'column',my:2}} >
  
    {!product.review.length ? "" : ( product.review.filter(filterReviews).length == 0 ? 
   <Typography sx={{textAlign:'left',color:'#9e9e9e',mb:1}} variant='body1' gutterBottom>
   Nothing review(s) in this rating 
  </Typography>
   :product.review.filter(filterReviews).map((com:any)=> <BoxCommentModal key={com.id} com={com} product={product} /> ))}
     

     </Box>
</motion.div>
        </Box>
      </Modal>
    </div>
  )
}
