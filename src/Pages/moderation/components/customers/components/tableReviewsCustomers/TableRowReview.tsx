import  { useState } from 'react'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import TableRow from '@mui/material/TableRow'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

export const TableRowReview = ({row}:any) => {
  return (
    <TableRow hover  sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
    <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Link variant='body1' sx={{color:'black',fontWeight:'700',fontSize:'12px',textAlign:'left',ml:1,":hover":{color:'#ff5722'}}} href={`/${row.productId}`} underline="none">
   
   {row.product.title}
   
   </Link>
      </Box>
    </TableCell>
    <TableCell>{row.comment}</TableCell>
    <TableCell><Rating sx={{mr:2}} name="read-only" value={parseInt(row.rating)} readOnly /></TableCell>
    <TableCell>{row.quantity}</TableCell>
    <TableCell>{row.colorProduct}</TableCell>
    <TableCell>{row.propertyType}</TableCell>
    <TableCell>
    <Box sx={{display:'flex',alignItems:'center'}} >
        { row.images.map( (imge:any) => 
        <Box key={imge.id} sx={{width:'22%',mr:1,height:'50px',borderRadius:'8px',position:'relative'}} >
        <img  src={imge.imageUrl} style={{width:'100%',height:'100%',borderRadius:'8px'}} />
        </Box>
        )}
    </Box>
    </TableCell>
    <TableCell>{row.likes.length}</TableCell>
   
    
 
    
   

  </TableRow>
  )
}
