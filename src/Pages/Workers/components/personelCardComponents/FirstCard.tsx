
import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export const FirstCard = ({activeSize,setActiveSize,indexs,setIndexs,totalQuantity,totalRating}:any) => {

  const product=useSelector((state:any)=>state.app.product)

    

    const [currentIndex, setCurrentIndex] = useState(0);

    
 

    const handleClickRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 6) % product.images.filter((img:any)=> img.color !== 'imageDescription').length);
      };
    
      const handleClickLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 6 + product.images.filter((img:any)=> img.color !== 'imageDescription').length) % product.images.filter((img:any)=> img.color !== 'imageDescription').length);
      };


    


  return (
    <Box sx={{display:'flex'}} >
    <Box sx={{display:'flex',flexDirection:'column',width:'500px',height:'600px',mr:4}} >
      
     <motion.img 
     src={product.images.filter((img:any)=>  img.color !== 'imageDescription')[indexs].imageUrl} 
     style={{width:'500px',height:'500px',borderRadius:'8px'}}
     initial={{ opacity: 0,scale:0.5 }}
     animate={{ opacity: 1,scale:1 }}
     transition={{ ease:'easeIn' ,duration: 1 }}
     />
   
     <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',height:'100px',overflow:'hidden',position:'relative'}} >

     { product.images.filter((img:any)=> img.color !== 'imageDescription').slice(currentIndex, currentIndex + 6).map((category:any,index:any)=> 
     <Box key={index} onMouseEnter={ ()=> setIndexs(index) } sx={{height:'70px',width:'70px',borderRadius:'12px'}} >
       {index === indexs  ?  <img onClick={()=> setIndexs(index)} src={category.imageUrl} style={{height:'100%',width:'100%',borderRadius:'8px',borderStyle:'solid',borderColor:'#424242'}} /> : <img onClick={()=> setIndexs(index)} src={category.imageUrl} style={{height:'100%',width:'100%',borderRadius:'8px'}} /> }
      </Box>
      )}

      <IconButton onClick={handleClickLeft} sx={{position:'absolute',top:'50%',left:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
       <ChevronLeftIcon sx={{fontSize:'10px',fontWeight:'800',color:'#f5f5f5'}} />
       </IconButton>
        <IconButton onClick={handleClickRight}  sx={{position:'absolute',top:'50%',right:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
       <ChevronRightIcon sx={{fontSize:'10px',fontWeight:'800',color:'#f5f5f5'}} />
       </IconButton>
      
     </Box>

    </Box>


    <Box sx={{display:'flex',flexDirection:'column',width:'700px'}} >

    <motion.div 
    style={{display:'flex',alignItems:'center'}}
    initial={{x:400,y:-200,scale:2,opacity:0}}
    animate={{x:0,y:0,scale:1,opacity:1}}
    transition={{duration:0.7,ease:'easeIn'}}
    >
    <Typography sx={{fontWeight:'800',color:'#ff3d00'}} variant="h6" gutterBottom>
     DA
     </Typography>
     <Typography sx={{fontWeight:'800',color:'#ff3d00'}} variant="h4" gutterBottom>
     {product.price - (product.solde*product.price/100)}
     </Typography>
     { product.solde == 0 ? "" :   <Typography sx={{fontWeight:'500',textDecorationLine:'line-through',mx:2}}  variant='body1' gutterBottom>
     DA{product.price}
     </Typography>}
     { product.solde == 0 ? "" : <Typography sx={{fontWeight:'100',color:'#ff3d00'}}  variant='body1' gutterBottom>
     -{product.solde}%
     </Typography>}
    </motion.div>
     
    <motion.div 
         initial={{x:400,y:-200,scale:2,opacity:0}}
         animate={{x:0,y:0,scale:1,opacity:1}}
         transition={{duration:0.7,ease:'easeIn'}}
      >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant='body1' gutterBottom>
    {product.description}
     </Typography>
     </motion.div>

    <motion.div 
    style={{display:'flex',alignItems:'center'}}
    initial={{x:400,y:-200,scale:2,opacity:0}}
    animate={{x:0,y:0,scale:1,opacity:1}}
    transition={{duration:0.7,ease:'easeIn'}}
    >
   
     <Rating name="read-only" value={totalRating/product.review.length} readOnly size="medium" sx={{color:'black',height:'100%'}} />
    <Typography sx={{fontWeight:'700',mx:2}}  variant='subtitle1' gutterBottom>
    { !product.review.length ? "0" : totalRating/product.review.length} 
     </Typography>

     <Typography sx={{fontWeight:'100',color:'#9e9e9e'}}  variant='body1' gutterBottom>
     {product.review.length} Avis  ౹  {totalQuantity} Vendus
     </Typography>

    </motion.div>

    <Divider sx={{my:2}} />

      <motion.div 
         initial={{x:400,y:-200,scale:2,opacity:0}}
         animate={{x:0,y:0,scale:1,opacity:1}}
         transition={{duration:0.7,ease:'easeIn'}}
      >
      <Typography sx={{fontWeight:'800',textAlign:'left'}}  variant='body1' gutterBottom>
    Coupon & Discount
     </Typography>
      </motion.div>
   
      <motion.div 
         style={{borderRadius:'12px'}}
         initial={{x:400,y:-200,scale:2,opacity:0}}
         animate={{x:0,y:0,scale:1,opacity:1}}
         transition={{duration:0.7,ease:'easeIn'}}
      >
     
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',bgcolor:'#f5f5f5',width:'200px',height:'80px',borderRadius:'12px',my:1}} >
    <Typography sx={{fontWeight:'800',color:'#ff3d00',textAlign:'left'}}  variant='body1' gutterBottom>
    DA113.47 off
     </Typography>
     <Typography sx={{color:'#ff3d00',textAlign:'left'}}  variant='subtitle1' gutterBottom>
     dès DA113.66 d'achat
     </Typography>
    </Box>
   
     </motion.div>

    <Typography sx={{fontWeight:'800',textAlign:'left'}}  variant='body1' gutterBottom>
    Couleur: { product.images.length == 0 ? "" :   ( indexs>=5 ? "other color" : product.images.filter((img:any)=> (img.color !== 'manyImages' && img.color !== 'imageDescription' ) )[indexs].color) }
     </Typography>
     
     <motion.div
     style={{width:'80%'}}
     initial={{x:400,y:-200,scale:2,opacity:0}}
     animate={{x:0,y:0,scale:1,opacity:1}}
     transition={{duration:0.7,ease:'easeIn'}}
     >

<Box sx={{display:'flex',width:'100%',alignItems:'center',my:2}} >
       { product.images.length == 0 ? "" : product.images.filter((img:any)=> (img.color !== 'manyImages' && img.color !== 'imageDescription' ) ).map((categ:any,index:any)=>
       
       <Box key={index} sx={{height:'50px',width:'50px',borderRadius:'12px',mx:2}} >
         {index === indexs  ?  <img onClick={()=> setIndexs(index)} src={categ.imageUrl} style={{height:'100%',width:'100%',borderRadius:'8px',borderStyle:'solid',borderColor:'#424242'}} /> : <img onClick={()=> setIndexs(index)} src={categ.imageUrl} style={{height:'100%',width:'100%',borderRadius:'8px'}} /> }
       </Box>
       )}
      </Box>

     </motion.div>

    

      <Typography sx={{fontWeight:'800',textAlign:'left'}}  variant='body1' gutterBottom>
      {product.properties} : { product.property.length == 0 ? "" : product.property[activeSize].detailsName}
     </Typography>

     <Box sx={{display:'flex',width:'100%',alignItems:'center',flexWrap:'wrap'}} >
       { product.property.length == 0 ? "" : product.property.map((prop:any,index:any)=>
       <Box key={index} sx={{mx:1,my:1}} >
        { index === activeSize ? 
        <motion.div 
        onClick={()=>setActiveSize(index)}  
        style={{height:'30px',borderStyle:'solid',borderColor:'#424242',display:'flex',justifyContent:'center',alignItems:'center',padding:2,borderRadius:'8px'}}
        initial={{x:400,y:-200,scale:2,opacity:0}}
        animate={{x:0,y:0,scale:1,opacity:1}}
        transition={{duration:0.7,ease:'easeIn'}}
        >
        {prop.detailsName}
       </motion.div> 
     
     : 

     <motion.div 
      onClick={()=>setActiveSize(index)} 
      style={{height:'30px',borderStyle:'solid',borderColor:'#e0e0e0',display:'flex',justifyContent:'center',alignItems:'center',padding:2,borderRadius:'8px'}}
      
      initial={{x:400,y:-200,scale:2,opacity:0}}
      animate={{x:0,y:0,scale:1,opacity:1}}
      transition={{duration:0.7,ease:'easeIn'}}
      >
     {prop.detailsName}
     </motion.div>
     }

     </Box>
       
        )}
     </Box>
    </Box>
    </Box>
  )
}
