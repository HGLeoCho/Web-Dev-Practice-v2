import React, { Component } from 'react';
import Projectspanel from './ProjectsPanel';
import Teampanel from './Teampanel';
import MainContainer from './MainContainer';
import EmployeesPanel from './EmployeesPanel'
class Overview extends Component{
    render(){
        return(
            <MainContainer Sidebar = "Overview">
<h1 className="page-header">Overview</h1>
<div className="row">
<div className="col-md-4">
<Projectspanel />
</div>
<div className="col-md-4">
<Teampanel />
</div>
<div className="col-md-4">
<EmployeesPanel />
</div>
</div>
</MainContainer>
        )};
}
export default Overview;