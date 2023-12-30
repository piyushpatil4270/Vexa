import React from 'react'
import Chart from "chart.js/auto"
import {Bar} from "react-chartjs-2"
const DemoBarChart = () => {
const labels=["Total","Started","Progress","Completed"];
 const data={
    labels:labels,
    datasets:[
        {
            
            backgroundColor:["#ffffff", "blue", "green","orange"],
            borderColor: "rgb(255, 99, 132)",
            data: [20, 15, 12, 8],
            barThickness:40,
            
          },
    ]
 }
 


  return (
    <div>
      <Bar data={data}/>
    </div>
  )
}

export default DemoBarChart
