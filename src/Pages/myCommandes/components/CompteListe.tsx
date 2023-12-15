import React,{useState} from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import ListSubheader from '@mui/material/ListSubheader';
export const CompteListe = () => {
 
    const [active,setActive]=useState(0)


  return (
    <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
    <nav aria-label="main mailbox folders">
      <List
      component="nav"
      sx={{position:'relative'}}
subheader={
  <ListSubheader sx={{textAlign:'left',fontWeight:'700',zIndex:0,position:'relative'}} disableSticky component="div" id="nested-list-subheader">
     Compte
  </ListSubheader>
}
>
      
        { active === 0 ? <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>setActive(0)} >
            <ListItemText  primary="Aperçu général" />
          </ListItemButton>
        </ListItem> :
        
      

         <ListItem  disablePadding>
        <ListItemButton onClick={()=>setActive(0)} >
          <ListItemText  primary="Aperçu général" />
        </ListItemButton>
      </ListItem> }



   { active === 1 ?    <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding> 

          <ListItemButton onClick={()=>setActive(1)} >
            <ListItemText primary="Commandes" />
          </ListItemButton>
        </ListItem> : 
        
        <ListItem disablePadding> 

        <ListItemButton onClick={()=>setActive(1)} >
          <ListItemText primary="Commandes" />
        </ListItemButton>
      </ListItem>

        }
 
 { active === 2 ?   <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>setActive(2)} >
            <ListItemText primary="Paiement" />
          </ListItemButton>
        </ListItem> : 
        <ListItem disablePadding>
        <ListItemButton onClick={()=>setActive(2)} >
          <ListItemText primary="Paiement" />
        </ListItemButton>
      </ListItem>}


      { active === 3 ?  <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>setActive(3)} >
            <ListItemText primary="Remboursements et retours" />
          </ListItemButton>
        </ListItem> :
         <ListItem disablePadding>
         <ListItemButton onClick={()=>setActive(3)} >
           <ListItemText primary="Remboursements et retours" />
         </ListItemButton>
       </ListItem>
        }

{ active === 4 ?   <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>setActive(4)} >
            <ListItemText primary="Avis" />
          </ListItemButton>
        </ListItem> :
        <ListItem disablePadding>
        <ListItemButton onClick={()=>setActive(4)} >
          <ListItemText primary="Avis" />
        </ListItemButton>
      </ListItem>
        }

{ active === 5 ?     <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>setActive(5)} >
            <ListItemText primary="Paramètres" />
          </ListItemButton  >
        </ListItem> 
        : 
        <ListItem disablePadding>
          <ListItemButton onClick={()=>setActive(5)} >
            <ListItemText primary="Paramètres" />
          </ListItemButton>
        </ListItem> 
        }

{ active === 6 ?    <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>setActive(6)} >
            <ListItemText primary="Adresse de livraison" />
          </ListItemButton>
        </ListItem> :
         <ListItem  disablePadding>
         <ListItemButton onClick={()=>setActive(6)} >
           <ListItemText primary="Adresse de livraison" />
         </ListItemButton>
       </ListItem> 
        }

{ active === 7 ?    <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>setActive(7)} >
            <ListItemText primary="Service client" />
          </ListItemButton>
        </ListItem> :
         <ListItem disablePadding>
         <ListItemButton onClick={()=>setActive(7)} >
           <ListItemText primary="Service client" />
         </ListItemButton>
       </ListItem>
        }

      
 
 
 
 
      </List>
    </nav>
  
  </Box>
  )
}
