import React from 'react';
import '../styles/Navbar.css'
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const [isActive, setIsActive] = React.useState(false);
  const toggle = () => setIsActive(!isActive);
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          ItzNesbro
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/works">
          Works
        </Link>
        <Link to="/contact">
          Contact
        </Link>
      </div>
      <div className="menu" onClick={toggle}>
        {isActive ? <AiOutlineClose /> : <BiMenu />}
      </div>
      <div className={`menu-links ${isActive ? 'active' : 'hide'}`}>
        <Link to="/">
          Home
        </Link>
        <Link to="/about">
          About
        </Link>
        <Link to="/works">
          Works
        </Link>
        <Link to="/contact">
          Contact
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;
