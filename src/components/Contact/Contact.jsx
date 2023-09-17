import React from 'react';
import "./Contact.css";
import Insta from '../../Assets/instagram.png'
import Face from '../../Assets/facebook-icon.png'
import Git from '../../Assets/Github Png (7).png'
import LinkedIN from '../../Assets/Github Png (5).png';
import emailjs from '@emailjs/browser';
import { useRef } from "react";



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_giuh5qj', 'template_zn722kd', form.current, 'sKljO_dx_S5Hz3Pih')
      .then((result) => {
          console.log(result.text);
          alert("Email Sent");
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div id='contact'>
        <div className="contactcontents">
            <h2>Contact <span className='span'>Me</span></h2>
            <p>Please fill out the form to discuss any business opportunities</p>
        </div>
        <form className='contactform' ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder='Your Name' name="to_name" />
            <input type="email" placeholder='Your Email' name="from_email" />
            <textarea name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' className='submit' value="send">Submit</button>
            <div className="links">
                <a href="https://www.instagram.com/___thoufiq_2705___/" target="_blank">
                    <img src={Insta} alt="instagram" className='link' />
                </a>
                <a href="https://www.facebook.com/thoufiq.thoufiq.332" target="_blank">
                    <img src={Face} alt="facebook" className='link' />
                </a>
                <a href="https://github.com/Thoufiq2705" target="_blank">
                    <img src={Git} alt="twitter" className='link github' />
                </a>
                <a href="https://www.linkedin.com/in/thoufiqaccount/" target="_blank">
                    <img src={LinkedIN} alt="linkedIn" className='link' />
                </a>
            </div>
        </form>
    </div>
  )
}

export default Contact