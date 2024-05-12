import React from 'react'
import { Box} from '@mui/material'
import { Lists } from './components/Lists'
import { Header } from './components/Header'
import { DashbordModerate } from './components/Dashbord/DashbordModerate'
import { useLocation } from 'react-router-dom'

export const ControlPanelModerate = () => {

    const location=useLocation()

  return (
    <Box sx={{bgcolor:'#fafafa'}} >
    <Header/>
    <Box sx={{display:'flex',width:'100%',mb:2,height:'100vh',position:'fixed',bgcolor:'#e0e0e0'}} >
      <Box sx={{width:'15%',bgcolor:'Window',height:'100vh'}} >
        <Lists />
      </Box>
      <Box sx={{width:'85%',height:'100vh',position:'relative',overflowY:'auto',px:2}} >
      { location.pathname == '/controlpanelmoderate/dashboard' ? <DashbordModerate/> : "" }
      </Box>
    </Box>

     
    </Box>
  )
}
