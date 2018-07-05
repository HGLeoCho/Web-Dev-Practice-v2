import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';
import {Link} from 'react-router-dom';
class Projectspanel extends Component{

    constructor(props){
        super(props)
        this.state = {projects: []};
    }
    componentDidMount(){
        axios.get("https://afternoon-mesa-10925.herokuapp.com/projects")
     //axios.get("https://radiant-retreat-39225.herokuapp.com/projects")
     .then((res)=> {
        this.setState ({
            projects: res.data 
        });
     }).catch((err) =>{
         console.log("shit gone haywire");
         console.log(err);
     });
    
    };

    render(){
        return(
            <div className="panel panel-default">
            <div className="panel-heading">
              <h3 className="panel-title">Projects</h3>
            </div>
            <div className="panel-body">
              <div className="table-responsive overview-table">
                <table className="table table-striped table-bordered">
                  <tbody>
                    {this.state.projects.map(projects =>
                    <tr key ={projects._id}>
                        <td>{projects.ProjectName}</td>
                        <td>Active {moment.utc().diff(projects.ProjectStartDate, 'days')} Days</td>
                        </tr>
                )}
                  </tbody>
                </table>
              </div>
              <Link to ="/projects" className="btn btn-primary form-control">View All Project Data</Link>
            </div>
          </div>
        )
    }
}
export default Projectspanel;