import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FaEnvelope, FaHome, FaInstagram, FaTwitter, FaUser } from 'react-icons/fa'
import '../styles/Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link to="/">
          <FaHome />
        </Link>
        <Link to="/">
          <FaUser />
        </Link>
        <Link to="/contact">
          <FaEnvelope />
        </Link>
        <Link to="https://twitter.com/itznesbro">
          <FaTwitter />
        </Link>
        <Link to="https://instagram.com/nes.beer__">
          <FaInstagram />
        </Link>
      </div>
      <div className="footer-copyright">
        <p>{new Date().getFullYear()} <AiOutlineCopyrightCircle /> Copyright ItzNesbro (Nesbeer As). All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
