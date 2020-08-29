import React, { Component } from "react";
import "./App.css";
import SmurfsList from "../components/SmurfsList";
import CreateSmurfs from "../components/CreateSmurfs";
import { Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfsList/>
        <CreateSmurfs/>
      </div>
    );
  }
}

export default App;
