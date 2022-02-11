import React, { Component } from 'react';
class ARaay extends Component {
    MyDatachild = (data) => {
        return <option > { data } < /option>
    }
    render() {
        const country = ['bangladesh', 'japan', 'india', 'usa', 'uk'];
        const dataItem = country.map(this.MyDatachild)
        return ( <
            div >
            <
            select > { dataItem } < /
            select > <
            /div>
        );
    }
}

export default ARaay;