import React from 'react'
import './CTA.css'
import appstore from '../../containers/CTA/cta-assets/appstore.png'
import googleplay from '../../containers/CTA/cta-assets/googleplay.png'


const CTA = () => {
    
  return (

    <div className="cta">

     <div className='cta-title'>Get our App</div>
    <div className='cta-text'>You can use our App for better experience on smartphones
</div>
<div className="cta-bars">
     <div className="cta-appstore">
      <img src={appstore} alt="" />
      <div className='cta-appstore-text'>App Store</div>
     </div>
     <div className="cta-googleplay">
      <img src={googleplay} alt="" />
      <div className='cta-googleplay-text'>Google Play</div>
     </div>
</div>
    </div>
  )
}

export default CTA