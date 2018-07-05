import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import MainContainer from './MainContainer';
class Projects extends Component{

    constructor(props){
        super(props);
        this.state = {
            projects: []
        };
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
       
       render() {
           return(
            <MainContainer Sidebar = 'Projects'>
            <h1 className = 'page-header'> Projects </h1>
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <th> Name </th>
                        <th> Description </th>
                        <th> Start Date </th>
                        <th> End Date </th>
                        </tr>
                    {this.state.projects.map(projects =>
                    <tr key ={projects._id}>
                    <td>{projects.ProjectName}</td>
                    <td>{projects.ProjectDescription}</td>
                    <td>{moment.utc(projects.ProjectStartDate).format('ll')} </td>
                    <td>{projects.ProjectEndDate ? moment.utc(projects.ProjectEndDate).format('ll'): "n/a"} </td>
                    </tr>
                    )}
                </tbody>
            </table> 
            </MainContainer>
           )};
}
export default Projects;