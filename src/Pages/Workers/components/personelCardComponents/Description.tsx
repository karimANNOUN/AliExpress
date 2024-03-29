import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useSelector } from 'react-redux';
import { useAnimate, useInView , usePresence ,useAnimationFrame,motion ,useScroll ,useMotionValueEvent ,useSpring  } from "framer-motion"

export const Description = () => {

  const [isPresent, safeToRemove] = usePresence()
  const [scope, animate] = useAnimate()
  const isInView = useInView(scope)

  const { scrollYProgress } = useScroll()

  const { scrollY } = useScroll()

  const [hidden,setHidden]=useState(false)

useMotionValueEvent(scrollY, "change", (latest) => {
  const previous =scrollY.getPrevious()
  if ( latest > 620 && latest < 2450 ) {
    setHidden(true)
  }else{
    setHidden(false)
  }
})

  const product=useSelector((state:any)=>state.app.product)

  return (
    <motion.div  
      style={{display:'flex',flexDirection:'column'}}
      variants={{
        visible:{ x:0 ,opacity:1 , scale:1 },
        hidden:{x:200,opacity:0.6,scale:0.5}
      }}
      animate={!hidden ? "hidden" : "visible" }
      transition={{ ease:'easeInOut' ,duration:1}}
      
      >
        <Box sx={{display:'flex'}} >
        <Button variant="text" sx={{color:'black',fontWeight:'800',":hover":{color:'black'}}} > <LocationOnIcon sx={{fontSize:'20px'}} /> Présentation</Button>
        <Button variant="text"  sx={{color:'black',":hover":{color:'black'}}} >Détails</Button>
        <Button variant="text"  sx={{color:'black',":hover":{color:'black'}}} >Customer Reviews</Button>
        <Button variant="text"  sx={{color:'black',":hover":{color:'black'}}} >Vous Aimerez Aussi</Button>
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',my:2}} >
        <Typography sx={{fontWeight:'800'}} variant="subtitle1" gutterBottom>
        Présentation
      </Typography>
      <Button variant="text" sx={{color:'black',fontWeight:'800',":hover":{color:'black'}}} > Signaler cet article</Button>
        </Box>
        <Box sx={{display:'flex',flexDirection:'column',width:'900px'}} >
            <Box sx={{display:'flex',flexDirection:'column',my:2}} >
        <Typography sx={{fontWeight:'800',color:'#ff3d00',textAlign:'left'}} variant='h6' gutterBottom>
        {product.descriptiontitle1}
      </Typography>
      <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body1' gutterBottom>
      {product.descriptiondetail1}
      </Typography>
      </Box>

      <Box sx={{display:'flex',flexDirection:'column',my:2}} >
        <Typography sx={{fontWeight:'800',color:'#ff3d00',textAlign:'left'}} variant='h6' gutterBottom>
        {product.descriptiontitle2}
      </Typography>
      <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body1' gutterBottom>
      {product.descriptiondetail2}
      </Typography>
      </Box>

      <Box sx={{display:'flex',flexDirection:'column',my:2}} >
        <Typography sx={{fontWeight:'800',color:'#ff3d00',textAlign:'left'}} variant='h6' gutterBottom>
        {product.descriptiontitle3}
      </Typography>
      <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body1' gutterBottom>
      {product.descriptiondetail3}
      </Typography>
      </Box>

        </Box>

        <img src={product.images.filter((img:any)=> img.color == 'imageDescription')[0].imageUrl } style={{width:'950px',height:'500px'}} />

        

    </motion.div>
  )
}
