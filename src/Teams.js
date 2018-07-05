import React, { Component } from 'react';
import axios from 'axios';
import MainContainer from './MainContainer';
class Teams extends Component{

    constructor(props){
        super(props);
        this.state = {
            teams: []
        };
    }

    componentDidMount(){
        axios.get("https://afternoon-mesa-10925.herokuapp.com/teams")
        //axios.get("https://radiant-retreat-39225.herokuapp.com/teams")
        .then((res)=> {
           this.setState ({
               teams: res.data 
           });
        }).catch((err) =>{
            console.log("shit gone haywire");
            console.log(err);
        });
       };
       
       render() {
           return(
            <MainContainer Sidebar = 'Teams'>
            <h1 className = 'page-header'> Teams </h1>
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <th> Name </th>
                        <th> Projects </th>
                        <th> Employees </th>
                        <th> Team Lead </th>
                        </tr>
                    {this.state.teams.map(teams =>
                    <tr key ={teams._id}>
                    <td>{teams.TeamName}</td>
                    <td>
                        <ul>
                    {teams.Projects.map(projects => 
                        <li>{projects.ProjectName}</li> 
                    )}</ul></td>
                    <td>{teams.Employees.length} Employees</td>
                    <td>{teams.TeamLead.FirstName} {teams.TeamLead.LastName}  </td>
                    </tr>
                    )}
                </tbody>
            </table> 
            </MainContainer>
           )};
}
export default Teams;