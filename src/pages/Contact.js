import React from 'react';
import '..//css/bootstrap.min.css';
import '..//css/style.css';

function Contact() {
  return (
    <div>
{/* Contact Starts Here */}
<div className="container-xxl py-5">
        <div className="container">
            <div className="text-center " >
                <h6 className="section-title bg-white text-center text-primary px-3">Contact Us</h6>
                <h1 className="mb-5">Contact For Any Query</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 " >
                    
                    {/*Address  */}
                    <div className="d-flex align-items-center mb-3">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary">
                            <i className="fa fa-map-marker-alt text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="text-primary">Office</h5>
                            <p classNameName='mb-0'>ICT ACADEMY HQ <br/> 
          G1,Ground Floor, Thejaswini Building,
            Technopark, Thiruvananthapuram,<br/>
                Kerala, India.</p>
                        </div>
                    </div>
                    <div className="d-flex align-items-center mb-3">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" >
                            <i className="fa fa-phone-alt text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="text-primary">Tele</h5>
                            <p className="mb-0"> + 91 759 405 1437</p>
                        </div>
                     
                    </div>
                   
                    <div className="d-flex align-items-center">
                        <div className="d-flex align-items-center justify-content-center flex-shrink-0 bg-primary" >
                            <i className="fa fa-envelope-open text-white"></i>
                        </div>
                        <div className="ms-3">
                            <h5 className="text-primary">Email</h5>
                            <p className="mb-0">info@ictkerala.com</p>
                        </div>
                    </div>
                </div>
                {/* google map */}
                <div className="col-lg-4 col-md-6 " data-wow-delay="0.3s">
                    <iframe className="position-relative rounded w-100 h-100"
                        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=ICTAK&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        frameborder="0"  allowfullscreen="" aria-hidden="false"
                        tabindex="0" title='map'></iframe>
                </div>
                {/* get in touch */}
                <div className="col-lg-4 col-md-12 " data-wow-delay="0.5s">
                    <form>
                    <h5>Get In Touch</h5>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name"/>
                                    <label for="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="email" placeholder="Your Email"/>
                                    <label for="email">Your Email</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject"/>
                                    <label for="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" ></textarea>
                                    <label for="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact