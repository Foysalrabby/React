import React, { Component } from 'react';
import { Redirect } from 'react-router';
class page3 extends Component {
constructor({match}){
super();
this.state={
myname:match.params.username
}

}

    render() {

        if(sessionStorage.getItem("username")== null){
            return <Redirect to="/Login"/>
         }

        else{
        return (
            <div>
               <h1>{this.state.myname}</h1>  
            </div>
        );
    }
    }
}

export default page3;