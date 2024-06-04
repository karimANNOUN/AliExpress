import { Box,Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'
import { StatisticCardSignale } from './components/StatisticCardSignale';

export const Signale = () => {
  return (
    <Box sx={{width:'100%',height:'100%',display:'flex',flexDirection:'column'}} >
    <Typography sx={{fontWeight:'800',textAlign:'left',my:2}} variant="h6" gutterBottom>
    Signale 
    </Typography>

    <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={2}>
    <Grid  item xs={4}>
    <Card sx={{ position: 'relative',width:'100%' ,height:'100%' }}>
      <CardContent>
        <Typography variant='h6'>Hello karim 🥳</Typography>
        <Typography variant='body2' sx={{ letterSpacing: '0.25px' }}>
          discover our sellers region 
        </Typography>

        <Typography variant='body2' sx={{ letterSpacing: '0.25px' , my:2 }}>
          discover our sellers region 
        </Typography>
        
        <Button  size='small' variant='contained'>
          View Sallers
        </Button>
        
        <img alt='trophy' style={{right: 36,bottom: 20,height: 150,position: 'absolute'}} src='https://cdn1.vectorstock.com/i/1000x1000/95/00/seller-woman-farm-products-market-facade-vector-26569500.jpg' />
      </CardContent>
    </Card>
       </Grid>

       <Grid item xs={8}>
       <StatisticCardSignale />
       </Grid>

      </Grid>
      </Box>
      </Box>
  )
}
