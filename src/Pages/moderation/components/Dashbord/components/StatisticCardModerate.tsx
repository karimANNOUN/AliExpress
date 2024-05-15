import { ReactElement} from 'react'

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'

import { calculateTotalProducts , calculateTotalOrders ,calculateAllRevenue ,calculateTotalOrdersTerminees } from './FunctionTotalModeration';

// ** Types
type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

interface DataType {
  stats: string
  title: string
  color: ThemeColor
  icon: ReactElement
}

export const StatisticCardModerate = ({seller}:any) => {

    const salesData: DataType[] = [
        {
          stats: `${calculateTotalOrders(seller)}`,
          title: 'Orders',
          color: 'primary',
          icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
        },
        {
          stats: `${seller.length}`,
          title: 'Sallers',
          color: 'success',
          icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
        },
        {
          stats: `${calculateTotalProducts(seller)}`,
          color: 'warning',
          title: 'Products',
          icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
        },
        {
          stats: `${calculateAllRevenue(seller)}`,
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
    <Card sx={{width:'100%'}} >
    <CardHeader
      title='Statistics Region Sellers'
      subheader={
        <Typography variant='body2'>
          <Box component='span' sx={{ fontWeight: 600, color: 'text.primary' }}>
            Total {calculateTotalOrdersTerminees(seller)*100/calculateTotalOrders(seller)}% orders Terminees
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
