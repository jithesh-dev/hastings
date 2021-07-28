import React from 'react';
import './styles.scss';
import Link from 'components/atoms/Link/index';
import { footer } from 'data';

const Footer = () => {
  // console.log(footer.quickLinks);
  footer.quickLinks.map(({ title, links }) => {
    console.log(links);
  });
  return (
    <footer>
      <div className="footer__content">
        <div className="footer__curve"></div>
        <div className="container">
          <div className="footer__quickLinkContainer">
            {footer.quickLinks.map(({ title, links }) => (
              <div className="footer__quickLinkWrapper" key={title}>
                <h3>{title}</h3>
                <ul>
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link text={link.title} href={link.url} inline />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="footer__desc">
            <p>{footer.footerDesc1}</p>
            <p>{footer.footerDesc2}</p>
            <span className="footer__copyright">{footer.copyrightInfo}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
