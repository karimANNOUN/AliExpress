import React,{ useState } from 'react'
import { Box,IconButton,Typography } from '@mui/material'
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import { setProductSeller } from '../../../../storeRedux/CartSlice';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

export const BoxProduct = ({prod,setProductsSeller}:any) => {

    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const [loading,setLoading]=useState(false)


    const navigate=useNavigate()

    const token = Cookies.get('token');
   

    const [message,setMessage]=useState('')
    const [alert,setAlert]=useState(false)
  
  
    const [openAlert, setOpenAlert] = useState(false);
   
    const handleCloseAlert = (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpenAlert(false);
    };
 
    
    const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
     props,
     ref,
   ) {
     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
   
     
   });


    const handelDeleteProduct=async()=>{
      try {
       
      const response = await fetch(`http://localhost:8000/deleteproduct`,{
        method: 'Delete',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        },
       body:JSON.stringify({ prod }),
      });
      const data = await response.json()
      if (!data) {
        setLoading(true)
      }if (data.success == false) {
        setOpenAlert(true)
        setAlert(false)
        setMessage(data.message)
      }if (data.success == true) {
        setOpenAlert(true)
        setAlert(true)
        setMessage(data.message)
        setProductsSeller(data.productSeller)
        setLoading(false)
        handleClose()
        setLoading(false) 
      } 
  
    } catch (error) {
      console.error('operation failed.');
    }
     
    }


  return (
    <Box  sx={{display:'flex',border:'2px solid #e0e0e0',mb:2,borderRadius:'8px',height:'120px',width:'100%'}} >

<Snackbar open={openAlert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleCloseAlert} severity={ alert == false ? "error" : "success" } sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>

            <img src={prod.images[0].imageUrl} alt='prod' style={{width:'20%',borderRadius:'8px'}} />
            <Box sx={{width:'80%',display:'flex',flexDirection:'column'}} >
                <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
              
                <Link href={`/controlpanelseller/updateproduct/${prod.id}`} underline="none" sx={{color:'#757575'}} >
    {prod.title},{prod.description}
    </Link>
    
    
    <IconButton onClick={handleClick} >
    <MoreHorizIcon sx={{fontSize:'20px'}} />
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
        <MenuItem onClick={handelDeleteProduct}>Delete Product</MenuItem>
        <MenuItem onClick={()=>navigate(`/controlpanelseller/updateproduct/${prod.id}`)}>Update Product</MenuItem>
        
      </Menu>

                </Box>

                <Typography sx={{fontWeight:'800',textAlign:'left',color:'#bdbdbd',my:2}} variant='body2' gutterBottom>
    3000 commande
    </Typography>
           
            </Box>
        </Box>
  )
}
