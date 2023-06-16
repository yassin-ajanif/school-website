import React from 'react'
import './footer.css'

const Footer = () => {
  return (


    <div className="footer">

 <div className="quicklinks-container">

  <div className="quick-links">Quick links</div>
  <div className="footer-about">About Us</div>
  <div className="contact">Contact</div>
  <div className="privacy">Privacy Policy</div>
  <div className="terms">Terms & Conditions</div>
  
  </div>

  <div className="Course-container">
  <div className="Course">Course</div>
  <div className="login">Login</div>
  <div className="download">Download</div>
  <div className="all-courses">All Courses</div>
</div>

<div className="contact-us-container">
  <div className="contact-us">Contact Us</div>
  <div className="contact-email">contact@email.com</div>
  <div className="icon">Icon</div>
  <div className="email-input-button">
    <input type="email" className="email-input" placeholder="Email Address" />
    <button className="submit-button">Subscribe</button>
  </div>
</div>

<div className="copyRight">This website is developed by GTCoding © 2021</div>

    </div>

  )
}

export default Footer