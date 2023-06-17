
import React, { useState } from 'react'
import iconMobile from '../../containers/header/header-assets/MenuAlt4Outline.png'
import './Navbar.css'
import close from './mobile assets/close.png'

const Navbar = () => {

  const [iconToggle,seticonToggle]=useState(false)

 console.log(iconToggle)

 function NavigationMobile() {
   
     return (
 
      <div className="navigation-mobile">
         
       <div className="navigation-mobile-close" onClick={()=>seticonToggle(!iconToggle)}><img src={close}  /></div>
       <div className="navigation-mobile-content">
         <div className="navigation-mobile-about">About</div>
         <div className="navigation-mobile-Services">Services</div>
         <div className="navigation-mobile-Our-work">Our Work</div>
         <button className="navigation-mobile-enroll">Enroll Now</button>
       </div>
 
        </div>
 
   )
 }

  return (

    <div className="navbar">
        
      <div className="logo">GD.</div>

      <div className="navbar-content">

      <div className="navbar-content-links">
        <div className="about">About</div>
        <div className="Services">Services</div>
        <div className="Our-work">Our Work</div>
        <button className="enroll">Enroll Now</button>
      </div>
    
         <div className="mobile-icon"
              onClick={()=>seticonToggle(!iconToggle)}>

        <img src={iconMobile}/></div>

        {iconToggle && <NavigationMobile/> }

</div>


    </div>
  )
}

export default Navbar