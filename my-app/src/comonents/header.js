'use strict'
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class Header extends React.Component{

  render()   {
    return(
    <div>
<Router>
<Navbar bg="dark" variant="dark">
    
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
   
      <Link to="/">Home</Link>
      <Link to='/fav'>Favorite</Link>
     

 
  </Navbar>
  </Router>
    </div>
    
    
    
    
    
    )}
    
    
    
  

  
}


export default Header
