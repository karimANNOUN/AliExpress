import React from 'react'
import { Box,IconButton,Typography } from '@mui/material'
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';

export const BoxProduct = ({prod}:any) => {

    
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };


  return (
    <Box  sx={{display:'flex',border:'2px solid #e0e0e0',mb:2,borderRadius:'8px',height:'120px',width:'100%'}} >
            <img src='https://ecommerce-admin.com/assets/images/main.webp' alt='prod' style={{width:'20%',borderRadius:'8px'}} />
            <Box sx={{width:'80%',display:'flex',flexDirection:'column'}} >
                <Box sx={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center'}} >
              
                <Link href="#" underline="none" sx={{color:'#757575'}} >
    Product Title
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

                </Box>

                <Typography sx={{fontWeight:'800',textAlign:'left',color:'#bdbdbd',my:2}} variant='body2' gutterBottom>
    3000 commande
    </Typography>
           
            </Box>
        </Box>
  )
}
