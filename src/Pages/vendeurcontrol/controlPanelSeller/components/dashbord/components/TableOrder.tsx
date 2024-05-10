import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

type ThemeColor = 'error' | 'warning' | 'info' | 'success'

interface RowType {
  id:number
  name: string
  date: string
  email: string
  salary: string
  status: string
}

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}




export const TableOrder = ({order}:any) => {

  

  const statusObj: StatusObj = {
    'expédiée': { color: 'info' },
    'non paye': { color: 'error' },
    'En Attente': { color: 'warning' },
    'terminees': { color: 'success' }
 }


  const rows: RowType[] = order.map( (order:any) => ({
      id:order.id,
      status: order.state,
      date: `${order.commande.createdAt}`,
      name: order.commande.buyer.name,
      salary: `${order.priceProduct*order.quantity}`,
      email: order.commande.buyer.email,
    }))
  
  



  return (
    <Card>
    <TableContainer>
      <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Salary(DA)</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: RowType) => (
            <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
              <TableCell>{row.id}</TableCell>
              <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                </Box>
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.salary}</TableCell>
              <TableCell>
                <Chip
                  label={row.status}
                  color={statusObj[row.status].color}
                  sx={{
                    height: 24,
                    fontSize: '0.75rem',
                    textTransform: 'capitalize',
                    '& .MuiChip-label': { fontWeight: 500 }
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Card>
  )
}
