import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import { motion } from 'framer-motion';
export const GridItem2 = () => {

    const images= [
        {url:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {url:'https://i.pinimg.com/564x/cf/ab/5a/cfab5a0beb1ea86a3a86fa48fe6bd86e.jpg'},
        {url:'https://i.pinimg.com/564x/9d/c8/8c/9dc88c330504f561bf2ae8b9f9a60626.jpg'},
        {url:'https://i.pinimg.com/564x/6d/67/93/6d67935203d463683c04a6885dee44be.jpg'},
        {url:'https://i.pinimg.com/564x/53/29/bf/5329bf89bb7199763c3a4a5c9807b513.jpg'},
        {url:'https://i.pinimg.com/564x/81/1d/ec/811dec8d7c02e6abfba458ece184d376.jpg'}

    ]

    const [currentIndex,setCurrentIndex]=useState(1)

    const prevSlide=()=>{
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1 ; 
        setCurrentIndex(newIndex);
    }
    const nextSlide=()=>{
        const isLastSlide = currentIndex === images.length - 1 ;
        const newIndex = isLastSlide ? 0 : currentIndex + 1 ;
        setCurrentIndex(newIndex);
    }

  return (
    <Box sx={{height:'62%',bgcolor:'#fff3e0',borderRadius:'20px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
    <Typography sx={{my:2,pl:3,textAlign:'left',fontWeight:'700',color:'#ef6c00'}}  variant='h6' gutterBottom>
        Offre bienvenue
      </Typography>
      <Typography sx={{mb:2,pl:3,textAlign:'left'}}  variant='body2' gutterBottom>
        Prix exclusive pour vous
      </Typography>
      <Box sx={{width:'350px',height:'360px',position:'relative'}} >
        <motion.img 
        src={images[currentIndex].url} 
        alt='kimou' 
        style={{height:'100%',width:'100%',borderRadius:'30px'}}
        initial={{ opacity: 0, x:100 ,scale:0.5 }}
        animate={{ opacity: 1, x:0,scale:1 }}
        transition={{ ease:'easeIn' ,duration: 1 }}
         />
       
        <IconButton  onClick={prevSlide} sx={{position:'absolute',top:'50%',left:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
        <ChevronLeftIcon sx={{fontSize:'50px',fontWeight:'800',color:'#f5f5f5'}} />
        </IconButton>
        <IconButton onClick={nextSlide} sx={{position:'absolute',top:'50%',right:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
        <ChevronRightIcon sx={{fontSize:'50px',fontWeight:'800',color:'#f5f5f5'}} />
        </IconButton>

      </Box>
     </Box>
  )
}
