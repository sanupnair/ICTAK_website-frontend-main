import React from 'react';
import '..//css/bootstrap.min.css';
import '..//css/style.css';
import { Link } from 'react-router-dom';

function Retail() {
  return (
    <> 
    {/*  Retail Page header and tagline*/}

    <header class="py-2 bg-dark  border-bottom mb-4">
        <div class="container">
            <div class="text-center my-5">
                <h1 class="fw-bolder" id='retailheading'>RETAIL COURSES</h1>
               
            </div>
        </div>
    </header>

    {/*  Page content*/}
    <div class="container">
        <div class="row">

    {/* Course entries */}
            <div class="col-lg-8">
            <div class="row">
                
                    <div class="col-lg-6">
                       
                        <div class="card mb-4">
                            <a href="#!"><img class="img-fluid" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                            <div class="card-body">
                                <div class="small text-muted">Status: Active </div>
                                <h2 class="card-title h4">CERTIFIED SPECIALIST IN FULL STACK DEVELOPMENT</h2>
                                <p class="card-text" id='coursedesc'>The MERN stack is an excellent choice for web developers who wish to develop high-quality web applications using JavaScript. The core technologies define the MERN stack – MongoDB, Express.js, React, and Node.js. </p>
                                <Link class="btn btn-primary" to="/retail/singlecourse">Read more →</Link>
                            </div>
                        </div>
                        <div class="card mb-4">
                            <a href="#!"><img class="img-fluid" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                            <div class="card-body">
                                <div class="small text-muted">Status: Active </div>
                                <h2 class="card-title h4">CERTIFIED SPECIALIST IN DATA SCIENCE & ANALYTICS</h2>
                                <p class="card-text"  id='coursedesc'>Data Science and Analytics are amongst the Top 5 IT Jobs . One of the worlds famous tech group, CIO.com predicts that the skills around Data Science will remain as popular for the next few years. </p>
                                <Link class="btn btn-primary" to="/retail/singlecourse">Read more →</Link>
                            </div>
                        </div>
                       
                       
                    </div>
                    <div class="col-lg-6">
                       
                    <div class="card mb-4">
                            <a href="#!"><img class="img-fluid" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                            <div class="card-body">
                                <div class="small text-muted">Status: Active </div>
                                <h2 class="card-title h4">CERTIFIED CYBER SECURITY ANALYST</h2>
                                <p class="card-text"  id='coursedesc'>Cyber Security is a specialized field in Information Technology (IT) which is regarded as a sub-stream in Computer  Science. Cyber Security as a  profession is evolving over the years, the reason being the increasing rate of cybercrime.</p>
                                <Link class="btn btn-primary" to="/retail/singlecourse">Read more →</Link>
                            </div>
                        </div>
                      
                        <div class="card mb-4">
                            <a href="#!"><img class="img-fluid" src="https://dummyimage.com/700x350/dee2e6/6c757d.jpg" alt="..." /></a>
                            <div class="card-body">
                                <div class="small text-muted">Status: Active </div>
                                <h2 class="card-title h4">DIGITAL MARKETING</h2>
                                <p class="card-text"  id='coursedesc'>Digital marketing encompasses all  marketing efforts that use an electronic device or the internet .Businesses leverage digital channels such as search engines, and their websites to connect with prospective customers.</p>
                                <Link class="btn btn-primary" to="/retail/singlecourse">Read more →</Link>
                            </div>
                        </div>
                    </div>
                </div>
             
                
            </div>
            {/* Side widgets */}
            <div class="col-lg-4">
              
                <div class="card mb-4">
                    <div class="card-header">Search</div>
                    <div class="card-body">
                        <div class="input-group">
                            <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                            <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                        </div>
                    </div>
                </div>
              
                <div class="card mb-4">
                        <div class="card-header">Categories</div>
                        <div class="card-body" style={{display: 'flex',alignItems: 'center', textAlign: 'center'}}>
                            
                                
                            <Link to="/" class="nav-item nav-link">Retail</Link>
                            <Link to="/about" class="nav-item nav-link">Institutional</Link>
                            <Link to="/courses" class="nav-item nav-link">Corporate</Link>
                                
                          
                        </div>
                    </div>
               
                <div class="card mb-4">
                    <div class="card-header">Extra Remarks</div>
                    <div class="card-body">Will update soon with some contents....!!!</div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Retail