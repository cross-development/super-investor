//Core
import React from "react";
//Packages
import ReactApexChart from "react-apexcharts";
//Styles
import { Wrapper } from "./BarChart.styles";

interface IProps {
  totalResults: {
    amount: number;
    currency: string;
    amountWithProfit: number;
  };
}

const BarChart = ({ totalResults }: IProps) => {
  const { amount, currency, amountWithProfit } = totalResults;

  const chartOptions = {
    options: {
      chart: {
        type: "bar",
        height: 200,
        stacked: true,
        zoom: { enabled: false },
        toolbar: { show: false },
      },
      grid: { show: false },
      legend: { show: false },
      fill: { opacity: 1 },
      colors: ["#000", "#FBED10"],
      tooltip: { enabled: false },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      xaxis: {
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false },
        // crosshairs: { show: false },
        // tooltip: { enabled: false },
      },
      yaxis: { show: false },
    },
    series: [
      { name: "amount", data: [10, 10] },
      { name: "amountWithProfit", data: [0, 5] },
    ],
  };

  return (
    <Wrapper>
      <ReactApexChart
        options={chartOptions.options as ApexCharts.ApexOptions}
        series={chartOptions.series}
        type="bar"
        height={200}
        width={200}
      />
    </Wrapper>
  );
};

export default BarChart;
