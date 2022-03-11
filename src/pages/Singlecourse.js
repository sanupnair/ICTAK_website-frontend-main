import React from 'react';
import '..//css/bootstrap.min.css';
import '..//css/style.css';
import { Link } from 'react-router-dom';

function Singlecourse() {
  return (
    <>
    <div class="container mt-5">
            <div class="row">
                <div class="col-lg-8">
               
                  
                        {/* <!-- Post header--> */}
                        <header class="mb-4">
                            {/* <!-- Post title--> */}
                            <h1 class="fw-bolder mb-1">CERTIFIED SPECIALIST IN FULL STACK DEVELOPMENT using MEAN</h1>
                           
                            {/* <!-- Post categories--> */}
                            <Link class="badge bg-secondary text-decoration-none link-light" to="/register" style={{marginRight:'10px'}}>Register for Course</Link>
                            <Link class="badge bg-secondary text-decoration-none link-light" to="/contact">Contact Us</Link>
                            
                        </header>
                        {/* <!-- Preview image figure--> */}
                        <figure class="mb-4"><img class="img-fluid rounded" src="https://dummyimage.com/900x400/ced4da/6c757d.jpg" alt="..." /></figure>
                        {/* <!-- Post content--> */}
                        <section class="mb-5">
                            <h2 class="fw-bolder mb-4 mt-5">About the course</h2>
                            <p class="fs-5 mb-4" id='coursedesc'>The MEAN stack is an excellent choice for web developers who wish to develop high-quality web applications using JavaScript. The core technologies define the MEAN stack – MongoDB, Express.js, Angular, and Node.js – all are based on one language, Javascript. </p>
                            <p class="fs-5 mb-4" id='coursedesc'>MEAN stack, in addition to using high-performance and customized technologies, allows for easier and faster deployment of full-stack web applications. Its flexibility and open-source nature make it popular among developers. This program helps the learners to build data-driven applications, as well as test, secure, and deploy their code.</p>
                           
                            <h2 class="fw-bolder mb-4 mt-5">Objectives</h2>
                            <div class="col-lg-12">
                        <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Familiarize Express application framework.</p>
                    </div>
                    <div class="col-lg-12">
                        <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Master Node.js by building practical, working examples
including security features.</p>
                    </div>
                    <div class="col-lg-12">
                        <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Developing MEAN stack application using ES6 (JavaScript)</p>
                    </div>
                    <div class="col-lg-12">
                        <p class="mb-0"><i class="fa fa-arrow-right text-primary me-2"></i>Develop, deploy and secure advanced, high performance,
web applications and web APIss</p>
                    </div>
                   
                        </section>
                  
                  </div> 
                {/* <!-- Side widgets--> */}
                <div class="col-lg-4">
                    {/* <!-- Search widget--> */}
                    <div class="card mb-4">
                        <div class="card-header">Search</div>
                        <div class="card-body">
                            <div class="input-group">
                                <input class="form-control" type="text" placeholder="Enter search term..." aria-label="Enter search term..." aria-describedby="button-search" />
                                <button class="btn btn-primary" id="button-search" type="button">Go!</button>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Categories widget--> */}
                    <div class="card mb-4">
                        <div class="card-header">Eligibility​</div>
                        <div class="card-body" >
                            
                        <p class="mb-4" id='coursedesc'>Graduates from Engineering/Science or 3Yr-Diploma in any of the engineering branches, having a foundation level knowledge (plus two equivalent) in Mathematics and Computer fundamental skills, can apply for the course. </p>      
                        <p class="mb-4" id='coursedesc'>Students who have completed their graduation, but awaiting the final results can also apply.</p>      
                        <p class="mb-4" id='coursedesc'>Please note in case we, ICT Academy of Kerala detect any ineligibility at any stage the candidature will be cancelled accordingly.</p>      
                            
                          
                        </div>
                    </div>
                    {/* <!-- Side widget--> */}
                    <div class="card mb-4">
                        <div class="card-header">Course Highlights</div>
                        <div class="card-body">
                        <div class="col-lg-12">
                        <ul class="list-group">
                        <li class="list-group-item">100% scholarship for female candidates</li>
                        <li class="list-group-item">70% scholarship for male candidates </li>
                        <li class="list-group-item">Access to Linkedin learning with 14,000 courses</li>
                        <li class="list-group-item">125 hrs virtual internship with TCS Ion</li>
                        <li class="list-group-item">100% placement assistance guarantee*</li>
                        </ul>
                       
                    </div>
                    
                    
                            
                            </div>
                    </div>
                    <div class="card mb-4">
                        <div class="card-header">Course Agenda</div>
                        <div class="card-body">
                        <div class="col-lg-12">
                        <ul class="list-group">
                        <li class="list-group-item">Introduction to MERN Stack</li>
                        <li class="list-group-item">Learn HTML5/CSS3 & Bootstrap Fundamentals </li>
                        <li class="list-group-item">Programming with JavaScript</li>
                        <li class="list-group-item">Server-side programming with Node JS</li>
                        <li class="list-group-item">Express JS, Mondo DB Essentials</li>
                        <li class="list-group-item">Front-end development using React JS</li>
                        </ul>
                       
                    </div>
                    
                    
                            
                            </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Singlecourse