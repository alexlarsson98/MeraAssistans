import React, { useState, useMemo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import office from './kontor_mera.jpg';
import './Contact.css';
import Map from './Map';

const Contact = () => {
  const mapOptions = useMemo(() => ({
    center: { lat: 56.063033, lng: 12.715362 },
    zoom: 14,
  }), []);

  const [formData, setFormData] = useState({
    FromEmail: '',
    FromName: '',
    Message: '',
  });
  const [submitStatus, setSubmitStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    const submissionData = {
      ...formData,
      Subject: 'Mera Assistans - Kontakt',
      CustomerCode: 'mera_assistans',
    };

    try {
      const response = await fetch('https://awd-backend.azurewebsites.net/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ FromEmail: '', FromName: '', Message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    }
  };

  const inputClassName = submitStatus === 'success' ? 'success-border' : submitStatus === 'error' ? 'error-border' : '';

  return (
    <div>
      <div className="image-container-contact">
        <img src={office} alt="office" className="header-img" />
        <h3>Kontakta oss</h3>
        <p>Har du några frågor så tveka inte att höra av dig!</p>
      </div>

      <div className="contact-page-container">

        <div className="email-form-container">
          <form onSubmit={handleSubmit} className="email-form">
            <input
              type="email"
              name="FromEmail"
              value={formData.FromEmail}
              onChange={handleChange}
              placeholder="Din e-post"
              required
              className={inputClassName}
            />
            <input
              type="text"
              name="FromName"
              value={formData.FromName}
              onChange={handleChange}
              placeholder="Ditt namn"
              required
              className={inputClassName}
            />
            <textarea
              name="Message"
              value={formData.Message}
              onChange={handleChange}
              placeholder="Meddelande"
              required
              className={inputClassName}
            />
            <button type="submit" className={`submit-btn ${inputClassName}`}>
              {submitStatus === 'success' ? <FontAwesomeIcon icon={faCheck} /> :
              submitStatus === 'error' ? <FontAwesomeIcon icon={faTimes} /> :
              'Skicka Email'}
            </button>
          </form>
          <div className="contact-contact">
            {submitStatus === 'sending' && <span>Skickar ditt meddelande...</span>}
            {submitStatus === 'success' && <span>Ditt meddelande har skickats! Vi återkommer så fort som möjligt.</span>}
            {submitStatus === 'error' && <span>Ett fel uppstod. Försök igen senare.</span>}
          </div>
        </div>

        <div className="contact-section">
          <div className="contact-contact">
            <FontAwesomeIcon icon={faPhoneAlt} size="2x" /><span>040-237309 | 072-853 88 03</span>
          </div>
          <div className="contact-contact">
            <FontAwesomeIcon icon={faEnvelope} size="2x" /><span>info@meraassistans.se</span>
          </div>
          <div className="contact-contact">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" /><span>Vasatorpsvägen 1E, 25457 Helsingborg</span>
          </div>
        </div>
        
      </div>

      <Map options={mapOptions} />

    </div>
  );
};

export default Contact
