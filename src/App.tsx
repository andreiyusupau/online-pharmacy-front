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
import ShowUser from "./components/user/User";
import AddProduct from "./components/product/AddProduct";
import ListProducts from "./components/product/ListProducts";
import EditProduct from "./components/product/EditProduct";
import ShowCart from "./components/order/ShowCart";
import ListOrders from "./components/order/ListOrders";
import ShowOrder from "./components/order/ShowOrder";
import EditOrder from "./components/order/EditOrder";
import AddProcurement from "./components/procurement/AddProcurement";
import ListProcurements from "./components/procurement/ListProcurements";
import ShowProcurement from "./components/procurement/ShowProcurement";
import EditProcurement from "./components/procurement/EditProcurement";
import ListStockPositions from "./components/stock/ListStockPositions";

export default function App() {
  return <Router>
    <Navigation/>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/productcategories" component={ListProductCategories}/>
    <Route exact path="/productcategories/add" component={AddProductCategory}/>
    <Route exact path="/productcategories/:id/edit" component={EditProductCategory}/>
    <Route exact path="/products" component={ListProducts}/>
    <Route exact path="/products/add" component={AddProduct}/>
    <Route exact path="/products/:id/edit" component={EditProduct}/>
    <Route exact path="/users/:id" component={ShowUser}/>
    <Route exact path="/cart" component={ShowCart}/>
    <Route exact path="/orders" component={ListOrders}/>
    <Route exact path="/orders/:id" component={ShowOrder}/>
    <Route exact path="/orders/:id/edit" component={EditOrder}/>
    <Route exact path="/procurements/add" component={AddProcurement}/>
    <Route exact path="/procurements" component={ListProcurements}/>
    <Route exact path="/procurements/:id" component={ShowProcurement}/>
    <Route exact path="/procurements/:id/edit" component={EditProcurement}/>
    <Route exact path="/stock" component={ListStockPositions}/>
  </Router>;
}
