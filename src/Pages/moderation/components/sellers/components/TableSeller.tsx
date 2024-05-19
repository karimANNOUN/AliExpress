import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { TableRowSeller } from './componentsProfil.tsx/TableRowSeller'





export const TableSeller = ({seller}:any) => {

  


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
          {seller.map((row:any) => ( <TableRowSeller key={row.id} row={row} /> ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
  )
}
