
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import { TableCelles } from './TableCelles'





export const TableAllOrder = ({order,setOrder,active}:any) => {



 const filtredOrders = (ordr:any) =>{
    if (active === 0) {
        return ordr
    }if (active === 1) {
        return ordr.state == "En Attente"
    }if (active === 2) {
        return ordr.state == "expédiée"
    }if (active === 3) {
        return ordr.state == "non paye"
    }if (active === 4) {
        return ordr.state == "terminees"
    }
  }




  return (
    <Card>
    <TableContainer>
      <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name Buyer</TableCell>
            <TableCell>Email Buyer</TableCell>
            <TableCell>Salary(DA)</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>More Details</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        { order.filter(filtredOrders).length === 0 ? 
        <Typography sx={{fontWeight:'200',textAlign:'left',mt:1}} variant='body2' gutterBottom>
        Nothing Orders(0)
</Typography>
       :
          (order.filter(filtredOrders).map((ord:any) => ( <TableCelles key={ord.id} ord={ord} setOrder={setOrder} /> )))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
  )
}
