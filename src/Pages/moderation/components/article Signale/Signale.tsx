import { Box,Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import { StatisticCardSignale } from './components/StatisticCardSignale';
import { TableSignale } from './components/tableSignale/TableSignale';
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export const Signale = ({loading1,signale}:any) => {

  const [active,setActive]=useState(0)

  const option = [
    { label: 'name'},
    { label: 'date' },
    { label: 'email'},
    { label: 'wilaya'},
  ]


  const handleChange = async(event:any, newValue :any) => {
  }

  if (loading1 == true) return <div>...loading</div>

  return (
    <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Signale 
    </Typography>

    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
    <Grid  item xs={4}>
    <Card sx={{ position: 'relative',width:'100%' ,height:'100%' }}>
      <CardContent>
        <Typography variant='h6'>Hello karim 🥳</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          discover our sellers region 
        </Typography>

        <Typography variant='body2' sx={{ letterSpacing: '0.25px' , my:2 }}>
          discover our sellers region 
        </Typography>
        
        <Button  size='small' variant='contained'>
          View Sallers
        </Button>
        
        <img alt='trophy' style={{right: 36,bottom: 20,height: 150,position: 'absolute'}} src='https://cdn1.vectorstock.com/i/1000x1000/95/00/seller-woman-farm-products-market-facade-vector-26569500.jpg' />
      </CardContent>
    </Card>
       </Grid>

       <Grid item xs={8}>
       <StatisticCardSignale signale={signale} />
       </Grid>

       <Grid  item xs={12}>

       <Typography sx={{textAlign:'left',fontWeight:'600',fontFamily:'serif'}} variant='h6'>All Signal Articles</Typography>
        
    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',justifyContent:'space-between',width:'99%',borderRadius:'6px',p:1}} >
    <Box sx={{display:'flex',alignItems:'center'}} >
<Button 
onClick={()=>setActive(0)} 
sx={
  active === 0 ?
  {color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}} :
  {color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text">
  All Signaler
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
  Reviews
</Button>





<Button 
onClick={()=>setActive(2)} 
sx={active === 2 ?
{color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}:
{color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text"
>
Seller
</Button>



<Button 
onClick={()=>setActive(3)} 
sx={active === 2 ?
{color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}:
{color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text"
>
Products
</Button>

</Box>

<Box sx={{display:'flex',alignItems:'center'}} >
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={option}
      sx={{ width: 300 }}
      size='small'
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label="sort by" />}
    />
</Box>

      </Box>

      </Grid>

       <Grid item xs={12}>

       <TableSignale/>
       
        </Grid>

      </Grid>
      </Box>
      </Box>
  )
}
