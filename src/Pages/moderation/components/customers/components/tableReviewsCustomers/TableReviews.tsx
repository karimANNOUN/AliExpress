import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import { Typography } from '@mui/material'
import { TableRowReview } from './TableRowReview'
//import { TableRowCustomers } from './TableRowCustomers'

export const TableReviews = ({customer}:any) => {
  return (
    <Card sx={{width:'100%'}} >
    <TableContainer>
      <Table sx={{ minWidth: 800 ,width:'100%'}} aria-label='table in dashboard'>
        <TableHead>
          <TableRow>
            <TableCell>product Name</TableCell>
            <TableCell>Comment</TableCell>
            <TableCell>Rating</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>Property</TableCell>
            <TableCell>Images</TableCell>
            <TableCell>Likes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          { customer.review.length === 0 ?  
          <Typography sx={{ fontWeight: 300, textAlign:'left' , my:1 ,ml:1 }}> Canno't Find Any Reviews </Typography>
          : customer.review.map((row:any) => ( <TableRowReview key={row.id} row={row}  /> ))
          }
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
  )
}
