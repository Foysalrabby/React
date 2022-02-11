import React, { Component } from 'react'
class Stage extends Component {
    constructor() {

        super()
        this.state = {
            name: "rabbi",
            age: "25",
            height: "5 fit 4 in"
        }

    }
    render() {

        return <div >
            <
            h1 > my name is: = { this.state.name } < /h1> <
        h1 > my age is: = { this.state.age } < /h1> < /
        div >
    }

}
export default Stage;