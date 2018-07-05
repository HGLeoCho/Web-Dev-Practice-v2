import React, { Component } from 'react';
import MainContainer from './MainContainer';

class NotFound extends Component{
    render(){
        return(
            <MainContainer>
            <hi className= "page-header"> Not Found </hi>
            <span> Page is not found </span>
            </MainContainer>
        )
    }
}
export default NotFound;