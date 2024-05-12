import React from 'react'
import { Box,Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { StatisticCardModerate } from './components/StatisticCardModerate';
import { WeeklyOverview } from './components/WeeklyOverview';
import { TotalEarning } from './components/TotalEarning';
import { SallesWilayas } from './components/SallesWilayas';
import { TableProducts } from './components/TableProducts';

export const DashbordModerate = () => {

  const user = useSelector((state:any)=>state.app.user)
  const navigate=useNavigate()

  return (
    <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Dashbord
    </Typography>

    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>

    <Grid  item xs={4}>
    <Card sx={{ position: 'relative',width:'100%' ,height:'100%' }}>
      <CardContent>
        <Typography variant='h6'>Hello {user.name} 🥳</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          discover our sellers region 
        </Typography>

        <Typography variant='body2' sx={{ letterSpacing: '0.25px' , my:2 }}>
          discover our sellers region 
        </Typography>
        
        <Button onClick={()=>{navigate('/controlpanelseller/orders')}} size='small' variant='contained'>
          View Sallers
        </Button>
        
        <img alt='trophy' style={{right: 36,bottom: 20,height: 150,position: 'absolute'}} src='https://cdn1.vectorstock.com/i/1000x1000/95/00/seller-woman-farm-products-market-facade-vector-26569500.jpg' />
      </CardContent>
    </Card>
       </Grid>
       <Grid item xs={8}>
       <StatisticCardModerate/>
       </Grid>


       <Grid item xs={4}>
       <WeeklyOverview/>
       </Grid>

       <Grid item xs={4}>
       <TotalEarning/>
       </Grid>

       <Grid item xs={4}>
       <SallesWilayas/>
       </Grid>

       <Grid item xs={12}>
       <TableProducts/>
       </Grid>

       </Grid>
       </Box>
       </Box>
  )
}
