import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { smurfsReducers } from "./Reducers/smurfsReducers";
import thunk from "redux-thunk";

//creating store 
let store = createStore(smurfsReducers , applyMiddleware(thunk));
const rootElement = document.getElementById("root");
ReactDOM.render(
  // Step 2: provide the store
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
