import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
export const PetitCard = () => {
  return (
    <div>
        <Box  sx={{width:'220px',height:'480px',borderRadius:'20px',mb:2,display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',borderColor:'#eeeeee',borderStyle:'solid' }}>
    <img src='https://i.pinimg.com/564x/6a/f3/fb/6af3fb0201c1f22c8281c5519faf5d44.jpg' alt='hhtr' style={{width:'90%',height:'60%',borderRadius:'20px'}} />
    <Box sx={{width:'90%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{my:1,textAlign:'left'}}  variant='body1' gutterBottom>
  sac a dos de voyage
</Typography>
 <Box sx={{display:'flex',mb:1}} >
 <Rating name="read-only" value={2} readOnly size="small" sx={{color:'black',mr:1}} />
 <Typography sx={{textAlign:'left'}}  variant='caption' gutterBottom>
  + 2000 Vendu(s)
</Typography>
 </Box>
 <Box sx={{display:'flex',alignItems:'center'}} >
 <Typography sx={{textAlign:'left',fontWeight:'700'}}  variant='caption' gutterBottom>
  DA
</Typography>
<Typography sx={{textAlign:'left',fontWeight:'700',mr:2}}  variant='body1' gutterBottom>
  725
</Typography>
<Typography sx={{textAlign:'left',fontWeight:'5',textDecorationLine:'line-through',color: '#bdbdbd'}}  variant='caption' gutterBottom>
  DA1.741,2
</Typography>
 </Box>

 <Box sx={{display:'flex',alignItems:'center'}} >
 <Typography sx={{textAlign:'left',color:'Window',bgcolor:'#ff5722',mr:1}}  variant='caption' gutterBottom>
  Offre Bienvenue 
</Typography>
<Typography sx={{textAlign:'left',fontWeight:'700',color:'#ff5722'}}  variant='caption' gutterBottom>
  . -DA572.23  
</Typography>
 </Box>

 <Button variant="contained" sx={{bgcolor:'black',color:'Window',width:'100%',my:1,borderRadius:'20px',":hover":{bgcolor:'black',color:'Window'}}} >Apercu</Button> 

    </Box>
  </Box></div>
  )
}
