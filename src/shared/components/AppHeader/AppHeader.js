import React from 'react';
import { withRouter } from 'react-router';

import NewAppLogo from '../../../assets/icons/new-app-logo.svg';
import menuItems from './MenuItems';
import { Button } from '@material-ui/core';

const AppHeader = ({ isFooter }) => {
  return (
    <div className="app-header-container" id="app-header">
      <header className="app-header">
        <div className="logo" id="app-logo">
          <img src={NewAppLogo} alt="fortress lending" />
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
