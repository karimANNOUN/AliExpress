import React,{useEffect, useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListSubheader from '@mui/material/ListSubheader';
import SummarizeIcon from '@mui/icons-material/Summarize';
import Rating from '@mui/material/Rating';
import {  IconButton } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { RatingColumn } from './RatingColumn';
import { TableAvis } from './TableAvis';
import { useSelector } from 'react-redux';

export const VendeurRating = () => {
   

 

  const cardRecomand=[
        {id:1,name:'kimou',price:8,commande:20},
        {id:2,name:'kimou',price:8,commande:20},
        {id:3,name:'kimou',price:8,commande:20},
        {id:4,name:'kimou',price:8,commande:20},
        {id:5,name:'kimou',price:8,commande:20},
        {id:6,name:'kimou',price:8,commande:20},
        {id:7,name:'kimou',price:8,commande:20},
        {id:8,name:'kimou',price:8,commande:20},
        {id:9,name:'kimou',price:8,commande:20},
        {id:10,name:'kimou',price:8,commande:20},
        {id:11,name:'kimou',price:8,commande:20},
        {id:12,name:'kimou',price:8,commande:20},
        {id:13,name:'kimou',price:8,commande:20},
        {id:14,name:'kimou',price:8,commande:20},
        {id:15,name:'kimou',price:8,commande:20},
        {id:16,name:'kimou',price:8,commande:20},
        {id:17,name:'kimou',price:8,commande:20},
        {id:18,name:'kimou',price:8,commande:20},
        {id:19,name:'kimou',price:8,commande:20},
        {id:20,name:'kimou',price:8,commande:20},
    ]



    const reviews = useSelector((state:any)=>state.app.reviews)

    const reviewsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
  
    const startIndex = (currentPage - 1) * reviewsPerPage;
    const endIndex = startIndex + reviewsPerPage;
    const currentReviews = reviews.slice(startIndex, endIndex);
  
    const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  
    const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
    };
  
    const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };





      const rating =[{id:1,name:'one',Number:1},{id:2,name:'tow',Number:2},{id:3,name:'three',Number:3},{id:4,name:'four',Number:4},{id:5,name:'five',Number:5}]

      const positifReviews= Math.floor(reviews.filter((rev:any)=> parseInt(rev.rating) >= 4 ).length*100*10/reviews.length)/10
 
   


  return (
   

      <Box sx={{width:'100%',display:'flex',justifyContent:'center'}} >
      <Box sx={{width:'60%',display:'flex',justifyContent:'space-between'}} >
     <Box sx={{width:'22%',display:'flex',flexDirection:'column',alignItems:'center'}} >

        <Box sx={{width:'100%',borderRadius:'8px',borderStyle:'solid',borderColor:'#eeeeee',display:'flex',flexDirection:'column',justifyContent:'center',my:2}} >
        <Box sx={{bgcolor:'#84ffff',width:'100%',height:'30px',display:'flex',justifyContent:'center',alignItems:'center'}} >
        <Typography variant="subtitle2" gutterBottom>
        Catégories de magasins
  </Typography>
        </Box>
        <List
  component="nav"
        sx={{position:'relative'}}
  subheader={
    <ListSubheader sx={{textAlign:'left',zIndex:0,position:'relative'}} disableSticky component="div" id="nested-list-subheader">
      <Link sx={{color:'black',display:'flex',alignItems:'center',":hover":{color:'#ff3d00'}}} href="#" underline="none">
      <SummarizeIcon sx={{fontSize:'12px',mr:1}} /> chaussur Homme
  </Link>
    </ListSubheader>
  }
>
  <ListItem sx={{ml:3}} >
  <Link sx={{color:'#616161',fontSize:'12px',":hover":{color:'#616161'}}} href="#" underline="none">
   - Homme Adidas
  </Link>
  </ListItem>
  <ListItem sx={{ml:3}} >
  <Link sx={{color:'#616161',fontSize:'12px',":hover":{color:'#616161'}}} href="#" underline="none">
  - Homme Adidas
  </Link>
  </ListItem>
  <ListItem sx={{ml:3}}>
  <Link sx={{color:'#616161',fontSize:'12px',":hover":{color:'#616161'}}} href="#" underline="none">
 - Homme Adidas
  </Link>
  </ListItem>
 
</List>
        
<List
  component="nav"
 
  subheader={
    <ListSubheader sx={{textAlign:'left',zIndex:0}} disableSticky component="div" id="nested-list-subheader">
      <Link sx={{color:'black',display:'flex',alignItems:'center',":hover":{color:'#ff3d00'}}} href="#" underline="none">
      <SummarizeIcon sx={{fontSize:'12px',mr:1}} />  chaussur Famme
  </Link>
    </ListSubheader>
  }
>
  <ListItem sx={{ml:3}} >
  <Link sx={{color:'#616161',fontSize:'12px',":hover":{color:'#616161'}}} href="#" underline="none">
   - Homme Adidas
  </Link>
  </ListItem>
  <ListItem sx={{ml:3}} >
  <Link sx={{color:'#616161',fontSize:'12px',":hover":{color:'#616161'}}} href="#" underline="none">
  - Homme Adidas
  </Link>
  </ListItem>
  <ListItem sx={{ml:3}}>
  <Link sx={{color:'#616161',fontSize:'12px',":hover":{color:'#616161'}}} href="#" underline="none">
 - Homme Adidas
  </Link>
  </ListItem>
 
</List>



        </Box>


        <Box sx={{width:'100%',borderRadius:'8px',borderStyle:'solid',borderColor:'#eeeeee',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
        <Box sx={{bgcolor:'#84ffff',width:'100%',height:'30px',display:'flex',justifyContent:'center',alignItems:'center'}} >
        <Typography variant="subtitle2" gutterBottom>
        Recommandé
  </Typography>
        </Box>
       
         { cardRecomand.map(rec=> <Box key={rec.id} sx={{width:'100%',display:'flex',justifyContent:'space-around',alignItems:'center',mb:1,pl:1}} >
          <img src='https://i.pinimg.com/236x/63/ac/c0/63acc0fbe97516b76e94cd3a29c118c6.jpg' alt='' style={{height:'70px',width:'70px',borderRadius:'8px'}} />
          <Box sx={{display:"flex",flexDirection:'column',ml:1}} >
          <Link sx={{color:'#616161',fontSize:'12px',textAlign:'left',":hover":{color:'#ff3d00'}}} href="#" underline="none">
          Baskets légères en cuir PU pour hom...
  </Link>
  <Typography sx={{fontWeight:'800',textAlign:'left',color:'#ff3d00'}} variant="caption" gutterBottom>
  462.60 DA
  </Typography>

  <Typography sx={{fontWeight:'100',textAlign:'left',color:'#616161'}} variant="caption" gutterBottom>
  Commander(5419)
  </Typography>
          </Box>
         </Box>)}


        </Box>
    

    


     </Box>

     <Box sx={{width:'73%',display:'flex',flexDirection:'column'}} >
    
    <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='subtitle1' gutterBottom>
    Avis du vendeur
  </Typography>
   
    <Box sx={{width:'600px',borderStyle:'solid',display:'flex',flexDirection:'column',alignItems:'center',borderColor:'#f5f5f5',borderWidth:'2px'}} >
      <Box sx={{height:'30px',width:'100%',bgcolor:'#e0e0e0',display:'flex',alignItems:'center'}} >
      <Typography sx={{fontWeight:'800',textAlign:'left',ml:2}} variant='subtitle1' gutterBottom>
      Résumé du vendeur
  </Typography>
      </Box>
      <Box sx={{width:'60%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
       <Box sx={{display:'flex'}} >
       <Typography sx={{fontWeight:'100',textAlign:'center',mr:2}} variant='caption' gutterBottom>
       Vendeur :
  </Typography>
  <Link sx={{color:'#2196f3',textDecorationLine:'none',fontSize:'12px',":hover":{color:'#ff5722',textDecorationLine:'underline'}}} href={ !reviews.length ? "" : `/store/${reviews[0].product.userId}`} >
  { !reviews.length ? "" : reviews[0].product.user.name} Store
  </Link>
       </Box>

    
       <Box sx={{display:'flex'}} >
       <Typography sx={{fontWeight:'100',textAlign:'center',mr:2}} variant='caption' gutterBottom>
       Avis positifs  :
  </Typography>
  <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='caption' gutterBottom>
      {positifReviews}%
  </Typography>
       </Box>


       <Box sx={{display:'flex'}} >
       <Typography sx={{fontWeight:'100',textAlign:'center',mr:2}} variant='caption' gutterBottom>
       Vendeur AliExpress depuis :
  </Typography>
  <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='caption' gutterBottom>
  { !reviews.length ? "" : reviews[0].product.user.createdAt}
  </Typography>
       </Box>


      </Box>
    </Box>


    
    <Box sx={{width:'650px',borderStyle:'solid',display:'flex',flexDirection:'column',alignItems:'center',borderColor:'#f5f5f5',borderWidth:'2px',my:2}} >
      <Box sx={{height:'30px',width:'100%',bgcolor:'#e0e0e0',display:'flex',alignItems:'center'}} >
      <Typography sx={{fontWeight:'800',textAlign:'left',ml:2}} variant='subtitle1' gutterBottom>
      Évaluations détaillées du vendeur
  </Typography>
      </Box>




      <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',pt:1}} >
  
      <Box  sx={{display:'flex',alignItems:'center',height:'30px'}} >
    <Typography sx={{fontWeight:'100',textAlign:'left',mt:1}} variant='caption' gutterBottom>
    Review {rating[0].name} rating description :

</Typography>
<Rating name="read-only" value={rating[0].Number}  readOnly size='small' sx={{mx:1}} />
  
<Typography sx={{fontWeight:'700',textAlign:'left',color:'#ff5722',mt:1}} variant='caption' gutterBottom>
  {rating[0].Number}
</Typography>
<Typography sx={{textAlign:'left',color:'#bdbdbd',mt:1}} variant='caption' gutterBottom>
({(reviews.filter((rev:any)=> rev.rating === rating[0].Number ).length)} Évaluations)
</Typography>

<Box sx={{height:'20px',width:'160px',display:'flex',justifyContent:'center',alignItems:'center',ml:1}} >
    <Box sx={{height:'100%',width:'50%',bgcolor:'#c2185b',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Typography sx={{textAlign:'left',fontSize:'12px',color:'white',mt:1}} variant='caption' gutterBottom>
   {Math.floor(reviews.filter((rev:any)=> rev.rating === rating[0].Number ).length*100*10/reviews.length)/10}%
</Typography>
    </Box>

    <Box sx={{height:'100%',width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Typography sx={{textAlign:'left',fontSize:'10px',mt:1}} variant='caption' gutterBottom>
    {rating[0].name} rating
</Typography>
    </Box>
 

</Box>
 
    </Box>     



    <Box  sx={{display:'flex',alignItems:'center',height:'30px'}} >
    <Typography sx={{fontWeight:'100',textAlign:'left',mt:1}} variant='caption' gutterBottom>
    Review {rating[1].name} rating description :

</Typography>
<Rating name="read-only" value={rating[1].Number}  readOnly size='small' sx={{mx:1}} />
  
<Typography sx={{fontWeight:'700',textAlign:'left',color:'#ff5722',mt:1}} variant='caption' gutterBottom>
  {rating[1].Number}
</Typography>
<Typography sx={{textAlign:'left',color:'#bdbdbd',mt:1}} variant='caption' gutterBottom>
({(reviews.filter((rev:any)=> rev.rating === rating[1].Number ).length)} Évaluations)
</Typography>

<Box sx={{height:'20px',width:'160px',display:'flex',justifyContent:'center',alignItems:'center',ml:1}} >
    <Box sx={{height:'100%',width:'50%',bgcolor:'#c2185b',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Typography sx={{textAlign:'left',fontSize:'12px',color:'white',mt:1}} variant='caption' gutterBottom>
    {Math.floor(reviews.filter((rev:any)=> rev.rating === rating[1].Number ).length*100*10/reviews.length)/10}%
</Typography>
    </Box>

    <Box sx={{height:'100%',width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Typography sx={{textAlign:'left',fontSize:'10px',mt:1}} variant='caption' gutterBottom>
    {rating[1].name} rating
</Typography>
    </Box>
</Box>
    </Box> 



    <Box  sx={{display:'flex',alignItems:'center',height:'30px'}} >
    <Typography sx={{fontWeight:'100',textAlign:'left',mt:1}} variant='caption' gutterBottom>
    Review {rating[2].name} rating description :

</Typography>
<Rating name="read-only" value={rating[2].Number}  readOnly size='small' sx={{mx:1}} />
  
<Typography sx={{fontWeight:'700',textAlign:'left',color:'#ff5722',mt:1}} variant='caption' gutterBottom>
  {rating[2].Number}
</Typography>
<Typography sx={{textAlign:'left',color:'#bdbdbd',mt:1}} variant='caption' gutterBottom>
({(reviews.filter((rev:any)=> rev.rating === rating[2].Number ).length)} Évaluations)
</Typography>

<Box sx={{height:'20px',width:'160px',display:'flex',justifyContent:'center',alignItems:'center',ml:1}} >
    <Box sx={{height:'100%',width:'50%',bgcolor:'#c2185b',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Typography sx={{textAlign:'left',fontSize:'12px',color:'white',mt:1}} variant='caption' gutterBottom>
    {Math.floor(reviews.filter((rev:any)=> rev.rating === rating[2].Number ).length*100*10/reviews.length)/10}%
</Typography>
    </Box>

    <Box sx={{height:'100%',width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Typography sx={{textAlign:'left',fontSize:'10px',mt:1}} variant='caption' gutterBottom>
    {rating[2].name} rating
</Typography>
    </Box>
</Box>
    </Box>  



    <Box  sx={{display:'flex',alignItems:'center',height:'30px'}} >
    <Typography sx={{fontWeight:'100',textAlign:'left',mt:1}} variant='caption' gutterBottom>
    Review {rating[3].name} rating description :

</Typography>
<Rating name="read-only" value={rating[3].Number}  readOnly size='small' sx={{mx:1}} />
  
<Typography sx={{fontWeight:'700',textAlign:'left',color:'#ff5722',mt:1}} variant='caption' gutterBottom>
  {rating[3].Number}
</Typography>
<Typography sx={{textAlign:'left',color:'#bdbdbd',mt:1}} variant='caption' gutterBottom>
({(reviews.filter((rev:any)=> rev.rating === rating[3].Number ).length)} Évaluations)
</Typography>

<Box sx={{height:'20px',width:'160px',display:'flex',justifyContent:'center',alignItems:'center',ml:1}} >
    <Box sx={{height:'100%',width:'50%',bgcolor:'#c2185b',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Typography sx={{textAlign:'left',fontSize:'12px',color:'white',mt:1}} variant='caption' gutterBottom>
    {Math.floor(reviews.filter((rev:any)=> rev.rating === rating[3].Number ).length*100*10/reviews.length)/10}%
</Typography>
    </Box>

    <Box sx={{height:'100%',width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Typography sx={{textAlign:'left',fontSize:'10px',mt:1}} variant='caption' gutterBottom>
    {rating[3].name} rating
</Typography>
    </Box>
</Box>
    </Box>  



    <Box  sx={{display:'flex',alignItems:'center',height:'30px'}} >
    <Typography sx={{fontWeight:'100',textAlign:'left',mt:1}} variant='caption' gutterBottom>
    Review {rating[4].name} rating description :

</Typography>
<Rating name="read-only" value={rating[4].Number}  readOnly size='small' sx={{mx:1}} />
  
<Typography sx={{fontWeight:'700',textAlign:'left',color:'#ff5722',mt:1}} variant='caption' gutterBottom>
  {rating[4].Number}
</Typography>
<Typography sx={{textAlign:'left',color:'#bdbdbd',mt:1}} variant='caption' gutterBottom>
({(reviews.filter((rev:any)=> rev.rating === rating[4].Number ).length)} Évaluations)
</Typography>

<Box sx={{height:'20px',width:'160px',display:'flex',justifyContent:'center',alignItems:'center',ml:1}} >
    <Box sx={{height:'100%',width:'50%',bgcolor:'#c2185b',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Typography sx={{textAlign:'left',fontSize:'12px',color:'white',mt:1}} variant='caption' gutterBottom>
    {Math.floor(reviews.filter((rev:any)=> rev.rating === rating[4].Number ).length*100*10/reviews.length)/10}%
</Typography>
    </Box>

    <Box sx={{height:'100%',width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Typography sx={{textAlign:'left',fontSize:'10px',mt:1}} variant='caption' gutterBottom>
    {rating[4].name} rating
</Typography>
    </Box>
</Box>
    </Box>  




    </Box>




        </Box>



        <TableAvis />


    <Box sx={{display:'flex',flexDirection:'column',width:'100%',alignItems:'center'}} >
      <Box sx={{height:'30px',width:'100%',display:'flex',mb:2}} >
           <Box sx={{height:'100%',width:'120px',display:'flex',justifyContent:'center',alignItems:'center',borderRadius:' 6px 6px 0 0',borderTop:'2px solid #ffab00',borderLeft:'2px solid #ffab00',borderRight:'2px solid #ffab00',bgcolor:'#ffe57f'}} >
           <Link sx={{color:'black',textDecorationLine:'none',fontSize:'12px',":hover":{color:'black',textDecorationLine:'underline'}}} href="#" >
  avis recus ({reviews.length})
  </Link>
           </Box>
           <Box sx={{width:'100%',height:'100%',borderBottom:'2px solid #ffab00'}} >

           </Box>
      </Box>

      <Box sx={{display:'flex',flexDirection:'column',width:'100%'}} >
           <Box sx={{display:'flex',bgcolor:'#e0e0e0',alignItems:'center'}} >
            <Box sx={{height:'100%',width:'20%',display:'flex',alignItems:'center',pl:1}} >
            <Typography sx={{fontWeight:'700',textAlign:'left'}} variant='body2' gutterBottom>
            Acheteur
  </Typography>
            </Box>
            <Box sx={{height:'100%',width:'30%',display:'flex',alignItems:'center',pl:1}} >
            <Typography sx={{fontWeight:'700',textAlign:'left'}} variant='body2' gutterBottom>
            Détails de la transaction
  </Typography>
            </Box>
            <Box sx={{height:'100%',width:'50%',display:'flex',alignItems:'center',pl:1}} >
            <Typography sx={{fontWeight:'700',textAlign:'left'}} variant='body2' gutterBottom>
            Avis
  </Typography>
            </Box>
           </Box>

          <Box sx={{display:'flex',width:'100%',flexDirection:'column',alignItems:'center'}} >
                   { reviews.map((rev:any)=> <Box key={rev.id} sx={{display:'flex',alignItems:'center',width:'100%',height:'80px',borderBottom:'2px solid #eeeeee'}} >
                   <Box sx={{height:'100%',width:'20%',display:'flex',pl:1,pt:1}} >
                   <Link variant='subtitle2' sx={{color:'black',textDecorationLine:'none',":hover":{color:'#03a9f4',textDecorationLine:'underline'}}} href="#" >
                   {rev.buyer.name.charAt(0) +'*'.repeat(rev.buyer.name.length - 2)+rev.buyer.name.charAt(rev.buyer.name.length - 1) }
  </Link>
            </Box>
             
            <Box sx={{height:'100%',width:'30%',display:'flex',flexDirection:'column',justifyContent:'space-between'}} >
            <Link variant='caption' sx={{textDecorationLine:'none',mt:1,textAlign:'left',":hover":{color:'#ff5722',textDecorationLine:'underline'}}} href={`/${rev.productId}`} >                 
{rev.comment}
  </Link>
              
  <Typography sx={{fontWeight:'200',textAlign:'left',mb:1}} variant='body2' gutterBottom>
            {rev.quantity} pièce
  </Typography>
             
            </Box>

            <Box sx={{height:'100%',width:'50%',display:'flex',pl:1}} >
            <Rating name="read-only" value={rev.rating} readOnly size='small' sx={{mx:1,mt:1}} />
            <Typography sx={{fontWeight:'200',textAlign:'left',color:'#bdbdbd',mt:1}} variant='body2' gutterBottom>
            {rev.createdAt}
  </Typography>
            </Box>



                   </Box>)}
          </Box>

          { reviews.length <= 10 ? "" : <Box sx={{my:2,width:'100%',height:'30px',bgcolor:'#eeeeee',display:'flex',alignItems:'center',justifyContent:'space-between',pl:3}} >

         <IconButton onClick={handlePrevPage} disabled={currentPage === 1} sx={{fontSize:'16px',fontWeight:'450',mr:3}} >
            <NavigateBeforeIcon sx={{fontSize:'20px'}} />
            privious
         </IconButton>

         <IconButton onClick={handleNextPage} disabled={currentPage === totalPages} sx={{fontSize:'16px',fontWeight:'450'}} >
         next
            <NavigateNextIcon sx={{fontSize:'20px'}} />
            
         </IconButton>

       
 

        </Box>}


      </Box>

    </Box>



        </Box>


        
       
   




</Box>

</Box>

  
   
  )
}
