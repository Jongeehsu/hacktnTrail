import React, { useState, useEffect } from 'react';
// import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { ButtonTwo } from './ButtonTwo';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            {/* TRVL
            <i className='fab fa-typo3' /> */}
            <img src={"images\\logo512.png"} alt="HackZone" className='logo'/>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            {/* <li className='nav-item'>
              <Link to='/twi' className='nav-links' onClick={closeMobileMenu}>
                Twitter
              </Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link
                to='/twi'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Facebook
              </Link>
            </li> */}
            {/* <li className='nav-item'>
              <Link
                to='/trips'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Instagram
              </Link>
            </li> */}

            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <ButtonTwo buttonStyle='btn--outline'>SIGN HERE</ButtonTwo>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
