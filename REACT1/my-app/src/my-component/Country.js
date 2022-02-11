import React, { Component } from 'react';
import axios from 'axios';

class Country extends Component {
    constructor() {
        super()
        this.state = {
            mydata: []
        }

    }

    componentDidMount() {
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.setState({ mydata: response.data })
            })
            .catch(error => {
                console.log(error)

            })
    }

    render() {
        const myList = this.state.mydata;
        const countryname = myList.map((myList) => {
            return <li> { myList.name } </li>

        })

        return ( < div >
            <ul> { countryname } </ul>  </div >
        );
    }
}

export default Country;