import Button from 'components/atoms/Button';
import React from 'react';
import './styles.scss';
import Link from 'components/atoms/Link/index';
import HeroImage from 'resources/images/family-on-sofa.webp';

const Header = () => {
  return (
    <header className="header">
      <div className="header__divider">
        <div className="header__curve"></div>
      </div>
      <h4 className="header__topline container">
        Affected by Coronavirus? <Link text="Get help online" href="#" inline />{' '}
        or make changes via the app or{' '}
        <Link text="My Account" href="#" inline />{' '}
      </h4>
      <div className="header__hero container">
        <div className="header__content">
          <h1 className="header__title">Home Insurance</h1>
          <p className="header__text">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam,
            dicta quas placeat neque culpa dolor reprehenderit ut laborum
            maiores tempore iusto minus ea asperiores distinctio harum provident
            aspernatur voluptates quo.
          </p>
          <Button text="Get a home insurance quote" classNames="centerAlign" />
          <Link text="Retrieve your home insurance quote" href="#" inline />
        </div>
        <div className="header__image">
          <img src={HeroImage} alt="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
