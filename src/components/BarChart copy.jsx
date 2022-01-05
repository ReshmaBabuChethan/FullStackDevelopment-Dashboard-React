/*import React,{Component} from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component
{
    constructor() {
        super()

        this.state= {
      barChartData: []
    }
  }

  componentDidMount() {
    this.change0();
    
    
}
    

  change0(){
    this.setState({
      barChartData:{
        labels: ['January', 'February', 'March',],
        datasets: [
          {
            label: '3 Months',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80]
          }
        ]
      }
    })
  }

  render() {
    return (
        <div>
          <Bar data={this.state.barChartData}  />
        </div>
  )
  }
}

export default BarChart;*/

import React,{Component} from 'react';
// WE ARE USING THE BAR FROM THE PACKAE SO WE IMPORT THIS IN TO BE READY
import {Bar} from 'react-chartjs-2';


class BarChart extends Component
{
  constructor(props) {
    super(props);
    this.state = {
     //This is our initial state for the bar chart data, which for now is an empty array
      barChartData: {}
    }
  }

  componentDidMount() {
    this.changed();
    }

    changed(){
        this.setState({
          barChartData:{
            labels: ["January", "February", "March"],
            datasets: [
              {
                label: "3 Months",
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80]
              }
            ]
          }
        })
      }
 
  render() {
    return (
        <div>
              {/* <Bar data={this.state.barChartData} width={300} height={90}/>*/}
               <Bar data={this.state.barChartData} width={300} height={90}/>
        </div>
    )
  }
}

export default (BarChart);