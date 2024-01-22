import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from './meraassistans_logo_original-removebg-preview.png';
import './Navbar.css';

const Navbar = () => {
  const [isTop, setIsTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setIsTop(window.scrollY < 50); // 50 is a threshold, adjust as needed
    };

    // Set up the event listener
    window.addEventListener('scroll', onScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isHomePage = location.pathname === '/';

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isTop && isHomePage ? 'transparent' : 'solid'}`}>
      <Link to="/" className="logo-link">
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
        <Link to="/personlig-assistent" className={isActive('/personlig-assistent') ? 'active' : ''} onClick={closeMenu}>Personlig assistent</Link>
        <Link to="/kontakt" className={isActive('/kontakt') ? 'active' : ''} onClick={closeMenu}>Kontakt</Link>
      </div>
    </nav>
  );
};

export default Navbar;
