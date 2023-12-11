import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import { FirstCardModal } from './FirstCardModal';
import { ImageCardModal } from './ImageCardModal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
export const CardModalProduct = ({setOpen,open}:any) => {

    const style = {
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height:'65%',
        bgcolor: 'background.paper',
        border: '2px solid #eeeeee',
        borderRadius:'8px',
        boxShadow: 24,
        p: 4,
      };

      const handleClose = () => setOpen(false);


      const catergories=[
        {id:1,name:'mobile,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:2,name:'mahdi,phone',image:'https://i.pinimg.com/236x/ba/ba/08/baba08b6e1e35b3e896f60a5249a3698.jpg'},
        {id:3,name:'ishak,phone',image:'https://i.pinimg.com/236x/a0/7a/89/a07a89d110a22a768e4f357f7513d654.jpg'},
        {id:4,name:'kikou,phone',image:'https://i.pinimg.com/236x/8f/56/3b/8f563b2de19b659a5136c288681b2b53.jpg'},
        {id:5,name:'toka,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:6,name:'papa,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:7,name:'marwa,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:8,name:'mama,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:9,name:'lycra,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:10,name:'chihani,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:11,name:'ben mhidi,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        {id:12,name:'ghoza,phone',image:'https://i.pinimg.com/564x/18/0b/fc/180bfc529bacc50526cf29643040f7a8.jpg'},
        
    ]

    const sizes=[
        {id:1,number:39},{id:2,number:40},{id:3,number:41},{id:4,number:42},{id:5,number:43},{id:6,number:44},{id:7,number:45},{id:8,number:46},{id:9,number:47},{id:10,number:48},
        
    ]


  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box sx={{display:'flex',justifyContent:'space-around'}} >


<Box sx={{display:'flex',flexDirection:'column'}} >
<FirstCardModal sizes={sizes} catergories={catergories}  />


</Box>




<Box sx={{width:'300px',height:'530px',borderRadius:'10px',borderStyle:'solid',borderColor:'#eeeeee',display:'flex',justifyContent:'center',alignItems:'center'}} >
   <ImageCardModal setOpen={setOpen} />
</Box>

</Box>
<IconButton onClick={handleClose} sx={{bgcolor:'#424242',":hover":{bgcolor:'#424242'},position:'absolute',top:'-2%',right:'-1%'}} > <CloseIcon sx={{fontSize:'15px',color:'white'}} /> </IconButton>
        </Box>
      </Modal>
    </div>
  )
}
