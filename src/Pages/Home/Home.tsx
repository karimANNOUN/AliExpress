

import { CardProduct } from "./CardProduct";
import { Category } from "./Category";
import Choix from "./Choix";
import GridBox from "./GridBox";
import Header from "./Header";
import { useEffect,useState } from 'react';



export default function Home() {


  const [products,setProducts]=useState([])

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
    if (data.success == true) {
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
            <CardProduct products={products} />
           
        

    </div>
  )
}
