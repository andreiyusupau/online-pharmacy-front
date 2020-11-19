import React from 'react';
import './App.css';
import {Route , BrowserRouter as Router} from 'react-router-dom';
import Home from "./components/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import AddProductCategory from "./components/product/AddProductCategory";
import ListProductCategories from "./components/product/ListProductCategories";
import EditProductCategory from "./components/product/EditProductCategory";
import Navigation from "./components/Navbar";

export default function App() {
  return <Router>
    <Navigation/>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/productcategories/add" component={AddProductCategory}/>
    <Route path="/productcategories" component={ListProductCategories}/>
    <Route path="/productcategories/:id" component={EditProductCategory}/>
  </Router>;
}
