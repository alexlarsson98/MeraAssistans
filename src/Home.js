import React from 'react';
import header from './mera_header_image.jpg';
import './Home.css';

const Home = () => {
  return (
    <div className="header-container">
      <img src={header} alt="Header" className="header-image" />
      <div className="header-content">
        <h3>Personlig assistans för<br></br>personliga människor</h3>
      </div>
    </div>
  );
};

export default Home;
