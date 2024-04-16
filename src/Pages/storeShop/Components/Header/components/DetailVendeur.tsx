import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate, useParams } from 'react-router-dom';
import { LisenceCommercial } from '../../../LisenceCommercial';
import Cookies from 'js-cookie';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
export const DetailVendeur = ({setShow,reviews,seller,checked,setSeller}:any) => {


const navigate=useNavigate()
const params=useParams()
const token = Cookies.get('token');
const [loading,setLoading]=useState(false)


const postFollowers = async()=>{
  try{
    setLoading(true)
  const response=await fetch(`http://localhost:8000/createStoreFollower/${params.storeId}`, {
   method: 'POST',
   credentials: 'include', 
   headers: {
     'Content-Type': 'application/json',
      authorization:`${token}` 
   },
   body:JSON.stringify({})
 })
 const data = await response.json()


if (data.success == true) {
  setSeller(data.seller)
  setLoading(false)
}
} catch (error) {
  console.error('operation failed.');
}
}



const deleteFollowers = async()=>{
  try{
  setLoading(true)
  const response=await fetch(`http://localhost:8000/deleteStoreFollower/${params.storeId}`, {
   method: 'DELETE',
   credentials: 'include', 
   headers: {
     'Content-Type': 'application/json',
      authorization:`${token}` 
   },
   body:JSON.stringify({})
 })
 const data = await response.json()

if (data.success == true) {
  setSeller(data.seller)
  setLoading(false)
}
} catch (error) {
  console.error('operation failed.');
}
}


  

  return (
    <Paper onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} sx={{width:'670px',height:'250px',display:'flex',flexDirection:'column',position:'absolute',top:'170px',left:'390px',zIndex:1}} elevation={7} >

   <Box sx={{display:'flex',height:'75%',borderBottomStyle:'solid',borderBottomColor:'#eeeeee',width:'100%'}} >
      <Box sx={{width:'40%',height:'100%',borderRightStyle:'solid',borderRightColor:'#eeeeee',display:'flex',flexDirection:'column',pl:3}} >
      <Typography sx={{textAlign:'left',fontWeight:'300',my:1,color:'#ff5722'}} variant='caption' gutterBottom>
      N ° du vendeur{!seller ? "" : seller.id }
 </Typography>
    
 <Typography sx={{textAlign:'left',fontWeight:'300'}} variant='caption' gutterBottom>
 Ce vendeur a été ouvert en
 </Typography>
 <Typography sx={{textAlign:'left',fontWeight:'300',mb:1,color:'#c2185b'}} variant='caption' gutterBottom>
 {!seller ? "" : seller.createdAt}
 </Typography>
 <Link sx={{color:'#ff5722',textAlign:'left',textDecorationLine:'none',":hover":{color:'#ff5722',textDecorationLine:'underline'}}} target='_blank' href={`/store/${seller.id}/lisencecommerciale`}>Licence commerciale</Link>
      </Box>
      <Box sx={{width:'60%',height:'100%',display:'flex',flexDirection:'column',pl:3}} >
      <Typography sx={{textAlign:'left',fontWeight:'800',my:1}} variant='caption' gutterBottom>
      Évaluations détaillées des vendeurs
 </Typography>

 <Box sx={{display:'flex',alignItems:'center'}} >
 <Typography sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'800',mr:1}} variant='caption' gutterBottom>
 Article conforme à la des
 </Typography>
 <Link variant='caption' sx={{color:'#c2185b',textAlign:'left',fontWeight:'200',textDecorationLine:'none',":hover":{color:'#c2185b',textDecorationLine:'underline'}}} href={`/store/${seller.id}/avis`}>
 {Math.floor(reviews.filter((rev:any)=> rev.rating >= 4  ).length*100*10/reviews.length)/10}% En dessus de la moyenne</Link>
 </Box>

 <Box sx={{display:'flex',alignItems:'center'}} >
 <Typography sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'800',mr:1}} variant='caption' gutterBottom>
 Article conforme à la des
 </Typography>
 <Link variant='caption' sx={{color:'#c2185b',textAlign:'left',fontWeight:'200',textDecorationLine:'none',":hover":{color:'#c2185b',textDecorationLine:'underline'}}} href={`/store/${seller.id}/avis`}>
 {Math.floor(reviews.filter((rev:any)=> rev.rating === 3  ).length*100*10/reviews.length)/10}% égale de la moyenne</Link>
 </Box>

 <Box sx={{display:'flex',alignItems:'center'}} >
 <Typography sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'800',mr:1}} variant='caption' gutterBottom>
 Article conforme à la des
 </Typography>
 <Link variant='caption' sx={{color:'#c2185b',textAlign:'left',fontWeight:'200',textDecorationLine:'none',":hover":{color:'#c2185b',textDecorationLine:'underline'}}} href={`/store/${seller.id}/avis`}>
 {Math.floor(reviews.filter((rev:any)=> rev.rating < 3  ).length*100*10/reviews.length)/10}% En dessous de la moyenne</Link>
 </Box>
    
 
      </Box>
   </Box>

   <Box sx={{width:'100%',height:'25%',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
   <Link variant='caption' sx={{color:'#ff5722',pl:3,display:'flex',alignItems:'center',textAlign:'left',fontWeight:'200',textDecorationLine:'none',":hover":{color:'#ff5722',textDecorationLine:'underline'}}} href="#">
    <MailOutlineIcon sx={{color:'#ff5722',mr:1}} /> Contact vendeur
    </Link>
    <Box sx={{display:'flex',alignItems:'center',pr:3}} >
    <Button onClick={()=>navigate(`/store/${seller.id}`)} sx={{color:'black',fontSize:'10px',mr:1,borderColor:'#e0e0e0',":hover":{bgcolor:'Window',borderColor:'#e0e0e0',mr:1,color:'#ff5722',textDecorationLine:'underline'}}} variant="outlined">Visitez la page Vendeur</Button>
    
    { checked == true ?   
    <Button onClick={deleteFollowers} sx={{color:'black',fontSize:'10px',mr:1,borderColor:'#e0e0e0',":hover":{bgcolor:'Window',borderColor:'#e0e0e0',color:'#ff5722',textDecorationLine:'underline'}}} variant="outlined"> <FavoriteIcon/> Suivé</Button>
    :<Button onClick={postFollowers}  sx={{color:'black',fontSize:'10px',mr:1,borderColor:'#e0e0e0',":hover":{bgcolor:'Window',borderColor:'#e0e0e0',color:'#ff5722',textDecorationLine:'underline'}}} variant="outlined"> <AddIcon/> Suivre</Button>}
    </Box>
   </Box>

 </Paper>
  )
}
