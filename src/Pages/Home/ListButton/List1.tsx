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

export default function List1() {
  return (
    <Box sx={{ width: '100%',position:'absolute',zIndex:1,top:35,left:0, bgcolor: '#eeeeee',borderRadius:'12px' }}>
    <nav aria-label="main mailbox folders">
      <List>
        <ListItem  disablePadding>
          <ListItemButton sx={{":hover":{bgcolor:'background.paper'}}} >
            <ListItemText sx={{color:'#212121'}} primary="Inbox" />
          </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
          <ListItemButton sx={{":hover":{bgcolor:'background.paper'}}} >
            <ListItemText sx={{color:'#212121'}} primary="Drafts" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
    <Divider sx={{color:'#212121'}} />
    <nav  aria-label="secondary mailbox folders">
      <List>
        <ListItem  disablePadding>
          <ListItemButton sx={{":hover":{bgcolor:'background.paper'}}} >
            <ListItemText sx={{color:'#212121'}} primary="Trash" />
          </ListItemButton>
        </ListItem>
        <ListItem  disablePadding>
          <ListItemButton sx={{":hover":{bgcolor:'background.paper'}}} component="a" href="#simple-list">
            <ListItemText sx={{color:'#212121'}} primary="Spam" />
          </ListItemButton>
        </ListItem>
      </List>
    </nav>
  </Box>
  )
}
