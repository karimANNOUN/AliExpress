import { Box } from '@mui/material'
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export const SearchBox = ({result}:any) => {
  return (
    <>
     <Box sx={{width:'100%',borderRadius:'8px',maxHeight:'500px',display:'flex',flexDirection:'column',position:'absolute',bgcolor:'#e1bee7',top:'100%',overflowY:'auto',zIndex:1}} >
     { result.length ? <List>
       {result.map((product:any) => (
         <ListItem key={product.id}  >
           <Link href={`/controlpanelseller/updateproduct/${product.id}`}  style={{width:'100%',textDecoration:'none',color:'black'}} >
         <ListItemButton sx={{borderBottom:'solid 2px #e0e0e0'}} >
         <Avatar sx={{mr:2}} alt="Remy Sharp" src={product.images[0].imageUrl} />
        
           <ListItemText primary={product.title} />
           
         </ListItemButton>
         </Link>
         </ListItem>
       
       ))}
       
     </List>: 
     
     <Box sx={{width:'100%',height:'300px',bgcolor:'#e1bee7',display:'flex',justifyContent:'center',alignItems:'center',zIndex:1}} >
       <Typography sx={{fontWeight:'800',textAlign:'center',fontFamily:'monospace'}} variant="h5" gutterBottom>
    Nothing Products !!
    </Typography>
     </Box>

     }
   </Box> 
   </>
  )
}
