import React, { Component } from 'react';
import RancherService from '../services/RancherService';

class ViewRancherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           id: this.props.match.params.id,
           rancher: {}
        }
               
    }
    
    componentDidMount(){
        RancherService.getRancherById(this.state.id).then( res => {
         this.setState({rancher: res.data});
              })
    }
    back(){
        //moving back to ranchers list
               this.props.history.push('/ranchers');
            }

    render() {
        return (
            <div>
                <div className ="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Rancher Details</h3>
                 <div className="card-body">
                     <div className="row">
                         <label> Rancher First Name:</label>
                        <div> {this.state.rancher.firstName} </div>
                     </div>
                     <div className="row">
                         <label> Rancher Last Name:</label>
                        <div> {this.state.rancher.lastName} </div>
                     </div>
                     <div className="row">
                         <label> Rancher EmailId:</label>
                        <div> {this.state.rancher.emailId} </div>
                     </div>
                     <div className="row">
                         <label> Rancher Contact Number:</label>
                        <div> {this.state.rancher.contactNum} </div>
                     </div>
                     <div className="row">
                         <label> Rancher ID:</label>
                        <div> {this.state.rancher.rancherId} </div>
                     </div>
                 </div>
                 
                </div>
                <button style={{marginTop:"10px", marginLeft: "10px"}} className="addBackStyle" onClick={this.back.bind(this)}>Back</button>
            </div>
        );
    }
}

export default ViewRancherComponent;