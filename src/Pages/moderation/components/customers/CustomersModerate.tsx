import { Box, Typography ,Button } from '@mui/material'
import Grid from '@mui/material/Grid';
import  { useEffect, useState } from 'react'
import { TableCustomers } from './components/TableCustomers';
import Cookies from 'js-cookie';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import ReactApexcharts from 'react-apexcharts'
import { LatestReviews } from './components/LatestReviews';

export const CustomersModerate = () => {

  const [active,setActive]=useState(0)
  const [customers,setCustomers]=useState<any>([])
  const [reviews,setReviews]=useState<any>([])
  const [loading,setLoading]=useState(false)
  const [loading1,setLoading1]=useState(false)
  const [loading2,setLoading2]=useState(false)
  const token = Cookies.get('token');

  const option = [
    { label: 'name'},
    { label: 'date' },
    { label: 'email'},
    { label: 'wilaya'},
  ]


  const handleChange = async(event:any, newValue :any) => {
    
  
    try {
      const sort = newValue.label;
      setLoading1(true)

        const response = await fetch(`http://localhost:8000/getCustomersSortedBy`,{
      method: 'POST',
      credentials:"include", 
      headers: {
        'Content-Type': 'application/json',
         authorization:`${token}`
      },
      body:JSON.stringify({sort})
    });
    const data = await response.json()
   if (data.success == true) {
      setCustomers(data.getAllCustomers)
      setLoading1(false) 
    } 

    } catch (error) {
      console.error('operation failed.');
    }

};


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



    const handelGetReviews=async()=>{
      try {
        setLoading2(true)
      const response = await fetch(`http://localhost:8000/getLatesCustomersFeedBack`,{
        method: 'GET',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        }
      });
      const data = await response.json()
     if (data.success == true) {
        setReviews(data.getFeedBack)
        setLoading2(false) 
      } 
  
    } catch (error) {
      console.error('operation failed.');
    }
     
    }

    handelGetReviews()

 
    
  },[])




  const  state : any = {
          
    series: [customers.filter((cust:any)=>cust.gender == "Male").length,customers.filter((cust:any)=>cust.gender == "Female").length],
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
      labels: ["Male","Female"],
      dataLabels: {
        enabled: false
      },
      fill: {
        type: 'gradient',
      },
     
      title: {
        text: 'Gender Customers'
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
    Customers
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

      <Grid  item xs={12}>
        
   <TableCustomers customers={customers} setCustomers={setCustomers} active={active} />

    </Grid>

    <Grid  item xs={4}>
        
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%',bgcolor:'Window',p:1}} >
        
        <ReactApexcharts options={state.options}  series={state.series} type="donut" width={380} />
    
          </Box>

    </Grid>

    <Grid  item xs={8}>
        
        <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',height:'100%',bgcolor:'Window',p:1}} >

        <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="body1" gutterBottom>
    Latest Reviews
    </Typography>
            
            { loading2 == true ? "...Loading" : <LatestReviews reviews={reviews} />}
        
              </Box>
    
        </Grid>



      </Grid>
      </Box>

    </Box>
  )
}
