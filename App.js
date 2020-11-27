import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/auth/Login";
import Register1 from "./views/auth/Register";

function App() {
  return (
      <Router>
        <div className="App">
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Login">Login</Link>
            </li>
            <li>
              <Link to="/Register">Register</Link>
            </li>
          </nav>
          <Switch>
            <Route path = "/Login" component = {Login} />
            <Route path = "/Register" component = {Register1} />
            <Route path = "/" component = {Home} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
