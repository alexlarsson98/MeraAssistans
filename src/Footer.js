import React from 'react';
import { Link } from 'react-router-dom';
import logo from './meraassistans_logo_original-removebg-preview.png';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const FooterLink = ({ to, children }) => (
  <Link to={to} className="footer-link">{children}</Link>
);

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-section">
          <img src={logo} alt="Company Logo" />
        </div>
        <div className="footer-section">
          <p>Mera Assistans</p>
          <FooterLink to="/">Hem</FooterLink>
          <FooterLink to="/om-oss">Om oss</FooterLink>
          <FooterLink to="/att-vara-kund">Att vara kund</FooterLink>
          <FooterLink to="/att-bli-kund">Att bli kund</FooterLink>
          <FooterLink to="/jobba-hos-oss">Jobba hos oss</FooterLink>
          <FooterLink to="/kontakt">Kontakt</FooterLink>
        </div>
        <div className="footer-section">
          <div className="footer-contact">
            <FontAwesomeIcon icon={faMapMarkerAlt} /><span>Vasatorpsvägen 1E, 25457 Helsingborg</span>
          </div>
          <div className="footer-contact">
            <FontAwesomeIcon icon={faPhoneAlt} /><span>040-237309</span>
          </div>
          <div className="footer-contact">
            <FontAwesomeIcon icon={faEnvelope} /><span>info@meraassistans.se</span>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2024, Mera Assistans AB</p>
      </div>
    </footer>
  );
};

export default Footer;
