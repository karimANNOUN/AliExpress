import React from 'react'
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
export const DetailVendeur = ({setShow}:any) => {
  return (
    <Paper onMouseEnter={()=>setShow(true)} onMouseLeave={()=>setShow(false)} sx={{width:'670px',height:'250px',display:'flex',flexDirection:'column',position:'absolute',top:'170px',left:'390px',zIndex:1}} elevation={7} >

   <Box sx={{display:'flex',height:'75%',borderBottomStyle:'solid',borderBottomColor:'#eeeeee',width:'100%'}} >
      <Box sx={{width:'40%',height:'100%',borderRightStyle:'solid',borderRightColor:'#eeeeee',display:'flex',flexDirection:'column',pl:3}} >
      <Typography sx={{textAlign:'left',fontWeight:'300',my:1,color:'#ff5722'}} variant='caption' gutterBottom>
      N ° du vendeur1102719490
 </Typography>
    
 <Typography sx={{textAlign:'left',fontWeight:'300'}} variant='caption' gutterBottom>
 Ce vendeur a été ouvert en
 </Typography>
 <Typography sx={{textAlign:'left',fontWeight:'300',mb:1,color:'#c2185b'}} variant='caption' gutterBottom>
 Mar 20,2023
 </Typography>
 <Link sx={{color:'#ff5722',textAlign:'left',textDecorationLine:'none',":hover":{color:'#ff5722',textDecorationLine:'underline'}}} href="#">Licence commerciale</Link>
      </Box>
      <Box sx={{width:'60%',height:'100%',display:'flex',flexDirection:'column',pl:3}} >
      <Typography sx={{textAlign:'left',fontWeight:'800',my:1}} variant='caption' gutterBottom>
      Évaluations détaillées des vendeurs
 </Typography>

 <Box sx={{display:'flex',alignItems:'center'}} >
 <Typography sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'800',mr:1}} variant='caption' gutterBottom>
 Article conforme à la des
 </Typography>
 <Link variant='caption' sx={{color:'#c2185b',textAlign:'left',fontWeight:'200',textDecorationLine:'none',":hover":{color:'#c2185b',textDecorationLine:'underline'}}} href="#"> 4.3 En dessous de la m</Link>
 </Box>

 <Box sx={{display:'flex',alignItems:'center'}} >
 <Typography sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'800',mr:1}} variant='caption' gutterBottom>
 Article conforme à la des
 </Typography>
 <Link variant='caption' sx={{color:'#c2185b',textAlign:'left',fontWeight:'200',textDecorationLine:'none',":hover":{color:'#c2185b',textDecorationLine:'underline'}}} href="#"> 4.3 En dessous de la m</Link>
 </Box>

 <Box sx={{display:'flex',alignItems:'center'}} >
 <Typography sx={{textAlign:'left',color:'#bdbdbd',fontWeight:'800',mr:1}} variant='caption' gutterBottom>
 Article conforme à la des
 </Typography>
 <Link variant='caption' sx={{color:'#c2185b',textAlign:'left',fontWeight:'200',textDecorationLine:'none',":hover":{color:'#c2185b',textDecorationLine:'underline'}}} href="#"> 4.3 En dessous de la m</Link>
 </Box>
    
 
      </Box>
   </Box>

   <Box sx={{width:'100%',height:'25%',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
   <Link variant='caption' sx={{color:'#ff5722',pl:3,display:'flex',alignItems:'center',textAlign:'left',fontWeight:'200',textDecorationLine:'none',":hover":{color:'#ff5722',textDecorationLine:'underline'}}} href="#">
    <MailOutlineIcon sx={{color:'#ff5722',mr:1}} /> Contact vendeur
    </Link>
    <Box sx={{display:'flex',alignItems:'center',pr:3}} >
    <Button sx={{color:'black',fontSize:'10px',mr:1,borderColor:'#e0e0e0',":hover":{bgcolor:'Window',borderColor:'#e0e0e0',mr:1,color:'#ff5722',textDecorationLine:'underline'}}} variant="outlined">Visitez la page Vendeur</Button>
    <Button  sx={{color:'black',fontSize:'10px',mr:1,borderColor:'#e0e0e0',":hover":{bgcolor:'Window',borderColor:'#e0e0e0',color:'#ff5722',textDecorationLine:'underline'}}} variant="outlined">Suivre</Button>
    </Box>
   </Box>

 </Paper>
  )
}
