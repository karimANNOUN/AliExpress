import { Box, Typography ,Button } from '@mui/material'
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react'
import { TableCustomers } from './components/TableCustomers';
import Cookies from 'js-cookie';

export const CustomersModerate = () => {

  const [active,setActive]=useState(0)
  const [customers,setCustomers]=useState([])
  const [loading,setLoading]=useState(false)
  const token = Cookies.get('token');


  useEffect(()=>{
  
    const handelGetCustomers=async()=>{
      try {
        setLoading(true)
      const response = await fetch(`http://localhost:8000/getAllCustomersRegion`,{
        method: 'GET',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        }
      });
      const data = await response.json()
     if (data.success == true) {
        setCustomers(data.getAllCustomers)
        setLoading(false) 
      } 
  
    } catch (error) {
      console.error('operation failed.');
    }
     
    }

    handelGetCustomers()

 
    
  },[])


  if (loading == true) return <div>...loading</div>

  return (
    <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Customers
    </Typography>

    <Box sx={{ flexGrow: 1  }}>
    <Grid container spacing={2}>

    <Grid  item xs={12}>
        
    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',width:'99%',borderRadius:'6px',p:1}} >
    <Box sx={{display:'flex',alignItems:'center'}} >
<Button 
onClick={()=>setActive(0)} 
sx={
  active === 0 ?
  {color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}} :
  {color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text">
  All Customers
  </Button>




<Button 
onClick={()=>setActive(1)} 
sx={
  active === 1 ?
  {color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}:
  {color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text"
>
  Male
</Button>





<Button 
onClick={()=>setActive(2)} 
sx={active === 2 ?
{color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}:
{color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text"
>
Female
</Button>

</Box>
      </Box>

      </Grid>

      <Grid  item xs={12}>
        
   <TableCustomers customers={customers} setCustomers={setCustomers} active={active} />

    </Grid>


      </Grid>
      </Box>

    </Box>
  )
}
