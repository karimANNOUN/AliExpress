

import { CardProduct } from "./CardProduct";
import { Category } from "./Category";
import Choix from "./Choix";
import GridBox from "./GridBox";
import Header from "./Header";
import { useEffect,useState } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { Box } from "@mui/material";
import { ProductStoreShop } from "../ProductStore/ProductStoreShop";

type Anchor = 'right';

export default function Home() {


  const [products,setProducts]=useState([])

  const [loading,setLoading]=useState(false)

  const [state, setState] = useState({
    right: false
  });

  const toggleDrawer =
    (anchor: Anchor, ovrir: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: ovrir });
      
    };

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
            : <CardProduct products={products} toggleDrawer={toggleDrawer} />}
            <ProductStoreShop toggleDrawer={toggleDrawer} state={state} />
           
        

    </div>
  )
}
