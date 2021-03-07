import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import AppLogo from '../../../assets/icons/app-logo.png';
import NewAppLogo from '../../../assets/icons/new-app-logo.svg';
import menuItems from './MenuItems';
import { Button } from '@material-ui/core';

const AppHeader = ({ isFooter }) => {
  return (
    <div className="app-header-container" id="app-header">
      <header className="app-header">
        <div className="logo" id="app-logo">
          <Link to="/">
            <img src={isFooter ? AppLogo : NewAppLogo} alt="fortress lending" />
          </Link>
          {
            isFooter && (
              <div className="app-name">
                <div className="main-heading">Fortress</div>
                <div className="sub-heading">Lending</div>
              </div>
            )
          }
        </div>
        <div className="menu-items">
          {
            menuItems.map(menuItem => (
              <div className="menu-item"
                onClick={() => {
                  menuItem.scrollSection && document.getElementById(menuItem.scrollSection).scrollIntoView({ block: 'start',  behavior: 'smooth' });
                }}
              >
                {menuItem.name}
              </div>
            ))
          }
        </div>
        <div className="whitepaper-wrapper">
          <Button
            variant="contained"
            className="whitepaper-btn"
          >
            White paper
          </Button>
        </div>
      </header>
    </div>
  );
};

export default withRouter(AppHeader);
