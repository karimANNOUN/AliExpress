import React, { useEffect, useState } from 'react'
import { Box,IconButton,Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Inventory2Icon from '@mui/icons-material/Inventory2';

import { PieChart } from '@mui/x-charts/PieChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Chart } from './Chart';

import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Cookies from 'js-cookie';

export const Dashbord = () => {

  const [loading,setLoading]=useState(false)
  const [productsSeller,setProductsSeller]=useState<any>([])
  const [order,setOrder]=useState<any>([])
  const token = Cookies.get('token');

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


   
     
        const calculateTotal = (productsSeller:any) =>{

          let total = 0;

          productsSeller.forEach((product:any) => {
            product.article.filter((art:any)=>art.state == "terminees" ).forEach((articl:any) => {
              total += articl.quantity * articl.priceProduct
            });
        });

        return total;
         
        }



        const calculateTotalOrder = (productsSeller:any) =>{

          let total = 0;

          productsSeller.forEach((product:any) => {
            total += product.article.length
        });

        return total;
         
        }


        const filtredProduct = (product:any)=>{
        return  Math.floor(product.article.filter((prod:any)=>prod.state == "terminees").length*1000/order.filter((prod:any)=>prod.state == "terminees").length)/10
        }
        

   

      if(loading == true) return <div>...loading</div>


  return (
    <Box sx={{width:'85%',height:'100%',display:'flex',flexDirection:'column',px:2}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Dashbord
    </Typography>

    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Item sx={{display:'flex',alignItems:'center'}} >
           <MonetizationOnIcon sx={{fontSize:'80px',mr:2,color:'#ffb300'}} />
           <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}} >
           <Typography sx={{fontWeight:'100',textAlign:'left'}} variant="subtitle2" gutterBottom>
    Total Sales
    </Typography>
    <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body2' gutterBottom>
      ${calculateTotal(productsSeller)}
    </Typography>
           </Box>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item sx={{display:'flex',alignItems:'center'}} >
        <ShoppingCartIcon sx={{fontSize:'80px',mr:2,color:'#26a69a'}} />
           <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}} >
           <Typography sx={{fontWeight:'100',textAlign:'left'}} variant="subtitle2" gutterBottom>
    Total Orders
    </Typography>
    <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body2' gutterBottom>
     {calculateTotalOrder(productsSeller)}
    </Typography>
           </Box>
        </Item>
      </Grid>
      <Grid item xs={4}>
        <Item sx={{display:'flex',alignItems:'center'}} >
        <Inventory2Icon sx={{fontSize:'80px',color:'#03a9f4',mr:2}} />
           <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}} >
           <Typography sx={{fontWeight:'100',textAlign:'left'}} variant="subtitle2" gutterBottom>
    Total Products
    </Typography>
    <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body2' gutterBottom>
    {productsSeller.length == 0 ? "0" : productsSeller.length} 
    </Typography>
           </Box>
        </Item>
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
          { id: product.id, value:filtredProduct(product), label:`${product.title}` }
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

       {order.map( (ord:any)=> <Box  key={ord.id} sx={{display:'flex',width:'100%',height:'15px',mb:2,alignItems:'center',justifyContent:'space-between'}} >
        <Box sx={{display:'flex',alignItems:'center',width:'16%'}} >
        <Typography sx={{fontWeight:'100',textAlign:'left'}} variant='subtitle2' gutterBottom>
    {ord.id}
    </Typography>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',width:'16%'}} >
    <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
    {ord.commande.buyer.name}
    </Typography>
    </Box>
    <Box sx={{display:'flex',alignItems:'center',width:'16%'}} >
    <Typography sx={{fontWeight:'100',textAlign:'left'}} variant='subtitle2' gutterBottom>
    {ord.commande.buyer.email}
    </Typography>
     </Box>
     <Box sx={{display:'flex',alignItems:'center',width:'16%'}} >
    <Typography sx={{fontWeight:'100',textAlign:'left'}} variant='subtitle2' gutterBottom>
    $ {ord.priceProduct*ord.quantity}
    </Typography>
     </Box>

     <Box sx={{display:'flex',alignItems:'center',width:'16%'}} >
    { ord.state == "terminees" ? <Typography sx={{fontWeight:'100',bgcolor:'#c8e6c9',color:'#66bb6a',textAlign:'left'}} variant='subtitle2' gutterBottom>
    Dilvred
    </Typography> : "" }
   

    
    { ord.state == "non paye" ? <Typography sx={{fontWeight:'100',bgcolor:'#ffcdd2',color:'#d50000',textAlign:'left'}} variant='subtitle2' gutterBottom>
    Cancelled
    </Typography> : "" }
   

    
    { ord.state == "expédiée" ? <Typography sx={{fontWeight:'100',bgcolor:'#bbdefb',color:'#0d47a1',textAlign:'left'}} variant='subtitle2' gutterBottom>
    expédiée
    </Typography> : "" }
  

     
    { ord.state == "En Attente" ? <Typography sx={{fontWeight:'100',bgcolor:'#fff9c4',color:'#ffd600',textAlign:'left'}} variant='subtitle2' gutterBottom>
    Pending
    </Typography> : "" }
     </Box>

     <Box sx={{display:'flex',alignItems:'center',width:'16%'}} >
    <Typography sx={{fontWeight:'100',textAlign:'left'}} variant='subtitle2' gutterBottom>
     {ord.commande.createdAt}
    </Typography>
      </Box>

       </Box>)}
        </Item>
      </Grid>
    </Grid>
  </Box>

    </Box>
  )
}
