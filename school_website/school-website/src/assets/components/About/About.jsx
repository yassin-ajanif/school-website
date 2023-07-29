import React from 'react';
import './about.css'; // Import the CSS file for styling (create it later)
import aboutImg from '../../containers/Services/services-assets/image2.jpg'
const AboutPage = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <img src={aboutImg} alt="" />
      <p>
        Welcome to our game development teaching website! We are passionate about helping aspiring game developers
        learn the skills needed to create amazing games. Our platform offers a variety of courses and tutorials, covering
        different game development genres and technologies.
      </p>
      <p>
        Whether you're a beginner or an experienced developer looking to expand your skills, we have something for everyone.
        Join our community and embark on an exciting journey to unleash your creativity and build incredible gaming experiences.
      </p>
      <p>
        Get ready to dive into the world of game development with hands-on projects, expert guidance, and an enthusiastic community
        that shares your passion for gaming. Let's create something extraordinary together!
      </p>
      <h2>Our Mission</h2>
      <p>
        Our mission is to make game development education accessible to all, empowering aspiring developers to turn their ideas
        into reality. We strive to foster creativity, critical thinking, and collaboration within our community, inspiring the
        next generation of game developers.
      </p>
    </div>
  );
};

export default AboutPage;
