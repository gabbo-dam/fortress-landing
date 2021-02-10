import React, { useState } from 'react';
import clsx from 'clsx';
import LogoSvg from '../../assets/Icons/LogoSvg';
import twitterImg from '../../assets/twitter.png';
import telegramImg from '../../assets/telegram.png';

import './Footer.scss';

const Footer = () => {
  const [checked, setChecked] = useState(false);

  const changeChecked = () => { setChecked(!checked); };
  const closeMenu = () => { if (checked) setChecked(false); };

  return (
    <div className="footer-wrapper">
      <div className="width-container">
        <div className={clsx('content-wrapper', { checked })}>
          <div onClick={closeMenu} className="footer-logo"><a href="/"><LogoSvg /></a></div>
          <div className={clsx('flex-wrapper', { checked })}>
            <input className="menu-btn" onChange={() => {}} type="checkbox" id="menu-btn" checked={checked} />
            <label className="menu-icon" htmlFor="menu-btn" onClick={changeChecked}><span className="navicon" /></label>
            <div className="links-item-wrapper">
              <div className="links-wrapper">
                <a
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  Features
                </a>
                <a
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  Mint
                </a>
                <a
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  Savings
                </a>
                <a
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  Markets
                </a>
                <a
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  Borrow
                </a>
              </div>
            </div>
          </div>
          <div className="token-wallet-wrapper">
            <div className="social-icons">
              <img src={twitterImg} alt="" />
              <img src={telegramImg} alt="" />
            </div>
            <div className="copyright">
              Copyright 2021. JetFuel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {};

export default Footer;
