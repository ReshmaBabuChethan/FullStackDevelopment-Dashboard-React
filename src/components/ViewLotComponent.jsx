import React, { Component } from 'react';
import LotService from '../services/LotService';

class ViewLotComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
           id: this.props.match.params.id,
           lot: {}
        }
               
    }
    
    componentDidMount(){
        LotService.getLotById(this.state.id).then( res => {
         this.setState({lot: res.data});
              })
    }

    render() {
        return (
            <div>
                <div className ="card col-md-6 offset-md-3">
                    <h3 className="text-center"> View Lot Details</h3>
                 <div className="card-body">
                     <div className="row">
                         <label> Lot ID:</label>
                        <div> {this.state.lot.lotID} </div>
                     </div>
                     <div className="row">
                         <label> Lot Shipment Date:</label>
                        <div> {this.state.lot.shipDate} </div>
                     </div>
                     <div className="row">
                         <label> Total Count in Lot:</label>
                        <div> {this.state.lot.totalCount} </div>
                     </div>
                     <div className="row">
                         <label> Male Count in Lot:</label>
                        <div> {this.state.lot.maleCount} </div>
                     </div>
                     <div className="row">
                         <label> Female Count in Lot:</label>
                        <div> {this.state.lot.femaleCount} </div>
                     </div>
                 </div>
                </div>
               
            </div>
        );
    }
}

export default ViewLotComponent;