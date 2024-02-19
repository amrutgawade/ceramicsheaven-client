import React, { useState } from "react";
import Chart from "react-apexcharts";

function ColumnChart() {
  const [series, setSeries] = useState([
    {
      name: "PRODUCT A",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "PRODUCT B",
      data: [13, 23, 20, 8, 13, 27],
    },

  ]);
  const [options, setOptions] = useState({
    chart: {
      type: "bar",
      // height: 350,
      stacked: true,
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: false,
      },
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          legend: {
            position: "bottom",
            offsetX: -10,
            offsetY: 0,
          },
        },
      },
    ],
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 10,
        dataLabels: {
          total: {
            enabled: true,
            style: {
              fontSize: "0.6rem",
              fontWeight: 900,
            },
          },
        },
      },
    },
    xaxis: {
      type: "datetime",
      categories: [
        "01/01/2011 GMT",
        "01/02/2011 GMT",
        "01/03/2011 GMT",
        "01/04/2011 GMT",
        "01/05/2011 GMT",
        "01/06/2011 GMT",
      ],
    },
    legend: {
      position: "top",
      offsetY: 0,
    },
    fill: {
      opacity: 1,
    },
  });

  return (
    <div className="h-full w-full">
      <Chart options={options} series={series} type="bar" width="100%" height="100%" />
    </div>
  );
}

export default ColumnChart;
