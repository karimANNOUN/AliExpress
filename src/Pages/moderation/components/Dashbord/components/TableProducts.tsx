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
import {calculateRevenueSeller} from './FunctionTotalModeration'


type ThemeColor = 'info' | 'error' | 'warning' | 'success' 


  
  interface StatusObj {
    [key: string]: {
      color: ThemeColor
    }
  }
  


export const TableProducts = ({seller}:any) => {


      
      const statusObj: StatusObj = {
        "seller attente1": { color: 'info' },
        "rejected": { color: 'error' },
        "seller attente2": { color: 'warning' },
        "seller": { color: 'success' }
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
            </TableRow>
          </TableHead>
          <TableBody>
            {seller.map((row:any) => (
              <TableRow hover key={row.id} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.createdAt}</TableCell>
                <TableCell>{calculateRevenueSeller(row)}</TableCell>
                <TableCell>{row.state}</TableCell>
                <TableCell>
                  <Chip
                    label={row.role}
                    color={statusObj[row.role].color}
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
