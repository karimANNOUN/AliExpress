import { ReactElement} from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { calculateTotal , calculateTotalOrder} from './FunctionTotal';

import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** Types
type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

interface DataType {
  stats: string
  title: string
  color: ThemeColor
  icon: ReactElement
}




export const StatisticCard = ({productsSeller,order}:any) => {





      const salesData: DataType[] = [
        {
          stats: `${calculateTotalOrder(productsSeller)}`,
          title: 'Orders',
          color: 'primary',
          icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
        },
        {
          stats: `${ !productsSeller.length ? "0" : productsSeller[0].user.followers.length}`,
          title: 'Customers',
          color: 'success',
          icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
        },
        {
          stats: `${productsSeller.length}`,
          color: 'warning',
          title: 'Products',
          icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
        },
        {
          stats: `DA${calculateTotal(productsSeller)}`,
          color: 'info',
          title: 'Revenue',
          icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
        }
      ]
      
      const renderStats = () => {
        return salesData.map((item: DataType, index: number) => (
          <Grid item xs={12} sm={3} key={index}>
            <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
              <Avatar
                variant='rounded'
                sx={{
                  mr: 3,
                  width: 44,
                  height: 44,
                  boxShadow: 3,
                  color: 'common.white',
                  backgroundColor: `${item.color}.main`
                }}
              >
                {item.icon}
              </Avatar>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography variant='caption'>{item.title}</Typography>
                <Typography variant='h6'>{item.stats}</Typography>
              </Box>
            </Box>
          </Grid>
        ))
      }




  return (
    <Card sx={{width:'100%',height:'100%'}} >
    <CardHeader
      title='Statistics Card'
      subheader={
        <Typography variant='body2'>
          <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
            Total {order.filter((ordr:any)=> ordr.state == "terminees").length*100/order.length}% growth
          </Box>{' '}
          😎 this month
        </Typography>
      }
      titleTypographyProps={{
        sx: {
          mb: 2.5,
          lineHeight: '2rem !important',
          letterSpacing: '0.15px !important'
        }
      }}
    />
    <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
      <Grid container spacing={[5, 0]}>
        {renderStats()}
      </Grid>
    </CardContent>
  </Card>
  )
}
