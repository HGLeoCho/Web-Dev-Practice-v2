import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class EmployeesPanel extends Component{

    constructor(props){
        super(props)
        this.state = {employees: []};
    }
    componentDidMount(){
     axios.get("https://afternoon-mesa-10925.herokuapp.com/employees")
     .then((res)=> {
        this.setState ({
            employees: res.data 
        });
     }).catch((err) =>{
         console.log("shit gone bonkers");
         console.log(err);
     });
    
    };

    render(){
        return(
<div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Employees</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                            
                            {this.state.employees.map(employees =>
                    <tr key ={employees._id}>
                        <td>{employees.FirstName} {employees.LastName}</td>
                        <td>{employees.Position.PositionName}</td>
                        </tr>
                )}
                            
                          </tbody>
                        </table>
                      </div>
                      <Link to="/employees" className="btn btn-primary form-control">View All Employees Data</Link>
                    </div>
                  </div>
        )};
}
export default EmployeesPanel;