import React,{useState} from 'react'
import Box from '@mui/material/Box';
import { Header } from './Components/Header/Header';
import { NameStore } from './Components/Header/NameStore';

export const ProfilBayer = () => {
   
  return (
    <div>
        <Box sx={{display:'flex',flexDirection:'column',alignItems:'center'}} >
        <Header/>
        <NameStore/>
        </Box>
    </div>
  )
}
