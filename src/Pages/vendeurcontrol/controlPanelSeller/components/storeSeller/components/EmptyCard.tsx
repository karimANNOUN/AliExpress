import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ControlPointDuplicateIcon from '@mui/icons-material/ControlPointDuplicate';
import { IconButton } from '@mui/material';
import { useState } from 'react';
import { ModalSecondImages } from './ModalSecondImages';

export const EmptyCard = ({setNewProdUsed}:any) => {

  const [openModal1, setOpenModal1] = useState(false);
  const handleOpen = () =>{
    setOpenModal1(true)
}

  return (
   
    <Box  sx={{width:'30%',height:'200px',display:'flex',bgcolor:'Window',justifyContent:'center',flexDirection:'column',alignItems:'center',borderWidth:'2px',borderRadius:'6px',borderStyle:'solid',borderColor:'#ffd600'}} >
   
      <IconButton onClick={handleOpen} >
        <ControlPointDuplicateIcon sx={{fontSize:'80px'}} />
      </IconButton>
    
    <Typography sx={{fontWeight:'500',mt:2,color:'#757575'}} variant='subtitle1' gutterBottom>
    Add Your une Product
</Typography>

<ModalSecondImages openModal1={openModal1} setOpenModal1={setOpenModal1} setNewProdUsed={setNewProdUsed}  />
   
 </Box>

  )
}
