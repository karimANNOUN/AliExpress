import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
export const SecondCategoryCard = ({setExpands,setSecond,setShows,setHovers}:any) => {
  return (
    <div onMouseEnter={()=>(setExpands(true),setSecond(true),setShows(true))} onMouseLeave={()=>(setExpands(false),setSecond(false),setShows(false))} style={{position:'absolute',zIndex:2,top:'50%',left:'98%'}} >
    <Box  sx={{width:'260px',borderStyle:'solid',bgcolor:'Window',borderColor:'#eeeeee',borderRadius:'8px'}} >
           <List>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>setHovers(1)} >
              <ListItemText  secondaryTypographyProps={{color:'#4fc3f7'}} sx={{fontSize:'12px'}} secondary="Chaussure pour ..." />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={()=>setHovers(1)} >
              <ListItemText  secondaryTypographyProps={{color:'#4fc3f7'}} secondary="Chaussure en cuire" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={()=>setHovers(1)} >
              <ListItemText  secondaryTypographyProps={{color:'#4fc3f7'}} secondary="Chaussure en polyster" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={()=>setHovers(1)} >
              <ListItemText  secondaryTypographyProps={{color:'#4fc3f7'}} secondary="Chaussure pour ..." />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton onClick={()=>setHovers(1)} >
              <ListItemText  secondaryTypographyProps={{color:'#4fc3f7'}} secondary="Chaussure pour ..." />
            </ListItemButton>
          </ListItem>

        </List>
    </Box>
    </div>
  )
}
