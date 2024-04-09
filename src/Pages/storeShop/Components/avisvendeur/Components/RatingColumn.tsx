import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import { useSelector } from 'react-redux';

export const RatingColumn = ({rat,reviews}:any) => {

 

  return (
    <Box  sx={{display:'flex',alignItems:'center',height:'30px'}} >
    <Typography sx={{fontWeight:'100',textAlign:'left',mt:1}} variant='caption' gutterBottom>
    Review {rat.name} rating description :

</Typography>
<Rating name="read-only" value={parseInt(rat.Number)}  readOnly size='small' sx={{mx:1}} />
  
<Typography sx={{fontWeight:'700',textAlign:'left',color:'#ff5722',mt:1}} variant='caption' gutterBottom>
  {rat.Number}
</Typography>
<Typography sx={{textAlign:'left',color:'#bdbdbd',mt:1}} variant='caption' gutterBottom>
({(reviews.filter((rev:any)=> rev.rating = rat.Number ).length)} Évaluations)
</Typography>

<Box sx={{height:'20px',width:'160px',display:'flex',justifyContent:'center',alignItems:'center',ml:1}} >
    <Box sx={{height:'100%',width:'50%',bgcolor:'#c2185b',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Typography sx={{textAlign:'left',fontSize:'12px',color:'white',mt:1}} variant='caption' gutterBottom>
    {reviews.filter((rev:any)=> rev.rating = rat.Number ).length*100/reviews.length}%
</Typography>
    </Box>

    <Box sx={{height:'100%',width:'50%',display:'flex',justifyContent:'center',alignItems:'center'}} >
    <Typography sx={{textAlign:'left',fontSize:'10px',mt:1}} variant='caption' gutterBottom>
    {rat.name} rating
</Typography>
    </Box>
 

</Box>
 
    </Box>
  )
}
