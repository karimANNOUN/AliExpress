
import { Box } from '@mui/material'
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import {useState} from 'react'
import List1 from './ListButton/List1';
import List2 from './ListButton/List2';
export default function Header() {
    const [show,setShow]=useState(true)
const [vu,setVu]=useState(true)
  return (
    <Box sx={{height:'100px',bgcolor:'#424242',width:'100%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{color:'#bdbdbd',textAlign:'center'}} variant="caption" gutterBottom>
   <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >legging sport femme</Link>  | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >veste chauffante homme</Link> | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >robe verte sauge</Link> | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >grand miroir</Link> | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} >appareil photo instantané</Link> | <Link to={`/`} style={{color:'#bdbdbd',textDecorationLine:'none'}} > arche de ballon</Link>
</Typography>
<Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center'}} >


<Button onMouseEnter={ ()=> setVu(false)} onMouseLeave={()=> setVu(true)} variant="outlined" sx={{ borderWidth:'2px',borderColor:'#e0e0e0' ,color:'white',borderRadius:'12px' ,":hover":{bgcolor:'#9e9e9e',borderRadius:'12px',borderColor:'#e0e0e0'}}} > 
<MenuIcon sx={{fontSize:'25px',color:'white',mr:1,":hover":{color:'black'}}} /> 
 Tous Les Catégotries
 { vu ? <ExpandMoreIcon sx={{fontSize:'20px',ml:1,color:'white'}} /> : <ExpandLessIcon sx={{fontSize:'20px',ml:1,color:'white'}} />  }
 { !vu ? <List2/> : "" }
 </Button>
<Button variant="text" sx={{color:'white',borderRadius:'12px' ,":hover":{bgcolor:'#9e9e9e',borderRadius:'12px'}}} >Text</Button>
<Button variant="text" sx={{color:'white',borderRadius:'12px' ,":hover":{bgcolor:'#9e9e9e',borderRadius:'12px'}}} >Text</Button>
<Button variant="text" sx={{color:'white',borderRadius:'12px' ,":hover":{bgcolor:'#9e9e9e',borderRadius:'12px'}}} >Text</Button>
<Button variant="text" sx={{color:'white',borderRadius:'12px' ,":hover":{bgcolor:'#9e9e9e',borderRadius:'12px'}}} >Text</Button>
<Button variant="text" sx={{color:'white',borderRadius:'12px' ,":hover":{bgcolor:'#9e9e9e',borderRadius:'12px'}}} >Text</Button>
<Button variant="text" sx={{color:'white',borderRadius:'12px' ,":hover":{bgcolor:'#9e9e9e',borderRadius:'12px'}}} >Text</Button>
<Button variant="text" sx={{color:'white',borderRadius:'12px' ,":hover":{bgcolor:'#9e9e9e',borderRadius:'12px'}}} >Text</Button>
<Button variant="text" sx={{color:'white',borderRadius:'12px' ,":hover":{bgcolor:'#9e9e9e',borderRadius:'12px'}}} >Text</Button>

<Button variant="outlined" onMouseEnter={ ()=> setShow(false)} onMouseLeave={()=> setShow(true)} sx={{ borderWidth:'2px',borderColor:'#e0e0e0' ,color:'white',borderRadius:'12px' ,":hover":{bgcolor:'#9e9e9e',borderRadius:'12px',borderColor:'#e0e0e0'}}} > 
 Outlined
 { show ? <ExpandMoreIcon sx={{fontSize:'20px',ml:1,color:'white'}} /> : <ExpandLessIcon sx={{fontSize:'20px',ml:1,color:'white'}} /> }
{ !show ? <List1/> : "" }
 </Button>



</Box>
    </Box>
  )
}
