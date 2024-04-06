import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import IconButton from '@mui/material/IconButton';
import Rating from '@mui/material/Rating';
import Divider from '@mui/material/Divider';
export const FirstCardModal = ({art,activeSize,setActiveSize,indexs,setIndexs,totalQuantity,totalRating}:any) => {

   

    const [currentIndex, setCurrentIndex] = useState(0);

    

    const handleClickRight = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 6) % art.images.filter((img:any)=> img.color !== 'imageDescription').length);
      };
    
      const handleClickLeft = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 6 + art.images.filter((img:any)=> img.color !== 'imageDescription').length) % art.images.filter((img:any)=> img.color !== 'imageDescription').length);
      };

  return (
    <Box sx={{display:'flex',overflowY: 'auto',}} >
    <Box sx={{display:'flex',flexDirection:'column',width:'400px',height:'500px',mr:4}} >
      
     <img src={art.images.filter((img:any)=>  img.color !== 'imageDescription')[indexs].imageUrl} style={{width:'400px',height:'400px',borderRadius:'8px'}}  />
   
     <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',height:'100px',overflow:'hidden',position:'relative'}} >

     { art.images.filter((img:any)=> img.color !== 'imageDescription').slice(currentIndex, currentIndex + 6).map((category:any,index:any)=> 
     <Box key={index} onMouseEnter={ ()=> setIndexs(index) } sx={{height:'60px',width:'60px',borderRadius:'12px'}} >
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


    <Box sx={{display:'flex',flexDirection:'column',width:'550px',overflowY:'auto'}} >
    <Box sx={{display:'flex',alignItems:'center'}} >
    <Typography sx={{fontWeight:'800',color:'#ff3d00'}} variant="h6" gutterBottom>
     DA
     </Typography>
     <Typography sx={{fontWeight:'800',color:'#ff3d00'}} variant="h4" gutterBottom>
     {art.price - (art.solde*art.price/100)}
     </Typography>
     <Typography sx={{fontWeight:'500',textDecorationLine:'line-through',mx:2}}  variant='body1' gutterBottom>
     DA{art.price}
     </Typography>
     <Typography sx={{fontWeight:'100',color:'#ff3d00'}}  variant='body1' gutterBottom>
     -{art.solde}%
     </Typography>
    </Box>
     
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant='body1' gutterBottom>
    {art.description}
     </Typography>

    <Box sx={{display:'flex',alignItems:'center'}} >
    <Rating name="read-only" value={totalRating/art.review.length} readOnly size="small" sx={{color:'black',height:'100%'}} />
    <Typography sx={{fontWeight:'700',mx:2}}  variant='subtitle1' gutterBottom>
    { !art.review.length ? "0" : totalRating/art.review.length} 
     </Typography>

     <Typography sx={{fontWeight:'100',color:'#9e9e9e'}}  variant='body1' gutterBottom>
      {art.review.length} Avis  ౹  {totalQuantity} Vendus
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
    Couleur: { art.images.length == 0 ? "" :   ( indexs>=5 ? "other color" : art.images.filter((img:any)=> (img.color !== 'manyImages' && img.color !== 'imageDescription' ) )[indexs].color) }
     </Typography>

      <Box sx={{display:'flex',alignItems:'center',width:'80%',my:2}} >
       { art.images.length == 0 ? "" : art.images.filter((img:any)=> (img.color !== 'manyImages' && img.color !== 'imageDescription' ) ).slice(0, 5).map((categ:any,index:any)=>
       
       <Box key={index} sx={{height:'50px',width:'50px',borderRadius:'12px',mx:2}} >
         {index === indexs  ?  <img onClick={()=> setIndexs(index)} src={categ.imageUrl} style={{height:'100%',width:'100%',borderRadius:'8px',borderStyle:'solid',borderColor:'#424242'}} /> : <img onClick={()=> setIndexs(index)} src={categ.imageUrl} style={{height:'100%',width:'100%',borderRadius:'8px'}} /> }
       </Box>
       )}
      </Box>

      <Typography sx={{fontWeight:'800',textAlign:'left'}}  variant='body1' gutterBottom>
      {art.properties} : { art.property.length == 0 ? "" : art.property[activeSize].detailsName}
     </Typography>
     <Box sx={{display:'flex',width:'100%',alignItems:'center',flexWrap:'wrap'}} >
       {art.property.length == 0 ? "" : art.property.map((size:any,index:any)=>
       <Box key={index} sx={{mx:1,my:1}} >
        { index === activeSize ? <div onClick={()=>setActiveSize(index)}  style={{height:'30px',padding:2,borderStyle:'solid',borderColor:'#424242',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'8px'}} >
        {size.detailsName}
     </div> : 
     <div  onClick={()=>setActiveSize(index)} style={{height:'30px',padding:2,borderStyle:'solid',borderColor:'#e0e0e0',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:'8px'}} >
     {size.detailsName}
     </div>
     }

     </Box>
       
        )}
     </Box>
    </Box>
    </Box>
  )
}
