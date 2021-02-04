import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import LogoSvg from '../../assets/Icons/LogoSvg';

import './Header.scss';

const Header = () => {
  const [checked, setChecked] = useState(false);

  const changeChecked = () => { setChecked(!checked); };
  const closeMenu = () => { if (checked) setChecked(false); };

  return (
    <div className="header-wrapper">
      <div className="width-container">
        <div className={clsx('content-wrapper', { checked })}>
          <div onClick={closeMenu} className="header-logo"><a href="/"><LogoSvg /></a></div>
          <div className={clsx('flex-wrapper', { checked })}>
            <input className="menu-btn" onChange={() => {}} type="checkbox" id="menu-btn" checked={checked} />
            <label className="menu-icon" htmlFor="menu-btn" onClick={changeChecked}><span className="navicon" /></label>
            <div className="links-item-wrapper">
              <div className="links-wrapper">
                <a
                  className="header-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  Features
                </a>
                <a
                  className="header-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  Mint
                </a>
                <a
                  className="header-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  Savings
                </a>
                <a
                  className="header-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                >
                  Markets
                </a>
                <a
                  className="header-link"
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
            <a
              className="header-link"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              Docs
            </a>
            <a
              className="button medium yellow"
              target="_blank"
              rel="noopener noreferrer"
              href="#"
            >
              APP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
