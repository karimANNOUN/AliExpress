import { Box,IconButton,Typography } from '@mui/material'
import React from 'react'
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Lists } from './Lists';
import Button from '@mui/material/Button';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
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

    <Box sx={{bgcolor:'Window',display:'flex',flexDirection:'column',alignItems:'center',width:'100%',overflow:'auto',borderRadius:'6px',height:'600px',p:1}} >
        { products.map((prod:any)=> <BoxProduct key={prod.id} prod={prod} /> )}
   
    </Box>

    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Best Matching Products
    </Typography>



    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',justifyContent:'center',mb:2,width:'100%',borderRadius:'6px',p:1}} >
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
