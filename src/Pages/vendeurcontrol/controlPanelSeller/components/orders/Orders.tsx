import { Box,Typography } from '@mui/material'
import  { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { Header } from '../Header';
import { Lists } from '../Lists';

import Cookies from 'js-cookie';
import { Table } from './components/Table';


export const Orders = () => {


    const [active,setActive]=useState(0)
    const [loading,setLoading]=useState(false)
    const [order,setOrder]=useState<any>([])
  const token = Cookies.get('token');
  

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



  const filtredOrders = (ordr:any) =>{
    if (active === 0) {
        return ordr
    }if (active === 1) {
        return ordr.state == "En Attente"
    }if (active === 2) {
        return ordr.state == "expédiée"
    }if (active === 3) {
        return ordr.state == "non paye"
    }if (active === 4) {
        return ordr.state == "terminees"
    }
  }



  const calculateTotal = (order:any) =>{

    let total = 0;

    order.filter(filtredOrders).forEach((ordr:any) => {
     
        total += ordr.quantity * ordr.priceProduct
      });
 

  return total;
   
  }


  if(loading == true) return <div>...loading</div>

  return (
    <Box sx={{bgcolor:'#e0e0e0'}} >
    <Header/>
    <Box sx={{display:'flex',width:'100%',height:'100vh'}} >
      <Box sx={{width:'15%',bgcolor:'Window',height:'100%'}} >
        <Lists/>
      </Box>
      <Box sx={{width:'85%',height:'100%',display:'flex',flexDirection:'column',px:2}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Orders
    </Typography>

    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',width:'99%',mb:2,borderRadius:'6px',p:1}} >

    {active === 0 ? 
                <Button onClick={()=>setActive(0)} sx={{color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">All Orders</Button>

                : 
                <Button onClick={()=>setActive(0)} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">All Orders</Button>
            }
        
  
                {active === 1 ? 
                <Button onClick={()=>setActive(1)} sx={{color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">En Attente</Button>

                : 
                <Button onClick={()=>setActive(1)} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">En Attente</Button>
            }

            
            {active === 2 ?
        <Button onClick={()=>setActive(2)} sx={{color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">Expideé</Button>
        :
        <Button onClick={()=>setActive(2)} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">Expideé</Button>
        }
         

           {active === 3 ?
        <Button onClick={()=>setActive(3)} sx={{color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">refusé</Button>
        :
        <Button onClick={()=>setActive(3)}  sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">refusé</Button>
        }


{active === 4 ?
        <Button onClick={()=>setActive(4)} sx={{color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">Terminée</Button>
        :
        <Button onClick={()=>setActive(4)} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">Terminée</Button>
        }

       
    </Box> 

    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',width:'99%',my:2,borderRadius:'6px',p:1}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Total Prix Orders (${calculateTotal(order)})
    </Typography>
    </Box>
   

    <Box sx={{display:'flex',flexDirection:'column',bgcolor:'Window',borderRadius:'6px',p:1}} >
    <Box sx={{display:'flex',width:'100%',height:'15px',mb:2,alignItems:'center',justifyContent:'space-between'}} >
    <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
        <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
    ID
    </Typography>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
    name Buyer
    </Typography>
    </Box>
    <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
    Email Buyer
    </Typography>
     </Box>
     <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
    Price
    </Typography>
     </Box>

     <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'900',color:'black',textAlign:'left'}} variant='subtitle2' gutterBottom>
    State Livraison
    </Typography>
   
     </Box>

     <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
     date
    </Typography>
      </Box>
      <Box sx={{display:'flex',alignItems:'center',width:'14%'}} >
    <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
     More Détails
    </Typography>
      </Box>
      </Box>
       {order.filter(filtredOrders).map( (ord:any)=> <Table key={ord.id} ord={ord} /> )}
        </Box>







    </Box>
    </Box>

     
    </Box>
  )
}
