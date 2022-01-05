import React, { Component } from 'react';
import CattleService from '../services/CattleService';
import logo1 from './img1.JPG';
//import logo from './Capture2.JPG';

class ViewCattleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           id: this.props.match.params.id,
           cattle: {}
        }
               
    }
    
    componentDidMount(){
        CattleService.getCattleById(this.state.id).then( res => {
         this.setState({cattle: res.data});
              })
    }
   

   back(){
        //moving back to cattles list
               this.props.history.push('/cattles');
            }



    render() {
        return (
            <div>
                <div className ="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Cattle Details</h3>
                    
                    <div>
                                 <img src={logo1} alt="logo" />
                                  {/* <img src={logo} className="App-logo" alt="logo" />*/}
                </div>
                    <h6>PC:Thanks to google!</h6>
                 <div className="card-body">
                     <div className="row">
                         <label> Cattle ID:</label>
                        <div> {this.state.cattle.cattleID} </div>
                     </div>
                     <div className="row">
                         <label> Cattle Gender:</label>
                        <div> {this.state.cattle.gender} </div>
                     </div>
                     <div className="row">
                         <label> Cattle Date of Birth:</label>
                        <div> {this.state.cattle.dateofBirth} </div>
                     </div>
                     <div className="row">
                         <label> Cattle Vaccine Details:</label>
                        <div> {this.state.cattle.vaccine} </div>
                     </div>
                 </div>
  
                </div>
                <button style={{marginTop:"10px", marginLeft: "10px"}} className="addBackStyle" onClick={this.back.bind(this)}>Back</button>
            </div>
        );
    }
}

export default ViewCattleComponent;