import React from 'react';
import './PricingPage.css'; // Make sure to create this CSS file for styling

const PricingPage = () => {
  const pricingOptions = [
    {
      duration: '3 Months',
      price: '$29.99',
      features: [
        'Access only to first 3 courses',
        'Personalized mentorship',
        'Certification upon completion',
      ],
    },
    {
      duration: '6 Months',
      price: '$49.99',
      features: [
        'Access to all courses',
        'Personalized mentorship',
        'Certification upon completion',
      ],
    },
    {
      duration: '12 Months',
      price: '$79.99',
      features: [
        'Access to all courses',
        'Personalized mentorship',
        'Certification upon completion',
        'Orientation for job hunting'
      ],
    },
  ];

  return (

    <>
    <h2 className='pricingPlansTitle'>Pricing Plans</h2>
    <div className="pricing-container">

      {pricingOptions.map((option, index) => (
        <div key={index} className="pricing-option">
          <h2>{option.duration}</h2>
          <p className="price">{option.price}</p>
          <ul>
            {option.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button>Get Started</button>
        </div>
      ))}
    </div>
    </>
  );
};

export default PricingPage;
