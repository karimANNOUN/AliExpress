import { Box,Typography } from '@mui/material'
import  { useEffect, useState } from 'react'

import { Header } from '../Header';
import { Lists } from '../Lists';
import Button from '@mui/material/Button';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Checkbox from '@mui/material/Checkbox';
import { BoxProduct } from './components/BoxProduct';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';
import Cookies from 'js-cookie';
import FormControlLabel from '@mui/material/FormControlLabel';




export const Product = () => {

       

    const token = Cookies.get('token');
    const [loading, setLoading]=useState(Boolean)
    const [productsSeller,setProductsSeller]=useState([])

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


    const handelGetProduct=async()=>{
      try {
       setActive(0)
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
   

    
    const handelGetProductPrix=async()=>{
      try {
        setActive(3)
        setLoading(true)
      const response = await fetch(`http://localhost:8000/getpricedown`,{
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




    const totalArticle = (productsSeller:any) =>{
      let total = 0;

       productsSeller.forEach((product:any)=>{
        total += product._count.article
       })
       return total
      
    }
   
    

    const filtredOrder  = (product:any)=>{
      return  Math.floor(product._count.article*1000/totalArticle(productsSeller))/10
      }

    
    const data = productsSeller.sort((a:any, b:any) => b._count.article - a._count.article).slice(0, 4).map((product:any)=>( { value: filtredOrder(product) , label: `${product.title}` }))
     
     
    const size = {
      width: 400,
      height: 200,
    };



   

    const [active,setActive]=useState(0)

    const [checked, setChecked] = useState(false);
    const handleChange = (e:any) => {
      setChecked(e.target.checked);
  };
  
  
  const filtredProduct =(prod:any)=>{
    if (checked) {
     return  prod.prixlivraison === 0 
     }else{
      return prod
     }
  }



 



    if(loading==true) return <div>...loading</div>

  return (
   
      <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Products
    </Typography>

    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',width:'99%',mb:2,borderRadius:'6px',p:1}} >

   
                <Button 
                onClick={handelGetProduct} 
                sx={
                  active === 0 ?
                  {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}:
                  {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
                } 
                variant="text">
                All Products
                </Button>

                
        
  
               
        <Button 
        onClick={()=>setActive(1)} 
        sx={
          active === 1 ?
          {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}:
          {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
        } 
        variant="text">
          Pertinence
          </Button>

              

            
          
        <Button 
        onClick={()=>setActive(2)} 
        sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} 
        variant="text"> 
        Commandes
        <ArrowDownwardIcon 
         sx={
          active === 2 ?
          {fontSize:'14px',color:'#ff3d00'} :
          {fontSize:'14px',color:'black'} 
          } />
        </Button>
      

           
        <Button 
        onClick={handelGetProductPrix} 
        sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} 
        variant="text"> 
        Prix<ImportExportIcon 
        sx={
          active === 3 ?
          {fontSize:'14px',color:'#ff3d00'} :
          {fontSize:'14px',color:'black'} 
          }
        />
        </Button>
       
            <FormControlLabel 
              control={<Checkbox  
              onChange={handleChange}
              checked={checked}
              />} 
             label="Livraison gratuite" />
    </Box> 

    <Box sx={{bgcolor:'Window',display:'flex',flexDirection:'column',alignItems:'center',width:'99%',overflowY:'auto',borderRadius:'6px',height:'600px',p:1}} >
        { !productsSeller ? [] :  ( productsSeller.length == 0 ? 
          <Typography sx={{fontWeight:'800',color:'#757575',textAlign:'center'}} variant='body2' gutterBottom>
           empty store you don't have any products
        </Typography>
          :  productsSeller.filter(filtredProduct).map((prod:any)=> <BoxProduct setProductsSeller={setProductsSeller} key={prod.id} prod={prod} /> ))}
   
    </Box>

    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Best Matching Products
    </Typography>



    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',justifyContent:'center',mb:2,width:'99%',borderRadius:'6px',p:1}} >

      <Box sx={{width:'25%',height:'100%',display:'flex',alignItems:'center'}} >
      <Typography sx={{fontWeight:'800',color:'#757575',textAlign:'left'}} variant='body2' gutterBottom>
      A pie chart, sometimes called a circle chart, is a way of summarizing a set of nominal data or displaying the different values of a given variable
       (e.g. percentage distribution). This type of chart is a circle divided into a series of segments. Each segment represents a particular category.
    </Typography>
      </Box>

    <PieChart
      series={[
        {
          arcLabel: (item) => `${item.label} (${item.value})`,
          arcLabelMinAngle: 45,
          data,
        },
      ]}
      sx={{
        [`& .${pieArcLabelClasses.root}`]: {
          fill: 'white',
          fontWeight: 'bold',
        },
      }}
      {...size}
    />
   
    </Box>



    </Box>
   
  )
}
