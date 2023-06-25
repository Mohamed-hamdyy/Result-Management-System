import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Footer.css'
import { useState } from 'react'


function Footer4 (props) {
  const navigate = useNavigate();
  const [showSign,setShow]=useState(props.Sign);
  const [showSignOut,setShowSignUp]=useState(props.SignOut);

  const handleLogOut=()=>{
  window.localStorage.clear();
  window.location.href='/';

  navigate('/');


  }




  return (
    <div className='gpt3__footer4 section__padding'>
      
   {showSign &&
      <div className='gpt3__footer-btn'>
        <button onClick={() => navigate('/Login')}>{props.buttonText}</button>
      </div>}
      {showSignOut &&
      <div className='gpt3__footer-btn'>
        <button onClick={handleLogOut}>Sign Out</button>
      </div>}

      <div className='gpt3__footer-links_logo2'>

        <p href='/'>Add Grades Easily.</p>
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
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>

      <div className='gpt3__footer-copyright'>
        <p>@2022 Learn. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer4;
