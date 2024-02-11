import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './meraassistans_logo_original-removebg-preview.png';
import './Navbar.css';

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const [subscriptionActive, setSubscriptionActive] = useState(true);

  useEffect(() => {
    const checkSubscriptionStatus = async () => {
      try {
        const response = await fetch('https://awd-backend.azurewebsites.net/subscription/status?customerCode=mera_assistans');
        const data = await response.json();
        setSubscriptionActive(data.isActive);
      } catch (error) {
        console.error('Failed to fetch subscription status', error);
        setSubscriptionActive(true);
      }
    };

    checkSubscriptionStatus();
  }, []);

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY < 50); // 50 is a threshold, adjust as needed
    };

    // Set up the scroll event listener
    window.addEventListener('scroll', onScroll);

    // Clean up the scroll event listener
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    // Scroll to top whenever the location changes
    window.scrollTo(0, 0);
  }, [location]);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isHomePage = location.pathname === '/';

  const closeMenu = () => {
    setMenuOpen(false);
  };

  if (!subscriptionActive) {
    return <div style={{ width: '100vw', height: '100vh', backgroundColor: 'white' }}></div>;
  }

  return (
    <nav className={`navbar ${isTop && isHomePage ? 'transparent' : 'solid'}`}>
      <Link to="/" className="logo-link" onClick={closeMenu}>
        <img src={logo} alt="Company Logo" />
      </Link>
      <div
        className={`hamburger ${menuOpen ? 'open' : ''}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className={`links ${menuOpen ? 'open' : ''}`}>
        <Link to="/" className={isActive('/') ? 'active' : ''} onClick={closeMenu}>Hem</Link>
        <Link to="/om-oss" className={isActive('/om-oss') ? 'active' : ''} onClick={closeMenu}>Om oss</Link>
        <Link to="/att-vara-kund" className={isActive('/att-vara-kund') ? 'active' : ''} onClick={closeMenu}>Att vara kund</Link>
        <Link to="/att-bli-kund" className={isActive('/att-bli-kund') ? 'active' : ''} onClick={closeMenu}>Att bli kund</Link>
        <Link to="/jobba-hos-oss" className={isActive('/jobba-hos-oss') ? 'active' : ''} onClick={closeMenu}>Jobba hos oss</Link>
        <Link to="/kontakt" className={isActive('/kontakt') ? 'active' : ''} onClick={closeMenu}>Kontakt</Link>
      </div>
    </nav>
  );
};

export default Navbar;
