import React , {Component} from 'react';
// import Header from './components/Header';
import Footer from './components/Footer';


import './App.css';

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import List from './components/List';
import Home from './components/Home';
import CustomersList from './components/CustomersList';
import EditForm from './components/EditForm';



// import foto2 from "./img/foto2";

class App extends Component {

 
   
  render() {//display Data from API to HTML 
   
 

      return(
    
    /*    <Router>
       <Header />
    <div>
     
    <ul>
    <li>  <Link to="/">Home</Link> </li>
    <li>  <Link to="/list">Books Lists</Link> </li>
    <li>  <Link to="/login">Login</Link> </li>
    <li>  <Link to="/register">Add Customer</Link> </li>
    <li>  <Link to="/CustomersList">Show Customers</Link> </li>
    <li>  <Link to="/EditForm">Edit Customers</Link> </li>
    </ul>
    <Route  exact path="/" component={Home}/>
    <Route   path="/list" component={List}/>
    <Route  path="/login" component={Login}/>
    <Route  path="/register" component={Register}/>    
    <Route  path="/CustomersList" component={CustomersList}/>    
    <Route  path="/EditForm" component={EditForm}/> 

    </div>
  <Footer />
       </Router> */

///////////////////////////
<Router>

<div className="container">
          <nav className=" navbar navbar-expand-lg navbar-light bg-light">
           
            <Link to="/" className="navbar-brand">Books-Customers API</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/list" className="nav-link">Books Lists</Link>
                </li>
               
                <li className="navbar-item">
                  <Link to="/register" className="nav-link">Add Customer</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/CustomersList" className="nav-link">Show Customers</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/EditForm" className="nav-link">Edit Customers</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br/>
          <Route  exact path="/" component={Home}/>
    <Route   path="/list" component={List}/>
    <Route  path="/login" component={Login}/>
    <Route  path="/register" component={Register}/>    
    <Route  path="/CustomersList" component={CustomersList}/>    
    <Route  path="/EditForm" component={EditForm}/> 

        </div>
        <Footer />
        </Router>
///////////////////////////

     
      
  );
      }
    }

export default App;
