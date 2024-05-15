import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import LinearProgress from '@mui/material/LinearProgress'
import {calculateAllRevenue ,calculateAllRevenueLatestYear ,calculateRevenueOneSeller } from './FunctionTotalModeration'
import MenuUp from 'mdi-material-ui/MenuUp'
import MenuDown from 'mdi-material-ui/MenuDown'
import DotsVertical from 'mdi-material-ui/DotsVertical'

// ** Types
type ThemeColor = 'primary' | 'secondary' | 'error' | 'warning' | 'info' | 'success'




export const TotalEarning = ({seller}:any) => {



  return (
    <Card sx={{width:'100%',height:'100%'}} >
    <CardHeader
      title='First Salles Région'
      titleTypographyProps={{ sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' } }}
    />
    <CardContent sx={{ pt: theme => `${theme.spacing(2.25)} !important` }}>
      <Box sx={{ mb: 1.5, display: 'flex', alignItems: 'center' }}>
        <Typography variant='h4' sx={{ fontWeight: 600, fontSize: '2.125rem !important' }}>
          DA{calculateAllRevenue(seller)}
        </Typography>
        { (calculateAllRevenue(seller)-calculateAllRevenueLatestYear(seller)) >= 0 ? <Box sx={{ display: 'flex' ,ml:1 ,alignItems: 'center', color: 'success.main' }}>
          { (calculateAllRevenue(seller)-calculateAllRevenueLatestYear(seller)) === 0 ? 
             ""
          : <MenuUp sx={{ fontSize: '1.875rem', verticalAlign: 'middle' }} />}
          <Typography variant='body2' sx={{ fontWeight: 600, color: 'success.main' }}>
            { calculateAllRevenueLatestYear(seller) === 0 ? 100 : (calculateAllRevenue(seller)*100/calculateAllRevenueLatestYear(seller))}%
          </Typography>
        </Box> : 
        <Box sx={{ display: 'flex', alignItems: 'center', color: 'error.main' }}>
        <MenuDown sx={{ fontSize: '1.875rem', verticalAlign: 'middle' }} />
        <Typography variant='body2' sx={{ fontWeight: 600, color: 'error.main' }}>
          { calculateAllRevenueLatestYear(seller) === 0 ? 100 : (calculateAllRevenue(seller)*100/calculateAllRevenueLatestYear(seller))}%
        </Typography>
      </Box>
        }
      </Box>

      <Typography component='p' variant='caption' sx={{ mb: 10 }}>
       New earning DA { calculateAllRevenue(seller) -  calculateAllRevenueLatestYear(seller)} compared with last year
      </Typography>

      {seller.sort((a:any, b:any) => b._count.article - a._count.article ).slice(0, 3).map((item: any, index: number) => {
        return (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              ...(index !== seller.length - 1 ? { mb: 8.5 } : {})
            }}
          >
            <Avatar
              variant='rounded'
              sx={{
                mr: 3,
                width: 40,
                height: 40,
                backgroundColor: theme => `rgba(${theme.palette.background.default}, 0.04)`
              }}
            >
              <img src={item.imageProfle} alt={item.name} height="27" />
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
                <Typography variant='body2' sx={{ mb: 0.5, fontWeight: 600, color: 'text.primary' }}>
                  {item.name}
                </Typography>
                <Typography variant='caption'>Wilaya:{item.state}</Typography>
              </Box>

              <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
                <Typography variant='body2' sx={{ mb: 2, fontWeight: 600, color: 'text.primary' }}>
                  (DA){calculateRevenueOneSeller(item)}
                </Typography>
                <LinearProgress color='secondary' value={calculateRevenueOneSeller(item)*100/calculateAllRevenue(seller)} variant='determinate' />
              </Box>
            </Box>
          </Box>
        )
      })}
    </CardContent>
  </Card>
  )
}
