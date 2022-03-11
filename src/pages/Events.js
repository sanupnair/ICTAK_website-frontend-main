import React from 'react';
import '..//css/bootstrap.min.css';
import '..//css/style.css';
import { Link } from "react-router-dom";
import eventImage from '..//assets/images/icset.png'
import icsetimage from '..//assets/images/icsetimage.png';
import techathlonimage from '..//assets/images/techathlonimage.png';

function Events() {
  return (
    // events starts here
    <div>
        <div class="container-xx py-5 category" id='eventContainer'>
    <div class="container">
      {/* main heading */}
        
  <div class="p-4 p-md-5 mb-4 text-dark rounded " style={{display:'flex'}}>
    <div class="col-md-6 px-0">
    <p >Conference Theme</p>
      <h1 style={{color:'Teal'}} id='eventHeading'>Leading</h1>
      <h3 style={{color:'orange'}}>the new normal</h3>
      <small class="text-muted">2022 MARCH 15, 16</small><br/>
      <Link to="//https://ictkerala.org/icset" target="_blank">Click here to Join Virtual Conference</Link>
    
    </div>
    <div class="col-md-6 px-0" style={{alignContent:'end'}}>
        <img src={eventImage} alt="eventImage" id='eventImage' style={{float:'right'}} />
        </div>
  </div>
</div>
</div>
{/* ICSET */}
<div class="row mb-2">
    <div class="col-md-6" style={{backgroundColor:'lightblue'}}>
      <div class="row g-0  rounded overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">ICSET</strong>
          <h3 class="mb-0">Conclave 2022</h3>
          
          <p class="card-text mb-auto" style={{textAlign:'justify'}}>ICSET is the hallmark Academia-Industry collaboration event in the State that deliberates on multiple disciplines around a contemporary subject. This year's theme is 'Leading the New Normal', and we have lined up around twenty top leaders and experts from diverse backgrounds - from the world of Science, Technology, Business, Government and Social development.</p>
          <Link to='/events/icset' class="stretched-link">More Details</Link>
          <Link to='/events/icset' class="stretched-link">Register and Join</Link>
          
        </div>
        <div class="col-auto d-none d-lg-block">
          <img src={icsetimage} alt="" />

        </div>
      </div>
    </div>
    {/* ICTAK techathlon */}
    <div class="col-md-6" style={{backgroundColor:'lightgreen'}}>
      <div class="row g-0  overflow-hidden flex-md-row mb-4  h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">ICTAK</strong>
          <h3 class="mb-0">Techathlon</h3>
         
          <p class="card-text mb-auto" style={{textAlign:'justify'}}>'Techathlon' is an annual Technical Skills Competition organized by ICT Academy of Kerala. It’s a unique competition designed in-line with employability skills assessments conducted by global organisations with multiple rounds played by a team of three members to win the cash prize of Rs. 50,000/-. The first and second runner-ups will also receive cash prizes.</p>
          <Link to='/events/techathlon' class="stretched-link">More Details</Link>
          <Link to='/events/techathlon' class="stretched-link">Register</Link>
        </div>
        <div class="col-auto d-none d-lg-block">
          <img src={techathlonimage} alt="" />

        </div>
      </div>
    </div>
   
  </div>
    </div>
  )
}

export default Events