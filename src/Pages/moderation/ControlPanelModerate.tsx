import React, { useEffect, useState } from 'react'
import { Box} from '@mui/material'
import { Lists } from './components/Lists'
import { Header } from './components/Header'
import { DashbordModerate } from './components/Dashbord/DashbordModerate'
import { useLocation } from 'react-router-dom'
import { Sellers } from './components/sellers/Sellers'
import Cookies from 'js-cookie';
import { CustomersModerate } from './components/customers/CustomersModerate'

export const ControlPanelModerate = () => {

    const location=useLocation()

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
  
  
  


  return (
    <Box sx={{bgcolor:'#fafafa'}} >
    <Header loading={loading} />
    <Box sx={{display:'flex',width:'100%',mb:2,height:'100vh',position:'fixed',bgcolor:'#e0e0e0'}} >
      <Box sx={{width:'15%',bgcolor:'Window',height:'100vh'}} >
        <Lists seller={seller} loading={loading} />
      </Box>
      <Box sx={{width:'85%',height:'100vh',position:'relative',overflowY:'auto',px:2}} >
      { location.pathname == '/controlpanelmoderate/dashboard' ? <DashbordModerate seller={seller} wiliaya={wiliaya} loading={loading} /> : "" }
      { location.pathname == '/controlpanelmoderate/sellers' ? <Sellers seller={seller} loading={loading} setSeller={setSeller} wiliaya={wiliaya} /> : "" }
      { location.pathname == '/controlpanelmoderate/customers' ? <CustomersModerate /> : "" }
      </Box>
    </Box>

     
    </Box>
  )
}
