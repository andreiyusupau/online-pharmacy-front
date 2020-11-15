import React from 'react';
import './App.css';
import {Route , BrowserRouter as Router} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

export default function App() {
  return <Router>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
  </Router>;
}
