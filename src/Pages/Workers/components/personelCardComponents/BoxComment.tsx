import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import IconButton from '@mui/material/IconButton';
import Cookies from 'js-cookie';
import { setProduct } from '../../../../storeRedux/CartSlice';
import { useDispatch, useSelector } from 'react-redux';




export const BoxComment = ({com,product}:any) => {

    const [show,setShow]=useState(true)
    const [index,setIndex]=useState(0)
    const [loading,setLoading]=useState(false)
    const [checked,setChecked]=useState(true)

    const user =useSelector((state:any)=>state.app.user)

     const token = Cookies.get('token');
     const dispatch=useDispatch()



    const postLikes = async()=>{
      try{
        setLoading(true)
      const response=await fetch(`http://localhost:8000/postLikes`, {
       method: 'POST',
       credentials: 'include', 
       headers: {
         'Content-Type': 'application/json',
          authorization:`${token}` 
       },
       body:JSON.stringify({com})
     })
     const data = await response.json()

   if (data.success == true) {
      dispatch(setProduct(data.product)) 
      setLoading(false)
    }
} catch (error) {
      console.error('operation failed.');
    }
}



const deleteLikes = async()=>{
      try{
        setLoading(true)
      const response=await fetch(`http://localhost:8000/deleteLikes`, {
       method: 'DELETE',
       credentials: 'include', 
       headers: {
         'Content-Type': 'application/json',
          authorization:`${token}` 
       },
       body:JSON.stringify({com})
     })
     const data = await response.json()
  
   if (data.success == true) {
      dispatch(setProduct(data.product)) 
      setLoading(false)
    }
} catch (error) {
      console.error('operation failed.');
    }
}


useEffect(()=>{

  const findLikes = com.likes.find((comment:any)=> comment.userId === user.id )

  if (findLikes) {
    setChecked(true)
}else{
    setChecked(false)
}

},[product])

if(loading == true) return <div>...loading</div>


  return (
    <Box  sx={{display:'flex',flexDirection:'column'}} >
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
      {com.comment }
     </Typography>
     <Box sx={{display:'flex',alignItems:'center'}} >
       { com.images.map((rev:any)=> <img key={rev.id} onClick={()=>(setIndex(rev.id),setShow(false))} src={rev.imageUrl}  style={{width:'80px',height:'80px',borderRadius:'8px',marginRight:5}} />)}
     </Box>

     { !show ? <Box sx={{width:'350px',height:'400px',my:1,position:'relative'}} >
      <img src={com.images.filter((rev:any)=> rev.id == index  )[0].imageUrl} style={{width:'100%',height:'100%',borderRadius:'12px'}} />
      <IconButton onClick={()=>{setShow(true)  }} sx={{position:'absolute',bgcolor:'#e0e0e0',":hover":{bgcolor:'#e0e0e0'},top:'5%',right:'5%'}} ><CloseOutlinedIcon sx={{fontSize:'20px',color:'#9e9e9e'}} /></IconButton>
       </Box> : "" }
       { checked ==true ? <Button onClick={deleteLikes} sx={{width:'150px',color:'#2196f3',my:1,borderRadius:'12px',":hover":{color:'#2196f3'}}} variant='text'> <ThumbUpOutlinedIcon sx={{fontSize:'18px',color:'#2196f3',mr:1}} /> Serviable({ !com.likes ? "0" : com.likes.length})</Button>:
       <Button onClick={postLikes} sx={{width:'150px',color:'black',my:1,borderRadius:'12px',":hover":{color:'black'}}} variant='text'> <ThumbUpOutlinedIcon sx={{fontSize:'18px',mr:1}} /> Serviable({!com.likes ? "0" : com.likes.length})</Button>
     }
    
    </Box>
  )
}
