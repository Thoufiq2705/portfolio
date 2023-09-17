import React from 'react';
import './Intro.css';
import Hire from '../../Assets/hireme.png';
import Profile from '../../Assets/profile-pic (3).png'

const Intro = () => {
  return (
    <div id='intro' className='.intro'>
        <div className="introimage" id='imgimage'>
          <img src={Profile} alt="image" className="introimg" />
        </div>
        <div className="contents">
            <span className="hello">Hello, <br /><span className="introname">I`m <span className="name">Thoufiq</span> <br />Website Developer</span></span>
            <p className="intropara">I'm an enthusiastic web developer showcasing my dedication to crafting engaging websites and applications. With skills in front-end and back-end development, design, and problem-solving, I invite you to explore my projects. Let's collaborate on exciting projects ahead!</p>
            <button className="introbtn" onClick={() =>{
              document.getElementById('contact').scrollIntoView({behavior:"smooth"});
            }}><img src={Hire} alt="" className="hire" />Hire me</button>
        </div>
        {/* <div className="introimage">
          <img src={Profile} alt="image" className="introimg" />
        </div> */}
    </div>
  )
}

export default Intro