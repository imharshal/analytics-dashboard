import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  stacked: false,
  plugins: {
    title: {
      display: true,
      text: "4G Users vs home broadband",
    },
  },
  scales: {
    y: {
      type: "linear",
      display: true,
      position: "left",
    },
    y1: {
      type: "linear",
      display: true,
      position: "right",
      grid: {
        drawOnChartArea: false,
      },
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

export const data = {
  labels,
  datasets: [
    {
      label: "Broadband Users",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 10000 })),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
      yAxisID: "y",
    },
    {
      label: "4G Users",
      data: labels.map(() => faker.datatype.number({ min: 1, max: 10000 })),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
      yAxisID: "y1",
    },
  ],
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
