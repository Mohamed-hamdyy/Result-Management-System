import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.css'
import { useState } from 'react'
import Home from '../../Pages/Home/Home'
function Footer (props) {
  const navigate = useNavigate();
  const [showSign,setShow]=useState(props.Sign);
  const [showSignOut,setShowSignUp]=useState(props.SignOut);

  const handleLogOut=()=>{
  window.localStorage.clear();
  window.location.href='/';
  navigate('/');


  }




  return (
    <div className='gpt3__footer section__padding'>
      
   {showSign &&
      <div className='gpt3__footer-btn'>
        <button onClick={()=>{
          navigate('/Login') }} >{props.buttonText}</button>
      </div>}
      

      <div className='gpt3__footer-links_logo2'>

        <p href='/'>Fetch your Results.</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>

          <p>Bachelor, <br /> © All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions </p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Mohamed Hamdy</p>
          <p>01127399301</p>
          <p>mohamed.hamdyy83@gmail.com</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>@2022 Learn. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer;
