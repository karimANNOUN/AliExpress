import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { TableRowSeller } from './componentsProfil.tsx/TableRowSeller'
import { useEffect } from 'react'
import { Typography } from '@mui/material'





export const TableSeller = ({seller,setSeller,active,sort}:any) => {

  const sortSellers = (a:any,b:any) =>{
    if (sort == null ) {
        return a
    }if (sort.label == 'name' ) {
        return a.name - b.name
    }if (sort.label == 'date') {
      const dateA :any = new Date(a.createdAt);
      const dateB : any = new Date(b.createdAt);
      return (dateB - dateA);
    }if (sort.label == 'email') {
        return (a.email-b.email)
    }if (sort.label == 'wilaya') {
        return (a.state-b.state)
    }
  }


  const filtredSellers = (sell:any) =>{
    if (active === 0) {
        return sell
    }if (active === 1) {
        return sell.role == "seller attente2"
    }if (active === 2) {
        return sell.role == "rejected"
    }if (active === 3) {
        return sell.role == "seller"
    }if (active === 4) {
        return sell.role == "seller attente1"
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
            <TableCell>Revenu(DA)</TableCell>
            <TableCell>Wilaya</TableCell>
            <TableCell>Status</TableCell>
            <TableCell sx={{display:'flex',justifyContent:'flex-end'}} >More</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { seller.filter(filtredSellers).length === 0 ?  
          <Typography sx={{ fontWeight: 300, textAlign:'left' , my:1 ,ml:1 }}> Canno't Find Any Sellers </Typography>
          : seller.filter(filtredSellers).sort(sortSellers).map((row:any) => ( <TableRowSeller key={row.id} row={row} setSeller={setSeller} /> ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
  )
}
