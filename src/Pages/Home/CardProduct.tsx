import { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import {  Link, useNavigate  } from 'react-router-dom';
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import {CardModalProduct} from '../CardProducts/CardModalProduct'
export const CardProduct = ({products}:any) => {


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
    <div>
        <Box sx={{width:'100%',display:'flex',flexDirection:'column'}} >
        <Typography sx={{my:2,pl:3,textAlign:'left',fontWeight:'700'}}  variant='h5' gutterBottom>
        Vous aimerez aussi
      </Typography>
      <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap',my:3}}  >
        { products.length === 0 ? "" : products.map( (art:any)=> <Box key={art.id} component='div'  sx={{width:'340px',height:'530px',borderRadius:'20px',mb:2,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderColor:'#eeeeee',borderStyle:'solid' }}>
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

          <CardModalProduct open={open} setOpen={setOpen} art={art} />
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={over}
        onClick={handleFermer}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

        </Box> )} 
       
      </Box>
     

     <Box sx={{display:'flex',justifyContent:'center',alignItems:'center' , my:2}} >
     <Box sx={{display:'flex'}} >
     <Typography sx={{color:'#757575',textAlign:'center'}} variant="caption" gutterBottom>
     Découvrir plus  <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >legging sport femme</Link>  | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >veste chauffante homme</Link> | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >robe verte sauge</Link> | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >grand miroir</Link> | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >appareil photo instantané</Link> | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} > arche de ballon</Link>
</Typography>
     </Box>
     </Box>



        </Box>
    </div>
  )
}
