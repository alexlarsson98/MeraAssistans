import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import office from './kontor_mera.jpg';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className="image-container-contact">
        <img src={office} alt="office" className="header-img" />
        <h3>Kontakta oss</h3>
        <p>Har du några frågor så tveka inte att höra av dig!</p>
      </div>
      <div className="contact-section">
        <div className="contact-contact">
          <FontAwesomeIcon icon={faPhoneAlt} size="2x" /><span>040-237309</span>
        </div>
        <div className="contact-contact">
          <FontAwesomeIcon icon={faEnvelope} size="2x" /><span>info@meraassistans.se</span>
        </div>
        <div className="contact-contact">
          <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /><span>Vasatorpsvägen 1E, 25457 Helsingborg</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
