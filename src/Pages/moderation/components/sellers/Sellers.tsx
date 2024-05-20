import { Box,Typography,Button } from '@mui/material'
import { TableSeller } from './components/TableSeller'
import { useState } from 'react'
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


export const Sellers = ({seller,loading,setSeller}:any) => {

  const [active,setActive]=useState(0)
  const [state,setState]=useState("")

  const option = [
    { label: 'name'},
    { label: 'date' },
    { label: 'email'},
    { label: 'wilaya'},
  ]



    if (loading == true) return <div>...loading</div>
  return (
    <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Sellers
    </Typography>

    <Box sx={{bgcolor:'Window',display:'flex',alignItems:'center',justifyContent:'space-between',width:'99%',mb:2,borderRadius:'6px',p:1}} >
<Box sx={{display:'flex',alignItems:'center'}} >
<Button 
onClick={()=>setActive(0)} 
sx={
  active === 0 ?
  {color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}} :
  {color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text">
  All Sellers
  </Button>




<Button 
onClick={()=>setActive(1)} 
sx={
  active === 1 ?
  {color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}:
  {color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text"
>
  En Attente
</Button>





<Button 
onClick={()=>setActive(2)} 
sx={active === 2 ?
{color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}:
{color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text"
>
Rejected
</Button>


<Button 
onClick={()=>setActive(3)} 
sx={
active === 3 ?
{color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}:
{color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text"
>
Seller 
</Button>


<Button 
onClick={()=>setActive(4)} 
sx={
active === 4 ?
{color:'#ff3d00',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}:
{color:'black',mr:2,textTransform:'lowercase',":hover":{bgcolor:'#eeeeee'}}
} 
variant="text"
>
Non demande
</Button>
</Box>

<Box sx={{display:'flex',alignItems:'center'}} >
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={option}
      sx={{ width: 300 }}
      size='small'
      onChange={(e,newValue:any)=>setState(newValue)}
      renderInput={(params) => <TextField {...params} label="sort by" />}
    />
</Box>


</Box> 

    <Box sx={{display:'flex',flexDirection:'column',width:'100%',mt:2}} >
      <TableSeller seller={seller} setSeller={setSeller} active={active} state={state} />
    </Box>
 
</Box>
  )
}
