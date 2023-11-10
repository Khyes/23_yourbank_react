import React, { useState } from 'react';

import { logo } from '../assets';
import { navLinks } from '../constants';
import { Button } from '../components';
import { HiBars3BottomRight, HiMiniXMark } from 'react-icons/hi2';

import './navbar.css'

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(''); // State to keep track of the active link
  const [toggle, setToggle] = useState(false);

  
  const handleNavLinkClick = (id) => {
    setActiveLink(id); // Update the active link when a link is clicked
  };

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={logo} alt="logo" />
      </div>

      <ul className='app__navbar-links'>
        {navLinks.map((nav) => (
          <li key={nav.id}>
            <a 
              href={`#${nav.id}`}
              onClick={() => handleNavLinkClick(nav.id)}
              className={activeLink === nav.id ? 'active' : ''}
            >{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-login'>
          <a>Sign up</a>
          <Button content="Login"/>
      </div>

      <div className='app__navbar-mobile'>
        <div onClick={() => setToggle((prev) => !prev)}>
          {toggle ? <HiMiniXMark /> : <HiBars3BottomRight />}
        </div>

        <div className={`${toggle ? 'flex' : 'hidden' }`}>
          <ul className='app__navbar-mobile-links'>
          {navLinks.map((nav) => (
            <li key={nav.id}>
              <a 
                href={`#${nav.id}`}
                onClick={() => handleNavLinkClick(nav.id)}
                className={activeLink === nav.id ? 'active' : ''}
              >{nav.title}</a>
            </li>
            ))}
          </ul>
        </div>
      </div>
      
    </nav>
  )
}

export default Navbar