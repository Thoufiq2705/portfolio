import React, { useState } from 'react'
import './Navbar.css';
import Website from "../../Assets/Website Logo Blue.png";
import Contact from "../../Assets/contact.png";
import { Link } from 'react-scroll';
import Menu from '../../Assets/menu.png';

const Navbar = () => {
  const [showMenu, setshowmenu] = useState(false);
  return (
        <nav className='navbar'>
            <img src={Website} alt='logo' className='logoimg' onClick={() =>{
              document.getElementById('intro').scrollIntoView({behavior:"smooth"});
            }}/>
            <div className="listitems">
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="listitem">Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500} className="listitem">About</Link>
                <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-80} duration={500} className="listitem">Projects</Link>
                <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-200} duration={500} className="listitem">Resume</Link>
            </div>
            <button className="contactbtn" onClick={() =>{
              document.getElementById('contact').scrollIntoView({behavior:"smooth"});
            }}><img src={Contact} className='contactimg' />Contact Me</button>
            
            <img src={Menu} className='togleimg' onClick={() => {setshowmenu(!showMenu)}}/>
            <div className="mobmenu" style={{display: showMenu ? "block" : "none"}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className="moblist" onClick={() => {setshowmenu(false)}}>Home</Link>
                <Link activeClass='active' to='about' spy={true} smooth={true} offset={-70} duration={500} className="moblist" onClick={() => {setshowmenu(false)}}>About</Link>
                <Link activeClass='active' to='portfolio' spy={true} smooth={true} offset={-70} duration={500} className="moblist" onClick={() => {setshowmenu(false)}}>Projects</Link>
                <Link activeClass='active' to='resume' spy={true} smooth={true} offset={-200} duration={500} className="moblist" onClick={() => {setshowmenu(false)}}>Resume</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-80} duration={500} className="moblist" onClick={() => {setshowmenu(false)}}>Contact me</Link>
            </div>
        </nav>
  )
}

export default Navbar