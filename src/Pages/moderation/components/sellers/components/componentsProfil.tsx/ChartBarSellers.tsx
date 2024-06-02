import { Box } from '@mui/material';
import { useEffect } from 'react';
import ReactApexcharts from 'react-apexcharts'


export const ChartBarSellers = ({seller}:any) => {

    const currentDate = new Date();
    const previousYearDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate());
    const previous2YearDate = new Date(currentDate.getFullYear() - 2, currentDate.getMonth(), currentDate.getDate());
  
  
    
    

    const calculateSalesMonth = (seller:any,month:number) =>{

        let total = 0;

        
    
        seller.forEach((rev:any) => {
            total +=  rev.article.filter((art:any)=>{
            const createdAtDate = new Date(art.commande.createdAt);
            const monthOfSpecificDateArticle = createdAtDate.getMonth() + 1;
          return (art.state == "terminees" && monthOfSpecificDateArticle === month &&  createdAtDate > previousYearDate )
            }).length
        });
    
    
      return total;
       
      }



      const calculateSalesAll = (seller:any) =>{

        let total = 0;
    
        seller.forEach((rev:any) => {
            total +=  rev.article.filter((art:any)=>{
                const createdAtDate = new Date(art.commande.createdAt);
          return (art.state == "terminees" &&  createdAtDate > previousYearDate  )
        }).length
        });
    
    
      return total;
       
      }



   const state : any = {
          
        series: [{
          name: '% sales this month ',
          data: [
              (Math.floor(calculateSalesMonth(seller,1)*1000/calculateSalesAll(seller))/10),
              (Math.floor(calculateSalesMonth(seller,2)*1000/calculateSalesAll(seller))/10),
              (Math.floor(calculateSalesMonth(seller,3)*1000/calculateSalesAll(seller))/10),
              (Math.floor(calculateSalesMonth(seller,4)*1000/calculateSalesAll(seller))/10),
              (Math.floor(calculateSalesMonth(seller,5)*1000/calculateSalesAll(seller))/10),
              (Math.floor(calculateSalesMonth(seller,6)*1000/calculateSalesAll(seller))/10),
              (Math.floor(calculateSalesMonth(seller,7)*1000/calculateSalesAll(seller))/10),
              (Math.floor(calculateSalesMonth(seller,8)*1000/calculateSalesAll(seller))/10),
              (Math.floor(calculateSalesMonth(seller,9)*1000/calculateSalesAll(seller))/10),
              (Math.floor(calculateSalesMonth(seller,10)*1000/calculateSalesAll(seller)/10)),
              (Math.floor(calculateSalesMonth(seller,11)*1000/calculateSalesAll(seller)/10)),
              (Math.floor(calculateSalesMonth(seller,12)*1000/calculateSalesAll(seller)/10)),
              
                        ]
        }],
        options: {
          chart: {
            height: 450,
            type: 'bar',
          },
          plotOptions: {
            bar: {
              borderRadius: 10,
              dataLabels: {
                position: 'top', 
              },
            }
          },
          dataLabels: {
            enabled: true,
            formatter: function (val:any) {
              return val + "%";
            },
            offsetY: -20,
            style: {
              fontSize: '12px',
              colors: ["#304758"]
            }
          },
          
          xaxis: {
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            position: 'top',
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false
            },
            crosshairs: {
              fill: {
                type: 'gradient',
                gradient: {
                  colorFrom: '#D8E3F0',
                  colorTo: '#BED1E6',
                  stops: [0, 100],
                  opacityFrom: 0.4,
                  opacityTo: 0.5,
                }
              }
            },
            tooltip: {
              enabled: true,
            }
          },
          yaxis: {
            axisBorder: {
              show: false
            },
            axisTicks: {
              show: false,
            },
            labels: {
              show: false,
              formatter: function (val:any) {
                return val + "%";
              }
            }
          
          },
          title: {
            text: 'Monthly Sellers Sales',
            floating: true,
            offsetY: 330,
            align: 'center',
            style: {
              color: '#444'
            }
          }
        },
      
      
      };
    


  return (
    <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',height:'100%',bgcolor:'Window',p:1}} >
           <ReactApexcharts options={state.options} series={state.series} type="bar" height={360} width={1000} />
      </Box>
  )
}
