import Button from 'components/atoms/Button';
import React from 'react';
import Link from 'components/atoms/Link/index';

import './styles.scss';

const InfoLinks = () => {
  return (
    <div className="infoLinks">
      <h4 className="infoLinks__title">Info links</h4>

      <ul className="infoLinks__linksContainer">
        <li>
          <Link text="Contact us" href="#" inline />
        </li>
        <li>
          <Link text="Cookie policy" href="#" inline />
        </li>
        <li>
          {' '}
          <Link text="Privacy Notice" href="#" inline />
        </li>
        <li>
          <Link text="Terms of use" href="#" inline />
        </li>
        <li>
          <Link text="Terms and conditions" href="#" inline />
        </li>
      </ul>
    </div>
  );
};

export default InfoLinks;
