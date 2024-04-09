import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { oneEtoileOne, oneEtoileSix, oneEtoileThree, sixEtoileOne, sixEtoileSix, sixEtoileThree, troiEtoileOne, troiEtoileSix, troiEtoileThree } from './FunctionFilter';
import { useSelector } from 'react-redux';

export const TableAvis = () => {

    const reviews = useSelector((state:any)=>state.app.reviews)

    

    const filtredArray1 = reviews.slice()
    const filtredArray2 = reviews.slice()
    const filtredArray3 = reviews.slice()
    const filtredArray4 = reviews.slice()
    const filtredArray5 = reviews.slice()
    const filtredArray6 = reviews.slice()
    const filtredArray7 = reviews.slice()
    const filtredArray8 = reviews.slice()
    const filtredArray9 = reviews.slice()

    


    function createData(
        avis: string,
        onemois: string,
        threemois: string,
        sixmois: string,
       
      ) {
        return { avis,onemois,threemois,sixmois };
      }


    const rows = [
        createData('Positifs (4-5 étoiles)', `${sixEtoileOne(filtredArray1)}` , `${sixEtoileThree(filtredArray2)}`, `${sixEtoileSix(filtredArray3)}`),
        createData('Neutre (3 étoiles)', `${troiEtoileOne(filtredArray4)}`, `${troiEtoileThree(filtredArray5)}`, `${troiEtoileSix(filtredArray6)}`),
        createData('Négatif (1-2 étoiles)', `${oneEtoileOne(filtredArray7)}`, `${oneEtoileThree(filtredArray8)}`, `${oneEtoileSix(filtredArray9)}`),
    createData("Taux d'avis positifs", `${sixEtoileOne(filtredArray1)*100/reviews.length}%`, `${sixEtoileThree(filtredArray2)*100/reviews.length}%` , `${sixEtoileSix(filtredArray3)*100/reviews.length}%`),
     
      ];

  return (

    <Box sx={{width:'650px',height:'200px',borderStyle:'solid',display:'flex',flexDirection:'column',alignItems:'center',borderColor:'#f5f5f5',borderWidth:'2px',my:2}} >
    <Box sx={{height:'30px',width:'100%',bgcolor:'#e0e0e0',display:'flex',alignItems:'center'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',ml:2}} variant='subtitle1' gutterBottom>
    Statistiques des avis
</Typography>
    </Box>
    <Box sx={{width:'100%',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}} >
    <TableContainer sx={{width:'100%'}}>
<Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
  <TableHead>
    <TableRow>
      <TableCell>Avis</TableCell>
      <TableCell align="right">	1 mois</TableCell>
      <TableCell align="right">	3 mois</TableCell>
      <TableCell align="right">	6 mois</TableCell>
    
    </TableRow>
  </TableHead>
  <TableBody>
    {rows.map((row) => (
      <TableRow
        key={row.avis}
        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          {row.avis}
        </TableCell>
        <TableCell align="right">{row.onemois}</TableCell>
        <TableCell align="right">{row.threemois}</TableCell>
        <TableCell align="right">{row.sixmois}</TableCell>
        
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
  </Box>
      </Box>
  )
}
