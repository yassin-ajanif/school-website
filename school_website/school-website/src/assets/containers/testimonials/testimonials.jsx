import React from 'react'
import janeImg from '../../containers/testimonials/testimonials-assets/jane-image.png'
import jacobeImg from '../../containers/testimonials/testimonials-assets/jacob-image.png'
import './testimonials.css'

const Testimonials = () => {
  return (

    <div className="testemonials">

  <div className="testimonials-title-text">
 
 <div className="testimonials-title">What our students say</div>
 <div className="testimonials-text">All students get access to all the videos and also the source code of the projects. You will also have access to a private Discord channel where you can discuss your doubts.</div>
 <button className="testemonial-learn-more desktop">Learn More</button>
 </div>

<div className="testimonials-structure">

<div className="jane-testimonials">

  <div className="jane-testimonials-context">This is a great course. It helped me a lot. Thank you :)</div>
  <div className="jane-testimonials-info">
    <div className='jane-testimonials-info-name_job'>
    <div className="jane-testimonials-info-name">Jane Cooper</div>
    <div className="jane-testimonials-info-job">Developer, Sony</div>
    </div>

    <div className="jane-testimonials-info-image"><img src={janeImg} alt="" /></div>
  </div>
</div>

<div className="jacob-testimonials">

  <div className="jacob-testimonials-context">Amazing Work! Well done!</div>

  <div className="jacob-testimonials-info">
    <div className='jacob-testimonials-info-name_job'>
    <div className="jacob-testimonials-info-name">Jacob Jones</div>
    <div className="jacob-testimonials-info-job">Designer, Facebook</div>
    </div>

    <div className="jacob-testimonials-info-image"><img src={jacobeImg} alt="" /></div>
  </div>
</div>



<div className="testemonial-bar"></div>


</div>

<button className="testemonial-learn-more mobile">Learn More</button>



    </div>


  )
}

export default Testimonials