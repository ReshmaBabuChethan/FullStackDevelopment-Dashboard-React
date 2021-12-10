import React, { Component } from 'react';
import LotService from '../services/LotService';
import HeaderComponent from '../components/HeaderComponentLot';

class CreateLotComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,  //matched id updation
            femaleCount:'',
            lotID: '',
            shipDate: '',
            totalCount: '',
            maleCount: ''
        }
        this.changeLotIDHandler = this.changeLotIDHandler.bind(this);
        this.changeShipDateHandler = this.changeShipDateHandler.bind(this);
        this.saveOrUpdateLot = this.saveOrUpdateLot.bind(this);
    }
    //just does add lot
      /*  saveLot = (e) => {
            e.preventDefault();
            let lot = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, contactNum: this.state.contactNum};
            console.log('lot => ' + JSON.stringify(lot));
    
            LotService.createLot(lot).then(res => {
                this.props.history.push('/lots');
            });
        }*/

        componentDidMount() {
            //step4
            //if (this.state.id == -1) {
                if (this.state.id === '_add') {  //for add lot
                return
            } else {                            //for update lot
                LotService.getLotById(this.state.id).then((res) => {
                    let lot = res.data;
                    this.setState({
                        lotID: lot.lotID,
                        shipDate: lot.shipDate,
                        totalCount: lot.totalCount,
                        maleCount: lot.maleCount,
                        femaleCount: lot.femaleCount,
                    });
                });
            }
        }

        saveOrUpdateLot = (e) => {
            e.preventDefault();
            let lot = { lotID: this.state.lotID, shipDate: this.state.shipDate, totalCount: this.state.totalCount, maleCount: this.state.maleCount, femaleCount: this.state.femaleCount};
            console.log('lot => ' + JSON.stringify(lot));
    
            //if (this.state.id == -1) {
                if (this.state.id === '_add') {
                    LotService.createLot(lot).then(res => {
                        this.props.history.push('/lots');
                });
            } else {
                       LotService.updateLot(lot, this.state.id).then(res => {
                        this.props.history.push('/lots');
                });
            }
        }
        
        changeLotIDHandler = (event) => {
            this.setState({ lotID: event.target.value });
        }
    
        changeShipDateHandler = (event) => {
            this.setState({ shipDate: event.target.value });
        }
        changeTotalCountHandler = (event) => {
            this.setState({ totalCount: event.target.value });
        }
        changeMaleCountHandler = (event) => {
            this.setState({ maleCount: event.target.value });
        }
        changeFemaleCountHandler = (event) => {
            this.setState({ femaleCount: event.target.value });
        }

        cancel() {
            this.props.history.push('/lots');
        }
    
        getTitle(){  //change the title acc
            //if (this.state.id == -1){
                if (this.state.id === '_add'){
                return <h3 className="text-center">Add Lot</h3>
            } else {
                return <h3 className="text-center">Update Lot</h3>
            }
        }
    
    
    render() {
        return (
            <div>
                 <HeaderComponent />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        {/*<h3>Add Lot</h3>*/}
                        {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Lot ID:</label>
                                        <input placeholder="Lot ID" name="lotID" className="form-control"
                                            value={this.state.lotID} onChange={this.changeLotIDHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Shipment Date:</label>
                                        <input placeholder="Shipment Date" name="shipDate" className="form-control"
                                            value={this.state.shipDate} onChange={this.changeShipDateHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Total Count:</label>
                                        <input placeholder="Total Count" name="totalCount" className="form-control"
                                            value={this.state.totalCount} onChange={this.changeTotalCountHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Male Count:</label>
                                        <input placeholder="Male Count" name="maleCount" className="form-control"
                                            value={this.state.maleCount} onChange={this.changeMaleCountHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Female Count:</label>
                                        <input placeholder="Female Count" name="femaleCount" className="form-control"
                                            value={this.state.femaleCount} onChange={this.changeFemaleCountHandler} />
                                    </div>

                                    <button style={{marginTop:"10px"}}className="btn btn-success" onClick={this.saveOrUpdateLot}>Save</button>
                                    <button style={{marginTop:"10px", marginLeft: "10px"}} className="btn btn-danger" onClick={this.cancel.bind(this)}>Cancel</button>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default CreateLotComponent;