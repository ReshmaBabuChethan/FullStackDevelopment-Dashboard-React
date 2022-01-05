import React, { Component } from 'react';
//import logo from './Capture.JPG';
import logo from './Capture2.JPG';
import HeaderComponentWelcome from '../components/HeaderComponentWelcome';

import BarChart from './BarChartLatest';
//import BarChart from './BarChart';
//import {Bar} from 'react-chartjs-2';
import {Doughnut} from 'react-chartjs-2';
import {Bar} from 'react-chartjs-2';
//const labels: ['January', 'February', 'March',];
class Welcome extends Component {
    constructor(props) {
        super(props)

        this.state= {
              ranchers: [],
              barChartData:[]
        }
        this.rancherDetails=this.rancherDetails.bind(this);
        this.cattleDetails=this.cattleDetails.bind(this);
        this.lotDetails=this.lotDetails.bind(this);
    }
    rancherDetails(){               
        this.props.history.push('/ranchers');      
    }

    cattleDetails(){               
        this.props.history.push('/cattles');      
    }
        
    lotDetails(){               
        this.props.history.push('/lots');      
    }
    
     
    render() {
        return (
            
            <div>
                <HeaderComponentWelcome />
                <h4 className="text-center">Please click the button</h4>
                <div className = "row">
                                  {/* <img src={logo} className="App-logo" alt="logo" />*/}
                </div>
                <div>
                <BarChart/>
               {/*<BarChart data={this.state.data} />*/}
        </div>
             
               
                <button  style={{marginTop:"50px"}}className="welcomeBtn" onClick={this.rancherDetails}>Rancher Details</button>
                <button style={{marginLeft:"50px" }}  className="welcomeBtn" onClick={this.cattleDetails}>Cattle Details</button>
                <button style={{marginLeft:"50px" }}  className="welcomeBtn" onClick={this.lotDetails}>Lot Details</button>
               
                       
                </div>

            
        );
    }
}

//}
export default Welcome;