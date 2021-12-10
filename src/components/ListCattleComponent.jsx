import React, { Component } from 'react';
import CattleService from '../services/CattleService';
import HeaderComponent from '../components/HeaderComponentCattle';
//import { useNavigate  } from 'react-router-dom';
//const navigate= useNavigate();

class ListCattleComponent extends Component {
    
    constructor(props) {
        super(props)

        this.state= {
              cattles: []
        }
        this.addCattle=this.addCattle.bind(this);
        this.editCattle=this.editCattle.bind(this);
         this.deleteCattle=this.deleteCattle.bind(this);
    }

    viewCattle(id){
        this.props.history.push(`/view-Cattle/${id}`);
    }

    deleteCattle(id){
        //rest api
        CattleService.deleteCattle(id).then((res) => {
            this.setState({ cattles:this.state.cattles.filter(cattle => cattle.id !== id)});
        });
    }
    editCattle(id){
        this.props.history.push(`/add-Cattle/${id}`);
    }
    componentDidMount(){
        CattleService.getCattle().then((res) => {
            this.setState({ cattles: res.data});
        });
        
    }
/*only add
    addCattle(){
        //add-cattles routing in app.js
       
        this.props.history.push('/add-Cattle');
        //navigate('/add-Cattle');
       // this.props.navigate('/add-Cattle');
    }*/

    addCattle(){
        //add-cattles routing in app.js
       
        this.props.history.push('/add-Cattle/_add');
        
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
                                <th>Cattle ID</th>
                                <th>Gender</th>
                                <th>DOB</th>
                                <th>Vaccine</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.cattles.map(
                                    cattle =>
                                    <tr key = {cattle.id}> 
                                    <td> {cattle.cattleID}</td>
                                    <td> {cattle.gender}</td>
                                    <td> {cattle.dateofBirth}</td>
                                    <td> {cattle.vaccine}</td>
                                    <td>
                                       {/* <button  className="btn btn-info">Update</button>*/}
                                       <button onClick = { () => this.editCattle(cattle.id)} className="btn btn-info">Update</button>
                                        <button style={{marginLeft:"10px"}} onClick = { () => this.deleteCattle(cattle.id)} className="btn btn-danger">Delete</button>
                                        <button style={{marginLeft:"10px"}} onClick = { () => this.viewCattle(cattle.id)} className="btn btn-info">View</button>
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

export default ListCattleComponent;
//export default withRouter(ListCattleComponent);