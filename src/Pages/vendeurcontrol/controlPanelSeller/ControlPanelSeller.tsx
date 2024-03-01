import { Box,IconButton,Typography } from '@mui/material'
import { Header } from './components/Header'
import { Lists } from './components/Lists'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import { Chart } from './components/Chart';
import { PieChart } from '@mui/x-charts/PieChart';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


export const ControlPanelSeller = () => {

   
const orders=[{id:1,state:'delivred'},{id:2,state:'cancelled'},{id:3,state:'pending'}]
    
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      }));



  return (
    <Box sx={{bgcolor:'#e0e0e0'}} >
    <Header/>
    <Box sx={{display:'flex',width:'100%',height:'100vh'}} >
      <Box sx={{width:'15%',bgcolor:'Window',height:'100%'}} >
        <Lists/>
      </Box>
      <Box sx={{width:'85%',height:'100%',display:'flex',flexDirection:'column',px:2}} >
      <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
      Dashbord
      </Typography>

      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Item sx={{display:'flex',alignItems:'center'}} >
             <MonetizationOnIcon sx={{fontSize:'80px',mr:2,color:'#ffb300'}} />
             <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}} >
             <Typography sx={{fontWeight:'100',textAlign:'left'}} variant="subtitle2" gutterBottom>
      Total Sales
      </Typography>
      <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body2' gutterBottom>
      $19,606,145.20
      </Typography>
             </Box>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{display:'flex',alignItems:'center'}} >
          <ShoppingCartIcon sx={{fontSize:'80px',mr:2,color:'#26a69a'}} />
             <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}} >
             <Typography sx={{fontWeight:'100',textAlign:'left'}} variant="subtitle2" gutterBottom>
      Total Orders
      </Typography>
      <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body2' gutterBottom>
      3290
      </Typography>
             </Box>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item sx={{display:'flex',alignItems:'center'}} >
          <Inventory2Icon sx={{fontSize:'80px',color:'#03a9f4',mr:2}} />
             <Box sx={{display:'flex',flexDirection:'column',justifyContent:'center'}} >
             <Typography sx={{fontWeight:'100',textAlign:'left'}} variant="subtitle2" gutterBottom>
      Total Products
      </Typography>
      <Typography sx={{fontWeight:'800',textAlign:'left'}} variant='body2' gutterBottom>
      322
      </Typography>
             </Box>
          </Item>
        </Grid>



        <Grid item xs={8}>
          <Item sx={{display:'flex',flexDirection:'column'}} >
          <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant='body2' gutterBottom>
      Total statistics
      </Typography>
              <Chart/>
          </Item>
        </Grid>



        <Grid item xs={4}>
          <Item sx={{display:'flex',flexDirection:'column'}} >
          <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant='body2' gutterBottom>
      Visitors
      </Typography>
      
      <PieChart
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A' },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={460}
      height={350}
    />
            </Item>
        </Grid>
        <Grid item xs={12}>
          <Item sx={{display:'flex',flexDirection:'column'}} >
          <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant='body2' gutterBottom>
      Latest Orders
      </Typography>

         {orders.map( (ord:any)=> <Box  key={ord.id} sx={{display:'flex',width:'100%',height:'15px',mb:2,alignItems:'center',justifyContent:'space-between'}} >
         <Typography sx={{fontWeight:'100',textAlign:'left'}} variant='subtitle2' gutterBottom>
      1002
      </Typography>

      <Typography sx={{fontWeight:'900',textAlign:'left'}} variant='subtitle2' gutterBottom>
      Ishak Announ
      </Typography>

      <Typography sx={{fontWeight:'100',textAlign:'left'}} variant='subtitle2' gutterBottom>
      Ishakannoun@gmail.com
      </Typography>

      <Typography sx={{fontWeight:'100',textAlign:'left'}} variant='subtitle2' gutterBottom>
      $ 722
      </Typography>

      { ord.state == "delivred" ? <Typography sx={{fontWeight:'100',bgcolor:'#c8e6c9',color:'#66bb6a',textAlign:'left'}} variant='subtitle2' gutterBottom>
      Dilvred
      </Typography> : "" }

      { ord.state == "cancelled" ? <Typography sx={{fontWeight:'100',bgcolor:'#ffcdd2',color:'#d50000',textAlign:'left'}} variant='subtitle2' gutterBottom>
      Cancelled
      </Typography> : "" }

      { ord.state == "pending" ? <Typography sx={{fontWeight:'100',bgcolor:'#fff9c4',color:'#ffd600',textAlign:'left'}} variant='subtitle2' gutterBottom>
      Pending
      </Typography> : "" }

      <Typography sx={{fontWeight:'100',textAlign:'left'}} variant='subtitle2' gutterBottom>
       07.05.2020
      </Typography>

        <IconButton>
            <MoreHorizIcon sx={{fontSize:'20px'}} />
        </IconButton>

         </Box>)}
          </Item>
        </Grid>
      </Grid>
    </Box>

      </Box>
    </Box>

     
    </Box>
  )
}
