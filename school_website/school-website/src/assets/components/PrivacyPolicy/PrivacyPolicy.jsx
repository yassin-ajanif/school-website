import React from 'react';
import './PrivacyPolicy.css'; // Import the CSS file for styling (create it later)

const PrivacyPolicyPage = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>
        We value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we
        collect, use, and safeguard your data when you use our game development teaching website.
      </p>
      <p>
        We may collect personal information such as your name, email address, and usage data to improve our services and
        provide you with a better learning experience. Rest assured that your data will not be shared with third parties
        without your explicit consent.
      </p>
      <p>
        By using our website, you agree to the terms of this Privacy Policy. If you have any concerns or questions regarding
        your privacy, feel free to contact us.
      </p>
      <h2>Cookies</h2>
      <p>
        Our website may use cookies to enhance your browsing experience. Cookies are small pieces of data stored on your device
        that help us analyze website traffic and understand your preferences. You can adjust your browser settings to block
        cookies if you prefer not to have them stored on your device.
      </p>
    </div>
  );
};

export default PrivacyPolicyPage;
