import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import ToBeCustomer from './ToBeCustomer';
import BecomeCustomer from './BecomeCustomer';
import Career from './Career';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/om-oss" element={<About />} />
          <Route path="/att-vara-kund" element={<ToBeCustomer />} />
          <Route path="/att-bli-kund" element={<BecomeCustomer />} />
          <Route path="/jobba-hos-oss" element={<Career />} />
          <Route path="/kontakt" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
