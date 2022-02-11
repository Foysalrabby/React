import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class page2 extends Component {
    constructor(){
        super();
        this.state={
            passdata:"Bangladesh"
        }
    }
    render() {
        if(sessionStorage.getItem("username")== null){
            return <Redirect to="/Login"/>
         }
         else{
            var pdata="/page3/" + this.state.passdata;

            return (
                <div>
                 <h1>page2</h1> 
                 <button> <Link to={pdata}> Myname</Link> </button>   
                </div>
            );
        
    }
            
    }
}

export default page2;