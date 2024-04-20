import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import GroupIcon from '@mui/icons-material/Group';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PaidIcon from '@mui/icons-material/Paid';
import LanguageIcon from '@mui/icons-material/Language';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import BrushIcon from '@mui/icons-material/Brush';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation, useNavigate } from 'react-router-dom';

export const Lists = () => {

  const navigate=useNavigate()

  const [count,setCount]=useState(0)

  const location=useLocation()

  useEffect(()=>{

    if (location.pathname == '/controlpanelseller/dashboard') {
      setCount(0)
    }if (location.pathname == '/controlpanelseller/products') {
      setCount(1)
    }if (location.pathname == '/controlpanelseller/orders') {
      setCount(2)
    }if (location.pathname == '/controlpanelseller/customers') {
      setCount(3)
    }    

  },[location])

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <nav aria-label="main mailbox folders">
      <List>
      
      { count == 0 ? 
         <ListItem sx={{color:'#1976d2' ,bgcolor:'#90caf9'}} disablePadding>
         <ListItemButton onClick={()=>navigate('/controlpanelseller/dashboard')} >
           <ListItemIcon >
             <DashboardIcon />
           </ListItemIcon>
           <ListItemText primary="Dashbord" />
         </ListItemButton>
       </ListItem>
      :
      <ListItem  disablePadding>
      <ListItemButton onClick={()=>navigate('/controlpanelseller/dashboard')} >
        <ListItemIcon >
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashbord" />
      </ListItemButton>
    </ListItem>
      
      }
       

       { count == 1 ? 

        <ListItem sx={{color:'#1976d2' ,bgcolor:'#90caf9'}} disablePadding>
          <ListItemButton onClick={()=>navigate('/controlpanelseller/products')} >
            <ListItemIcon>
              <Inventory2Icon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
        </ListItem>

        :
         
        <ListItem  disablePadding>
        <ListItemButton onClick={()=>navigate('/controlpanelseller/products')} >
          <ListItemIcon>
            <Inventory2Icon />
          </ListItemIcon>
          <ListItemText primary="Products" />
        </ListItemButton>
      </ListItem>
        
        }

{ count == 2 ? 
        <ListItem sx={{color:'#1976d2' ,bgcolor:'#90caf9'}} disablePadding>
          <ListItemButton onClick={()=>navigate('/controlpanelseller/orders')} >
            <ListItemIcon>
              <ShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
        </ListItem>
        :
        
        <ListItem disablePadding>
        <ListItemButton onClick={()=>navigate('/controlpanelseller/orders')} >
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary="Orders" />
        </ListItemButton>
      </ListItem>
        
        
        }

{ count == 3 ? 
        <ListItem sx={{color:'#1976d2' ,bgcolor:'#90caf9'}} disablePadding>
          <ListItemButton onClick={()=>navigate('/controlpanelseller/customers')} >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItemButton>
        </ListItem>
        :
        <ListItem disablePadding>
          <ListItemButton onClick={()=>navigate('/controlpanelseller/customers')} >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItemButton>
        </ListItem>
        
        
        }

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LeaderboardIcon />
            </ListItemIcon>
            <ListItemText primary="Statistics" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <ReviewsIcon />
            </ListItemIcon>
            <ListItemText primary="Reviews" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <PaidIcon />
            </ListItemIcon>
            <ListItemText primary="Transactions" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary="Sellers" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText primary="Hot Offres" />
          </ListItemButton>
        </ListItem>

        <Divider />

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <BrushIcon />
            </ListItemIcon>
            <ListItemText primary="Appearance" />
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <SettingsIcon />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
        </ListItem>

      </List>
    </nav>
  </Box>
  )
}
