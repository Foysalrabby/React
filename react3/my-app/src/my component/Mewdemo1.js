import React, { Component } from 'react';
import ReactDOM from 'react-dom';



class Mewdemo1 extends Component {

    Changeimg() {
        var imgid = document.getElementById("imgid");
        ReactDOM.findDOMNode(imgid).src = "./Image/beauti.jpg.jpg";
    }
    render() {
        return ( <
            div >
            <
            button onClick = { this.Changeimg } > changeimg < /button>  <
            img id = "imgid"
            src = "./Image/bangladesh.jpg" >
            <
            /img>

            <
            /div>
        );
    }
}

export default Mewdemo1;