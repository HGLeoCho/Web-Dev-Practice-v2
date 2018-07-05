import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Teampanel extends Component{

    constructor(props){
        super(props)
        this.state = {team: []};
    }
    componentDidMount(){
     axios.get("https://afternoon-mesa-10925.herokuapp.com/teams")
     //axios.get("https://radiant-retreat-39225.herokuapp.com/teams")
     .then((res)=> {
        this.setState ({
            team: res.data 
        });
     }).catch((err) =>{
         console.log("shit gone bananas");
         console.log(err);
     });
    
    };

    render(){
        return(
<div className="panel panel-default">
                    <div className="panel-heading">
                      <h3 className="panel-title">Teams</h3>
                    </div>
                    <div className="panel-body">
                      <div className="table-responsive overview-table">
                        <table className="table table-striped table-bordered">
                          <tbody>
                            
                            {this.state.team.map(team =>
                    <tr key ={team._id}>
                        <td>{team.TeamName}</td>
                        <td>{team.Employees.length} Employees</td>
                        </tr>
                )}
                            
                          </tbody>
                        </table>
                      </div>
                      <Link to="/teams" className="btn btn-primary form-control">View All Team Data</Link>
                    </div>
                  </div>
        )};
}
export default Teampanel;