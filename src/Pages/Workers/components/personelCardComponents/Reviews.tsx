import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';
import { ModalComment } from './ModalComment';
export const Reviews = () => {

    const [show,setShow]=useState(true)
    const [index,setIndex]=useState(0)
 
    const [activeReview,setActiveReview]=useState(0)

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);

    const reviewsTypes=[
        {id:1,type:'tous'},{id:2,type:'tous'},{id:3,type:'tous'},{id:4,type:'tous'},{id:5,type:'tous'},{id:6,type:'tous'},{id:7,type:'tous'},{id:8,type:'tous'},{id:9,type:'tous'},{id:10,type:'tous'},
        {id:11,type:'tous'},{id:12,type:'tous'},{id:13,type:'tous'},{id:14,type:'tous'},{id:15,type:'tous'},{id:16,type:'tous'},{id:17,type:'tous'},{id:18,type:'tous'}
    ]

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

  return (
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
      <Box sx={{display:'flex',width:'1400px',flexWrap:'wrap'}} >
      { reviewsTypes.map(review=> <div key={review.id} >
        { review.id - 1 === activeReview ?
     <Button onClick={()=>setActiveReview(review.id - 1)}  sx={{bgcolor:'#ffab91',mx:1,my:1,color:'#bf360c',borderRadius:'8px',borderColor:'#bf360c',":hover":{color:'#bf360c',borderColor:'#bf360c',bgcolor:'#ffab91'}}} variant="outlined">{review.type}(612)</Button> : 
     <Button onClick={()=>setActiveReview(review.id - 1)}  sx={{bgcolor:'#e0e0e0',mx:1,my:1,color:'black',borderRadius:'8px',borderColor:'#fafafa',":hover":{color:'black',borderColor:'#fafafa',bgcolor:'#e0e0e0'}}} variant="outlined">{review.type}(612)</Button>
     }
    </div>
    )}
      </Box>
 
       <Box sx={{display:'flex',flexDirection:'column',my:2}} >
  
    {comments.slice(0, 3).map(com=> <Box sx={{display:'flex',flexDirection:'column'}} >
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
        { com.puctures.map(rev=> <img key={rev.id} onClick={()=>(setShow(false),setIndex(rev.id - 1))} src={rev.img}  style={{width:'80px',height:'80px',borderRadius:'8px',marginRight:5}} />)}
      </Box>

      { !show ? <Box sx={{width:'350px',height:'400px',my:1,position:'relative'}} >
       <img src={com.puctures[index].img} style={{width:'100%',height:'100%',borderRadius:'12px'}} />
       <IconButton onClick={()=>{setShow(true)  }} sx={{position:'absolute',bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'},top:'5%',right:'5%'}} ><CloseOutlinedIcon sx={{fontSize:'20px',color:'#9e9e9e'}} /></IconButton>
        </Box> : "" }

      <Button sx={{width:'150px',color:'black',my:1,borderRadius:'12px',":hover":{color:'black'}}} variant='text'> <ThumbUpOutlinedIcon sx={{fontSize:'18px',mr:1}} /> Serviable(0)</Button>
     </Box>
     )}
     

     </Box>

     <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}} >
     <Button onClick={handleOpen} sx={{bgcolor:'#e0e0e0',color:'black',fontWeight:'800',borderRadius:'12px',":hover":{bgcolor:'#9e9e9e'}}} variant="text">Voir Plus</Button>
     </Box>
      <ModalComment reviewsTypes={reviewsTypes} open={open} setOpen={setOpen} comments={comments} show={show} setShow={setShow} index={index} setIndex={setIndex} />
    </Box>
  )
}
