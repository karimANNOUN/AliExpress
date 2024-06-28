import  { useEffect, useState } from 'react'
import { Box} from '@mui/material'
import { Lists } from './components/Lists'
import { Header } from './components/Header'
import { DashbordModerate } from './components/Dashbord/DashbordModerate'
import { useLocation } from 'react-router-dom'
import { Sellers } from './components/sellers/Sellers'
import Cookies from 'js-cookie';
import { CustomersModerate } from './components/customers/CustomersModerate'
import { Signale } from './components/article Signale/Signale'

export const ControlPanelModerate = () => {

    const location=useLocation()

    const [loading,setLoading]=useState(false)
    const [loading1,setLoading1]=useState(false)
    const [seller,setSeller]=useState<any>([])
    const [wiliaya,setWilaya]=useState<any>([])
    const [signale,setSignale]=useState<any>([])
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
  
   
      const handelGetArticleSignalez=async()=>{
        try {
          setLoading1(true)
        const response = await fetch(`http://localhost:8000/getArticleSignalez`,{
          method: 'GET',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          }
        });
        const data = await response.json()
       if (data.success == true) {
          setSignale(data.getArticleSignale)
          setLoading1(false) 
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }
  
      handelGetArticleSignalez()

      
    },[])
  
  
  


  return (
    <Box sx={{bgcolor:'#fafafa'}} >
    <Header />
    <Box sx={{display:'flex',width:'100%',mb:2,height:'100vh',position:'fixed',bgcolor:'#e0e0e0'}} >
      <Box sx={{width:'15%',bgcolor:'Window',height:'100vh'}} >
        <Lists seller={seller} signale={signale} loading={loading} loading1={loading1} />
      </Box>
      <Box sx={{width:'85%',height:'100vh',position:'relative',overflowY:'auto',px:2}} >
      { location.pathname == '/controlpanelmoderate/dashboard' ? <DashbordModerate seller={seller} wiliaya={wiliaya} loading={loading} /> : "" }
      { location.pathname == '/controlpanelmoderate/sellers' ? <Sellers seller={seller} loading={loading} setSeller={setSeller} wiliaya={wiliaya} /> : "" }
      { location.pathname == '/controlpanelmoderate/customers' ? <CustomersModerate /> : "" }
      { location.pathname == '/controlpanelmoderate/signale' ? <Signale signale={signale} loading1={loading1} /> : "" }
      </Box>
    </Box>

     
    </Box>
  )
}
