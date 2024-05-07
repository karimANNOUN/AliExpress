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
import ReviewsIcon from '@mui/icons-material/Reviews';
import PaidIcon from '@mui/icons-material/Paid';
import LanguageIcon from '@mui/icons-material/Language';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';

export const Lists = ({order}:any) => {

  const navigate=useNavigate()

  const [count,setCount]=useState(0)

  const location=useLocation()

  useEffect(()=>{
    if (location.pathname == '/controlpanelseller') {
      setCount(0)
    }if (location.pathname == '/controlpanelseller/dashboard') {
      setCount(0)
    }if (location.pathname == '/controlpanelseller/products') {
      setCount(1)
    }if (location.pathname == '/controlpanelseller/orders') {
      setCount(2)
    }if (location.pathname == '/controlpanelseller/customers') {
      setCount(3)
    }if(location.pathname == '/controlpanelseller/reviews') {
      setCount(4)
    }if(location.pathname == '/controlpanelseller/transactions') {
      setCount(5)
    }if(location.pathname == '/controlpanelseller/storeSettings') {
      setCount(6)
    }if(location.pathname == '/controlpanelseller/hotoffres') {
      setCount(7)
    }if(location.pathname == '/controlpanelseller/settings' ) {
      setCount(8)
    }           

  },[location])

  return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <nav aria-label="main mailbox folders">
      <List>
      
      
         <ListItem sx={count == 0 ? {color:'#1976d2' ,bgcolor:'#90caf9'} : {}} disablePadding>
         <ListItemButton onClick={()=>navigate('/controlpanelseller/dashboard')} >
           <ListItemIcon >
             <DashboardIcon />
           </ListItemIcon>
           <ListItemText primary="Dashbord" />
         </ListItemButton>
       </ListItem>
     

       

        <ListItem sx={count == 1 ? {color:'#1976d2' ,bgcolor:'#90caf9'} : {}} disablePadding>
          <ListItemButton onClick={()=>navigate('/controlpanelseller/products')} >
            <ListItemIcon>
              <Inventory2Icon />
            </ListItemIcon>
            <ListItemText primary="Products" />
          </ListItemButton>
        </ListItem>

     


        <ListItem sx={count == 2 ? {color:'#1976d2' ,bgcolor:'#90caf9'} : {}} disablePadding>
        <Tooltip title="order en attente">
          <ListItemButton onClick={()=>navigate('/controlpanelseller/orders')} >
            <ListItemIcon>
            <Badge badgeContent={order.filter((ordr:any)=> ordr.state == "En Attente").length} color="info">
              <ShoppingCartIcon />
              </Badge>
            </ListItemIcon>
            <ListItemText primary="Orders" />
          </ListItemButton>
          </Tooltip>
        </ListItem>
       


        <ListItem sx={count == 3 ? {color:'#1976d2' ,bgcolor:'#90caf9'} : {}} disablePadding>
          <ListItemButton onClick={()=>navigate('/controlpanelseller/customers')} >
            <ListItemIcon>
              <GroupIcon />
            </ListItemIcon>
            <ListItemText primary="Customers" />
          </ListItemButton>
        </ListItem>
      


        <ListItem sx={ count == 4 ? {color:'#1976d2' ,bgcolor:'#90caf9'} : {} } disablePadding>
          <ListItemButton onClick={()=>navigate('/controlpanelseller/reviews')} >
            <ListItemIcon>
              <ReviewsIcon />
            </ListItemIcon>
            <ListItemText primary="Reviews" />
          </ListItemButton>
        </ListItem>


        <ListItem sx={ count == 5 ? {color:'#1976d2' ,bgcolor:'#90caf9'} : {}}  disablePadding>
          <ListItemButton onClick={()=>navigate('/controlpanelseller/transactions')}  >
            <ListItemIcon>
              <PaidIcon />
            </ListItemIcon>
            <ListItemText primary="Transactions" />
          </ListItemButton>
        </ListItem> 
        

        <ListItem sx={ count == 6 ? {color:'#1976d2' ,bgcolor:'#90caf9'} : {}} disablePadding>
          <ListItemButton onClick={()=>navigate('/controlpanelseller/storeSettings')} >
            <ListItemIcon>
              <LanguageIcon />
            </ListItemIcon>
            <ListItemText primary="Store" />
          </ListItemButton>
        </ListItem>

        <ListItem sx={ count == 7 ? {color:'#1976d2' ,bgcolor:'#90caf9'} : {}} disablePadding>
          <ListItemButton onClick={()=>navigate('/controlpanelseller/hotoffres')} >
            <ListItemIcon>
              <AssignmentTurnedInIcon />
            </ListItemIcon>
            <ListItemText primary="Hot Offres" />
          </ListItemButton>
        </ListItem>

        <Divider />


        <ListItem sx={ count == 8 ? {color:'#1976d2' ,bgcolor:'#90caf9'} : {}} disablePadding>
          <ListItemButton onClick={()=>navigate('/controlpanelseller/settings')} >
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
