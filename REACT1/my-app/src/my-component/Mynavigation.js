import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';



class Mynavigation extends Component {
    render() {
        return (
            <div>
                <ul> 
                    <li><NavLink exact activeStyle={{color:'red'}}  to="/">HOME</NavLink></li>
                    <li><NavLink exact activeStyle={{color:'red'}} to="/page1">page1</NavLink></li>
                    <li><NavLink exact activeStyle={{color:'red'}} to="/page2">page2</NavLink></li>
                    <li><NavLink exact activeStyle={{color:'red'}} to="/page3">page3</NavLink></li>
                    
                </ul>
            </div>
        );
    }
}

export default Mynavigation;