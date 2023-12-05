import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import IconButton from '@mui/material/IconButton';
import { GridItem1 } from './Griditems/GridItem1';
import { GridItem2 } from './Griditems/GridItem2';
import { GridItem3 } from './Griditems/GridItem3';
import { GridItem4 } from './Griditems/GridItem4';
import { GridItem5 } from './Griditems/GridItem5';

export default function GridBox() {
  return (
    <div>
      <Box sx={{mx:6,mt:3}} >
      <Grid sx={{height:'800px'}} container spacing={1}>
        <Grid sx={{display:'flex',flexDirection:'column',justifyContent:'center'}} item xs={3}>
         
         <GridItem1/>

        <GridItem2/>
       
          
        </Grid>
        <Grid sx={{display:'flex',alignItems:'center',justifyContent:'center'}} item xs={4}>
        <GridItem3/>
        </Grid>
        <Grid sx={{display:'flex',flexDirection:'column',justifyContent:'center'}} item xs={5}>
            
        <GridItem4/>

        <GridItem5/>

        </Grid>
      </Grid>
      </Box>
    </div>
  )
}
