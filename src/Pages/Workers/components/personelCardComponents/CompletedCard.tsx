import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { PetitCard } from './PetitCard';
export const CompletedCard = () => {


     const card=[
        {id:1,name:'karim'},{id:2,name:'karim'},{id:3,name:'karim'},{id:4,name:'karim'},{id:5,name:'karim'},{id:6,name:'karim'}
     ]


  return (
    <Box sx={{display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:1}} variant="h6" gutterBottom>
          Articles similaires
     </Typography>
     <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center'}} >
       { card.map(carde=> <PetitCard key={carde.id} />)}
     </Box>
    </Box>
  )
}
