import React from 'react'
import { Header,Courses,Testimonials,Footer,CTA } from './assets'
import './app.css'
import Services from './assets/containers/Services/Services'
import AllCourses from './assets/containers/AllCourses/AllCourses'
import OurWork from './assets/containers/OurWork/OurWork'
import AboutPage from './assets/components/About/About'
import PrivacyPolicyPage from './assets/components/PrivacyPolicy/PrivacyPolicy'
import TermsAndConditionsPage from './assets/components/PolicyTerms/TermsAndConditionsPage'
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom'
import Navbar from './assets/components/navbar/Navbar'
import ContactPage from './assets/components/contactUs/Contact'
import TestimonialPage from './assets/components/Testimonial/Testimonial'
import PricingPage from './assets/containers/pricing/Pricing'

const App = () => {

 

  function Main(){

    return(


      <>
      
      
      <Header/>
      <Testimonials/>
      <PricingPage/>
      <Courses/>
      <CTA/>

      </>

    )
  }
  
    return (


    <div className='app'>

      <BrowserRouter>
      
     

      <Routes>

       <Route index element={<Main/>}/>

      <Route path='/termsAndConditionsPage' element={<><Navbar changeBackColor={true}/><TermsAndConditionsPage/></>}/>
       <Route path='/privacyPolicyPage' element={<><Navbar changeBackColor={true}/><PrivacyPolicyPage/></>}/>
       <Route path='/aboutPage' element={<><Navbar changeBackColor={true}/><AboutPage/></>}/>
       <Route path='/services' element={<><Navbar changeBackColor={true}/><Services/></>}/>
       <Route path='/allCourses' element={<><Navbar changeBackColor={true}/><AllCourses/></>}/>
       <Route path='/ourWork' element={<><Navbar changeBackColor={true}/><OurWork/></>}/>
       <Route path='/contactUs' element={<><Navbar changeBackColor={true}/><ContactPage/></>}/>
       <Route path='/testimonials' element={<><Navbar changeBackColor={true}/><TestimonialPage/></>}/>
        
      </Routes> 

      <Footer/>

      
      
      
      
      
      
    
      </BrowserRouter>

    </div>

  )
}

export default App