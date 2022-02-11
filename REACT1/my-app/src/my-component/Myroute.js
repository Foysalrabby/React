import React, { Component } from 'react';
import { Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import page1 from './pages/page1';
import page2 from './pages/page2';
import page3 from './pages/page3';
import Login from './pages/Login';

class Myroute extends Component {
    render() {

        return (
            <div>
            <Switch>
                <Route exact path="/Login" component={Login}/>
               <Route exact path="/" component={Home}/>
               <Route exact path="/page1" component={page1}/>
               <Route exact path="/page2" component={page2}/>
               <Route exact path="/page3/:username" component={page3}/>
               <Route component={Notfound}/>
               </Switch>
            </div>
        );
    }
}

export default Myroute;
