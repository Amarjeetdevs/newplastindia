import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexGraphChart = ({numberOfSample, sampleTitle, chartColor}) => {
  const sampleYears = [
    "1990",
    "1994",
    "1997",
    "2000",
    "2003",
    "2006",
    "2009",
    "2012",
    "2015",
    "2018",
    "2023"
  ];

  const [series] = useState([
    {
      name: "STOCK ABC",
      data: numberOfSample
    }
  ]);

  const [options] = useState({
    chart: {
      type: 'area',
      height: 350,
      
      zoom: {
        enabled: false
      }
    },
    
    colors: [chartColor], 
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'straight'
    },
    
    title: {
     text: sampleTitle,
      align: 'left'
    },
    labels: sampleYears,
    xaxis: {
      type: 'datetime',
    },
    yaxis: {
      opposite: true
    },
    legend: {
      horizontalAlign: 'left'
    }
  });

  return (
    <div className='bg-[#FFFFFF] flex justify-center items-center lg:h-[450px]'>
      <div id="chart bg-white ">
        <ReactApexChart options={options} series={series} type="area" height={350} width={500}/>
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexGraphChart;
