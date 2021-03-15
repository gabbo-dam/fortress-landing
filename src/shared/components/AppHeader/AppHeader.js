import React, { useState } from 'react';
import NewAppLogo from '../../../assets/icons/new-app-logo.svg';
import menuItems from './MenuItems';
import { Button } from '@material-ui/core';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import { Turn as Hamburger } from 'hamburger-react';
import { connect } from 'react-redux';
import { TOGGLE_THEME } from '../../../modules/landing/redux/actionTypes';

const AppHeader = ({ isFooter, dispatch, theme }) => {
  const [mobileMenuState, setMobileMenuState] = useState(false);
  const toggleMenu = () => {
    setMobileMenuState((prev) => !prev);
  };

  const toggleTheme = (mode) => {
    dispatch({
      type: TOGGLE_THEME,
      payload: mode,
    });
  };
  return (
    <div className="app-header-container" id="app-header">
      <header className={`app-header ${mobileMenuState}`}>
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
          style={{ display: 'none'}}
        />
        <div className={`menu-items ${mobileMenuState && 'visible'}`}>
          {menuItems.map((menuItem) => (
            <div
              className="menu-item"
              onClick={() => {
                setMobileMenuState(false);
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
            
            <Brightness5OutlinedIcon
              className="brightness"
              onClick={() => toggleTheme('light')}
              style={
                theme === 'light' ? { color: '#f7c408' } : { color: '#FFFFFF' }
              }
            />
            <span
              style={{
                fontSize: '16px',
                marginLeft: '5px',
                marginRight: '5px',
              }}
            >
              &#47;
            </span>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              onClick={() => toggleTheme('dark')}
            >
              <path
                d="M14.5331 10.5865C14.2927 11.1884 13.9687 11.7571 13.5683 12.275C12.7531 13.3294 11.6544 14.1299 10.4009 14.5827C9.14732 15.0355 7.79075 15.1219 6.48989 14.8318C5.18902 14.5417 3.99767 13.8872 3.05524 12.9448C2.1128 12.0023 1.45825 10.811 1.16819 9.51012C0.878131 8.20925 0.96455 6.85268 1.41734 5.59915C1.87012 4.34561 2.67055 3.24694 3.72496 2.43171C4.24289 2.03127 4.81157 1.70735 5.41347 1.46686C5.12431 2.35521 5.00762 3.29817 5.07819 4.24447C5.20707 5.97267 5.95195 7.59722 7.17737 8.82263C8.40279 10.048 10.0273 10.7929 11.7555 10.9218C12.7018 10.9924 13.6448 10.8757 14.5331 10.5865Z"
                stroke={theme === 'dark' ? '#f7c408' : '#1E1E1E'}
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
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

const mapStateToProps = (state) => ({
  theme: state.landing.theme,
});

export default connect(mapStateToProps)(AppHeader);
