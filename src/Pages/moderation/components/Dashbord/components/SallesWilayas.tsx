
import { ReactNode } from 'react'


import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'


import ChevronUp from 'mdi-material-ui/ChevronUp'
import ChevronDown from 'mdi-material-ui/ChevronDown'
import {calculateRevenueWilayaSales,calculateRevenueWilayaLast,calculateAllRevenueThistYear} from './FunctionTotalModeration'

type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'

export const SallesWilayas = ({seller,wiliaya}:any) => {


  

  return (
    <Card sx={{width:'100%',height:'100%'}} >
    <CardHeader
      title='Sales by Wilayas'
      titleTypographyProps={{ sx: { lineHeight: '1.2 !important', letterSpacing: '0.31px !important' } }}
    />
    <CardContent sx={{ pt: theme => `${theme.spacing(2)} !important` ,overflowY:'auto' }}>
      {wiliaya.map((item: any, index: number) => {
        return (
          <Box
            key={item.state}
            sx={{
              display: 'flex',
              alignItems: 'center',
              ...(index !== wiliaya.length - 1 ? { mb: 5.875 } : {})
            }}
          >
            <Avatar
              sx={{
                width: 38,
                height: 38,
                marginRight: 3,
                fontSize: '1rem',
                color: 'common.white',
                backgroundColor: `${item.avatarColor}.main`
              }}
            >
              {item.state.substring(0, 3)}
            </Avatar>

            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex' }}>
                  <Typography sx={{ mr: 0.5, fontWeight: 600, letterSpacing: '0.25px' }}> (DA) {calculateAllRevenueThistYear(item,seller)}</Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  { calculateAllRevenueThistYear(item,seller) / calculateRevenueWilayaLast(item,seller) > 1 ? 
                       <ChevronUp sx={{ color: 'success.main', fontWeight: 600 }} /> :
                       ( (calculateAllRevenueThistYear(item,seller) === 0 && calculateRevenueWilayaLast(item,seller) === 0) ? "" : <ChevronDown sx={{ color: 'error.main', fontWeight: 600 }} />)
                       }
                    <Typography
                      variant='caption'
                      sx={{
                        fontWeight: 600,
                        lineHeight: 1.5,
                      }}
                      color={ (calculateAllRevenueThistYear(item,seller) - calculateRevenueWilayaLast(item,seller) < 0) ? 'error.main' : 'success.main' }
                    >
                      { (calculateAllRevenueThistYear(item,seller) === 0 && calculateRevenueWilayaLast(item,seller) === 0)
                       ? 0 : 
                       
                       ( calculateRevenueWilayaLast(item,seller) === 0 ?  100 : calculateAllRevenueThistYear(item,seller)*100/calculateRevenueWilayaLast(item,seller)) }%
                    </Typography>
                  </Box>
                </Box>
                <Typography variant='caption' sx={{ lineHeight: 1.5 }}>
                  {item.state}
                </Typography>
              </Box>

              <Box sx={{ display: 'flex', textAlign: 'end', flexDirection: 'column' }}>
                <Typography sx={{ fontWeight: 600, fontSize: '0.875rem', lineHeight: 1.72, letterSpacing: '0.22px' }}>
                  {calculateRevenueWilayaSales(item,seller)}
                </Typography>
                <Typography variant='caption' sx={{ lineHeight: 1.5 }}>
                  Sales
                </Typography>
              </Box>
            </Box>
          </Box>
        )
      })}
    </CardContent>
  </Card>
  )
}
