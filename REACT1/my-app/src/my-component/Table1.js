import React, { Component } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";
import axios from 'axios';


class Table1 extends Component {
    constructor() {
        super();
        this.state = {
            tableInformation: []

        }


    }
    componentDidMount() {

        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response => {
                this.setState({ tableInformation: response.data })

            })

        .catch(error => {
            alert("something is wrong");
        })

    }


    render() {
        const tabledata = this.state.tableInformation;
        const col = [{ Header: "countryname", accessor: "name" }, { Header: "capital", accessor: "capital" }];
        return ( <div>

            <ReactTable
            data = { tabledata }
            columns = { col }
            defaultPageSize = { 10 }
            pageSizeOptions = {
                [10, 20, 30, 50, 100]
            }/>
           <button> hi</button> 
           <input type="text" placeholder="eee"/> 
           <input type="text" placeholder="eee"/>
            </div>
          
        );
    }
}

export default Table1;