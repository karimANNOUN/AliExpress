import { Box,IconButton,Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Lists } from './Lists';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import Checkbox from '@mui/material/Checkbox';
import { BoxProduct } from './BoxProduct';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

export const Product = () => {

    const data = [
        { value: 5, label: 'A' },
        { value: 10, label: 'B' },
        { value: 15, label: 'C' },
        { value: 20, label: 'D' },
      ];
      
      const size = {
        width: 400,
        height: 200,
      };
      

    const products=[
        {id:1,title:'hello'},
        {id:3,title:'hello'},
        {id:4,title:'hello'},
        {id:5,title:'hello'},
        {id:6,title:'hello'},
        {id:7,title:'hello'},
        {id:8,title:'hello'},
        {id:9,title:'hello'},
        {id:10,title:'hello'},
    ]


    const [active,setActive]=useState(0)

  return (
    <Box sx={{bgcolor:'#e0e0e0'}} >
    <Header/>
    <Box sx={{display:'flex',width:'100%',height:'100vh'}} >
      <Box sx={{width:'15%',bgcolor:'Window',height:'100%'}} >
        <Lists/>
      </Box>
      <Box sx={{width:'85%',height:'100%',display:'flex',flexDirection:'column',px:2}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Products
    </Typography>

    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',width:'100%',mb:2,borderRadius:'6px',p:1}} >

    {active === 0 ? 
                <Button onClick={()=>setActive(0)} sx={{color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">All Products</Button>

                : 
                <Button onClick={()=>setActive(0)} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">All Products</Button>
            }
        
  
                {active === 1 ? 
                <Button onClick={()=>setActive(1)} sx={{color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">Pertinence</Button>

                : 
                <Button onClick={()=>setActive(1)} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text">Pertinence</Button>
            }

            
            {active === 2 ?
        <Button onClick={()=>setActive(2)} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text"> Commandes<ArrowDownwardIcon sx={{fontSize:'14px',color:'#ff3d00'}} /></Button>
        :
        <Button onClick={()=>setActive(2)} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text"> Commandes<ArrowDownwardIcon sx={{fontSize:'14px'}} /></Button>
        }
         

           {active === 3 ?
        <Button onClick={()=>setActive(3)} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text"> Prix<ImportExportIcon sx={{fontSize:'14px',color:'#ff3d00'}} /></Button>
        :
        <Button onClick={()=>setActive(3)} sx={{color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}} variant="text"> Prix<ImportExportIcon sx={{fontSize:'14px'}} /></Button>
        }

            
             
            { active === 4 ? <Button sx={{color:'black',":hover":{bgcolor:'#eeeeee'}}} variant="text"> <Checkbox  defaultChecked  /> Livraison gratuite </Button> :

          <Button sx={{color:'black',":hover":{bgcolor:'#eeeeee'}}} onClick={()=>setActive(4)}  variant="text"> <Checkbox /> Livraison gratuite </Button>
            
            }

         
       
    </Box> 

    <Box sx={{bgcolor:'Window',display:'flex',flexDirection:'column',alignItems:'center',width:'100%',overflow:'auto',borderRadius:'6px',height:'600px',p:1}} >
        { products.map((prod:any)=> <BoxProduct key={prod.id} prod={prod} /> )}
   
    </Box>

    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Best Matching Products
    </Typography>



    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',justifyContent:'center',mb:2,width:'100%',borderRadius:'6px',p:1}} >

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
    </Box>

     
    </Box>
  )
}
