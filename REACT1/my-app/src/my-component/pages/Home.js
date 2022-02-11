import React, { Component } from 'react';
import { Redirect } from 'react-router';

class Home extends Component {
    render() {
        if(sessionStorage.getItem("username")== null){
           return <Redirect to="/Login"/>
        }
        else{
            return (
                <div>
                     <h1>Home</h1>
                </div>
            );
        }
        
    }
}
export default Home;