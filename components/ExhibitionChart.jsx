import React, { useState, useEffect } from "react";
// import Highcharts from "highcharts";


const ExhibitionChart = () => {
  const [selectedData, setSelectedData] = useState({
    countries: true,
    exhibitors: true,
    overseasExhibitors: true,
    grossExhibitionArea: true,
  });

  // Data for each entity
  const countryData = [15, 19, 25, 22, 22, 30, 35, 40, 35, 44, 79];
  const exhibitorData = [486, 671, 751, 1055, 1109, 1288, 1518, 1598, 1600, 1800, 1800];
  const overseasExhibitorData = [68, 76, 210, 225, 214, 327, 476, 585, 450, 550, 550];
  const exhibitionAreaData = [19600, 27000, 39800, 46000, 46286, 65541, 77604, 125000, 150000, 125000, 125000];

  
  // useEffect(() => {
  //   Highcharts.chart("container", {
  //     chart: {
  //       type: "column",
  //     },
  //     title: {
  //       text: "Exhibition Data Overview",
  //     },
  //     subtitle: {
  //       text: "Source: Exhibition Statistics",
  //     },
  //     xAxis: {
  //       categories: [
  //         "1993", "1996", "1999", "2002", "2005", "2008", "2011", "2014", "2017", "2020", "2023"
  //       ],
  //       crosshair: true,
  //       accessibility: {
  //         description: "Years",
  //       },
  //     },
  //     yAxis: [
  //       {
  //         title: {
  //           text: "Number of Countries Participated",
  //         },
  //         min: 0,
  //         max: 80,
  //         tickInterval: 20,
  //         opposite: false,
  //       },
  //       {
  //         title: {
  //           text: "Number of Exhibitors",
  //         },
  //         min: 0,
  //         max: 2000,
  //         tickInterval: 500,
  //         opposite: false,
  //       },
  //       {
  //         title: {
  //           text: "Number of Overseas Exhibitors",
  //         },
  //         min: 0,
  //         max: 600,
  //         tickInterval: 100,
  //         opposite: true,
  //       },
  //       {
  //         title: {
  //           text: "Total Gross Exhibition Area (sq. mts.)",
  //         },
  //         min: 0,
  //         max: 150000,
  //         tickInterval: 50000,
  //         opposite: true,
  //       },
  //     ],
  
   
  //     tooltip: {
  //       shared: true,
  //       valueSuffix: "",
  //     },
  //     plotOptions: {
  //       column: {
  //         pointPadding: 0.2,
  //         borderWidth: 0,
  //       },
  //     },
  //     series: [
  //       {
  //         name: "Number of Countries Participated",
  //         data: selectedData.countries ? countryData : [],
  //         color: "#f99d46",
  //         visible: selectedData.countries,
  //         yAxis: 0,
  //       },
  //       {
  //         name: "Number of Exhibitors",
  //         data: selectedData.exhibitors ? exhibitorData : [],
  //         color: "#46ad5a",
  //         visible: selectedData.exhibitors,
  //         yAxis: 1,
  //       },
  //       {
  //         name: "Number of Overseas Exhibitors",
  //         data: selectedData.overseasExhibitors ? overseasExhibitorData : [],
  //         color: "#375e9f",
  //         visible: selectedData.overseasExhibitors,
  //         yAxis: 2,
  //       },
  //       {
  //         name: "Total Gross Exhibition Area (sq. mts.)",
  //         data: selectedData.grossExhibitionArea ? exhibitionAreaData : [],
  //         color: "#032524",
  //         visible: selectedData.grossExhibitionArea,
  //         yAxis: 3,
  //       },
  //     ],
  //     exporting: {
  //       enabled: true,
  //       buttons: {
  //         contextButton: {
  //           menuItems: [
  //             "viewFullscreen",
  //             "printChart",
  //             "separator",
  //             "downloadPNG",
  //             "downloadJPEG",
  //             "downloadPDF",
  //             "downloadSVG",
  //             "separator",
  //             "downloadCSV",
  //             "downloadXLS",
  //           ],
  //         },
  //       },
  //     },
  //   });
  // }, [selectedData]);

  return (
    <div>
      <div>
        
      </div>

      <div id="container" style={{ height: "400px" }}></div>
      <style jsx>{`
        .highcharts-figure,
        .highcharts-data-table table {
          min-width: 310px;
          max-width: 800px;
          margin: 1em auto;
        }

        #container {
          height: 400px;
        }

        .highcharts-data-table table {
          font-family: Verdana, sans-serif;
          border-collapse: collapse;
          border: 1px solid #ebebeb;
          margin: 10px auto;
          text-align: center;
          width: 100%;
          max-width: 500px;
        }

        .highcharts-data-table caption {
          padding: 1em 0;
          font-size: 1.2em;
          color: #555;
        }

        .highcharts-data-table th {
          font-weight: 600;
          padding: 0.5em;
        }

        .highcharts-data-table td,
        .highcharts-data-table th,
        .highcharts-data-table caption {
          padding: 0.5em;
        }

        .highcharts-data-table thead tr,
        .highcharts-data-table tr:nth-child(even) {
          background: #f8f8f8;
        }

        .highcharts-data-table tr:hover {
          background: #f1f7ff;
        }

        .highcharts-description {
          margin: 0.3rem 10px;
        }
      `}</style>
    </div>
  );
};

export default ExhibitionChart;
