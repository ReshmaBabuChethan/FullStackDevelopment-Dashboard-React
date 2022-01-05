import React, { Component } from 'react';
import LotService from '../services/LotService';
import HeaderComponent from '../components/HeaderComponentLot';
//import { useNavigate  } from 'react-router-dom';
//const navigate= useNavigate();

class ListLotComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state= {
              lots: []
        }
        this.addLot=this.addLot.bind(this);
        this.editLot=this.editLot.bind(this);
         this.deleteLot=this.deleteLot.bind(this);
    }

    viewLot(id){
        this.props.history.push(`/view-Lot/${id}`);
    }

    deleteLot(id){
        //rest api
        LotService.deleteLot(id).then((res) => {
            this.setState({ lots:this.state.lots.filter(lot => lot.id !== id)});
        });
    }
    editLot(id){
        this.props.history.push(`/add-Lot/${id}`);
    }
    componentDidMount(){
        LotService.getLot().then((res) => {
            this.setState({ lots: res.data});
        });
        
    }
/*only add
    addLot(){
        //add-lots routing in app.js
       
        this.props.history.push('/add-Lot');
        //navigate('/add-Lot');
       // this.props.navigate('/add-Lot');
    }*/

    addLot(){
        //add-lots routing in app.js
       
        this.props.history.push('/add-Lot/_add');
        
    }

    back(){
        //going back to welcome
               this.props.history.push('/');
            }
            
    render() {
        return (
            <div>
                <HeaderComponent />
                <h2 className="text-center">Lot List</h2> 
                <button style={{marginLeft:"900px"}}  className="addRancherStyle" onClick={this.addLot}>Add New Lot</button>
                <div className = "row">
               
                    
                    <table style={{marginTop:"30px"}} className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Lot ID</th>
                                <th>Shipment Date</th>
                                <th>Total Count</th>
                                <th>Male</th>
                                <th>Female</th>
                                <th>RancherId</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.lots.map(
                                    lot =>
                                    <tr key = {lot.id}> 
                                    <td> {lot.lotID}</td>
                                    <td> {lot.shipDate}</td>
                                    <td> {lot.totalCount}</td>
                                    <td> {lot.maleCount}</td>
                                    <td> {lot.femaleCount}</td>
                                    <td> {lot.rancherId}</td>
                                    <td>
                                       {/* <button  className="btn btn-info">Update</button>*/}
                                       <button onClick = { () => this.editLot(lot.id)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft:"10px"}} onClick = { () => this.deleteLot(lot.id)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft:"10px"}} onClick = { () => this.viewLot(lot.id)} className="btn btn-info">View</button>
                                    </td>
                                    
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    
                </div>
                <button style={{marginLeft: "10px"}} className="addBackStyle"  onClick={this.back.bind(this)}>Back</button>
                </div>

            
        );
    }
}

export default ListLotComponent;
//export default withRouter(ListLotComponent);