import React,{useState} from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Modal from '@mui/material/Modal';
import { FirstCardModal } from './FirstCardModal';
import { ImageCardModal } from './ImageCardModal';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
export const CardModalProduct = ({setOpen,open,art}:any) => {

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

      const [activeSize,setActiveSize]=useState(0)


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
<FirstCardModal activeSize={activeSize} setActiveSize={setActiveSize} art={art} />


</Box>




<Box sx={{width:'300px',height:'530px',borderRadius:'10px',borderStyle:'solid',borderColor:'#eeeeee',display:'flex',justifyContent:'center',alignItems:'center'}} >
   <ImageCardModal activeSize={activeSize} setActiveSize={setActiveSize}  setOpen={setOpen} art={art} />
</Box>

</Box>
<IconButton onClick={handleClose} sx={{bgcolor:'#424242',":hover":{bgcolor:'#424242'},position:'absolute',top:'-2%',right:'-1%'}} > <CloseIcon sx={{fontSize:'15px',color:'white'}} /> </IconButton>
        </Box>
      </Modal>
    </div>
  )
}
