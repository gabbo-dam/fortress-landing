import React, { useState } from 'react';
import { withRouter } from 'react-router';
import MenuIcon from '@material-ui/icons/Menu';
import NewAppLogo from '../../../assets/icons/new-app-logo.svg';
import menuItems from './MenuItems';
import { Button } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import { Turn as Hamburger } from 'hamburger-react';

const AppHeader = ({ isFooter }) => {
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const toggleMenu = () => {
    setMobileMenuState((prev) => !prev);
  };
  return (
    <div className="app-header-container" id="app-header">
      <header className={`app-header `}>
        <div className="logo" id="app-logo">
          <img src={NewAppLogo} alt="fortress lending" />
        </div>

        <Hamburger
          toggled={mobileMenuState}
          className="menu-icon"
          toggle={toggleMenu}
          size={24}
          color="#f7c408"
          rounded
          style={{ display: 'none' }}
        />
        <div className={`menu-items ${mobileMenuState && 'visible'}`}>
          {menuItems.map((menuItem) => (
            <div
              className="menu-item"

              onClick={() => {
                menuItem.scrollSection &&
                  document
                    .getElementById(menuItem.scrollSection)
                    .scrollIntoView({ block: 'start', behavior: 'smooth' });
              }}
            >
              {menuItem.name}
            </div>
          ))}
          <div className="menu-item">
            <Brightness5OutlinedIcon className="brightness" />
            <span
              style={{
                fontSize: '16px',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            >
              &#47;
            </span>
            <Brightness2OutlinedIcon
              className="brightness"
              style={{ color: '#f7c408' }}
            />
          </div>
        </div>
        <div className={`whitepaper-wrapper ${mobileMenuState && 'visible'}`}>
          <Button variant="contained" className="whitepaper-btn">
            White paper
          </Button>
        </div>
      </header>
    </div>
  );
};

export default withRouter(AppHeader);
