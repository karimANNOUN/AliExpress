import { Box,IconButton,Typography } from '@mui/material'
import { Header } from './components/Header'
import { Lists } from './components/Lists'
import { Dashbord } from './components/Dashbord';
import { useLocation } from 'react-router-dom';


export const ControlPanelSeller = () => {

   const location=useLocation()




  return (
    <Box sx={{bgcolor:'#e0e0e0'}} >
    <Header/>
    <Box sx={{display:'flex',width:'100%',height:'100vh'}} >
      <Box sx={{width:'15%',bgcolor:'Window',height:'100%'}} >
        <Lists/>
      </Box>
      <Dashbord/>
    </Box>

     
    </Box>
  )
}
