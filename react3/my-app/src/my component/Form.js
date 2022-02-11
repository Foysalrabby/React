import React, { Component } from 'react';


class Form extends Component {
    constructor() {
        super()
        this.state = {
            username: " "
        }
    }
    onChangeholder = (event) => {
        var myname = event.target.name;
        var myvalue = event.target.value;
        this.setState({
            [myname]: myvalue
        })

    }
    onSubmitHandelar = () => {
        alert(this.state.username);
    }
    render() {
        return ( <
            div >
            <
            form onSubmit = { this.onSubmitHandelar } >
            <
            p > my frist form < /p> <
            p > { this.state.username } < /p>  <
            input name = "username"
            type = "text"
            onChange = { this.onChangeholder }
            placeholder = "Enter your name" >
            <
            /input>  <
            input type = "submit"
            value = "Submit Now" >
            <
            /input> <
            /form>  <
            /div>
        );
    }
}

export default Form;