import React, { Component } from 'react';
//import logo from './Capture.JPG';
import logo from './Capture2.JPG';
import HeaderComponentWelcome from '../components/HeaderComponentWelcome';

class Welcome extends Component {
    constructor(props) {
        super(props)

        this.state= {
              ranchers: []
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
                                   <img src={logo} className="App-logo" alt="logo" />
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