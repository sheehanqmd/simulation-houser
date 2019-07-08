import React, { Component } from 'react';
import './App.css';
// import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/Header/Header";
import routes from "./routes";


function App () { 
  
  return (
    
      <div className="App">
        <Link to="/api/wizard">
        <button>Submit</button>
        </Link>
      <Header />
      {routes}
      </div>
  
  );
 }


export default App;
