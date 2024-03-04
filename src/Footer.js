import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './meraassistans_logo_original-removebg-preview.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterLink = ({ to, children }) => (
  <Link to={to} className="footer-link">{children}</Link>
);

const Footer = () => {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      try {
        const response = await fetch('https://awd-backend.azurewebsites.net/subscription/status?customerCode=mera_assistans');
        const data = await response.json();
        setIsActive(data.isActive);
      } catch (error) {
        console.error('Failed to fetch subscription status', error);
        setIsActive(true);
      }
    };

    checkSubscriptionStatus();
  }, []);

  if (!isActive) {
    return <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}></div>;
  }

  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="footer-section">
          <p>Mera Assistans | Malmö AB</p>
          <FooterLink to="/">Hem</FooterLink>
          <FooterLink to="/om-oss">Om oss</FooterLink>
          <FooterLink to="/att-vara-kund">Att vara kund</FooterLink>
          <FooterLink to="/att-bli-kund">Att bli kund</FooterLink>
          <FooterLink to="/jobba-hos-oss">Jobba hos oss</FooterLink>
          <FooterLink to="/kontakt">Kontakt</FooterLink>
        </div>
        <div className="footer-section">
          <div className="footer-contact-parent">
            <div className="footer-contact">
              <FontAwesomeIcon icon={faMapMarkerAlt} /><span>Vasatorpsvägen 1E, 25457 Helsingborg</span>
            </div>
            <div className="footer-contact">
              <FontAwesomeIcon icon={faPhoneAlt} /><span>040-237309 | 072-853 88 03</span>
            </div>
            <div className="footer-contact">
              <FontAwesomeIcon icon={faEnvelope} /><span>info@meraassistans.se</span>
            </div>
          </div>
          <a href='https://whistle.qnister.com/mera'><br></br>Visselblåsning</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024, Mera Assistans AB</p>
      </div>
    </footer>
  );
};

export default Footer;
