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
  

export const Customers = () => {

    const [loading,setLoading]=useState(Boolean)
    const [customer,setCustomer]=useState<any>([])
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
    
     
        
      },[])



const calculateSelles = (customer:any) =>{

    let total = 0;

    customer[0].items.forEach((selles:any) => {
        total += selles.quantity * selles.priceProduct
      });
 

  return total;
   
  }

  const rows = [
    createData(`${customer[0].buyer.name}`, `${customer[0].buyer.email}`,`${customer[0].buyer.state}`, `${calculateSelles(customer)}`, `${customer[0].buyer.locationUser.phoneNumber}`)    
  ]



useEffect(()=>{

//    const rowsl = customer.map((custom:any)=>{
 //       createData(`${custom.buyer.name}`, `${custom.buyer.email}`,`${custom.buyer.state}`, `${custom.buyer.state}`, `${custom.buyer.locationUser.phoneNumber}`)   
 //   })

//console.log(rowsl)
},[])


if(loading==true) return <div>...loading</div>


  return (
    <Box sx={{bgcolor:'#e0e0e0'}} >
    <Header/>
    <Box sx={{display:'flex',width:'100%',height:'100vh'}} >
      <Box sx={{width:'15%',bgcolor:'Window',height:'100%'}} >
        <Lists/>
      </Box>
      <Box sx={{width:'85%',height:'100%',display:'flex',flexDirection:'column',px:2}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Customers
    </Typography>


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
            <TableCell align="right">Salles(DA)</TableCell>
            <TableCell align="right">Phone</TableCell>
          </TableRow>
        </TableHead>
        { loading == false ? <TableBody>
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


    </Box>


    </Box>
    </Box>
  )
}
