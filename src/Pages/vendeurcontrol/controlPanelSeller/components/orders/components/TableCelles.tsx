import { Box,IconButton,Typography } from '@mui/material'
import  { useEffect, useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Cookies from 'js-cookie';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ModalOrdersDetails } from './ModalOrdersDetails';
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Chip from '@mui/material/Chip'


type ThemeColor = 'error' | 'warning' | 'info' | 'success'

interface StatusObj {
  [key: string]: {
    color: ThemeColor
  }
}

export const TableCelles = ({ord,setOrder}:any) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  const [opens, setOpens] = useState(false);
const handleOpen = () => setOpens(true);

  const statusObj: StatusObj = {
    'expédiée': { color: 'info' },
    'non paye': { color: 'error' },
    'En Attente': { color: 'warning' },
    'terminees': { color: 'success' }
 }



  return (
    <TableRow hover  sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
              <TableCell>{ord.id}</TableCell>
              <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{ord.commande.buyer.name}</Typography>
                </Box>
              </TableCell>
              <TableCell>{ord.commande.buyer.email}</TableCell>
              <TableCell>{ord.priceProduct*ord.quantity}</TableCell>
              <TableCell>
                <Chip
                  label={ord.state}
                  color={statusObj[ord.state].color}
                  sx={{
                    height: 24,
                    fontSize: '0.75rem',
                    textTransform: 'capitalize',
                    '& .MuiChip-label': { fontWeight: 500 }
                  }}
                />
              </TableCell>
              <TableCell>{ord.commande.createdAt}</TableCell>
              
              <TableCell>
              <IconButton onClick={handleClick} >
               <MoreVertIcon sx={{fontSize:'16px'}} />
              </IconButton>

              </TableCell>


              <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleOpen}>Détails</MenuItem>
       </Menu>

       <ModalOrdersDetails opens={opens} setOpens={setOpens} setAnchorEl={setAnchorEl} ord={ord} setOrder={setOrder} />
             
              
            </TableRow>
  )
}
