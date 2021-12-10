import React, { Component } from 'react';
import RancherService from '../services/RancherService';
import HeaderComponent from './HeaderComponent';
//import { useNavigate  } from 'react-router-dom';
//const navigate= useNavigate();

class ListCattleComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state= {
              ranchers: []
        }
        this.addCattle=this.addCattle.bind(this);
    }

    componentDidMount(){
        CattleService.getCattle().then((res) => {
            this.setState({ cattles: res.data});
        });
        
    }

    addCattle(){
        //add-ranchers routing in app.js
       
        this.props.history.push('/add-Cattle');
        //navigate('/add-Rancher');
       // this.props.navigate('/add-Rancher');
    }
    render() {
        return (
            <div>
                <HeaderComponent />
                <h2 className="text-center">Cattle List</h2> 
                <button style={{marginLeft:"900px"}}  className="addRancherStyle" onClick={this.addCattle}>Add New Cattle</button>
                <div className = "row">
               
                    
                    <table style={{marginTop:"30px"}} className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Cattle Id</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Breed</th>
                                <th>Color</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cattles.map(
                                    cattle =>
                                    <tr key = {cattle.cattleid}> 
                                    <td> {cattle.name}</td>
                                    <td> {rancher.lastName}</td>
                                    <td> {rancher.emailId}</td>
                                    <td> {rancher.contactNum}</td>
                                    <td>
                                        <button  className="btn btn-info">Update</button>
                                        <button style={{marginLeft:"10px"}}  className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft:"10px"}}  className="btn btn-info">View</button>
                                    </td>
                                    {/*<td>
                                        <button onClick = { () => this.editEmployee(employee.id)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft:"10px"}} onClick = { () => this.deleteEmployee(employee.id)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft:"10px"}} onClick = { () => this.viewEmployee(employee.id)} className="btn btn-info">View</button>
                                    </td>*/}
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
                </div>

            
        );
    }
}

export default ListRancherComponent;
//export default withRouter(ListRancherComponent);