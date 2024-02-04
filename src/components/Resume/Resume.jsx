import React from 'react'
import "./Resume.css";
import resume from '../../Assets/Thoufiq Resume New.jpg'
import Port1 from "../../Assets/portfolio-6.png"

const Resume = () => {
  return (
    <div id='resume'>
        <div className="rcontent">
            <h2>Download <span className='span'>Resume</span></h2>
            <p>Welcome to my resume download section. Here, you can find detailed information about my qualifications and professional experience. Feel free to download my resume to learn more about my skills and expertise.</p>
            <a href="https://drive.google.com/file/d/1oE9D8Uafnam0wO_uBM7UCYX8xZS1I1AB/view?usp=sharing" target="_blank"><button className='download'>Download</button></a>
        </div>
        <div className="rimg">
            <img src={resume} alt="" />
        </div>
    </div>
  )
}

export default Resume
