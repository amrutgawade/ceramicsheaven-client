import React, { useState } from "react";
import Chart from "react-apexcharts";

function PieChart() {
  const [series, setSeries] = useState([30, 40, 45, 50, 49, 60, 70, 91]);
  const [options, setOptions] = useState({
    series: [44, 55, 41, 17, 15],
    chartOptions: {
      labels: ["Apple", "Mango", "Orange", "Watermelon"],
    },
  });

  return (
    <div className="h-fit w-full">
      <Chart options={options} series={series} type="donut" width="100%" />
    </div>
  );
}

export default PieChart;
