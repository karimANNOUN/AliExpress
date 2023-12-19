import {useState} from 'react'
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import {  IconButton } from '@mui/material';
import Link from '@mui/material/Link';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';

export const ProductAimiez = () => {

    const products =[{id:1},{id:2},{id:3},{id:4},{id:5},{id:6},{id:7},{id:8},{id:9},{id:10},{id:11},{id:12},{id:13},{id:14},{id:15}]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleClickRight = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 6) % products.length);
    };
  
    const handleClickLeft = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 6 + products.length) % products.length);
    };

const navigate=useNavigate()

  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',bgcolor:'Window',width:'100%',p:1,mb:2}} >
                            <Box sx={{display:'flex',width:'100%',alignItems:'center'}} >
                            <Typography sx={{fontWeight:'800',textAlign:'left'}}  variant='h6' gutterBottom>
                          Sélectionné pour vous
                        </Typography>
                            </Box>
                            <Box sx={{display:'flex',alignItems:'center',width:'100%',overflow:'clip',position:'relative'}} >
                            {products.slice(currentIndex, currentIndex + 5).map( prod => <Box key={prod.id} sx={{width:'20%',mr:1,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',p:1 }}>
    <img src='https://i.pinimg.com/564x/6a/f3/fb/6af3fb0201c1f22c8281c5519faf5d44.jpg' onClick={()=>navigate("/1")} alt='hhtr' style={{width:'95%',height:'200px'}} />
    <Box sx={{width:'95%',display:'flex',flexDirection:'column'}} >
    <Link variant='caption' sx={{color:'#9e9e9e',textAlign:'left',":hover":{color:'#9e9e9e'}}} href="/1" underline="none">
Scannez le code ou clique..
</Link>


<Typography sx={{textAlign:'left',fontWeight:'700'}}  variant='body1' gutterBottom>
 DA 759
</Typography>

 <Typography sx={{textAlign:'left',color:'#9e9e9e'}}  variant='caption' gutterBottom>
  2809 commandes
</Typography>

    </Box>
  </Box>)}

  <IconButton onClick={handleClickLeft}  sx={{position:'absolute',width:'40px',top:'40%',left:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
        <ChevronLeftIcon sx={{fontSize:'40px',fontWeight:'800',color:'#f5f5f5'}} />
        </IconButton>
          <IconButton onClick={handleClickRight} sx={{position:'absolute',top:'40%',width:'40px',right:6,bgcolor:'#bdbdbd',":hover":{bgcolor:'#bdbdbd'}}} >
        <ChevronRightIcon sx={{fontSize:'40px',fontWeight:'800',color:'#f5f5f5'}} />
        </IconButton> 
                            </Box>
                          
                          </Box>
  )
}
