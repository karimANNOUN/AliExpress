import React from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import { Box } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import DvrRoundedIcon from '@mui/icons-material/DvrRounded';
import TimeToLeaveRoundedIcon from '@mui/icons-material/TimeToLeaveRounded';
import FlashlightOnRoundedIcon from '@mui/icons-material/FlashlightOnRounded';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
export default function List2() {
  return (
    <Box sx={{ width: '100%',position:'absolute',top:35,left:0, bgcolor: '#eeeeee',borderRadius:'12px' }}>
    <nav aria-label="main mailbox folders">
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{":hover":{bgcolor:'background.paper'}}} >
            <ListItemIcon>
              <HomeRoundedIcon />
            </ListItemIcon>
            <ListItemText sx={{color:'#212121',width:'100%',height:'100%',":hover":{fontWeight:'900',color:'red'}}} primary="Maisson" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{":hover":{bgcolor:'background.paper'}}} >
            <ListItemIcon>
              <DvrRoundedIcon />
            </ListItemIcon>
            <ListItemText sx={{color:'#212121',width:'100%',":hover":{fontWeight:'900',color:'red'}}} primary="Electroménager" />
          </ListItemButton>
        </ListItem>
    
   
        <ListItem disablePadding>
          <ListItemButton sx={{":hover":{bgcolor:'background.paper'}}} >
          <ListItemIcon>
              <TimeToLeaveRoundedIcon />
            </ListItemIcon>
            <ListItemText sx={{color:'#212121',width:'100%',":hover":{fontWeight:'900',color:'red'}}} primary="Mobiler" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton sx={{":hover":{bgcolor:'background.paper'}}}>
          <ListItemIcon>
              <FlashlightOnRoundedIcon />
            </ListItemIcon>
            <ListItemText sx={{color:'#212121',width:'100%',":hover":{fontWeight:'900',color:'red'}}} primary="Eclairage" />
          </ListItemButton>
        </ListItem>


        <ListItem disablePadding>
          <ListItemButton sx={{":hover":{bgcolor:'background.paper'}}}>
          <ListItemIcon>
              <AccessibilityIcon />
            </ListItemIcon>
            <ListItemText sx={{color:'#212121',width:'100%',":hover":{fontWeight:'900',color:'red'}}} primary="Vetments" />
          </ListItemButton>
        </ListItem>

      </List>
    </nav>
  </Box>
  )
}
