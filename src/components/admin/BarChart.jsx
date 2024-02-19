import React, { useState } from "react";
import Chart from "react-apexcharts";

function BarChart() {
  const [series, setSeries] = useState([
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
  ]);
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar",
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
  });

  return (
    <div className="h-fit w-full">
      <Chart options={options} series={series} type="bar" width="100%" />
    </div>
  );
}

export default BarChart;
