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
import { ModalAmountExtract } from './components/ModalAmountExtract';
import Cookies from 'js-cookie';
import LoadingButton from '@mui/lab/LoadingButton';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export const Transactions = () => {

    const [transactions,setTransactions]=useState<any>([])
    const [check,setCheck]=useState<any>([])
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);


    const [loading,setLoading]=useState(false)
    const [loading1,setLoading1]=useState(false)
    const [active,setActive]=useState(0)
  const token = Cookies.get('token');


  const handleClick = () => {
    setLoading1(true);
  }



  const [checked, setChecked] = useState(false);
  const handleChange = (e:any) => {
    setChecked(e.target.checked);
};



const [checked1, setChecked1] = useState(false);
const handleChange1 = (e:any) => {
  setChecked1(e.target.checked);
};

  

  useEffect(()=>{

    const handelGetPrice=async()=>{
      try {
        setLoading(true)
      const response = await fetch(`http://localhost:8000/getcheckoutamount`,{
        method: 'GET',
        credentials:"include", 
        headers: {
          'Content-Type': 'application/json',
           authorization:`${token}`
        }
      });
      const data = await response.json()
     if (data.success == true) {
        setTransactions(data.checkoutAmount)
        setLoading(false) 
      } 
  
    } catch (error) {
      console.error('operation failed.');
    }
     
    }

    handelGetPrice()


    const handelGetChekout=async()=>{
        try {
          setLoading(true)
        const response = await fetch(`http://localhost:8000/checkpointmoney`,{
          method: 'GET',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          }
        });
        const data = await response.json()
       if (data.success == true) {
          setCheck(data.checkoutAmount)
          setLoading(false) 
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }
  
      handelGetChekout()


    
  },[loading1])


    function createData(
        TransactionId: string,
        Date: string,
        sales: string,
        modérateRegion: string,
        state: string,
      ) {
        return { TransactionId, Date, sales,modérateRegion , state };
      }
      
      const rows = check.map((checkout:any)=>createData(`${checkout.id}`, `${checkout.createdAt}`, `${checkout.sales}` , `${checkout.moderate.name}`, `${checkout.checkOutState}` ))
       
      




      const calculateTotalAmount  = (transactions:any) =>{

        let total = 0;
    
        transactions.forEach((trans:any) => {
         
            total += trans.quantity * trans.priceProduct
          });
     
    
      return total;
       
      }


      


      const handelPostCheckOutOrder=async()=>{
        try {
          setLoading1(true)
        const response = await fetch(`http://localhost:8000/checkoutOrderPosted`,{
          method: 'POST',
          credentials:"include", 
          headers: {
            'Content-Type': 'application/json',
             authorization:`${token}`
          },
          body:JSON.stringify({transactions})
        });
        const data = await response.json()
       if (data.success == true) {
          setCheck(data.checkoutAmount)

          setTimeout(() => {
            setLoading1(false)   
          }, 2000);
          
        } 
    
      } catch (error) {
        console.error('operation failed.');
      }
       
      }



      const filtredTransactions = (trans:any) =>{
        if (active === 0) {
            return trans
        }if (active === 1) {
            return trans.state == "En Attente"
        }if (active === 2) {
            return trans.state == "terminees"
        }
      }


      const sorTransactions = (a:any,b:any) =>{

        if (checked) {
            return b.sales - a.sales
        } if (checked1) {
            const dateA :any = new Date(a.Date);
            const dateB : any = new Date(b.Date);
            return (dateB - dateA);
        }
      }

     

      if(loading == true) return <div>...loading</div>

  return (
   
      <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Transactions
    </Typography>

    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',justifyContent:'space-between',width:'99%',mb:2,borderRadius:'6px',p:1}} >

    <Box sx={{display:'flex',alignItems:'center'}} >
<Button 
onClick={()=>setActive(0)} 
sx={ active ===0 ?
  {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}:
  {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
} 
variant="text">
  All Transactions
</Button>





<Button 
onClick={()=>setActive(1)} 
sx={ active ===1 ?
  {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}:
  {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
}  
variant="text">
  En Attente
</Button>





<Button 
onClick={()=>setActive(2)} 
sx={ active ===2 ?
  {color:'#ff3d00',mr:2,":hover":{bgcolor:'#eeeeee'}}:
  {color:'black',mr:2,":hover":{bgcolor:'#eeeeee'}}
}  
variant="text">
Terminées
</Button>

</Box>



<Box sx={{display:'flex',alignItems:'center'}} >
<FormControlLabel 
              control={<Checkbox  
              onChange={handleChange}
              checked={checked}
              disabled={checked1 ? true : false}
              />} 
             label="transed by sales" />

<FormControlLabel 
              control={<Checkbox  
              onChange={handleChange1}
              checked={checked1}
              disabled={checked ? true : false}
              />} 
             label="transed by date" />
</Box>


</Box> 

    <Box sx={{bgcolor:'Window',display:'flex',flexDirection:'column',width:'99%',mb:2,borderRadius:'6px',p:1}} >
        <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between',width:'100%'}} >
        <Typography sx={{fontWeight:'800',textAlign:'left'}} variant="h6" gutterBottom>
    Totale Sales
    </Typography>
    <Typography sx={{fontWeight:'800',color:'#8e24aa',ml:1,textAlign:'left'}} variant="h6" gutterBottom>
    ({calculateTotalAmount(transactions)}Da)
    </Typography>
        </Box>
        <Box sx={{display:'flex',alignItems:'center',width:'100%'}} >
        <Typography sx={{fontWeight:'800',color:'#8e24aa',textAlign:'left'}} variant='subtitle2' gutterBottom>
         Observation:
    </Typography>
    <Typography sx={{fontWeight:'800',color:'#bdbdbd',ml:1,textAlign:'left'}} variant='subtitle2' gutterBottom>
    The minimum amount to extract money is (1000DA)
    </Typography>
    </Box>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}} >
    { loading1 == false ? 
    ( transactions.length === 0 ?  
        ""
        :<Button 
    onClick={handelPostCheckOutOrder} 
    sx={{bgcolor:'#8e24aa',textTransform:'lowercase',color:'white',mr:3,":hover":{bgcolor:'#8e24aa',color:'white'}}}  
    variant="text">
        Extract Now
    </Button>)
    
    : <LoadingButton
          size="small"
          onClick={handleClick}
          loading={loading1 == true}
          loadingIndicator="Loading…"
          variant="outlined"
        >
        Extract Now
        </LoadingButton>}

    </Box>
    </Box>

    <Box sx={{bgcolor:'Window',display:'flex',flexDirection:'column',width:'99%',mb:2,borderRadius:'6px',p:1}} >
    <Box sx={{display:'flex',alignItems:'center',mb:2}} >
        <Typography sx={{fontWeight:'800',textAlign:'left'}} variant="h6" gutterBottom>
    Selles Transactions
    </Typography>
    <Typography sx={{fontWeight:'800',color:'#8e24aa',ml:1,textAlign:'left'}} variant="h6" gutterBottom>
    History:
    </Typography>
        </Box>

        <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>TransactionId</TableCell>
            <TableCell align="right">Date</TableCell>
            <TableCell align="right">Sales(DA)</TableCell>
            <TableCell align="right">Modérate Region</TableCell>
            <TableCell align="right">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { rows.filter(filtredTransactions).length === 0 ? 
          <Typography sx={{fontWeight:'200',textAlign:'left',ml:1}} variant='subtitle2' gutterBottom>
          no Transactions
          </Typography>
          : rows.filter(filtredTransactions).sort(sorTransactions).map((row:any) => (
            <TableRow
              key={row.TransactionId}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.TransactionId}
              </TableCell>
              <TableCell align="right">{row.Date}</TableCell>
              <TableCell align="right">{row.sales}</TableCell>
              <TableCell align="right">{row.modérateRegion}</TableCell>
              <TableCell align="right">{row.state}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

        </Box>
        </Box>
       
  )
}
