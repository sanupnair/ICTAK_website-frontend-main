import React from 'react';
import logo from '..//..//assets/images/logo.png';
import '..//..//css/style.css';
import { Link } from "react-router-dom";



function Navbar() {
  return (

    // navbar starts here
    <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
    <a href="/" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
    
    {/* ICTAK Logo */}
    <img src={logo} style={{width:'50px', height:'50px', marginRight:'10px'}} alt='logo'/>
    </a>
    <div className="content">
<h2>ICTAK</h2>
<h2>ICTAK</h2>
</div>
    {/* Navbar Collapse button icon */}
    <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
    {/* Navigation Links */}
        <div className="navbar-nav ms-auto p-4 p-lg-0">
       
        <Link to="/" className="nav-item nav-link">Home</Link>
        <Link to="/about" className="nav-item nav-link">About</Link>
        <Link to="/courses" className="nav-item nav-link">Courses</Link>
                
                {/* Navbar dropdown */}
               
  
            <div className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to='' id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Offerings</Link>
                <div className="dropdown-menu  m-0">
                <Link to="/offerings/partnership"className="dropdown-item">Partnership</Link>
                <Link to="/offerings/membership"className="dropdown-item">Membership</Link>
                                    
                </div>
            </div>
            <Link to="/events" className="nav-item nav-link">Events</Link>
         
           
            <Link to="/contact" className="nav-item nav-link">Contact</Link>
            <Link to="//retail.ictkerala.org/" target="_blank" className="nav-item nav-link">Paatshala LMS</Link>
            <Link to="/login" className="nav-item nav-link">Login</Link>
           
            
           
        </div>
        {/* register now button */}
       
        <Link to="/register" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Register Now<i className="fa fa-arrow-right ms-3"></i></Link>   
    </div>
</nav>
  )
}

export default Navbar