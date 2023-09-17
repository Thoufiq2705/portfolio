import React from 'react';
import './About.css';
import UI from '../../Assets/ui-design.png';
import Web from '../../Assets/website-design.png';
import Appdesign from '../../Assets/app-design.png';

function About() {
  return (
    <div id='about' >
        <div className="abtxt">
            <h2>What I <span className='span'>do</span></h2>
            <p>I am a skilled and passionate web designer in creating visually appealing and user-friendly website. I have a strong understnading of design and a keen eye for detail. I am proficient in HTML, CSS, and Javscript, as well as frameworks such as React.Js and Node.Js</p>
        </div>
        <div className="abcontent">
                <div className="box">
                    <img src={UI} alt="" />
                    <div className="abdesign">
                        <h2>HTML CSS</h2>
                        <p>Create responsive and user friendly interface</p>
                    </div>
                </div>
                <div className="box">
                    <img src={Web} alt="" />
                    <div className="abdesign">
                        <h2>Javscript React</h2>
                        <p>Give the site Birth and make it Dynamic</p>
                    </div>
                </div>
                <div className="box">
                    <img src={Appdesign} alt="" />
                    <div className="abdesign">
                        <h2>Node Git & Github</h2>
                        <p>Host your website local and make changes by team</p>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default About