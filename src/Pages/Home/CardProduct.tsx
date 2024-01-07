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

const article = [
    {id:1,name:'zarbia',prix:'2.568'},
    {id:2,name:'zarbia',prix:'2.568'},
    {id:3,name:'zarbia',prix:'2.568'},
    {id:4,name:'zarbia',prix:'2.568'},
    {id:5,name:'zarbia',prix:'2.568'},
    {id:6,name:'zarbia',prix:'2.568'},
    {id:7,name:'zarbia',prix:'2.568'},
    {id:8,name:'zarbia',prix:'2.568'},
    {id:9,name:'zarbia',prix:'2.568'},
    {id:10,name:'zarbia',prix:'2.568'},
    {id:11,name:'zarbia',prix:'2.568'},
    {id:12,name:'zarbia',prix:'2.568'},
    {id:13,name:'zarbia',prix:'2.568'},
    {id:14,name:'zarbia',prix:'2.568'},
    {id:15,name:'zarbia',prix:'2.568'},
    {id:16,name:'zarbia',prix:'2.568'},
    {id:17,name:'zarbia',prix:'2.568'},
    {id:18,name:'zarbia',prix:'2.568'},
]

  return (
    <div>
        <Box sx={{width:'100%',display:'flex',flexDirection:'column'}} >
        <Typography sx={{my:2,pl:3,textAlign:'left',fontWeight:'700'}}  variant='h5' gutterBottom>
        Vous aimerez aussi
      </Typography>
      <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center',flexWrap:'wrap',my:3}}  >
        { products.length === 0 ? "" : products.map( (art:any)=> <Box key={art.id} component='div' onClick={()=>navigate(`/${art.id}`)} sx={{width:'340px',height:'530px',borderRadius:'20px',mb:2,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderColor:'#eeeeee',borderStyle:'solid' }}>
          <img src='https://i.pinimg.com/564x/6a/f3/fb/6af3fb0201c1f22c8281c5519faf5d44.jpg' alt='hhtr' style={{width:'90%',height:'60%',borderRadius:'20px'}} />
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
        </Box>)} 
        <CardModalProduct open={open} setOpen={setOpen} />
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={over}
        onClick={handleFermer}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
