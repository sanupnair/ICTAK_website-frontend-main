import React from 'react';
import '..//css/bootstrap.min.css';
import '..//css/style.css';
import { Link } from "react-router-dom";
import icsetimage from '..//assets/images/icsetimage.png';

// ICSET event starts here
function Icset() {
  return (
    <div>
        <div class="px-4 py-5 my-5 text-center">
    <img class="d-block mx-auto mb-4" src={icsetimage} alt="" />
    <h1 class="display-5 fw-bold" id='icset'>ICSET Conclave 2022</h1>
    <div class="col-lg-6 mx-auto" style={{backgroundColor:'lightblue', padding:'20px', borderRadius:'10px'}}>
      <p class="lead mb-4" align='justify'>The fifth edition of ICT Academy of Kerala’s International Conclave on Skills, Engineering & Technology (ICSET) is aimed at bringing closer the academia, industry, government and connected stakeholders at large, to discuss, deliberate and exchange ideas about skills, engineering and technology areas. This year's main theme is 'Leading the New Normal'.</p>
      <p class="lead mb-4" align='justify'>A chosen diaspora of eminent speakers from across the world would be speaking or presenting their ideas under four major sub-themes (a) Innovation and Entrepreneurship in the New Normal (b) Knowledge Economy - The New Normal Career Opportunities (c) Changing Lifestyle in the New Normal (d) Technology Impact to Business and life in New Normal. The programme will be useful for researchers, academicians, Industrialists and practitioners across the globe and pave ways to explore the subject areas in a collaborative environment.</p>
      <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
       <Link class="btn btn-primary btn-lg px-4 gap-3" to='//ictkerala.org/icset2021/files/ICSET-2021-Schedule.pdf'>Program Schedule</Link>
        <Link class="btn btn-outline-secondary btn-lg px-4" to='//ictkerala.org/icset2021/files/ICSET-2021-Speakers.pdf'>Speaker List</Link>
        
      </div>
      <div class="px-4 py-5 my-5 text-center">
        <button type="button" class="btn btn-outline-secondary btn-lg px-4">Conference Dates: 2022 Mar 15 & 16 | No Registration Fee</button>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Icset