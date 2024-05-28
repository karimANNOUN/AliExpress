import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { useEffect } from 'react'
import { Typography } from '@mui/material'
import { TableRowCustomers } from './TableRowCustomers'

export const TableCustomers = ({customers,setCustomers,active}:any) => {

    const filtredCustomers = (sell:any) =>{
        if (active === 0) {
            return sell
        }if (active === 1) {
            return sell.gender == "Male"
        }if (active === 2) {
            return sell.gender == "Female"
        }
      }

  return (
    <Card>
    <TableContainer>
      <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Sales(DA)</TableCell>
            <TableCell>Wilaya</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell sx={{display:'flex',justifyContent:'flex-end'}} >More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { customers.filter(filtredCustomers).length === 0 ?  
          <Typography sx={{ fontWeight: 300, textAlign:'left' , my:1 ,ml:1 }}> Canno't Find Any Customers </Typography>
          : customers.filter(filtredCustomers).map((row:any) => ( <TableRowCustomers key={row.id} row={row} setCustomers={setCustomers} /> ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
  )
}
