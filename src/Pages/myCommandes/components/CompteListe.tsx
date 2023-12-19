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
import Typography from '@mui/material/Typography';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import {  IconButton } from '@mui/material';
import Link from '@mui/material/Link';
import { useNavigate } from 'react-router-dom';
export const CompteListe = () => {
 
    const [active,setActive]=useState(0)

    const navigate=useNavigate()

  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'23%',my:2}} >
                <Box sx={{width:'100%'}} >
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
          <ListItemButton onClick={()=>(setActive(0) , navigate("/home/commandes") )} >
            <ListItemText  primary="Aperçu général" />
          </ListItemButton>
        </ListItem> :
        
      

         <ListItem  disablePadding>
        <ListItemButton onClick={()=>(setActive(0) , navigate("/home/commandes") )}  >
          <ListItemText  primary="Aperçu général" />
        </ListItemButton>
      </ListItem> }



   { active === 1 ?    <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding> 

          <ListItemButton onClick={()=>(setActive(1) , navigate("/p/orders") )}  >
            <ListItemText primary="Commandes" />
          </ListItemButton>
        </ListItem> : 
        
        <ListItem disablePadding> 

        <ListItemButton onClick={()=>(setActive(1) , navigate("/p/orders") )}  >
          <ListItemText primary="Commandes" />
        </ListItemButton>
      </ListItem>

        }
 
 { active === 2 ?   <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>(setActive(2),navigate("/p/paiments"))} >
            <ListItemText primary="Paiement" />
          </ListItemButton>
        </ListItem> : 
        <ListItem disablePadding>
        <ListItemButton onClick={()=>(setActive(2),navigate("/p/paiments"))}>
          <ListItemText primary="Paiement" />
        </ListItemButton>
      </ListItem>}


      { active === 3 ?  <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>(setActive(3),navigate("/p/refund-dispute"))} >
            <ListItemText primary="Remboursements et retours" />
          </ListItemButton>
        </ListItem> :
         <ListItem disablePadding>
         <ListItemButton onClick={()=>(setActive(3),navigate("/p/refund-dispute"))} >
           <ListItemText primary="Remboursements et retours" />
         </ListItemButton>
       </ListItem>
        }

{ active === 4 ?   <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={(()=>(setActive(4),navigate("/avis/feedback")))} >
            <ListItemText primary="Avis" />
          </ListItemButton>
        </ListItem> :
        <ListItem disablePadding>
        <ListItemButton onClick={(()=>(setActive(4),navigate("/avis/feedback")))} >
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
          <ListItemButton onClick={()=>(setActive(6),navigate("/adress/livraison"))} >
            <ListItemText primary="Adresse de livraison" />
          </ListItemButton>
        </ListItem> :
         <ListItem  disablePadding>
         <ListItemButton  onClick={()=>(setActive(6),navigate("/adress/livraison"))} >
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
  </Box>
                <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',bgcolor:'Window',py:2,mt:2}} >
                <Typography sx={{fontWeight:'600'}}  variant='body2' gutterBottom>
                Application mobile AliExpress
</Typography>

<Typography sx={{fontWeight:'300',color:'#9e9e9e'}}  variant='caption' gutterBottom>
Explorez n'importe où, n'importe quand !
</Typography>

<IconButton sx={{bgcolor:'Window',":hover":{bgcolor:'Window'}}} >
    <QrCode2Icon sx={{fontSize:'120px'}} />
</IconButton>

<Link variant='caption' sx={{color:'#9e9e9e',":hover":{color:'#f44336'}}} href="#" underline="none">
Scannez le code ou cliquez ici pour télécharger
</Link>


                </Box>
           </Box>
  )
}
