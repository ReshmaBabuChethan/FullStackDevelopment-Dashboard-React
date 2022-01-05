import React, { Component } from 'react';
import RancherService from '../services/RancherService';
import HeaderComponent from '../components/HeaderComponent';
//import { useNavigate  } from 'react-router-dom';
//const navigate= useNavigate();

class ListRancherComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state= {
              ranchers: []
        }
        this.addRancher=this.addRancher.bind(this);
        this.editRancher=this.editRancher.bind(this);
         this.deleteRancher=this.deleteRancher.bind(this);
    }

    viewRancher(id){
        this.props.history.push(`/view-Rancher/${id}`);
    }

    deleteRancher(id){
        //rest api
        RancherService.deleteRancher(id).then((res) => {
            this.setState({ ranchers:this.state.ranchers.filter(rancher => rancher.id !== id)});
        });
    }
    editRancher(id){
        this.props.history.push(`/add-Rancher/${id}`);
    }
    componentDidMount(){
        RancherService.getRancher().then((res) => {
            this.setState({ ranchers: res.data});
        });
        
    }
/*only add
    addRancher(){
        //add-ranchers routing in app.js
       
        this.props.history.push('/add-Rancher');
        //navigate('/add-Rancher');
       // this.props.navigate('/add-Rancher');
    }*/

    addRancher(){
        //add-ranchers routing in app.js
       
        this.props.history.push('/add-Rancher/_add');
        
    }

    back(){
        //going back to welcome
               this.props.history.push('/');
            }
        
    render() {
        return (
            <div>
                <HeaderComponent />
                <h2 className="text-center">Rancher List</h2> 
                <button style={{marginLeft:"900px"}}  className="addRancherStyle" onClick={this.addRancher}>Add New Rancher</button>
                <div className = "row">
               
                    
                    <table style={{marginTop:"30px"}} className = "table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email Id</th>
                                <th>Contact number</th>
                                <th>Rancher ID</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.ranchers.map(
                                    rancher =>
                                    <tr key = {rancher.id}> 
                                    <td> {rancher.firstName}</td>
                                    <td> {rancher.lastName}</td>
                                    <td> {rancher.emailId}</td>
                                    <td> {rancher.contactNum}</td>
                                    <td> {rancher.rancherId}</td>
                                    <td>
                                       {/* <button  className="btn btn-info">Update</button>*/}
                                       <button onClick = { () => this.editRancher(rancher.id)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft:"10px"}} onClick = { () => this.deleteRancher(rancher.id)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft:"10px"}} onClick = { () => this.viewRancher(rancher.id)} className="btn btn-info">View</button>
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

export default ListRancherComponent;
//export default withRouter(ListRancherComponent);