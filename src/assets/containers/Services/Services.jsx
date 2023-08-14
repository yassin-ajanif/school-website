import React from 'react'
import './Services.css'
import Img1 from './services-assets/image1.jpg'
import Img2 from './services-assets/image2.jpg'
import Img3 from './services-assets/image3.jpg'
import Img4 from './services-assets/image4.jpg'
import Img5 from './services-assets/image5.jpg'
import Img6 from './services-assets/image6.jpg'

function Services() {

  return (

    <div className="services">

   <h2>What we provide in our courses </h2>

<div className="service1">
<h3>1. Tutorials and Courses: </h3>
<div className="sercive1-group">
<img src={Img1}  />
<p>Provide comprehensive tutorials and structured courses covering various aspects of game development, 
    such as programming, game design, level design, art and animation, sound, etc. 
    
</p>
</div>
</div>

<div className="service2">
<h3>2. Interactive Coding Exercises:</h3>
<div className="sercive2-group">
<img src={Img2}  />
<p> Create coding exercises and challenges that users can solve directly on the website. This hands-on approach allows learners to apply their knowledge and reinforce their understanding of programming concepts.
</p>
</div>
</div>

<div className="service3">
 <h3>3. Project-Based Learning:</h3>
 <div className="sercive3-group">
 <img src={Img3}  />
<p>Offer guided project-based learning experiences. Users can work on real-world game development projects, following step-by-step instructions and receiving feedback on their progress.
</p>
</div>
</div>

<div className="service4">
<h3>4. Community Forum:</h3>
<div className="sercive4-group">
<img src={Img4}  />
<p> Build a community forum where users can interact with each other, share their projects, ask questions, and get support from both fellow learners and experienced developers.
</p>
</div>
</div>

<div className="service5">
 <h3>5. Live Webinars and Workshops: </h3>
 <div className="sercive5-group">
 <img src={Img5} />
<p>Host live webinars and workshops with industry professionals. These events can cover specific topics, feature guest speakers, and allow for interactive Q&A sessions.
</p>
</div>
</div>

<div className="service6">
<h3>6. Portfolio Reviews: </h3>
<div className="sercive6-group">
<img src={Img6} />
<p>Offer personalized feedback and portfolio reviews for users who have completed projects. This can help learners identify areas for improvement and showcase their work to potential employers.
</p>
</div>
</div>

    </div>

  )
}

export default Services