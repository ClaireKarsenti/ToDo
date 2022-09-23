import * as React from 'react';
import { ReactElement } from 'react';

const Footer = (): ReactElement => {
  return (
    <footer>
      <p className="attribution">
        Challenge by&nbsp;
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by&nbsp;
        <a href="https://www.linkedin.com/in/claire-karsenti/">
          Claire Karsenti
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
