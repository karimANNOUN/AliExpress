import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';
import { ModalComment } from './ModalComment';
import { motion ,useScroll ,useMotionValueEvent   } from "framer-motion"
import { LinearProgress } from '@mui/material';
import { BoxComment } from './BoxComment';

export const Reviews = ({totalRating,product}:any) => {

    const [show,setShow]=useState(true)
    const [index,setIndex]=useState(0)
 
    const [activeReview,setActiveReview]=useState(0)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);


    const reviewsTypes=[
        {id:1,type:'tous',review:product.review.filter((rev:any)=> rev ).length},
        {id:2,type:'5 Étoiles',review:product.review.filter((rev:any)=>rev.rating == 5).length},
        {id:3,type:'4 Étoiles',review:product.review.filter((rev:any)=>rev.rating == 4).length},
        {id:4,type:'3 Étoiles',review:product.review.filter((rev:any)=>rev.rating == 3).length},
        {id:5,type:'2 Étoiles',review:product.review.filter((rev:any)=>rev.rating == 2).length},
        {id:6,type:'1 Étoiles',review:product.review.filter((rev:any)=>rev.rating == 1).length}]

    const reviewImg=[
        {id:1,name:'kikou',img:'https://i.pinimg.com/236x/ad/d6/d9/add6d9b4ede173939312526804cb521b.jpg'},
        {id:2,name:'kikou',img:'https://i.pinimg.com/236x/e8/90/ad/e890adfd68dc3e0d71d4589c7dc042ae.jpg'},
        {id:3,name:'kikou',img:'https://i.pinimg.com/236x/16/82/1f/16821f9bc9c02957625c28fd57c57f02.jpg'},
        {id:4,name:'kikou',img:'https://i.pinimg.com/236x/59/1a/c4/591ac4932e4275be2811d726a590967d.jpg'},
        {id:5,name:'kikou',img:'https://i.pinimg.com/236x/7d/16/3f/7d163fe32dcbf4ed250205f2ee747fd5.jpg'}
    ]

    const comments=[
        {id:1,name:'mitou',puctures:reviewImg},{id:2,name:'mitou',puctures:reviewImg},{id:3,name:'mitou',puctures:reviewImg}
    ]

    const { scrollY } = useScroll()

    const [hidden,setHidden]=useState(false)
  
  useMotionValueEvent(scrollY, "change", (latest) => {
    if ( latest > 1450 ) {
      setHidden(true)
    }else{
      setHidden(false)
    }
  })


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
    <>
    {!product ? "loading" :
     <motion.div 
     style={{display:'flex',flexDirection:'column'}}
     variants={{
       visible:{ x:0 ,opacity:1 , scale:1 },
       hidden:{x:200,opacity:0.6,scale:0.5}
     }}
     animate={!hidden ? "hidden" : "visible" }
     transition={{ ease:'easeInOut' ,duration:1}}
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
     <Box sx={{display:'flex',width:'1400px',flexWrap:'wrap'}} >
     { reviewsTypes.map(review=> <div key={review.id} >
       { review.id - 1 === activeReview ?
    <Button onClick={()=>setActiveReview(review.id - 1)}  sx={{bgcolor:'#ffab91',mx:1,my:1,color:'#bf360c',borderRadius:'8px',borderColor:'#bf360c',":hover":{color:'#bf360c',borderColor:'#bf360c',bgcolor:'#ffab91'}}} variant="outlined">{review.type}({review.review})</Button> : 
    <Button onClick={()=>setActiveReview(review.id - 1)}  sx={{bgcolor:'#e0e0e0',mx:1,my:1,color:'black',borderRadius:'8px',borderColor:'#fafafa',":hover":{color:'black',borderColor:'#fafafa',bgcolor:'#e0e0e0'}}} variant="outlined">{review.type}({review.review})</Button>
    }
   </div>
   )}
     </Box>

      <Box sx={{display:'flex',flexDirection:'column',my:2}} >
 
   { !product.review.length ? "" : ( product.review.filter(filterReviews).length == 0 ? 
   <Typography sx={{textAlign:'left',color:'#9e9e9e',mb:1}} variant='body1' gutterBottom>
   Nothing review(s) in this rating 
  </Typography>
   :product.review.filter(filterReviews).slice(0, 3).map((com:any)=> <BoxComment key={com.id} com={com} product={product} /> ) )}
    

    </Box>

    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Button onClick={handleOpen} sx={{bgcolor:'#e0e0e0',color:'black',fontWeight:'800',borderRadius:'12px',":hover":{bgcolor:'#9e9e9e'}}} variant="text">Voir Plus</Button>
    </Box>
     <ModalComment reviewsTypes={reviewsTypes} open={open} setOpen={setOpen} comments={comments} show={show} setShow={setShow} index={index} setIndex={setIndex} product={product} totalRating={totalRating}  />
   </motion.div>
    }
    </>
   
  )
}
