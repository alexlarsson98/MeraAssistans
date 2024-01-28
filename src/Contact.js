import React from 'react';
import office from './kontor_mera.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="image-container">
        <img src={office} alt="office" className="header-img" />
        <h3>Kontakta oss</h3>
        <p>Har du några frågor så tveka inte höra av dig</p>
      </div>
    </div>
  );
};

export default Contact;
