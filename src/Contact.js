import React from 'react';
import office from './kontor_mera.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="image-container">
        <img src={office} alt="office" className="header-img" />
        <h3>Att bli kund</h3>
        <p>Efter den inledande kontakten så bokar vi ett personligt möte</p>
      </div>
    </div>
  );
};

export default Contact;
