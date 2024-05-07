import { Box,Typography } from '@mui/material'
import  { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import { Header } from '../Header';
import { Lists } from '../Lists';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Cookies from 'js-cookie';


function createData(
    name: string,
    email: string,
    wilaya: string,
    selles: string,
    phone: string,
  ) {
    return { name, email, wilaya, selles, phone };
  }



  function createDataFollow(
    name: string,
    email: string,
    wilaya: string,
    time: string,
    phone: string,
  ) {
    return { name, email, wilaya, time, phone };
  }
  

export const Customers = () => {
    const [active,setActive]=useState(0)
    const [loading,setLoading]=useState(Boolean)
    const [customer,setCustomer]=useState<any>([])
    const [followers,setFollowers]=useState<any>([])
  const token = Cookies.get('token');

    useEffect(()=>{

        const handelGetCustomers=async()=>{
          try {
            setLoading(true)
          const response = await fetch(`http://localhost:8000/customers`,{
            method: 'GET',
            credentials:"include", 
            headers: {
              'Content-Type': 'application/json',
               authorization:`${token}`
            }
          });
          const data = await response.json()
         if (data.success == true) {
            setCustomer(data.getCustomers)
            setLoading(false) 
          } 
      
        } catch (error) {
          console.error('operation failed.');
        }
         
        }
    
        handelGetCustomers()


        const handelGetCustomersFollowers=async()=>{
            try {
              setLoading(true)
            const response = await fetch(`http://localhost:8000/customersFollowers`,{
              method: 'GET',
              credentials:"include", 
              headers: {
                'Content-Type': 'application/json',
                 authorization:`${token}`
              }
            });
            const data = await response.json()
           if (data.success == true) {
              setFollowers(data.getFollowers)
              setLoading(false) 
            } 
        
          } catch (error) {
            console.error('operation failed.');
          }
           
          }
      
          handelGetCustomersFollowers()
    
     
        
      },[])



      const handelGetCustomers=async()=>{
        try {
            setActive(0)
          setLoading(true)
        const response = await fetch(`http://localhost:8000/customers`,{
          method: 'GET',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          }
        });
        const data = await response.json()
       if (data.success == true) {
          setCustomer(data.getCustomers)
          setLoading(false) 
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }


      const handelGetCustomerSelles=async()=>{
        try {
            setActive(1)
          setLoading(true)
        const response = await fetch(`http://localhost:8000/orderedBySelles`,{
          method: 'GET',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          }
        });
        const data = await response.json()
       if (data.success == true) {
          setCustomer(data.getCustomers)
          setLoading(false) 
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }



      const handelGetCustomerEmail=async()=>{
        try {
            setActive(2)
          setLoading(true)
        const response = await fetch(`http://localhost:8000/orderedByEmail`,{
          method: 'GET',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          }
        });
        const data = await response.json()
       if (data.success == true) {
          setCustomer(data.getCustomers)
          setLoading(false) 
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }



      const handelGetCustomerName=async()=>{
        try {
            setActive(3)
          setLoading(true)
        const response = await fetch(`http://localhost:8000/orderedByName`,{
          method: 'GET',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          }
        });
        const data = await response.json()
       if (data.success == true) {
          setCustomer(data.getCustomers)
          setLoading(false) 
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }




    const rows = customer.map((custom:any)=>
        createData(`${custom.commande.buyer.name}`, `${custom.commande.buyer.email}`,`${custom.commande.buyer.state}`, `${custom.quantity*custom.priceProduct}`,`${custom.commande.buyer.locationUser.phoneNumber}`)   
    )


    const rowsFollow = followers.map((custom:any)=>
        createDataFollow(`${custom.buyer.name}`, `${custom.buyer.email}`,`${custom.buyer.state}`, `${custom.createdAt}`,`${custom.buyer.locationUser.phoneNumber}`)   
    )





if(loading==true) return <div>...loading</div>


  return (
   
      <Box sx={{width:'85%',height:'100%',display:'flex',flexDirection:'column',px:2}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Customers
    </Typography>

    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',width:'99%',mb:2,borderRadius:'6px',p:1}} >


            <Button 
            onClick={handelGetCustomers} 
            sx={ active ===0 ?
              {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}:
              {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
            } 
            variant="text">
              All Customers
            </Button>

           
    

           
            <Button 
            onClick={handelGetCustomerSelles} 
            sx={ active ===1 ?
              {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}:
              {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
            }  
            variant="text">
              Salles
            </Button>

           

            <Button 
            onClick={handelGetCustomerEmail} 
            sx={ active ===2 ?
              {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}:
              {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
            }  
            variant="text">
              By Email
            </Button>

          



            <Button 
            onClick={handelGetCustomerName} 
            sx={ active ===3 ?
              {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}:
              {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
            }  
            variant="text">
            By Name
            </Button>

          
   
</Box> 


    <Box sx={{bgcolor:'Window',display:'flex',flexDirection:'column',mb:2,borderRadius:'6px',p:1}} >
        
        <Box sx={{display:'flex',alignItems:'center',mb:2}} >
        <Typography sx={{fontWeight:'800',textAlign:'left'}} variant="h6" gutterBottom>
    All Customers buying your
    </Typography>
    <Typography sx={{fontWeight:'800',color:'#8e24aa',ml:1,textAlign:'left'}} variant="h6" gutterBottom>
    product :
    </Typography>
        </Box>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Customer name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Wilaya</TableCell>
            <TableCell align="right">Salles(DA)<br/>Termineés</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        { loading == false ? <TableBody sx={{maxHeight:'600',overflow:'auto'}}>
          {rows.map((row:any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.wilaya}</TableCell>
              <TableCell align="right">{row.selles}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody> : "" }
      </Table>
    </TableContainer>

        </Box>




        <Box sx={{bgcolor:'Window',display:'flex',flexDirection:'column',mb:2,borderRadius:'6px',p:1}} >
         
        <Box sx={{display:'flex',alignItems:'center',mb:2}} >
        <Typography sx={{fontWeight:'800',textAlign:'left'}} variant="h6" gutterBottom>
    All Follwers On Your
    </Typography>
    <Typography sx={{fontWeight:'800',color:'#8e24aa',ml:1,textAlign:'left'}} variant="h6" gutterBottom>
    store:
    </Typography>
        </Box>


        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Follower name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Wilaya</TableCell>
            <TableCell align="right">Time Follow</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        { loading == false ? <TableBody sx={{maxHeight:'600',overflow:'auto'}}>
          {rowsFollow.map((row:any) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.wilaya}</TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody> : "" }
      </Table>
    </TableContainer>


        </Box>


    </Box>

  )
}
