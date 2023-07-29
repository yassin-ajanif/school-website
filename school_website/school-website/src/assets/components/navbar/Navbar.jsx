
import React, { useState } from 'react'
import iconMobile from '../../containers/header/header-assets/MenuAlt4Outline.png'
import './Navbar.css'
import close from './mobile assets/close.png'
import { useNavigate } from 'react-router-dom'

const Navbar = ({changeBackColor}) => {

  const [iconToggle,seticonToggle]=useState(false)
  const navigate = useNavigate()



// this section is for procedures

  function closeTheMobileMenu(){

    seticonToggle(!iconToggle)
  }

  function NavigateToAboutPage(){

    navigate('/aboutPage')
  }

  function NavigateToServicesPage(){

    navigate('/services')
  }

  function NavigateToOourWorkPage(){

    navigate('/ourWork')
  }

  function NavigateToEnrollNowPage(){

    navigate('/allCourses')
  }

  function navigateToHomePage(){

    navigate('/')
  }
// changing backgroundColor a navbar when i switch from a homePage
 
 

 function NavigationMobile() {
   
     return (
 
      <div className="navigation-mobile" >
         
       <div className="navigation-mobile-close" onClick={closeTheMobileMenu}><img src={close}  /></div>
       <div className="navigation-mobile-content">
         <div className="navigation-mobile-about" onClick={NavigateToAboutPage}>About</div>
         <div className="navigation-mobile-Services" onClick={NavigateToServicesPage}>Services</div>
         <div className="navigation-mobile-Our-work"onClick={NavigateToOourWorkPage}>Our Work</div>
         <button className="navigation-mobile-enroll"onClick={NavigateToEnrollNowPage}>Enroll Now</button>
       </div>
 
        </div>
 
   )
 }

  return (

    <div className= {changeBackColor ? "navbar styled" :'navbar' }>
        
      <div className="logo" onClick={navigateToHomePage}>GD.</div>

      <div className="navbar-content">

      <div className="navbar-content-links">
        <div className="about"onClick={NavigateToAboutPage}>About</div>
        <div className="Services"onClick={NavigateToServicesPage}>Services</div>
        <div className="Our-work"onClick={NavigateToOourWorkPage}>Our Work</div>
        <button className="enroll"onClick={NavigateToEnrollNowPage}>Enroll Now</button>
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