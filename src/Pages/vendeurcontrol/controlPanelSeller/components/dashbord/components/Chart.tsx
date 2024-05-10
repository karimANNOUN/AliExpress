import React, { useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { useLocation } from 'react-router-dom';


  
export const Chart  = ({order,productsSeller,loading}:any) =>  {
  
  
 
  const [titleOne,setTitleOne]=useState('ghoza')
  const [titleTow,setTitleTow]=useState('marwa')

  const location=useLocation()

   

  useEffect(()=>{

    const product=productsSeller.sort((a:any, b:any) => b._count.article - a._count.article).slice(0, 2) 
      
    
 // setTitleOne(product[1].title.replace(/'/g, ''))
 // setTitleTow(product[0].title.replace(/'/g, ''))

  },[location.pathname == '/controlpanelseller/dashboard'])

  



  const chartSetting = {
    yAxis: [
      {
        label: 'article (number)',
      },
    ],
    width: 1000,
    height: 350,
    sx: {
      [`.${axisClasses.left} .${axisClasses.label}`]: {
        transform: 'translate(-20px, 0)',
      },
    },
  };
  const dataset =  [
    {
      titleOne : 0,
      titleTow: 50,
      month: 'Jan',
    },
    {
      titleOne : 89,
      titleTow: 59,
      month: 'Fev',
    },
    {
      titleOne : 59,
      titleTow: 57,
      month: 'Mar',
    },
    {
      titleOne : 59,
      titleTow: 57,
      month: 'Apr',
    },
    {
      titleOne : 59,
      titleTow: 57,
      month: 'May',
    },
    {
      titleOne : 59,
      titleTow: 57,
      month: 'June',
    },
    {
      titleOne : 59,
      titleTow: 57,
      month: 'July',
    },
    {
      titleOne : 59,
      titleTow: 57,
      month: 'Aug',
    },
    {
      titleOne : 59,
      titleTow: 57,
      month: 'Sept',
    },
    {
      titleOne : 59,
      titleTow: 57,
      month: 'Oct',
    },
    {
      titleOne : 59,
      titleTow: 57,
      month: 'Nov',
    },
    {
      titleOne : 59,
      titleTow: 100,
      month: 'Dec',
    },
  ];
  
  const valueFormatter = (value: number) => `${value} article`;

if (loading == true) {
  return <div>...loading</div>
}

    return (
        <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: `${titleOne}`, label:`${titleOne}`, valueFormatter },
          { dataKey: `${titleTow}`, label:`${titleTow}`, valueFormatter },
        ]}
        {...chartSetting}
      />
    );
  
}



