import {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import MenuItem from '@mui/material/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import {  InputAdornment } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie';
import Skeleton from '@mui/material/Skeleton';

export const Header = () => {

    const user = useSelector((state:any)=>state.app.user)

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


    const navigate=useNavigate()

    const handelDashbord = ()=>{
      navigate('/controlpanelmoderate/dashboard')
      setAnchorEl(null)
    }

    const handelSettings = ()=>{
      navigate('/controlpanelseller/settings')
      setAnchorEl(null)
    }
   
    const handelLogout= () =>{
      Cookies.remove('token')
      setAnchorEl(null)
      navigate('/login')
    }



    const token = Cookies.get('token');
    const [input,setInput]=useState("")
    const [loading,setLoading]=useState(Boolean)
    const [productsSeller,setProductsSeller]=useState([])

  return (
    <header style={{width:'100%',height:'80px',backgroundColor:'#6a1b9a'}} >
    {loading == true ?

      <Box sx={{width:'99%',height:'100%',display:'flex',alignItems:'center',justifyContent:'space-between'}} >
<Skeleton variant="rectangular" sx={{bgColor:'white'}} width={90} height={35} />
<Skeleton variant="rectangular" width="45%" height={40} />
<Skeleton variant="circular" width={45} height={45} />

      </Box>
      
      :<Box sx={{width:'99%',height:'100%',display:'flex',alignItems:'center',justifyContent:'space-between'}} >
      
     <Box sx={{display:'flex',alignItems:'center',ml:2}} >

     <Typography sx={{fontWeight:'800',textAlign:'left',fontFamily:'monospace',color:'white'}} variant="h5" gutterBottom>
    Khademni Moderation
    </Typography>
   
     </Box>

    <Box sx={{display:'flex',flexDirection:'column',width:'45%',alignItems:'center',position:'relative'}} >

    <TextField
         id="Phone"
          sx={{width:'100%',bgcolor:'white',borderRadius:'8px'}}
         placeholder="Search Sellers"
         size='small'
         InputProps={{
           endAdornment:(
               <InputAdornment sx={{height:'100%',right:0,position:'absolute'}} position='end' >
                 
                   <SearchIcon sx={{color:'black'}} />
                
               </InputAdornment>
           ),
           size:'small',
         }}
         />

    </Box>
    


<Box sx={{display:'flex',alignItems:'center'}} >
<IconButton  onClick={handleClick} >
<Avatar alt="Remy Sharp" src={user.imageProfle} sx={{width: 45, height: 45}} />
</IconButton>

<Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handelDashbord}>Dashbord</MenuItem>
        <MenuItem onClick={handelSettings}>Settings</MenuItem>
        <MenuItem onClick={handelLogout}>Logout</MenuItem>
      </Menu>

</Box>
    </Box>}
    
   </header>
  )
}
