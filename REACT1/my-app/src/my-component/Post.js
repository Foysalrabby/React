import React, { Component } from 'react';
import axios from 'axios';


function mapStateToProps(state) {
    return {

    };
}

class Post extends Component {
    constructor() {
        super();
        this.state = {
            postdata: "",
            postresult: ""

        }
    }
    onChangerHolder = (event) => {
        var mydata = event.target.value;
        this.setState({ postdata }: mydata);

    }



    onClickHolder = (event) => {

        axios.post();
        .then(response => {

                this.setState({ postresult: result.data });
                alert(this.state.postresult)

            })
            .catch(error => {
                alert("something is wrong")
            })

    }


    render() {
        return ( <div>

            <input onChange = { this.onChangerHolder() }
            type = "text"/>
            <button onClick = { this.onClickHolder() } > click me </button> </div>
        );
    }
}

export default
Post;