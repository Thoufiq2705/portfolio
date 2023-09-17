import React from 'react'
import "./Resume.css";
import resume from '../../Assets/Thoufiq Resume.jpg'
import Port1 from "../../Assets/portfolio-6.png"

const Resume = () => {
  return (
    <div id='resume'>
        <div className="rcontent">
            <h2>Download <span className='span'>Resume</span></h2>
            <p>Welcome to my resume download section. Here, you can find detailed information about my qualifications and professional experience. Feel free to download my resume to learn more about my skills and expertise.</p>
            <button className='download'>Download</button>
        </div>
        <div className="rimg">
            <img src={resume} alt="" />
        </div>
    </div>
  )
}

export default Resume
