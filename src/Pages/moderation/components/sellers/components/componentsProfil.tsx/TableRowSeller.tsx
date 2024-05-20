import  { useState } from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import {calculateRevenueSeller} from '../../../Dashbord/components/FunctionTotalModeration'
import Button from '@mui/material/Button';
import { ModalSeller } from '../ModalSeller'

type ThemeColor = 'error' | 'warning' | 'info' | 'success' 

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

export const TableRowSeller = ({row,setSeller}:any) => {

  const statusObj: StatusObj = {
    "seller attente1": { color: 'info' },
    "rejected": { color: 'error' },
    "seller attente2": { color: 'warning' },
    "seller": { color: 'success' }
  }

  const [opens, setOpens] = useState(false);
  const handleOpen = () => setOpens(true);


  return (
    <TableRow hover  sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
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
    <TableCell sx={{display:'flex',justifyContent:'flex-end'}} >
    <Button onClick={handleOpen} sx={{borderRadius:'14px',textTransform:'lowercase'}} color='info' variant="contained">Open</Button>
    </TableCell>

    <ModalSeller opens={opens} setOpens={setOpens}  sells={row} setSeller={setSeller} />

  </TableRow>
  )
}
