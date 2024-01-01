import React from "react";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
const DemoBarChart = () => {
  const labels = ["Total", "Started", "Progress", "Completed"];
  const data = {
    labels: labels,
    datasets: [
      {
        backgroundColor: ["#ffffff", "blue", "green", "orange"],
        borderColor: "rgb(255, 99, 132)",
        data: [20, 15, 25, 50],
        barThickness: 30,
       
        options: {
          scales: {
            y: {
              display: false,
            },
          },
        },
      },
    ],
  };

  var options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
      },
    },
    plugins: {
      legend: {
          display: false
      }
  }
  };

  return (
    <div className="flex items-center justify-center">
      <Bar data={data} options={options} />
    </div>
  );
};

export default DemoBarChart;
