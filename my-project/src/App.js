import React , {Component} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';


import './App.css';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import List from './components/List';
import Home from './components/Home';
import CustomersList from './components/CustomersList';
import EditForm from './components/EditForm';



class App extends Component {

 
   
  render() {//display Data from API to HTML 
   
 

      return(
    
       <Router>
       <Header />
    <div>
     
    <ul>
    <li>  <Link to="/">Home</Link> </li>
    <li>  <Link to="/list">Books Lists</Link> </li>
    <li>  <Link to="/login">Login</Link> </li>
    <li>  <Link to="/register">Register</Link> </li>
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
       </Router>
     
      
  );
      }
    }

export default App;
