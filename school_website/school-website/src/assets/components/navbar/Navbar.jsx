
import React from 'react'
import iconMobile from '../../containers/header/header-assets/MenuAlt4Outline.png'
import './Navbar.css'

const Navbar = () => {

  return (

    <div className="navbar">
        
      <div className="logo">GD.</div>

<div className="navbar-content">

    <div className="about">About</div>
    <div className="Services">Services</div>
    <div className="Our-work">Our Work</div>
    <button className="enroll">Enroll Now</button>
    <div className="mobile-icon">
        <img src={iconMobile}/></div>

</div>


    </div>
  )
}

export default Navbar