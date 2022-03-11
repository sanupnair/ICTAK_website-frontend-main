import React from 'react';
import '..//css/bootstrap.min.css';
import '..//css/style.css';

import techathlonimage from '..//assets/images/techathlonimage.png';

// techathlon event main page
function Techathlon() {
  return (
    <div>
        <div class="px-4 py-5 my-5 text-center" >
    <img class="d-block mx-auto mb-4" src={techathlonimage} alt="" />
    <h1 id='techathlon' class="display-5 fw-bold" >Techathlon</h1>
    <div class="col-lg-6 mx-auto" style={{backgroundColor:'lightgreen', padding:'20px', borderRadius:'10px'}}>
      <p class="lead mb-4" align='justify'>'Techathlon' is an annual Technical Skills Competition organized by ICT Academy of Kerala. It’s a unique competition designed in-line with employability skills assessments conducted by global organizations. This is an event open to the undergraduate, graduate and postgraduate students where the participants can exhibit and depict their creativity, problem-solving, collaboration, communication and prototyping skills.</p>
      <p class="lead mb-4" align='justify'>Techathlon 2021 is the 5th edition of this competition. The selected theme for this year is Leading the New Normal. The competition will have 5 events conducted for over two weeks. The various events for Techathlon 2021 are Hackathon, Codeathon, Courseathon, Interactive Quiz, and Digital Treasure Hunt.</p>
      
      <div class="px-6 py-6 my-5 text-center">
        <button type="button" class="btn btn-outline-secondary btn-lg px-4"><p>Registration: Feb 18 - Feb 28 | Competition Phase: Mar 01 - Mar 16</p>
Prizes: Winner: 50,000 INR | 1st Runner-up: 25,000 INR | 2nd Runner-up: 10,000 INR</button>
      </div>
    </div>
  </div>

    </div>
  )
}

export default Techathlon