import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
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
import Chip from '@mui/material/Chip'
import { useTheme } from '@mui/material/styles';

export const Lists = ({order}:any) => {

  const theme = useTheme();

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


  const navLinks= [
    {id:0,name:"Dashbord",icons:<DashboardIcon />,url:'/controlpanelseller/dashboard',tolip:"Dashbord"},
    {id:1,name:"Products",icons:<Inventory2Icon/>,url:'/controlpanelseller/products',tolip:"Explore products"},
    {id:2,name:"Orders",icons:<Badge badgeContent={order.filter((ordr:any)=> ordr.state == "En Attente").length} color="warning"><ShoppingCartIcon /></Badge>,url:'/controlpanelseller/orders',tolip:"All Orders"},
    {id:3,name:"Customers",icons:<GroupIcon />,url:'/controlpanelseller/customers',tolip:"find customers"},
    {id:4,name:"Reviews",icons:<ReviewsIcon />,url:'/controlpanelseller/reviews',tolip:"All Reviews"},
    {id:5,name:"Transactions",icons:<PaidIcon />,url:'/controlpanelseller/transactions',tolip:"Transactions Money"},
    {id:6,name:"Store",icons:<LanguageIcon />,url:'/controlpanelseller/storeSettings',tolip:"Update Your Store"},
    {id:7,name:"Ajoutez Produit",icons:<AssignmentTurnedInIcon />,url:'/controlpanelseller/hotoffres',tolip:"Add New Product"},
    {id:8,name:"Settings",icons:<SettingsIcon />,url:'/controlpanelseller/settings',tolip:"Save Your Settings"},
  ]

  return (
    <Box sx={{ width: '100%', maxWidth: 360,height:'100%', bgcolor:theme.palette.grey[100]  }}>
    <nav aria-label="main mailbox folders">
      <List>
    
         { navLinks.map( nav => <ListItem key={nav.id} sx={{display:'flex',justifyContent:'center',mb:1}} disablePadding>
         <Tooltip title={nav.tolip}>
         <Chip
                label={nav.name}
                color={ count == nav.id ? 'info' : 'default' }
                icon={nav.icons}
                component="button"
                variant={count == nav.id ? 'filled' : 'outlined'}
                onClick={()=>navigate(nav.url)}
                sx={{
                  height: "50px",
                  width:'94%',
                  fontWeight: 500,
                  display:'flex',
                  justifyContent:'flex-start',
                  fontSize:'15px',
                  '& .MuiChip-label': { px: 1.5, textTransform: 'capitalize' },
                }}
              />
              </Tooltip>
       </ListItem>)}
     
      </List>
    </nav>
  </Box>
  )
}
