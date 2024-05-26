import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Button from '@mui/material/Button'
import { useTheme } from '@mui/material/styles'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import { ApexOptions } from 'apexcharts'
import ReactApexcharts from 'react-apexcharts'
import { useEffect } from 'react'
import {calculateAllRevenueByDays,getDay,calculateAllRevenueMonth} from './FunctionTotalModeration'

export const WeeklyOverview = ({seller}:any) => {


 useEffect(()=>{
  console.log(calculateAllRevenueMonth(seller,0))
 })
  


    const theme = useTheme()

    const options: ApexOptions = {
      chart: {
        parentHeightOffset: 0,
        toolbar: { show: false }
      },
      plotOptions: {
        bar: {
          borderRadius: 9,
          distributed: true,
          columnWidth: '40%',
     //     endingShape: 'rounded',
       //   startingShape: 'rounded'
        }
      },
      stroke: {
        width: 2,
        colors: [theme.palette.background.paper]
      },
      legend: { show: false },
      grid: {
        strokeDashArray: 7,
        padding: {
          top: -1,
          right: 0,
          left: -12,
          bottom: 5
        }
      },
      dataLabels: { enabled: false },
      colors: [
        theme.palette.primary.main,
        theme.palette.primary.main,
        theme.palette.primary.main,
        theme.palette.primary.main,
        theme.palette.primary.main,
        theme.palette.primary.main,
      ],
      states: {
        hover: {
          filter: { type: 'none' }
        },
        active: {
          filter: { type: 'none' }
        }
      },
      xaxis: {
        categories: [ 
                      getDay(6), 
                      getDay(5), 
                      getDay(4), 
                      getDay(3), 
                      getDay(2), 
                      getDay(1), 
                      getDay(0)
                    ],
        tickPlacement: 'on',
        labels: { show: true },
        axisTicks: { show: false },
        axisBorder: { show: false }
      },
      yaxis: {
        show: true,
        tickAmount: 4,
        labels: {
          offsetX: -17,
          formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}K` : value}DA`
        }
      }
    }
  

  return (
    <Card sx={{width:'100%',height:'100%'}} >
      <CardHeader
        title='Weekly Overview'
        titleTypographyProps={{
          sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
        }}
      />
      <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } , }}>
        <ReactApexcharts 
         type='bar' 
         height={205} 
         options={options} 
         series={[{ 

          data: [ calculateAllRevenueByDays(seller,6),
                  calculateAllRevenueByDays(seller,5), 
                  calculateAllRevenueByDays(seller,4), 
                  calculateAllRevenueByDays(seller,3), 
                  calculateAllRevenueByDays(seller,2), 
                  calculateAllRevenueByDays(seller,1), 
                  calculateAllRevenueByDays(seller,0)] 
          
          }]} />
        { calculateAllRevenueMonth(seller,0)/calculateAllRevenueMonth(seller,1) < 1 ?  <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
          <Typography variant='h5' sx={{ mr: 4 }}>
            { calculateAllRevenueMonth(seller,1) === 0 ?
             100 :
              (Math.floor( (calculateAllRevenueMonth(seller,0) - calculateAllRevenueMonth(seller,1)) *1000/calculateAllRevenueMonth(seller,1) )/10) }%
          </Typography>
          <Typography variant='body2'>Your sales performance is Decreased  
          {calculateAllRevenueMonth(seller,1) === 0 ? 
          100 :
          (Math.floor( (calculateAllRevenueMonth(seller,0) - calculateAllRevenueMonth(seller,1)) *1000/calculateAllRevenueMonth(seller,1) )/10) }% 
          😎 compared to last month
          </Typography>
        </Box>:

        <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
        <Typography variant='h5' sx={{ mr: 4 }}>
          { calculateAllRevenueMonth(seller,1) === 0 ?
           100 : 
           Math.floor( calculateAllRevenueMonth(seller,0)*1000/calculateAllRevenueMonth(seller,1) )/10 }%
        </Typography>
        <Typography variant='body2'>Your sales performance is
         {calculateAllRevenueMonth(seller,1) === 0 ?
          100 : 
          Math.floor( calculateAllRevenueMonth(seller,0)*1000/calculateAllRevenueMonth(seller,1) )/10 }% 😎 better compared to last month</Typography>
      </Box>
        }
        <Button sx={{mt:3}} fullWidth variant='contained'>
          Details
        </Button>
      </CardContent>
    </Card>
  )
}
