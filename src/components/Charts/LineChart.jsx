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
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};
const labels = ["Jan", "Mar", "May", "Jul", "Sept", "Nov"];

export const data = {
  type: "line",
  data: {
    labels,
    datasets: [
      {
        label: "Broadband users",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        backgroundColor: "rgba(153,255,51,0.4)",
      },
      {
        label: "4g Users",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        backgroundColor: "rgba(255,153,0,0.4)",
      },
    ],
  },
};

export function LineChart() {
  return <Line options={options} data={data} />;
}
