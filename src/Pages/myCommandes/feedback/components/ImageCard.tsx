import React, { useState } from 'react'
import { UpdateImageComment } from './UpdateImageComment';
import CreateIcon from '@mui/icons-material/Create';
import Tooltip from '@mui/material/Tooltip';
import {  Box, IconButton } from '@mui/material';

export const ImageCard = ({imge,setMessage,setOpens,setIsError,setCommandes}:any) => {

    const [openImage,setOpenImage]=useState(false)
    const handleOpenImage = () => setOpenImage(true);

  return (
    <Box  sx={{width:'22%',mr:1,height:'50px',borderRadius:'8px',position:'relative'}} >
    <img  src={imge.imageUrl} style={{width:'100%',height:'100%',borderRadius:'8px'}} />
    <Tooltip title="Update Image">
    <IconButton onClick={handleOpenImage} sx={{position:'absolute',bgcolor:'#9e9e9e',":hover":{bgcolor:'#9e9e9e'},top:0,right:0}} >
     <CreateIcon sx={{fontSize:'12px'}} />
    </IconButton>
    </Tooltip>
    <UpdateImageComment openImage={openImage} setOpenImage={setOpenImage} setIsError={setIsError} setMessage={setMessage} setOpens={setOpens} setCommandes={setCommandes} img={imge} />
  </Box>
  )
}
