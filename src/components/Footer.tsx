import * as React from 'react';
import { ReactElement } from 'react';

const Footer = (): ReactElement => {
  return (
    <footer>
      <div className="drag-drop">Drag and drop to reorder list</div>
      <div className="link">
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
      </div>
    </footer>
  );
};

export default Footer;
