import React, { useEffect, useState } from 'react'
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
import Cookies from 'js-cookie';

export const DashbordModerate = () => {

  const user = useSelector((state:any)=>state.app.user)
  const navigate=useNavigate()

  const [loading,setLoading]=useState(false)
  const [seller,setSeller]=useState<any>([])
  const [wiliaya,setWilaya]=useState<any>([])
  const token = Cookies.get('token');


  useEffect(()=>{

    const handelGetSellers=async()=>{
      try {
        setLoading(true)
      const response = await fetch(`http://localhost:8000/getAllSellersRegion`,{
        method: 'GET',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        }
      });
      const data = await response.json()
     if (data.success == true) {
        setSeller(data.getAllSellers)
        setWilaya(data.sellersWilaya)
        setLoading(false) 
      } 
  
    } catch (error) {
      console.error('operation failed.');
    }
     
    }

    handelGetSellers()

 
    
  },[])


if (loading == true) return <div>...loading</div>


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
       <StatisticCardModerate seller={seller} />
       </Grid>


       <Grid item xs={4}>
       <WeeklyOverview seller={seller} />
       </Grid>

       <Grid item xs={4}>
       <TotalEarning seller={seller} />
       </Grid>

       <Grid item xs={4}>
       <SallesWilayas seller={seller} wiliaya={wiliaya} />
       </Grid>

       <Grid item xs={12}>
       <TableProducts seller={seller} />
       </Grid>

       </Grid>
       </Box>
       </Box>
  )
}
