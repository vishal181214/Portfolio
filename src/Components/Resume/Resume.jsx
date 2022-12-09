import React from 'react';
import img1 from "../../Images/resume-guy-img.png";
import skype from "../../Images/skype.png";
import pin from "../../Images/pinterest.png";
import beh from "../../Images/behance.png";
import dribbble from "../../Images/dribbble.png";

const Resume = () => {
  return (
    <div>
      <div className='resume' id="resume-id">
        <h2>Resume</h2><hr className='resume-hr' />
        <div className='resume-flex'>
          <div className='resume-content'>
            <div className='resume-content-1'>
              <h3><b>Work Experience</b></h3>
              <hr />
              <h4><div className="dotEd"></div> <b>Kratin LLC</b></h4>
              <h6><b>Designation:- Intern Technologist</b></h6>
              <h6><b>Technology :- Java / DevOps Developer</b></h6>
              <b className='cllgName'>05/2021 - 11/2021</b>
            </div>

            <div className='resume-content-2'>
              <h3><b>Education</b></h3>
              <hr />
              <div className="dot"></div>
              <h4><b className='cllgName'>Shri Guru Gobind Singhji Institute of Engg
                  & Technology </b></h4>
              <b className='cllgName'>Bachelor of Computer Science & Technology 6.4 CGPA</b><br/>
              <b className='cllgName'>2017 - 2020</b>
            </div>
            <div className='resume-content-2'>
              <div className="dotPoly"></div>
              <h4><b className='cllgName'>Acharya Shrimanrayan Polytechnic</b></h4>
              <b className='cllgName'>Diploma in Computer Science & Engineering  85%</b><br/>
              <b className='cllgName'>2014 - 2017</b>
            </div>
          </div>
          <div className='resume-right'>
            <div className='resume-guy'>
              <div>
                <img className='resume-guy-pic' src={img1} alt="" />
              </div>
              <div className='platforms'>
                <div><img className='platform-img' src={skype} alt="" /></div>
                <div><img className='platform-img' src={pin} alt="" /></div>
                <div><img className='platform-img' src={dribbble} alt="" /></div>
                <div><img className='platform-img' src={beh} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume;

{/* <div className="dotEd"></div>
<div className="dipEdu">Acharya Shrimanrayan Polytechnic</div>
<button className='highYear'>2014 - 2017</button>
</div>
<p className='bachCompTech dipName'>Diploma in Computer Science & Engineering</p>
</div> */}