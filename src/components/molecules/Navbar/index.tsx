import React from 'react';
import Logo from 'resources/images/hd-logo-inline.svg';
import './styles.scss';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="navbar__logoContainer">
          <img src={Logo} alt="" className="navbar__logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
