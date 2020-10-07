import React from "react";
import "./App.css";
import Login from "./Components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from "./Components/Register";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        
        <Route path="/register" component={Register} />
      </Switch>
    </Router>
  );
}

export default App;
