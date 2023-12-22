import {useState} from 'react'
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import QrCode2Icon from '@mui/icons-material/QrCode2';
import {  IconButton } from '@mui/material';
import Link from '@mui/material/Link';
import {useNavigate,useLocation} from 'react-router-dom'
export const CompteListe = () => {
 
const location=useLocation()
    const active=()=>{
      if(location.pathname == '/home/commandes'){
          return 0
       }if(location.pathname == '/p/orders'){
          return 1
       }if(location.pathname == '/p/paiments'){
          return 2
       }if (location.pathname == '/p/refund-dispute') {
           return 3
       }if (location.pathname == '/avis/feedback') {
        return 4
    }if (location.pathname == '/settings') {
      return 5
  }if (location.pathname == '/adress/livraison') {
      return 6
  }if (location.pathname == '/serviceclient') {
    return 7
}
          
       }
       const [hovers,setHovers]=useState(active) 



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
      
        { hovers === 0 ? <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>(setHovers(0) , navigate("/home/commandes") )} >
            <ListItemText  primary="Aperçu général" />
          </ListItemButton>
        </ListItem> :
        
      

         <ListItem  disablePadding>
        <ListItemButton onClick={()=>(setHovers(0) , navigate("/home/commandes") )}  >
          <ListItemText  primary="Aperçu général" />
        </ListItemButton>
      </ListItem> }



   { hovers === 1 ?    <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding> 

          <ListItemButton onClick={()=>(setHovers(1) , navigate("/p/orders") )}  >
            <ListItemText primary="Commandes" />
          </ListItemButton>
        </ListItem> : 
        
        <ListItem disablePadding> 

        <ListItemButton onClick={()=>(setHovers(1) , navigate("/p/orders") )}  >
          <ListItemText primary="Commandes" />
        </ListItemButton>
      </ListItem>

        }
 
 { hovers === 2 ?   <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>(setHovers(2),navigate("/p/paiments"))} >
            <ListItemText primary="Paiement" />
          </ListItemButton>
        </ListItem> : 
        <ListItem disablePadding>
        <ListItemButton onClick={()=>(setHovers(2),navigate("/p/paiments"))}>
          <ListItemText primary="Paiement" />
        </ListItemButton>
      </ListItem>}


      { hovers === 3 ?  <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>(setHovers(3),navigate("/p/refund-dispute"))} >
            <ListItemText primary="Remboursements et retours" />
          </ListItemButton>
        </ListItem> :
         <ListItem disablePadding>
         <ListItemButton onClick={()=>(setHovers(3),navigate("/p/refund-dispute"))} >
           <ListItemText primary="Remboursements et retours" />
         </ListItemButton>
       </ListItem>
        }

{ hovers === 4 ?   <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={(()=>(setHovers(4),navigate("/avis/feedback")))} >
            <ListItemText primary="Avis" />
          </ListItemButton>
        </ListItem> :
        <ListItem disablePadding>
        <ListItemButton onClick={(()=>(setHovers(4),navigate("/avis/feedback")))} >
          <ListItemText primary="Avis" />
        </ListItemButton>
      </ListItem>
        }

{ hovers === 5 ?     <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>(setHovers(5),navigate("/settings"))} >
            <ListItemText primary="Paramètres" />
          </ListItemButton  >
        </ListItem> 
        : 
        <ListItem disablePadding>
          <ListItemButton onClick={()=>(setHovers(5),navigate("/settings"))} >
            <ListItemText primary="Paramètres" />
          </ListItemButton>
        </ListItem> 
        }

{ hovers === 6 ?    <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>(setHovers(6),navigate("/adress/livraison"))} >
            <ListItemText primary="Adresse de livraison" />
          </ListItemButton>
        </ListItem> :
         <ListItem  disablePadding>
         <ListItemButton  onClick={()=>(setHovers(6),navigate("/adress/livraison"))} >
           <ListItemText primary="Adresse de livraison" />
         </ListItemButton>
       </ListItem> 
        }

{ hovers === 7 ?    <ListItem sx={{ borderLeft: '3px solid #f44336' }} disablePadding>
          <ListItemButton onClick={()=>(setHovers(7),navigate("/serviceclient"))} >
            <ListItemText primary="Service client" />
          </ListItemButton>
        </ListItem> :
         <ListItem disablePadding>
         <ListItemButton  onClick={()=>(setHovers(7),navigate("/serviceclient"))} >
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
