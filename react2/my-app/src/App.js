import React from 'react';
import './App.css';
import Welcome from './mycomponent/Welcome'
import Hello from './mycomponent/Hello'
import Stage from './mycomponent/Stage'
import Refresh from './mycomponent/Refresh';

function App() {
    return ( <
        div className = "App" >
        <
        Welcome > < /Welcome> <
        Hello > < /Hello> <
        Stage > < /Stage> <
        Refresh > < /Refresh>

        <
        /div>
    );
}

export default App;