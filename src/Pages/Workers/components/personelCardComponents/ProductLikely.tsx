import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
export const ProductLikely = () => {

    const card=[
        {id:1,name:'kitou'},
        {id:2,name:'kitou'},
        {id:3,name:'kitou'},
        {id:4,name:'kitou'},
        {id:5,name:'kitou'},
        {id:6,name:'kitou'},
        {id:7,name:'kitou'},
        {id:8,name:'kitou'},
        {id:9,name:'kitou'},
        {id:10,name:'kitou'},
    ]

  return (
    <Box sx={{display:'flex',flexDirection:'column'}} >
         <Typography sx={{fontWeight:'800',textAlign:'left'}} variant="h6" gutterBottom>
         Les meilleures ventes de ChicSoleHQ Store
      </Typography>
    <Box  sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
    {card.slice(0,6).map( car=>   <Box key={car.id} sx={{display:'flex',flexDirection:'column',width:'200px',height:'300px'}} >
         <img src='https://i.pinimg.com/236x/42/0c/00/420c009d9e8bd4242d62b6600eed22e2.jpg' style={{width:'100%',height:'60%',borderRadius:'8px'}} />
         <Typography sx={{fontWeight:'800',textAlign:'left',my:1}} variant="body1" gutterBottom>
         DA175.05
      </Typography>
      <Box sx={{display:'flex',alignItems:'center'}} >
      <Typography sx={{color:'#9e9e9e',textAlign:'left',my:1}} variant="caption" gutterBottom>
      562 Commandes
      </Typography>
      <Rating sx={{color:'#ff1744'}} size="small" name="half-rating-read" defaultValue={1} precision={0.5} readOnly max={1} />
      <Typography sx={{color:'#9e9e9e',textAlign:'left',my:1}} variant="caption" gutterBottom>
      4.5
      </Typography>
      </Box>
        </Box> )}
    </Box>
    </Box>
  )
}
