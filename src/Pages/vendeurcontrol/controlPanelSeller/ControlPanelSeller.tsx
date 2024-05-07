import { Box} from '@mui/material'
import { Header } from './components/Header'
import { Lists } from './components/Lists'
import { Dashbord } from './components/dashbord/Dashbord';
import { useLocation } from 'react-router-dom';
import { Product } from './components/products/Product';
import { Orders } from './components/orders/Orders';
import { Customers } from './components/customers/Customers';
import { ReviewsSeller } from './components/reviews/ReviewsSeller';
import { Transactions } from './components/transaction/Transactions';
import { StoreSettings } from './components/storeSeller/StoreSettings';
import { OffresHot } from './components/hotOffres/OffresHot';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Settings } from './components/settings/Settings';



export const ControlPanelSeller = () => {

const location=useLocation()   
const [order,setOrder]=useState<any>([])


const [loading,setLoading]=useState(false)
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


if(loading == true) return <div>...loading</div>

  return (
    <Box sx={{bgcolor:'#e0e0e0'}} >
    <Header/>
    <Box sx={{display:'flex',width:'100%',height:'100vh'}} >
      <Box sx={{width:'15%',bgcolor:'Window',height:'100%'}} >
        <Lists order={order} />
      </Box>
      { location.pathname == '/controlpanelseller/dashboard' ? <Dashbord/> : "" }
      { location.pathname == '/controlpanelseller/products' ? <Product/> : "" }
      { location.pathname == '/controlpanelseller/orders' ? <Orders order={order} setOrder={setOrder} /> : "" }
      { location.pathname == '/controlpanelseller/customers' ? <Customers/> : "" }
      { location.pathname == '/controlpanelseller/reviews' ? <ReviewsSeller/> : "" }
      { location.pathname == '/controlpanelseller/transactions' ? <Transactions/> : "" }
      { location.pathname == '/controlpanelseller/storeSettings' ? <StoreSettings/> : "" }
      { location.pathname == '/controlpanelseller/hotoffres' ? <OffresHot/> : "" }
      { location.pathname == '/controlpanelseller/settings' ? <Settings/> : "" }
    </Box>

     
    </Box>
  )
}
