import  { useEffect, useState } from 'react'
import { Box,Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import { PieChart } from '@mui/x-charts/PieChart';
import { Chart } from './components/Chart';
import { styled  } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Cookies from 'js-cookie';
import {  useNavigate } from 'react-router-dom';
import { TableOrder } from './components/TableOrder';
import { useSelector } from 'react-redux';
import { StatisticCard } from './components/StatisticCard';
import { calculateTotal ,filtredProduct } from './components/FunctionTotal';



const TrophyImg = styled('img')({
  right: 36,
  bottom: 20,
  height: 98,
  position: 'absolute'
})



export const Dashbord = () => {


  const user = useSelector((state:any)=>state.app.user)


  const [loading,setLoading]=useState(false)
  const [productsSeller,setProductsSeller]=useState<any>([])
  const [order,setOrder]=useState<any>([])
  const token = Cookies.get('token');
  const navigate=useNavigate()


  useEffect(()=>{

    const handelGetProduct=async()=>{
      try {
        setLoading(true)
      const response = await fetch(`http://localhost:8000/seller/getprod`,{
        method: 'GET',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        }
      });
      const data = await response.json()
     if (data.success == true) {
        setProductsSeller(data.productSeller)
        setLoading(false) 
      } 
  
    } catch (error) {
      console.error('operation failed.');
    }
     
    }

    handelGetProduct()

 
    
  },[])



  useEffect(()=>{

    const handelGetOrders=async()=>{
      try {
        setLoading(true)
      const response = await fetch(`http://localhost:8000/sellerOrders/getOrders`,{
        method: 'GET',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        }
      });
      const data = await response.json()
     if (data.success == true) {
        setOrder(data.orderSeller)
        setLoading(false) 
      } 
  
    } catch (error) {
      console.error('operation failed.');
    }
     
    }

    handelGetOrders()

 
    
  },[])






   
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));


   
     
      

   

      if(loading == true) return <div>...loading</div>


  return (
    <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Dashbord
    </Typography>

    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>

    <Grid item xs={4}>
       

        <Card sx={{ position: 'relative',width:'100%' }}>
      <CardContent>
        <Typography variant='h6'>Congratulations {user.name}! 🥳</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          Best seller of the month
        </Typography>
        <Typography variant='h5' sx={{ my: 4, color: 'primary.main' }}>
          DA{calculateTotal(productsSeller)}
        </Typography>
        <Button onClick={()=>{navigate('/controlpanelseller/orders')}} size='small' variant='contained'>
          View Sales
        </Button>
        
        <TrophyImg alt='trophy' src='https://demos.themeselection.com/materio-mui-react-nextjs-admin-template-free/images/misc/trophy.png' />
      </CardContent>
    </Card>

         
          </Grid>


          <Grid item xs={8}>
        

          <StatisticCard productsSeller={productsSeller} order={order} />

         
          </Grid>
       




      <Grid item xs={8}>
        <Item sx={{display:'flex',flexDirection:'column'}} >
        <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant='body2' gutterBottom>
    Total statistics
    </Typography>
            <Chart order={order} productsSeller={productsSeller} loading={loading} />
        </Item>
      </Grid>



      <Grid item xs={4}>
        <Item sx={{display:'flex',flexDirection:'column'}} >
        <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant='body2' gutterBottom>
    Products Selles
    </Typography>
    
    <PieChart
    series={[
      {
        data: productsSeller.map((product:any)=>(
          { id: product.id, value:filtredProduct({product,order}), label:`${product.title}` }
        )) 
      },
    ]}
    width={400}
    height={350}
  />
          </Item>
      </Grid>
      <Grid item xs={12}>
      <Item sx={{display:'flex',flexDirection:'column'}} >
        <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant='body2' gutterBottom>
    Latest Orders
    </Typography>
        <TableOrder order={order} />
        </Item>
      </Grid>

    </Grid>
  </Box>

    </Box>
  )
}
