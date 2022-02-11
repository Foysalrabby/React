import React from "react";
import Table1 from "./my-component/Table1";
import "./App.css";
import Mynavigation from "./my-component/Mynavigation";
import Myroute from "./my-component/Myroute";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Mynavigation/>
      <Myroute/>
      </BrowserRouter>
    </div>
  );
}

export default App;
