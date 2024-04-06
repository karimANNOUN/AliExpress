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

export const Reviews = ({totalQuantity,totalRating,product}:any) => {

    const [show,setShow]=useState(true)
    const [index,setIndex]=useState(0)
 
    const [activeReview,setActiveReview]=useState(0)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);


    const reviewsTypes=[
        {id:1,type:'tous',review:product.review.filter((rev:any)=> rev ).length},
        {id:2,type:'5 Étoiles',review:product.review.filter((rev:any)=>rev.rating == '5').length},
        {id:3,type:'4 Étoiles',review:product.review.filter((rev:any)=>rev.rating == '4').length},
        {id:4,type:'3 Étoiles',review:product.review.filter((rev:any)=>rev.rating == '3').length},
        {id:5,type:'2 Étoiles',review:product.review.filter((rev:any)=>rev.rating == '2').length},
        {id:6,type:'1 Étoiles',review:product.review.filter((rev:any)=>rev.rating == '1').length}]

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


  const filterReviews  = (rev:any)=>{
    if (activeReview == 0 ) {
     return product.review.filter((rev:any)=> rev ).length
    }if (activeReview == 1 ) {
    return product.review.filter((rev:any)=>rev.rating == '5').length
    }if (activeReview == 2 ) {
     return product.review.filter((rev:any)=>rev.rating == '4').length
    }if (activeReview == 3) {
     return product.review.filter((rev:any)=>rev.rating == '3').length
    }if (activeReview == 4 ) {
     return product.review.filter((rev:any)=>rev.rating == '2').length
    }if (activeReview == 5 ) {
     return product.review.filter((rev:any)=>rev.rating == '1').length
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
   :product.review.filter(filterReviews).slice(0, 3).map((com:any)=> <Box key={com.id} sx={{display:'flex',flexDirection:'column'}} >
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
      <Rating sx={{color:'black',mb:1}} name="read-only" value={parseInt(com.rating)} size='medium' readOnly />
      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      {com.createdAt}
     </Typography>
      </Box> 
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      Color:{com.colorProduct} {com.quantity} {product.title} {product.properties}:{com.propertyType}
     </Typography>
      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      {com.buyer.name.charAt(0) +'*'.repeat(com.buyer.name.length - 2)+com.buyer.name.charAt(com.buyer.name.length - 1) }
     </Typography>
      </Box> 
      <Typography sx={{textAlign:'left',color:'#9e9e9e'}} variant="subtitle1" gutterBottom>
      {com.comment}
     </Typography>
     <Box sx={{display:'flex',alignItems:'center'}} >
       { com.images.map((rev:any,index:any)=> <img key={index} onClick={()=>(setShow(false),setIndex(index))} src={rev.imageUrl}  style={{width:'80px',height:'80px',borderRadius:'8px',marginRight:5}} />)}
     </Box>

     { !show ? <Box sx={{width:'350px',height:'400px',my:1,position:'relative'}} >
      <img src={com.images[index].imageUrl} style={{width:'100%',height:'100%',borderRadius:'12px'}} />
      <IconButton onClick={()=>{setShow(true)  }} sx={{position:'absolute',bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'},top:'5%',right:'5%'}} ><CloseOutlinedIcon sx={{fontSize:'20px',color:'#9e9e9e'}} /></IconButton>
       </Box> : "" }

     <Button sx={{width:'150px',color:'black',my:1,borderRadius:'12px',":hover":{color:'black'}}} variant='text'> <ThumbUpOutlinedIcon sx={{fontSize:'18px',mr:1}} /> Serviable(0)</Button>
    </Box>
   ) )}
    

    </Box>

    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Button onClick={handleOpen} sx={{bgcolor:'#e0e0e0',color:'black',fontWeight:'800',borderRadius:'12px',":hover":{bgcolor:'#9e9e9e'}}} variant="text">Voir Plus</Button>
    </Box>
     <ModalComment reviewsTypes={reviewsTypes} open={open} setOpen={setOpen} comments={comments} show={show} setShow={setShow} index={index} setIndex={setIndex} product={product} totalRating={totalRating} filterReviews={filterReviews} />
   </motion.div>
    }
    </>
   
  )
}
