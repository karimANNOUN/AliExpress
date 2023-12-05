
import {useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';

export const FirstCard = ({sizes,catergories}:any) => {


    const [index,setIndex]=useState(0)

    const [currentIndex, setCurrentIndex] = useState(0);

    const [activeSize,setActiveSize]=useState(0)


    const handleClickRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 6) % catergories.length);
      };
    
      const handleClickLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 6 + catergories.length) % catergories.length);
      };


  return (
    <Box sx={{display:'flex'}} >
    <Box sx={{display:'flex',flexDirection:'column',width:'500px',height:'600px',mr:4}} >
       
     <img src={catergories[index].image} style={{width:'500px',height:'500px',borderRadius:'8px'}} />

     <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',height:'100px',overflow:'hidden',position:'relative'}} >

     { catergories.slice(currentIndex, currentIndex + 6).map((category:any)=> 
     <Box key={category.id} onMouseEnter={ ()=> setIndex(category.id - 1) } sx={{height:'70px',width:'70px',borderRadius:'12px'}} >
       {category.id -1 === index  ?  <img onClick={()=> setIndex(category.id - 1)} src={category.image} style={{height:'100%',width:'100%',borderRadius:'8px',borderStyle:'solid',borderColor:'#424242'}} /> : <img onClick={()=> setIndex(category.id - 1)} src={category.image} style={{height:'100%',width:'100%',borderRadius:'8px'}} /> }
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
    <Box sx={{display:'flex',alignItems:'center'}} >
    <Typography sx={{fontWeight:'800',color:'#ff3d00'}} variant="h6" gutterBottom>
     DA
     </Typography>
     <Typography sx={{fontWeight:'800',color:'#ff3d00'}} variant="h4" gutterBottom>
     483.18
     </Typography>
     <Typography sx={{fontWeight:'500',textDecorationLine:'line-through',mx:2}}  variant='body1' gutterBottom>
     DA1,380.53
     </Typography>
     <Typography sx={{fontWeight:'100',color:'#ff3d00'}}  variant='body1' gutterBottom>
     -65%
     </Typography>
    </Box>
     
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant='body1' gutterBottom>
    Baskets légères en cuir PU pour hommes, chaussures de sport décontractées,<br/>
     chaussures respirantes, chaussures plates blanches, chaussures de tennis pour<br/>
      hommes, Zapatillas zones bre
     </Typography>

    <Box sx={{display:'flex',alignItems:'center'}} >
    <Rating sx={{color:'black',height:'100%'}} size="medium"  name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
    <Typography sx={{fontWeight:'700',mx:2}}  variant='subtitle1' gutterBottom>
    4.3 
     </Typography>

     <Typography sx={{fontWeight:'100',color:'#9e9e9e'}}  variant='body1' gutterBottom>
     591 Avis  ౹  + 5 000 Vendus
     </Typography>

    </Box>

    <Divider sx={{my:2}} />

    <Typography sx={{fontWeight:'800',textAlign:'left'}}  variant='body1' gutterBottom>
    Coupon & Discount
     </Typography>
    <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',bgcolor:'#f5f5f5',width:'200px',height:'80px',borderRadius:'12px',my:1}} >
    <Typography sx={{fontWeight:'800',color:'#ff3d00',textAlign:'left'}}  variant='body1' gutterBottom>
    DA113.47 off
     </Typography>
     <Typography sx={{color:'#ff3d00',textAlign:'left'}}  variant='subtitle1' gutterBottom>
     dès DA113.66 d'achat
     </Typography>
    </Box>
    <Typography sx={{fontWeight:'800',textAlign:'left'}}  variant='body1' gutterBottom>
    Couleur: white grey
     </Typography>

      <Box sx={{display:'flex',alignItems:'center',width:'80%',my:2}} >
       {catergories.slice(0, 5).map((categ:any)=>
       
       <Box key={categ.id} sx={{height:'50px',width:'50px',borderRadius:'12px',mx:2}} >
         {categ.id -1 === index  ?  <img onClick={()=> setIndex(categ.id - 1)} src={categ.image} style={{height:'100%',width:'100%',borderRadius:'8px',borderStyle:'solid',borderColor:'#424242'}} /> : <img onClick={()=> setIndex(categ.id - 1)} src={categ.image} style={{height:'100%',width:'100%',borderRadius:'8px'}} /> }
       </Box>
       )}
      </Box>

      <Typography sx={{fontWeight:'800',textAlign:'left'}}  variant='body1' gutterBottom>
      Taille de chaussure: 47
     </Typography>
     <Box sx={{display:'flex',width:'100%',alignItems:'center',flexWrap:'wrap'}} >
       {sizes.map((size:any)=>
       <Box key={size.id} sx={{mx:1,my:1}} >
        { size.id - 1 === activeSize ? <div onClick={()=>setActiveSize(size.id - 1)}  style={{height:'30px',width:'70px',borderStyle:'solid',borderColor:'#424242',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'8px'}} >
        {size.number}
     </div> : 
     <div  onClick={()=>setActiveSize(size.id - 1)} style={{height:'30px',width:'70px',borderStyle:'solid',borderColor:'#e0e0e0',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'8px'}} >
     {size.number}
     </div>
     }

     </Box>
       
        )}
     </Box>
    </Box>
    </Box>
  )
}
