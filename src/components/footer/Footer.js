import React from 'react';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
    {/* footer starts here */}
   <footer class="text-center text-lg-start ">
  <section
    class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom" >

    <div class="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* fa fa icons */}
   <div>
      <Link to='' class="me-4 text-reset">
        <i class="fab fa-facebook-f"></i>
      </Link>
      <Link to='' class="me-4 text-reset">
        <i class="fab fa-twitter"></i>
        </Link>
      <Link to='' class="me-4 text-reset">
        <i class="fab fa-google"></i>
        </Link>
      <Link to='' class="me-4 text-reset">
        <i class="fab fa-instagram"></i>
        </Link>
      <Link to='' class="me-4 text-reset">
        <i class="fab fa-linkedin"></i>
        </Link>
        <Link to='' class="me-4 text-reset">
        <i class="fab fa-github"></i>
        </Link>
    </div>

  </section>
  <section class="">
    <div class="container text-center text-md-start mt-5">

      <div class="row mt-3">
     
        <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
            <i class="fas fa-gem me-3"></i>ICTAK
          </h6>
          <p>
          "We conduct various programs which leverages the link between industry and academia. 
          These interactions not only limits to students, but also extends to faculties too" 
         
          </p>
        </div>
    

    {/* quick links */}
        <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 class="text-uppercase fw-bold mb-4">
        Quick links
          </h6>
          <p>
            <a href="#!" class="text-reset" style={{textDecoration:'none'}}>Full Stack Development</a>
          </p>
          <p>
            <a href="#!" class="text-reset" style={{textDecoration:'none'}}>Cyber Security</a>
          </p>
          <p>
            <a href="#!" class="text-reset" style={{textDecoration:'none'}}>Data science & Analytics</a>
          </p>
          <p>
            <a href="#!" class="text-reset" style={{textDecoration:'none'}}>Software Testing</a>
          </p>
        </div>
       

     
        <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
       
          <h6 class="text-uppercase fw-bold mb-4">
          
          </h6>
          <p>
          <Link to='/courses' class="me-4 text-reset">Courses</Link>
          </p>
          <p>
            
          <Link to='/about' class="me-4 text-reset">About Us</Link>
          </p>
          <p>
          <Link to='/events' class="me-4 text-reset">Events</Link>
          </p>
          <p>
          <Link to='/contact' class="me-4 text-reset">Contact Us</Link>
          </p>
        </div>
      

       {/* ictak contact details */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <p><i class="fas fa-home me-3"></i>ICT ACADEMY HQ <br/> 
            G1,Ground Floor, Thejaswini Building,
            Technopark, Thiruvananthapuram,<br/>
                Kerala, India.</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            info@ictak.org
          </p>
          <p><i class="fas fa-phone me-3"></i> + 91 759 405 1437</p>
          <p><i class="fas fa-print me-3"></i> + 91 471 270 0811</p>
        </div>
      
      </div>
    
    </div>
  </section>


 
  <div class="text-center p-4" >
    © 2022 Copyright : 
    <a class="text-reset fw-bold" href="https://ictkerala.org/" style={{textDecoration:'none', marginLeft:"5px" }}>ICTAK</a>
  </div>
  
</footer>

</>
  )
}

export default Footer