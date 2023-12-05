
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export const GridItem3 = () => {
  return (
    <Box sx={{height:'97%',width:'97%',borderRadius:'20px',bgcolor:'#ffebee',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} >
        <Box sx={{display:'flex',width:'100%'}} >
          <Typography sx={{my:2,mr:1,pl:3,fontWeight:'700',color:'#ef6c00'}}  variant='h4' gutterBottom>
        Deal
      </Typography>
      <Typography sx={{my:2,fontWeight:'700'}}  variant='h4' gutterBottom>
        du Jour
      </Typography>
      </Box>
      <Box sx={{height:'87%',width:'90%',bgcolor:'window',borderRadius:'30px',display:'flex'}} >
       <Box sx={{width:'65%',height:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} >
         <img src='https://i.pinimg.com/564x/e6/9c/66/e69c665e13c783c9c3e44fee6a0617d0.jpg' alt='hhkt' style={{width:'90%',height:'70%'}} />
         <Box sx={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}} >
         <Typography sx={{mt:2,fontWeight:'800',color:'#ef6c00'}}  variant='caption' gutterBottom>
        DA
      </Typography>
         <Typography sx={{mt:2,mx:1,fontWeight:'800',color:'#ef6c00'}}  variant='subtitle1' gutterBottom>
        12,953
      </Typography>
      <Typography sx={{mt:2,fontWeight:'800',color:'#ef6c00',bgcolor:'#ffcdd2'}}  variant='subtitle1' gutterBottom>
        -51%
      </Typography>
      </Box>
       </Box>
       <Box sx={{width:'35%',height:'100%',display:'flex',flexDirection:'column'}}  >
       <Box sx={{width:'100%',height:'50%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} >
       <img src='https://i.pinimg.com/736x/01/8b/ce/018bce411329720c4f32c010060a94ea.jpg' alt='hhkt' style={{width:'90%',height:'70%',borderRadius:'30px'}} />
         <Box sx={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}} >
         <Typography sx={{mt:2,fontWeight:'800',color:'#ef6c00'}}  variant='caption' gutterBottom>
        DA
      </Typography>
         <Typography sx={{mt:2,mx:1,fontWeight:'800',color:'#ef6c00'}}  variant='subtitle1' gutterBottom>
        12,953
      </Typography>
      <Typography sx={{mt:2,fontWeight:'800',color:'#ef6c00',bgcolor:'#ffcdd2'}}  variant='subtitle1' gutterBottom>
        -51%
      </Typography>
      </Box>
       </Box>
       <Box sx={{width:'100%',height:'50%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}  >
       <img src='https://i.pinimg.com/564x/cb/ae/5b/cbae5bea2d414c1402d5d5c58493ca3c.jpg' alt='hhkt' style={{width:'90%',height:'70%',borderRadius:'30px'}} />
         <Box sx={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}} >
         <Typography sx={{mt:2,fontWeight:'800',color:'#ef6c00'}}  variant='caption' gutterBottom>
        DA
      </Typography>
         <Typography sx={{mt:2,mx:1,fontWeight:'800',color:'#ef6c00'}}  variant='subtitle1' gutterBottom>
        12,953
      </Typography>
      <Typography sx={{mt:2,fontWeight:'800',color:'#ef6c00',bgcolor:'#ffcdd2'}}  variant='subtitle1' gutterBottom>
        -51%
      </Typography>
      </Box>
       </Box>
       </Box>
      </Box>
         </Box>
  )
}
