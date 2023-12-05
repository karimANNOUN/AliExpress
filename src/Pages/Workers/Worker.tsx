import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { Header } from './components/Header';
import { PersonelCard } from './components/PersonelCard';
export const Worker = () => {
  return (
    <div>
        <Box sx={{}} >
          <Header/>
          <PersonelCard/>
        </Box>
    </div>
  )
}
