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
        {id:1,name:'vetments',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:2,name:'phone',image:'https://i.pinimg.com/236x/0c/2a/8a/0c2a8af55233beccd8a8f20cbc8a5886.jpg'},
        {id:3,name:'makla',image:'https://i.pinimg.com/236x/c3/0d/f0/c30df0ec2f22bad323419b1af1f72dfa.jpg'},
        {id:4,name:'shoes',image:'https://i.pinimg.com/236x/6f/9c/3e/6f9c3e191d2b4fe3772d39af645227d7.jpg'},
        {id:5,name:'cars',image:'https://i.pinimg.com/236x/6b/6b/23/6b6b232e1db5d680ebb8ce28b0328d37.jpg'},
        {id:6,name:'motors',image:'https://i.pinimg.com/236x/e8/28/32/e8283229d9a7390f7176ce6d61f9c1d0.jpg'},
        {id:7,name:'informatique',image:'https://i.pinimg.com/236x/cd/c1/ef/cdc1ef397a46564bb46d3d60926a6aec.jpg'},
        {id:8,name:'electronics',image:'https://i.pinimg.com/236x/d5/e9/bc/d5e9bc8500d98f46999d1e03d6f51cc2.jpg'},
        {id:9,name:'laptop',image:'https://i.pinimg.com/474x/f8/2c/a8/f82ca871bcfbb31a1255bead578eb4d2.jpg'},
        {id:10,name:'bicycle',image:'https://i.pinimg.com/236x/e7/b6/34/e7b634ca495d1b875b1b4a9a5ed7b8fe.jpg'},
        {id:11,name:'troutinette',image:'https://i.pinimg.com/236x/64/4d/7d/644d7deb3d7e23b8f9e419ab29bf0ca6.jpg'},
        {id:12,name:'chorba',image:'https://i.pinimg.com/236x/14/5d/73/145d73f5109fe165a62a52bdac8d83ae.jpg'},
    ]

    const catergories2=[
      {id:1,name:'vetments',image:'https://i.pinimg.com/236x/73/50/aa/7350aa587b231720724e528ba9ddc4d1.jpg'},

      {id:2,name:'phone',image:'https://i.pinimg.com/236x/2f/da/86/2fda868139ca165113020863995557af.jpg'},

      {id:3,name:'makla',image:'https://i.pinimg.com/236x/a1/67/18/a16718f495522e92158e77f237bebd4c.jpg'},

      {id:4,name:'shoes',image:'https://i.pinimg.com/236x/cb/9c/1c/cb9c1c1998bcb3de490d1beefcdaad8e.jpg'},

      {id:5,name:'cars',image:'https://i.pinimg.com/236x/20/90/86/2090864d7738df59d81334a3b53f6a4a.jpg'},

      {id:6,name:'motors',image:'https://i.pinimg.com/236x/b5/1e/c1/b51ec1754da1f726d2e69eb4b6858039.jpg'},

      {id:7,name:'informatique',image:'https://i.pinimg.com/236x/a6/ed/e6/a6ede6d9b145c24389f09ba0f3ef4471.jpg'},

      {id:8,name:'electronics',image:'https://i.pinimg.com/236x/9c/46/99/9c4699b3c19b43c4c910c1a018210431.jpg'},

      {id:9,name:'laptop',image:'https://i.pinimg.com/236x/a6/e1/64/a6e16415e03f9058fd62e7fa9fe45d3d.jpg'},

      {id:10,name:'bicycle',image:'https://i.pinimg.com/236x/7d/6a/ca/7d6acac2b43ca2810b10541d2fcc2013.jpg'},

      {id:11,name:'troutinette',image:'https://i.pinimg.com/236x/13/1c/33/131c338ee042b1740f6115c3e76bc556.jpg'},

      {id:12,name:'chorba',image:'https://i.pinimg.com/236x/24/e5/90/24e590f5bf9e4a8c669c36dc46a20ecf.jpg'},
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
      
      <Box sx={{height:'45%',display:'flex',justifyContent:'space-around',alignItems:'center',overflow:'hidden'}} >


        { catergories.slice(currentIndex, currentIndex + 6).map(category=> 
         <motion.div
          key={category.id} style={{height:'100%'}}
          initial={{ opacity: 0, scale: 0.5 ,x:100 }}
          animate={{ opacity: 1, scale: 1,x:0 }}
          transition={{ duration: 1 }}
          >
            <Box sx={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
      <Avatar sx={{ width: 200, height: 200 }} alt="Remy Sharp" src={category.image} />
      <Typography sx={{mt:1,textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
        {category.name}
      </Typography>
      </Box>
         </motion.div>
        

      )}
      
      </Box>
     
     
      <Box sx={{height:'45%',display:'flex',justifyContent:'space-between',alignItems:'center',overflow:'hidden'}} >
      { catergories2.slice(currentIndex, currentIndex + 6).map(category=> 
       <motion.div
       key={category.id} style={{height:'100%'}}
       initial={{ opacity: 0, scale: 0.5 ,x:100 }}
       animate={{ opacity: 1, scale: 1,x:0 }}
       transition={{ duration: 1 }}
       >
      <Box  sx={{height:'100%',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
      <Avatar sx={{ width: 200, height: 200 }} alt="Remy Sharp" src={category.image} />
      <Typography sx={{mt:1,textAlign:'left',fontWeight:'700'}}  variant='h6' gutterBottom>
        {category.name}
      </Typography>
      </Box>
      </motion.div>
      )}
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
