import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { FirstCategoryCard } from './FirstCategoryCard';
import { SecondCategoryCard } from './SecondCategoryCard';

export const CategoryCard = ({setShows,setExpands,setHovers}:any) => {
 
    const [first,setFirst]=useState(false);
    const [second,setSecond]=useState(false)

  return (
    <div onMouseEnter={()=>(setExpands(true),setShows(true))} onMouseLeave={()=>(setExpands(false),setShows(false))} style={{position:'absolute',zIndex:2,top:'99%',left:'26.58%'}} >
    <Box sx={{width:'260px',bgcolor:'Window',borderStyle:'solid',borderColor:'#eeeeee',borderRadius:'8px'}} >
           <List>
          <ListItem onMouseEnter={()=>(setExpands(true),setShows(true),setFirst(true))} onMouseLeave={()=>(setExpands(false),setShows(false),setFirst(false))} disablePadding>
            <ListItemButton >
              <ListItemText secondaryTypographyProps={{color:'#4fc3f7'}} secondary="Chaussure pour ..." />
              <ListItemIcon>
                <ChevronRightIcon sx={{color:'#4fc3f7'}} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
          <ListItem onMouseEnter={()=>(setExpands(true),setShows(true),setSecond(true))} onMouseLeave={()=>(setExpands(false),setShows(false),setSecond(false))} disablePadding>
            <ListItemButton>
              <ListItemText secondaryTypographyProps={{color:'#4fc3f7'}} secondary="Chaussure pour ..." />
              <ListItemIcon>
                <ChevronRightIcon sx={{color:'#4fc3f7'}} />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
    </Box>
    {first ? <FirstCategoryCard setHovers={setHovers} setShows={setShows} setFirst={setFirst} setExpands={setExpands} /> : "" }
    {second ? <SecondCategoryCard setHovers={setHovers} setShows={setShows} setSecond={setSecond} setExpands={setExpands} /> : "" }
    </div>
  )
}
