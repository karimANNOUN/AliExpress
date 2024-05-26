import { Box,Typography,Button } from '@mui/material'
import { TableSeller } from './components/TableSeller'
import {  useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import ReactApexcharts from 'react-apexcharts'
import Grid from '@mui/material/Grid';
import { ChartBarSellers } from './components/componentsProfil.tsx/ChartBarSellers';
export const Sellers = ({seller,wiliaya,loading,setSeller}:any) => {

  const [active,setActive]=useState(0)
  const [sort,setSort]=useState("")

  const option = [
    { label: 'name'},
    { label: 'date' },
    { label: 'email'},
    { label: 'wilaya'},
  ]



const  state : any = {
          
    series: wiliaya.map((wilaya:any)=> wilaya._count.email ),
    options: {
      chart: {
        width: 380,
        type: 'donut',
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 270
        }
      },
      labels: wiliaya.map((wilaya:any)=> wilaya.state ),
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
      legend: {
        formatter: function(val:any, opts:any) {
          return  wiliaya[opts.seriesIndex].state
        }
      },
      title: {
        text: 'Sellers Wilayas'
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          }
        }
      }]
    },
  
  
  };




    if (loading == true) return <div>...loading</div>

  return (
    <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Sellers
    </Typography>

    <Box sx={{ flexGrow: 1  }}>
    <Grid container spacing={2}>

    <Grid  item xs={12}>

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
  All Sellers
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
  En Attente
</Button>





<Button 
onClick={()=>setActive(2)} 
sx={active === 2 ?
{color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}:
{color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text"
>
Rejected
</Button>


<Button 
onClick={()=>setActive(3)} 
sx={
active === 3 ?
{color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}:
{color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text"
>
Seller 
</Button>


<Button 
onClick={()=>setActive(4)} 
sx={
active === 4 ?
{color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}:
{color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text"
>
Non demande
</Button>
</Box>

<Box sx={{display:'flex',alignItems:'center'}} >
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={option}
      sx={{ width: 300 }}
      size='small'
      onChange={(e,newValue:any)=>setSort(newValue)}
      renderInput={(params) => <TextField {...params} label="sort by" />}
    />
</Box>


</Box> 

    </Grid>

    <Grid  item xs={12}>

    <Box sx={{display:'flex',flexDirection:'column',width:'100%'}} >
      <TableSeller seller={seller} setSeller={setSeller} active={active} sort={sort} />
    </Box>

    </Grid>

    <Grid  item xs={4}>

    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%',bgcolor:'Window',p:1}} >
        
        <ReactApexcharts options={state.options}  series={state.series} type="donut" width={380} />
    
          </Box>

    </Grid>

    <Grid  item xs={8}>

    <ChartBarSellers seller={seller} />

    </Grid>

    </Grid>
    </Box>

    

    


    


 
</Box>
  )
}
