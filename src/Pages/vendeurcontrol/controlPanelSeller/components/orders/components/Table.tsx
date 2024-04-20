import { Box,IconButton,Typography } from '@mui/material'
import  { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Cookies from 'js-cookie';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ModalOrdersDetails } from './ModalOrdersDetails';

export const Table = ({ord,setOrder}:any) => {


    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };



    const [opens, setOpens] = useState(false);
  const handleOpen = () => setOpens(true);


  return (
    <Box   sx={{display:'flex',width:'100%',height:'15px',mb:2,alignItems:'center',justifyContent:'space-between'}} >
        <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
        <Typography sx={{fontWeight:'100',textAlign:'left'}} variant='subtitle2' gutterBottom>
    {ord.id}
    </Typography>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'500',textAlign:'left'}} variant='subtitle2' gutterBottom>
    {ord.commande.buyer.name}
    </Typography>
    </Box>
    <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'100',textAlign:'left'}} variant='subtitle2' gutterBottom>
    {ord.commande.buyer.email}
    </Typography>
     </Box>
     <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'100',textAlign:'left'}} variant='subtitle2' gutterBottom>
    $ {ord.priceProduct*ord.quantity}
    </Typography>
     </Box>

     <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    { ord.state == "terminees" ? <Typography sx={{fontWeight:'100',bgcolor:'#c8e6c9',color:'#66bb6a',textAlign:'left'}} variant='subtitle2' gutterBottom>
    Dilvred
    </Typography> : "" }
   

    
    { ord.state == "non paye" ? <Typography sx={{fontWeight:'100',bgcolor:'#ffcdd2',color:'#d50000',textAlign:'left'}} variant='subtitle2' gutterBottom>
    Cancelled
    </Typography> : "" }
   

    
    { ord.state == "expédiée" ? <Typography sx={{fontWeight:'100',bgcolor:'#bbdefb',color:'#0d47a1',textAlign:'left'}} variant='subtitle2' gutterBottom>
    expédiée
    </Typography> : "" }
  

     
    { ord.state == "En Attente" ? <Typography sx={{fontWeight:'100',bgcolor:'#fff9c4',color:'#ffd600',textAlign:'left'}} variant='subtitle2' gutterBottom>
    Pending
    </Typography> : "" }
     </Box>

     <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'100',textAlign:'left'}} variant='subtitle2' gutterBottom>
     {ord.commande.createdAt}
    </Typography>
      </Box>

      <Box sx={{display:'flex',alignItems:'center',justifyContent:'flex-end',width:'14%'}} >
       <IconButton onClick={handleClick} >
        <MoreVertIcon sx={{fontSize:'16px'}} />
       </IconButton>
      </Box>


      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleOpen}>Détails</MenuItem>
      </Menu>

      <ModalOrdersDetails opens={opens} setOpens={setOpens} setAnchorEl={setAnchorEl} ord={ord} setOrder={setOrder} />

       </Box>
  )
}
