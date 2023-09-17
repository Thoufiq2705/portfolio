import React from 'react';
import './Portfolio.css';
import Pro1 from "../../Assets/portfolio-1.png"
import Pro2 from "../../Assets/portfolio-2.png"
import Pro3 from "../../Assets/portfolio-3.png"
import Pro4 from "../../Assets/portfolio-4.png"
import Pro5 from "../../Assets/portfolio-5.png"
import Pro6 from "../../Assets/portfolio-6.png"


const Portfolio = () => {
  return (
    <section id='portfolio'>
        <div className="prjhead">
            <h2>My <span className='span'>Projects</span></h2>
            <p>I take pride in paying attention to the smaller details and making sure that my work is pixel perfect. I am exicted to bring my work and experience to help bussiness to achieve their goals and build strong online presence</p>
        </div>


        <div className="prjimg">
          <div className="image">
               <img src={Pro1} alt="" className='imgmain'/>
               <a href="https://thoufiq2705.github.io/weather-app/" target="_blank">
               <div className="content">
                <h2 className='imgcontent'>Click me to view Project</h2>
               </div></a> 
          </div>
          <div className="image">
            <img src={Pro2} alt="" className='imgmain'/>
            <a href="https://thoufiq2705.github.io/TicTacToe-Game/" target="_blank">
            <div className='content'>
                <h2 className='imgcontent'>Click me to view Project</h2>
            </div></a>
          </div>
          <div className="image">
            <img src={Pro3} alt="" className='imgmain'/>
            <a href="https://thoufiq2705.github.io/food-recipe-generator/" target="_blank">
            <div className='content'>
                <h2 className='imgcontent'>Click me to view Project</h2>
            </div></a>
          </div>
          <div className="image">
            <img src={Pro4} alt="" className='imgmain'/>
            <a href="https://thoufiq2705.github.io/rock-paper-scissor-game/" target="_blank">
            <div className='content'>  
              <h2 className='imgcontent'>Click me to view Project</h2>
            </div></a>
          </div>
          <div className="image">
            <img src={Pro5} alt="" className='imgmain'/>
            <a href="https://thoufiq2705.github.io/stopwatch/" target="_blank">
            <div className='content'>
              <h2 className='imgcontent'>Click me to view Project</h2>
            </div></a>
          </div>
          <div className="image">
            <img src={Pro6} alt="" className='imgmain'/>
            <a href="https://thoufiq2705.github.io/calculator/" target="_blank">
            <div className='content'>
            <h2 className='imgcontent'>Click me to view my Projects</h2>
            </div></a>
          </div>
        </div>
        <button className='seemore'><a href="https://github.com/Thoufiq2705" target="_blank" className='see'>See more</a></button>
    </section>
  )
}

export default Portfolio