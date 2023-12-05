import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
export const GridItem4 = () => {

const items=[
    {id:1 , image:'https://i.pinimg.com/736x/01/8b/ce/018bce411329720c4f32c010060a94ea.jpg' , sold:'29%' , prix:'1225,69' },
    {id:2 , image:'https://i.pinimg.com/736x/01/8b/ce/018bce411329720c4f32c010060a94ea.jpg' , sold:'29%' , prix:'1225,69' },
    {id:3 , image:'https://i.pinimg.com/736x/01/8b/ce/018bce411329720c4f32c010060a94ea.jpg' , sold:'29%' , prix:'1225,69' },
]


  return (
    <Box sx={{height:'55%',mb:2,borderRadius:'20px',bgcolor:'#eeeeee'}} >
        <Box sx={{display:'flex',flexDirection:'column',width:'100%',height:'30%'}} >
         <Typography sx={{my:2,pl:3,fontWeight:'700',textAlign:'left'}}  variant='h6' gutterBottom>
        Nouveau
      </Typography>
      <Typography sx={{pl:3,fontWeight:'300',textAlign:'left'}}  variant='caption' gutterBottom>
        Mise en vente dans les 30 derniers jours
      </Typography>
      </Box>

      <Box sx={{width:'100%',height:'70%',display:'flex',justifyContent:'space-around',alignItems:'center'}}  >

       { items.map( item => (<Box key={item.id} sx={{width:'27%',height:'75%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}} >
       <img src={item.image} alt='hhkt' style={{width:'100%',height:'100%',borderRadius:'30px'}} />
         <Box sx={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}} >
         <Typography sx={{mt:2,fontWeight:'800',color:'#ef6c00'}}  variant='caption' gutterBottom>
        DA
      </Typography>
         <Typography sx={{mt:2,mx:1,fontWeight:'800',color:'#ef6c00'}}  variant='subtitle1' gutterBottom>
        {item.prix}
      </Typography>
      <Typography sx={{mt:2,fontWeight:'800',color:'#ef6c00',bgcolor:'#ffcdd2'}}  variant='subtitle1' gutterBottom>
        -{item.sold}
      </Typography>
      </Box>
       </Box>))}
       </Box>
      
         </Box>
  )
}
