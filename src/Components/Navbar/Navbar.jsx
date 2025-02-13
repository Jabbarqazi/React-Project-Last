import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './navbar.css';
import logo from '../../assets/logo.png';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
      
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="hero" smooth={true} offset={-300} duration={500}>Home</Link>
        </li>
        <li>
          <Link to="program" smooth={true} offset={-300} duration={500}>Programs</Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-200} duration={500}>About</Link>
        </li>
        <li>
          <Link to="campus" smooth={true} offset={-300} duration={500}>Campus</Link>
        </li>
        <li>
          <Link to="testimonals" smooth={true} offset={-300} duration={500}>Testimonals</Link>
        </li>
    
        <li>
          <Link to="contact" smooth={true} offset={-300} duration={500} className='btn'>Contact Us</Link>
        </li>
      
      </ul>

      {}
      <img
        src={menu_icon}
        alt="Menu Icon"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
