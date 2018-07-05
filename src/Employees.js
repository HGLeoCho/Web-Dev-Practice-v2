import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment'
import MainContainer from './MainContainer';
class Employees extends Component{

    constructor(props){
        super(props);
        this.state = {
            employees: []
        };
    }

    componentDidMount(){
        axios.get("https://afternoon-mesa-10925.herokuapp.com/employees")
        .then((res)=> {
           this.setState ({
               employees: res.data 
           });
        }).catch((err) =>{
            console.log("shit gone haywire");
            console.log(err);
        });
       };
       
       render() {
           return(
            <MainContainer Sidebar = 'Employees'>
            <h1 className = 'page-header'> Employees </h1>
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <th> Name & Position</th>
                        <th> Address </th>
                        <th> Phone Number </th>
                        <th> Hire Date </th>
                        <th> Salary Bonus </th>
                        </tr>
                    {this.state.employees.map(employees =>
                    <tr key ={employees._id}>
                    <td>{employees.FirstName} - {employees.LastName}</td>
                    <td>{employees.AddressStreet}, {employees.AddressCity} {employees.AddressState}, {employees.AddressZip} </td>
                    <td>{employees.PhoneNum} ext {employees.Extension}</td>
                    <td> {moment.utc(employees.HireDate).format('ll')}</td>
                    <td> $ {employees.SalaryBonus} </td>
                    </tr>
                    )}
                </tbody>
            </table> 
            </MainContainer>
           )};
}
export default Employees;