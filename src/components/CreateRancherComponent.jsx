import React, { Component } from 'react';
import RancherService from '../services/RancherService';
import HeaderComponent from '../components/HeaderComponent';

class CreateRancherComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,  //matched id updation
            contactNum:'',
            firstName: '',
            lastName: '',
            emailId: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateRancher = this.saveOrUpdateRancher.bind(this);
    }
    //just does add rancher
      /*  saveRancher = (e) => {
            e.preventDefault();
            let rancher = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, contactNum: this.state.contactNum};
            console.log('rancher => ' + JSON.stringify(rancher));
    
            RancherService.createRancher(rancher).then(res => {
                this.props.history.push('/ranchers');
            });
        }*/

        componentDidMount() {
            //step4
            //if (this.state.id == -1) {
                if (this.state.id === '_add') {  //for add rancehr
                return
            } else {                            //for update rancher
                RancherService.getRancherById(this.state.id).then((res) => {
                    let rancher = res.data;
                    this.setState({
                        firstName: rancher.firstName,
                        lastName: rancher.lastName,
                        emailId: rancher.emailId,
                        contactNum: rancher.contactNum
                    });
                });
            }
        }

        saveOrUpdateRancher = (e) => {
            e.preventDefault();
            let rancher = { firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId, contactNum: this.state.contactNum};
            console.log('rancher => ' + JSON.stringify(rancher));
    
            //if (this.state.id == -1) {
                if (this.state.id === '_add') {
                    RancherService.createRancher(rancher).then(res => {
                        this.props.history.push('/ranchers');
                });
            } else {
                       RancherService.updateRancher(rancher, this.state.id).then(res => {
                        this.props.history.push('/ranchers');
                });
            }
        }
        
        changeFirstNameHandler = (event) => {
            this.setState({ firstName: event.target.value });
        }
    
        changeLastNameHandler = (event) => {
            this.setState({ lastName: event.target.value });
        }
        changeEmailHandler = (event) => {
            this.setState({ emailId: event.target.value });
        }
        changeContactNumHandler = (event) => {
            this.setState({ contactNum: event.target.value });
        }

        cancel() {
            this.props.history.push('/ranchers');
        }
    
        getTitle(){  //change the title acc
            //if (this.state.id == -1){
                if (this.state.id === '_add'){
                return <h3 className="text-center">Add Rancher</h3>
            } else {
                return <h3 className="text-center">Update Rancher</h3>
            }
        }
    
    
    render() {
        return (
            <div>
                 <HeaderComponent />
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                        {/*<h3>Add Rancher</h3>*/}
                        {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label>First Name:</label>
                                        <input placeholder="First Name" name="firstName" className="form-control"
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Last Name:</label>
                                        <input placeholder="Last Name" name="lastName" className="form-control"
                                            value={this.state.lastName} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Email Id:</label>
                                        <input placeholder="Email Id" name="emailId" className="form-control"
                                            value={this.state.emailId} onChange={this.changeEmailHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Contact Number:</label>
                                        <input placeholder="Contact Num" name="contactNum" className="form-control"
                                            value={this.state.contactNum} onChange={this.changeContactNumHandler} />
                                    </div>

                                    <button style={{marginTop:"10px"}}className="btn btn-success" onClick={this.saveOrUpdateRancher}>Save</button>
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


export default CreateRancherComponent;