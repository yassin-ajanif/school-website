import React from 'react';
import './contact.css'; // Import the CSS file for styling (create it later)

const ContactPage = () => {

  return (

    <div className="contact-container">
        
      <h1>Contact Us</h1>
      <p>
        We'd love to hear from you! If you have any questions, suggestions, or feedback, feel free to get in touch with us using the form below.
      </p>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactPage;
