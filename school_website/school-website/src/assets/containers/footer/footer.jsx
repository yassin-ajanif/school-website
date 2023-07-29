import React from 'react'
import './footer.css'
import social from './footer-assets/facebookinsta.png'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

  const navigate=useNavigate()
  
  function NavigateToAboutPage(){

    navigate('/aboutPage')
  }

  function NavigateToEnrollNowPage(){

    navigate('/allCourses')
  }

  function navigateToPrivacyPage(){

    navigate('/privacyPolicyPage')
  }

  function NavigateToTermsAndConditionsPage(){

    navigate('/termsAndConditionsPage')
  }

  function navigateToContactPage(){

    navigate('/contactUs')
  }

  return (


    <div className="footer">

  <div className="footer-content">

 <div className="quicklinks-container">

  <div className="quick-links">Quick links</div>
  <div className="footer-about"onClick={NavigateToAboutPage}>About Us</div>
  <div className="contact"onClick={navigateToContactPage}>Contact</div>
  <div className="privacy"onClick={navigateToPrivacyPage}>Privacy Policy</div>
  <div className="terms"onClick={NavigateToTermsAndConditionsPage}>Terms & Conditions</div>
  
  </div>

  <div className="Course-container">
  <div className="Course">Course</div>
  <div className="login">Login</div>
  <div className="download">Download</div>
  <div className="all-courses" onClick={NavigateToEnrollNowPage}>All Courses</div>
</div>

<div className="contact-us-container">
  <div className="contact-us" >Contact Us</div>
  <div className="contact-email">contact@email.com</div>
  <div className="icon"><img src={social} alt="" /></div>
  <div className="email-input-button">
    <input type="email" className="email-input" placeholder="Email Address" />
    <button className="subcribe-button">Subscribe</button>
  </div>
</div>

</div>
<div className="copyRight">This website is developed by GTCoding © 2023</div>

    </div>

  )
}

export default Footer