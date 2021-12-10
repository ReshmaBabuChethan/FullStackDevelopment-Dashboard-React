import React, { Component } from 'react';
import CattleService from '../services/CattleService';
import HeaderComponent from '../components/HeaderComponentCattle';

class CreateCattleComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,  //matched id updation
            vaccine:'',
            cattleID: '',
            gender: '',
            dateofBirth: ''
        }
        this.changeCattleIDHandler = this.changeCattleIDHandler.bind(this);
        this.changeGenderHandler = this.changeGenderHandler.bind(this);
        this.saveOrUpdateCattle = this.saveOrUpdateCattle.bind(this);
    }
    //just does add cattle
      /*  saveCattle = (e) => {
            e.preventDefault();
            let cattle = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, contactNum: this.state.contactNum};
            console.log('cattle => ' + JSON.stringify(cattle));
    
            CattleService.createCattle(cattle).then(res => {
                this.props.history.push('/cattles');
            });
        }*/

        componentDidMount() {
            //step4
            //if (this.state.id == -1) {
                if (this.state.id === '_add') {  //for add cattle
                return
            } else {                            //for update cattle
                CattleService.getCattleById(this.state.id).then((res) => {
                    let cattle = res.data;
                    this.setState({
                        cattleID: cattle.cattleID,
                        gender: cattle.gender,
                        dateofBirth: cattle.dateofBirth,
                        vaccine: cattle.vaccine
                    });
                });
            }
        }

        saveOrUpdateCattle = (e) => {
            e.preventDefault();
            let cattle = { cattleID: this.state.cattleID, gender: this.state.gender, dateofBirth: this.state.dateofBirth, vaccine: this.state.vaccine};
            console.log('cattle => ' + JSON.stringify(cattle));
    
            //if (this.state.id == -1) {
                if (this.state.id === '_add') {
                    CattleService.createCattle(cattle).then(res => {
                        this.props.history.push('/cattles');
                });
            } else {
                       CattleService.updateCattle(cattle, this.state.id).then(res => {
                        this.props.history.push('/cattles');
                });
            }
        }
        
        changeCattleIDHandler = (event) => {
            this.setState({ cattleID: event.target.value });
        }
    
        changeGenderHandler = (event) => {
            this.setState({ gender: event.target.value });
        }
        changeDOBHandler = (event) => {
            this.setState({ dateofBirth: event.target.value });
        }
        changeVaccineHandler = (event) => {
            this.setState({ vaccine: event.target.value });
        }

        cancel() {
            this.props.history.push('/cattles');
        }
    
        getTitle(){  //change the title acc
            //if (this.state.id == -1){
                if (this.state.id === '_add'){
                return <h3 className="text-center">Add Cattle</h3>
            } else {
                return <h3 className="text-center">Update Cattle</h3>
            }
        }
    
    
    render() {
        return (
            <div>
                 <HeaderComponent />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        {/*<h3>Add Cattle</h3>*/}
                        {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Cattle ID:</label>
                                        <input placeholder="Cattle ID" name="cattleID" className="form-control"
                                            value={this.state.cattleID} onChange={this.changeCattleIDHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Gender:</label>
                                        <input placeholder="Gender" name="gender" className="form-control"
                                            value={this.state.gender} onChange={this.changeGenderHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Date Of Birth:</label>
                                        <input placeholder="Date Of Birth" name="dateofBirth" className="form-control"
                                            value={this.state.dateofBirth} onChange={this.changeDOBHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Vaccine:</label>
                                        <input placeholder="Vaccine" name="vaccine" className="form-control"
                                            value={this.state.vaccine} onChange={this.changeVaccineHandler} />
                                    </div>

                                    <button style={{marginTop:"10px"}}className="btn btn-success" onClick={this.saveOrUpdateCattle}>Save</button>
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


export default CreateCattleComponent;