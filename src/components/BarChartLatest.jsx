import React from "react";
import ReactDOM from "react-dom";
import { Bar } from "react-chartjs-2";

//below is required
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
//below is required
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
//here single quote was the problem
class BarChartLatest extends React.Component {
 constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: [
          ["January"],
          "February",
          "March",
          "April",
          "May",
          "June",
          "July"
        ],
        datasets: [
          {
            label: "Male",
            backgroundColor: "rgba(0,0,255)",  
            stack: 0,
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "Female",
            backgroundColor: "rgba(255,99,132)",
            //backgroundColor: "rgba(255,132,99)", 
            stack: 1,
            data: [65, 59, 80, 81, 56, 55, 40]
          }
        ]
      }
    };
  }

  render() {
    const options = {
      responsive: true,
      maintainAspectRatio: false,
          
      legend: {
        display: false
      },
      type: "bar"
    };
    return (
      <Bar
        data={this.state.data}
        options={options}
      />
    );
  }
}



export default (BarChartLatest);