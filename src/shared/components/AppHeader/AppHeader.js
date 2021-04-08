import React, { useState } from 'react';
import styled from 'styled-components'
import NewAppLogo from '../../../assets/icons/new-app-logo.svg';
import menuItems from './MenuItems';
import { Button } from '@material-ui/core';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import { Turn as Hamburger } from 'hamburger-react';
import { connect } from 'react-redux';
import { TOGGLE_THEME } from '../../../modules/landing/redux/actionTypes';
import LightButton from '../../../assets/icons/buttonlight.svg'
import DarkButton from '../../../assets/icons/buttondark.svg'

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
  const colortheme = () => theme === 'dark' ?  '#fff'  : '#000';
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
          color={theme === 'light' ?  '#000000'  :  '#FFFFFF' }
          rounded
          style={{ display: 'none'}}
        />
        
        <div className={`menu-items ${mobileMenuState && 'visible'}`}>
          <div className="menu-item">
            
            {/* <Brightness5OutlinedIcon
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
            <Brightness2OutlinedIcon
              className="brightness"
              onClick={() => toggleTheme('dark')}
              style={ 
                theme === 'dark' ? { color: '#f7c408' } : { color: '#1B1B1B' }
              }
            /> */}
          </div>
          {/* {menuItems.map((menuItem) => (
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
          ))} */}
          {
            <>
              {theme === 'light' ? <Img src={LightButton} onClick={() => toggleTheme('dark')} /> : <Img src={DarkButton} onClick={() => toggleTheme('light')}/>}
              <div
                className="menu-item"
                onClick={() => {
                  window.open(`https://jetfuel-finance-1.gitbook.io/fortress/`, '_blank');
                }}
              >
                DOCS
              </div>
              <div
                className="menu-item"
                onClick={() => {
                  window.open(`/Whitepaper.pdf`, '_blank');
                }}
              >
                WHITE PAPER
              </div>

              <MobileFooter>
                <Grid style={{color: colortheme()}}>
                  
                  <Anchor style={{color: colortheme()}} href='https://jetfuel-finance-1.gitbook.io/fortress/'>Fortress Protocol</Anchor>
                  <Anchor style={{color: colortheme()}} href='https://jetfuel-finance-1.gitbook.io/fortress/protocol-documentation/getting-started'>Developers</Anchor>
                  <Anchor style={{color: colortheme()}} href='/Audit'>Security</Anchor>
                  <Anchor style={{color: colortheme()}} href='/Whitepaper.pdf'>Whitepaper</Anchor>
                  <Anchor style={{color: colortheme()}} href='https://jetfuelfinance.medium.com/'>Blog</Anchor>
                  <Anchor style={{color: colortheme()}} href='mailto:jetfuelfinance@gmail.com'>Contact</Anchor>
                  <Anchor style={{color: colortheme()}} href='/Fortress-Privacy-Policy.pdf'>Privacy Policy</Anchor>
                  <Anchor style={{color: colortheme()}} href='/Fortress-Cookie-Policy.pdf'>Cookie Policy</Anchor>
                  <Anchor style={{color: colortheme()}} href='/Fortress-Terms-of-Use.pdf'>Terms of Use</Anchor>
                </Grid> 
              </MobileFooter>
              {/* <div
                className="menu-item"
                onClick={() => {
                  window.open(`/Audit.pdf`, '_blank');
                }}
              >
                AUDITS AND SECURITY
              </div> */}
            </>
          }
          
          
        </div>
        {/* <div className={`whitepaper-wrapper ${mobileMenuState && 'visible'}`}>
          <Button 
            variant="contained"
            className="whitepaper-btn"
            onClick={() => {
              window.open(`/Whitepaper.pdf`, '_blank');
            }}
          >
            White paper
          </Button>
        </div> */}
      </header>
    </div>
  );
};

const mapStateToProps = (state) => ({
  theme: state.landing.theme,
});

const MobileFooter = styled.div`
display: none; 

@media (max-width:768px) {
  display: block;
  
}
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);  
  width: 70%;
  height: 200px;
  margin-right: -60px;
  // grid-auto-flow: column;

  @media (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-auto-flow: row;
    margin: 50px auto 0 auto;
    width: auto;
    height:auto;
    text-align: center;
    align-items: center;
    
  }
`

const Anchor = styled.a`

@media (max-width: 768px){
  height: 50px;
  text-decoration: none;
  
}
`

const Img = styled.img`


@media (max-width:768px) {
  text-align: center;
  width: 100%;
}
`

export default connect(mapStateToProps)(AppHeader);
