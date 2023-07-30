
import janeImg from '../../containers/testimonials/testimonials-assets/jane-image.png'
import jacobeImg from '../../containers/testimonials/testimonials-assets/jacob-image.png' 
import React from 'react';
import './testimonial.css'; // Make sure to create this CSS file for styling

const testimonials = [
  {
    name: 'John Doe',
    designation: 'Gamer',
    testimonial:
      'I can’t believe how much I’ve learned through this gaming course. It has significantly improved my skills and performance in my favorite games. Highly recommended!',
    image :'../../containers/testimonials/testimonials-assets/jane-image.png'
  },
  {
    name: 'Jane Smith',
    designation: 'Game Developer',
    testimonial:
      'As a game developer, I found the courses offered here extremely helpful. The instructors are knowledgeable, and the hands-on projects were invaluable for honing my skills.',
      image :'../../containers/testimonials/testimonials-assets/jacob-image.png' 
    },
  {
    name: 'Mike Johnson',
    designation: 'Streamer',
    testimonial:
      'Thanks to these gaming courses, my streaming channel has seen a boost in viewership. The tips and tricks I learned have definitely upped my game!',
    image :'../../containers/testimonials/testimonials-assets/jane-image.png'

    },
  {
    name: 'Emily Clark',
    designation: 'Casual Gamer',
    testimonial:
      'I was a casual gamer before, but after taking these courses, I have become more competitive and confident in online matches. It’s been a fantastic experience!',
      image :'../../containers/testimonials/testimonials-assets/jacob-image.png'
    },
  {
    name: 'Alex Turner',
    designation: 'Esports Enthusiast',
    testimonial:
      'The esports-focused courses offered by this platform are top-notch. The trainers are experienced players, and their insights have improved my gameplay significantly.',
      image :'../../containers/testimonials/testimonials-assets/jane-image.png'
    },
];

const TestimonialBackgroundColor ={

  orange : '#6F7DFB',
  blue : '#DA722C'

}

const TestimonialBox = () => {


  return (
    <div className="testimonial-container">

      <h2>What Our Student Say</h2>

      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial">
          <p className="testimonial-text"
           style={{ 
                   backgroundColor : index%2 ? 
                   TestimonialBackgroundColor.orange :
                   TestimonialBackgroundColor.blue   }}

          >{testimonial.testimonial}</p>
         <div className="testimonial-info-image">
       
          <div className="testimonial-info">
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-designation">{testimonial.designation}</p>
          </div>
          <img src={index%2 ? jacobeImg : janeImg} />

        </div>

        </div>
      ))}
    </div>
  );
};

export default TestimonialBox;
