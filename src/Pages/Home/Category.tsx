import React,{useState,Component} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { motion } from 'framer-motion';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';



export const Category = () => {


    const [show,setShow]=useState(true)

    const [currentIndex, setCurrentIndex] = useState(0);

 

 

    const catergories=[
        {id:1,name:'mobile,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:2,name:'mahdi,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:3,name:'ishak,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:4,name:'kikou,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:5,name:'toka,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:6,name:'papa,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:7,name:'marwa,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:8,name:'mama,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:9,name:'lycra,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:10,name:'chihani,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:11,name:'ben mhidi,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:12,name:'ghoza,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        
    ]



    const handleClickRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 6) % catergories.length);
      };
    
      const handleClickLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 6 + catergories.length) % catergories.length);
      };



  return (
    <div>
        <Box onMouseEnter={ ()=> setShow(false)} onMouseLeave={()=> setShow(true)} sx={{height:'600px',width:'100%',display:'flex',flexDirection:'column',position:'relative'}} >
        <Typography sx={{my:2,pl:3,textAlign:'left',fontWeight:'700'}}  variant='h4' gutterBottom>
        Explorez par catégories
      </Typography>
      
      <Box sx={{height:'45%',display:'flex',justifyContent:'space-around',alignItems:'center',overflow:'hidden',transition:'transform 0.5s ease-in-out'}} >


        { catergories.slice(currentIndex, currentIndex + 6).map(category=> 

         <Box key={category.id}  sx={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
      <Avatar sx={{ width: 200, height: 200 }} alt="Remy Sharp" src={category.image} />
      <Typography sx={{mt:1,textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
        {category.name}
      </Typography>
      </Box>

      )}
      
      </Box>
     
     
      <Box sx={{height:'45%',display:'flex',justifyContent:'space-between',alignItems:'center',overflow:'hidden'}} >
      { catergories.slice(currentIndex, currentIndex + 6).map(category=> <Box key={category.id} sx={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
      <Avatar sx={{ width: 200, height: 200 }} alt="Remy Sharp" src={category.image} />
      <Typography sx={{mt:1,textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
        {category.name}
      </Typography>
      </Box>)}
     </Box>
  

     { !show ? <IconButton onClick={handleClickLeft}  sx={{position:'absolute',top:'50%',left:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
        <ChevronLeftIcon sx={{fontSize:'50px',fontWeight:'800',color:'#f5f5f5'}} />
        </IconButton>: "" }
        { !show ?  <IconButton onClick={handleClickRight} sx={{position:'absolute',top:'50%',right:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
        <ChevronRightIcon sx={{fontSize:'50px',fontWeight:'800',color:'#f5f5f5'}} />
        </IconButton> : "" }
        </Box>
    </div>
  )
}
