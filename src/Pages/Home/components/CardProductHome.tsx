import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import {  Link, useNavigate  } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { CardModalProduct } from '../../CardProducts/CardModalProduct';
import { motion } from "framer-motion";

export const CardProductHome = ({art,toggleDrawer}:any) => {


    const navigate=useNavigate()

  
 

    const [over, setOver] = useState(false);
    const handleFermer = () => {
      setOver(false);
    };
  
   
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOver(true)
   
      setTimeout(() => {
        setOver(false)
        setOpen(true)
      }, 1000);
     
    
    }

  return (
    <motion.div 
    initial={{ scale: 0,opacity: 0,x:-320,y:-400 }}
    animate={{  scale: 1,opacity: 1 ,x:0,y:0 }}
    transition={{
   //   type: "spring",
  //    stiffness: 260,
   //   damping: 20,
      duration: 1
    }}
    style={{width:'340px',height:'530px'}} >
       <Box  key={art.id} component='div'  sx={{width:'100%',height:'100%',borderRadius:'20px',mb:2,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderColor:'#eeeeee',borderStyle:'solid' }}>
          <img onClick={()=>navigate(`/${art.id}`)} src={`${art.images.filter((img:any)=> img.color !== 'imageDescription')[0].imageUrl}`} alt='hhtr' style={{width:'90%',height:'60%',borderRadius:'20px'}} />
          <Box sx={{width:'90%',display:'flex',flexDirection:'column'}} >
          <Typography sx={{my:1,textAlign:'left'}}  variant='body1' gutterBottom>
        {art.title}
      </Typography>
       <Box sx={{display:'flex',mb:1}} >
       <Rating name="read-only" value={2} readOnly size="small" sx={{color:'black',mr:1}} />
       <Typography sx={{textAlign:'left'}}  variant='caption' gutterBottom>
        + 2000 Vendu(s)
      </Typography>
       </Box>
       <Box sx={{display:'flex',alignItems:'center'}} >
       <Typography sx={{textAlign:'left',fontWeight:'700'}}  variant='caption' gutterBottom>
        DA
      </Typography>
      <Typography sx={{textAlign:'left',fontWeight:'700',mr:2}}  variant='body1' gutterBottom>
        {art.price-(art.solde*art.price/100)}
      </Typography>
      <Typography sx={{textAlign:'left',fontWeight:'5',textDecorationLine:'line-through',color: '#bdbdbd'}}  variant='caption' gutterBottom>
        DA{art.price}
      </Typography> 
       </Box>

       { art.solde !== 0 ?  <Box sx={{display:'flex',alignItems:'center'}} >
       <Typography sx={{textAlign:'left',color:'Window',bgcolor:'#ff5722',mr:1}}  variant='caption' gutterBottom>
        Offre Bienvenue 
      </Typography>
      <Typography sx={{textAlign:'left',fontWeight:'700',color:'#ff5722'}}  variant='caption' gutterBottom>
         -DA{art.solde*art.price/100} tous les articles 
      </Typography> 
       </Box>: "" }

       <Button onClick={handleOpen} variant="contained" sx={{bgcolor:'black',color:'Window',width:'100%',my:1,borderRadius:'20px',":hover":{bgcolor:'black',color:'Window'}}} >Apercu</Button> 

          </Box>
     

             <CardModalProduct open={open} toggleDrawer={toggleDrawer} setOpen={setOpen} art={art} />
         <Backdrop
         sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
         open={over}
         onClick={handleFermer}
       >
         <CircularProgress color="inherit" />
       </Backdrop>
      
         

        </Box>
    </motion.div>
   
  )
}
