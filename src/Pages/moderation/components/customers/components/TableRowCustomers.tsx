import  { useState } from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';
import { ModalCustomers } from './ModalCustomers'

type ThemeColor = 'error' |  'info' 

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

export const TableRowCustomers = ({row}:any) => {

    const statusObj: StatusObj = {
        "Male": { color: 'info' },
        "Female": { color: 'error' },
      }
    
      const [opens, setOpens] = useState(false);
      const handleOpen = () => setOpens(true);


        const calculateSalesCustomers = (row:any) =>{

        let total = 0;
    
           row.articleBuyer.filter((art:any)=>art.state == "terminees" ).forEach((articl:any) => {
            total += articl.quantity * articl.priceProduct
          });
     
    
      return total;
       
      }

  return (
    <TableRow hover  sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
    <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
      </Box>
    </TableCell>
    <TableCell>{row.email}</TableCell>
    <TableCell>{row.createdAt}</TableCell>
    <TableCell>{calculateSalesCustomers(row)}</TableCell>
    <TableCell>{row.state}</TableCell>
    <TableCell>
      <Chip
        label={row.gender}
        color={statusObj[row.gender].color}
        sx={{
          height: 24,
          fontSize: '0.75rem',
          textTransform: 'capitalize',
          '& .MuiChip-label': { fontWeight: 500 }
        }}
      />
    </TableCell>
    <TableCell sx={{display:'flex',justifyContent:'flex-end'}} >
    <Button onClick={handleOpen} sx={{borderRadius:'14px',textTransform:'lowercase'}} color='info' variant="contained">Open</Button>
    </TableCell>
 
    <ModalCustomers opens={opens} setOpens={setOpens}  customer={row}  />
   

  </TableRow>
  )
}
