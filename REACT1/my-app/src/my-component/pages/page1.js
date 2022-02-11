import React, { Component } from 'react';
import { Redirect } from 'react-router';
class page1 extends Component {
    render() {
        if(sessionStorage.getItem("username")== null){
            return <Redirect to="/Login"/>
         }
         else{
        return (
            <div>
               <h1>page1</h1> 
            </div>
        );
    }
    }
}

export default page1;