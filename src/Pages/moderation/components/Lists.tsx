import { useState,useEffect } from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ErrorIcon from '@mui/icons-material/Error';
import GroupIcon from '@mui/icons-material/Group';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PaidIcon from '@mui/icons-material/Paid';
import LanguageIcon from '@mui/icons-material/Language';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import SettingsIcon from '@mui/icons-material/Settings';
import { useLocation, useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import Icon from '@mdi/react';
import { mdiMonitorDashboard } from '@mdi/js';
import { mdiCardAccountDetails } from '@mdi/js';
import Chip from '@mui/material/Chip'

export const Lists = ({seller,loading,loading1,signale}:any) => {

    const navigate=useNavigate()

    const [count,setCount]=useState(0)
  
    const location=useLocation()
  
    useEffect(()=>{
      if (location.pathname == '/controlpanelmoderate') {
        setCount(0)
      }if (location.pathname == '/controlpanelmoderate/dashboard') {
        setCount(0)
      }if (location.pathname == '/controlpanelmoderate/sellers') {
        setCount(1)
      }if (location.pathname == '/controlpanelmoderate/customers') {
        setCount(2)
      }if (location.pathname == '/controlpanelmoderate/signale') {
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

    if (loading == true) return <div>...loading</div>

    const navLinks= [
      {id:0,name:"Dashbord",icons:<Icon path={mdiMonitorDashboard} size={1} />,url:'/controlpanelmoderate/dashboard',tolip:"Dashbord"},
      {id:1,name:"Sellers",icons:<Badge badgeContent={seller.filter((sale:any)=>sale.role == "seller attente2").length} color="warning"><Icon path={mdiCardAccountDetails} size={1} /></Badge>,url:'/controlpanelmoderate/sellers',tolip:"Explore Sellers"},
      {id:2,name:"Customers",icons:<GroupIcon/>,url:'/controlpanelmoderate/customers',tolip:"find customers"},
      {id:3,name:"Signale",icons:<Badge badgeContent={ signale.length === 0 ? signale.length : `${signale.length}`} color="warning"><ErrorIcon /></Badge>,url:'/controlpanelmoderate/signale',tolip:"article signalez"},
    ]



  return (
    <Box sx={{ width: '100%', maxWidth: 360,height:'100%', bgcolor: 'background.paper' }}>
    <nav aria-label="main mailbox folders">
      <List>
      
      
      { navLinks.map( nav => <ListItem key={nav.id} sx={{display:'flex',justifyContent:'center',mb:1}} disablePadding>
         <Tooltip title={nav.tolip}>
         <Chip
                label={nav.name}
                color={ count == nav.id ? 'info' : 'default' }
                icon={nav.icons}
                component="button"
                onClick={()=>navigate(nav.url)}
                sx={{
                  height: "50px",
                  width:'94%',
                  fontWeight: 700,
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
