import React, { Component } from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css"


class Table extends Component {

    render() {
        const tabledata = [{ name: "rafi", age: "23" }, { name: "foysal", age: "22" }, { name: "rabbi", age: "20" }];
        const col = [{ Header: "name", accessor: "name" }, { Header: "age", accessor: "age" }];
        return ( <
            div >

            <
            ReactTable

            data = { tabledata }
            columns = { col }
            defaultPageSize = { 2 }
            pageSizeOptions = {
                [2, 4, 6, 8, 10]
            }
            />

            <
            /div>
        );
    }
}

export default Table;