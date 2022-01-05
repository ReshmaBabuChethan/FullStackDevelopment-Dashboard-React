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
            label: "Chocolate cakes",
            backgroundColor: "rgba(255,99,132)",
            stack: 0,
            data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
            label: "Sponge cakes",
            backgroundColor: "rgba(255,132,99)",
            stack: 0,
            data: [65, 59, 80, 81, 56, 55, 40]
          },

          {
            label: "Gingerbread cookies",
            backgroundColor: "rgba(132,231,123)",
            stack: 1,
            data: [45, 79, 50, 41, 16, 85, 20]
          },
          {
            label: "Chocolate chip cookies",
            backgroundColor: "rgba(123,255,132)",
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