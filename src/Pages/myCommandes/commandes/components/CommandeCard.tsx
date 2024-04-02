import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import { Button, Divider } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';



export const CommandeCard = ({command}:any) => {
  return (
    <Box sx={{display:'flex',flexDirection:'column',alignItems:'center',width:'100%'}} >

   
    
        <Box sx={{display:'flex',alignItems:'center',width:'100%',my:2,justifyContent:'space-between'}} >
           
         <Link variant='body2' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:2,":hover":{color:'#ff5722'}}} href="#" underline="none">
         
         {command.seller.name} Store
      </Link>
    
      <IconButton  >
          <CreateIcon sx={{fontSize:'14px'}} />
    </IconButton>
    
    
                    </Box>
        
                    <Box sx={{display:'flex',alignItems:'center',width:'100%',ml:2}} >
    
        <img src={command.imageUrl} style={{width:'110px',height:'130px',borderRadius:'8px'}} />
        <Box sx={{display:'flex',flexDirection:'column',height:'100%',width:'100%',px:2}} >
          <Box sx={{display:'flex',alignItems:'center',width:'100%',justifyContent:'space-between'}} >
          <Link variant='body1' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'#ff5722'}}} href="#" underline="none">
           
        {command.product.title}
    
       </Link>
          </Box>
    
        <Button variant='outlined' sx={{border:'1px solid #f5f5f5 ',width:'250px',color:'black',fontSize:'8px',fontWeight:'700' ,borderRadius:'14px' ,bgcolor:'#e0e0e0',":hover":{color:'black',border:'1px solid #f5f5f5 ',bgcolor:'#e0e0e0'} }} >
        {command.propertyType},{command.colorProduct}
        </Button>
    
        <Box sx={{width:'100%',display:'flex',alignItems:'center',justifyContent:'space-between',my:1}} >
        <Typography variant='body1' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'black'}}} >
           
        US ${ command.priceProduct}
           
                        </Typography>
             
    
             
    
        </Box>
       <Box sx={{width:'100%',display:'flex'}} >
        <Button variant='text' sx={{color:'#bdbdbd',fontSize:'14px',fontWeight:'100' ,":hover":{color:'#bdbdbd'} }} >
           Prix Livraison   { command.priceLivraison == 0 ? "gratuite" : `${command.priceLivraison}$` }
        </Button>
        </Box>
        </Box>
    
                    </Box>
    
                    <Divider sx={{width:'95%',mt:1}} />
    
        </Box>
  )
}
