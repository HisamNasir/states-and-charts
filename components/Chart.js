import React from "react";
import { Bar } from "react-chartjs-2";
const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Favorite Colors",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "red",
        "blue",
        "yellow",
        "green",
        "purple",
        "orange",
      ],
    },
  ],
};
const Chart = () => {
  return <Bar data={data} />;
};
export default Chart;
