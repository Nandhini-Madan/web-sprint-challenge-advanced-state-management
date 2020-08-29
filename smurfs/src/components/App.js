import React, { Component } from "react";
import "./App.css";
import SmurfsList from "../components/SmurfsList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>SMURFS! W/Redux</h1>
        <SmurfsList/>
      </div>
    );
  }
}

export default App;
