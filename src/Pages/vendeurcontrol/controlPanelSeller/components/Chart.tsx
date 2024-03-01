import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';

const chartSetting = {
    yAxis: [
      {
        label: 'rainfall (mm)',
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
  const dataset = [
    {
      london: 59,
      paris: 57,
      month: 'Jan',
    },
    {
      london: 50,
      paris: 52,
      month: 'Fev',
    },
    {
      london: 47,
      paris: 53,
      month: 'Mar',
    },
    {
      london: 54,
      paris: 56,
      month: 'Apr',
    },
    {
      london: 57,
      paris: 69,
      month: 'May',
    },
    {
      london: 60,
      paris: 63,
      month: 'June',
    },
    {
      london: 59,
      paris: 60,
      month: 'July',
    },
    {
      london: 65,
      paris: 60,
      month: 'Aug',
    },
    {
      london: 51,
      paris: 51,
      month: 'Sept',
    },
    {
      london: 60,
      paris: 65,
      month: 'Oct',
    },
    {
      london: 67,
      paris: 64,
      month: 'Nov',
    },
    {
      london: 61,
      paris: 70,
      month: 'Dec',
    },
  ];
  
  const valueFormatter = (value: number) => `${value}mm`;

  
export const Chart  = () =>  {
  


    return (
        <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
        series={[
          { dataKey: 'london', label: 'London', valueFormatter },
          { dataKey: 'paris', label: 'Paris', valueFormatter },
        ]}
        {...chartSetting}
      />
    );
  
}



