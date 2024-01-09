

import { CardProduct } from "./CardProduct";
import { Category } from "./Category";
import Choix from "./Choix";
import GridBox from "./GridBox";
import Header from "./Header";
import { useEffect,useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box } from "@mui/material";


export default function Home() {


  const [products,setProducts]=useState([])

  const [loading,setLoading]=useState(false)

  useEffect( ()=>{
    const getProduct =async()=>{
      const response=await fetch('http://localhost:8000/getproduct', {
       method: 'GET',
       credentials: 'include', 
       headers: {
         'Content-Type': 'application/json', 
       },
     })
     const data = await response.json()
     if (!data) {
      setLoading(true)
     }
    if (data.success == true) {
      setLoading(false)
      setProducts(data. products)
    }
    }
    getProduct()
},[])

  return (
    <div>
        
            <Header/>
            <Choix/>
            <GridBox/>
            <Category/>
            {loading == true ?
             <Box sx={{width:'100%',bgcolor:'#424242',display:'flex',alignItems:'center'}} >
             <Skeleton variant="rectangular" width={210} height='60px' />
            </Box>
            : <CardProduct products={products} />}
           
        

    </div>
  )
}
