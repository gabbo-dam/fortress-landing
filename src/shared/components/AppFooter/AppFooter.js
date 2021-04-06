import React from 'react';
import styled from 'styled-components';

import AppHeader from '../AppHeader/AppHeader';
import MediumIcon from '../../../assets/icons/medium.svg';
import TelegramIcon from '../../../assets/icons/telegram.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import GithubIcon from '../../../assets/icons/github.svg';
import LogoFooter from '../../../assets/logos/fortressfooter'

const socialLinks = [
  {
    icon: MediumIcon,
    link: 'https://jetfuelfinance.medium.com',
  },
  {
    icon: TelegramIcon,
    link: 'https://t.me/jetfuelfinance',
  },
  {
    icon: TwitterIcon,
    link: 'https://twitter.com/Jetfuelfinance',
  },
  {
    icon: GithubIcon,
    link: 'https://github.com/jetfuelfinance',
  },
];

const AppFooter = ({theme}) => {
  const colortheme = () => theme === 'dark' ?  '#fff'  : '#000';
  return(
    <div className="footer">
      {/* <AppHeader isFooter /> */}
      <LogoFooter fill={colortheme()} />
        <Grid>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Aave Protocol</p>
          <p>Flash Loans</p>
          <p>Careers</p>
          <p>Privacy Policy</p>
          <p>Developers</p>
          <p>Rate Switching</p>
          <p>Branding</p>
          <p>Cookie Policy</p>
        </Grid>
        <Grid2>
          <p>Telegram</p>
          <p>Github</p>
          <p>Discord</p>
          <p>Security</p>
          <p>Whitepaper</p>
          <p>Blog</p>
          <p>ATokens</p>
          <p>Aavenomics</p>
          <p>Contact</p>
          <p>Bug Bounty</p>
          <p>Ecosystem</p>
          <p>Terms of Use</p>
        </Grid2>
      <div className="app-details">
        <div className="licence-details">
          © 2021 Developed by Jetfuel Finance Dev Team
        </div>
        <div className="social-links">
          {
            socialLinks.map(socialLink => (
              <img
                src={socialLink.icon}
                alt="Stablecoin"
                className="social-links-image"
                onClick={() => {
                  window.open(`${socialLink.link}`, '_blank');
                }}
              />
            ))
          }
        </div>
      </div>
    </div>
  )};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(2, 1fr);  
  width: 80%;
  column-gap: 10px;
  grid-auto-flow: column;

  @media (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
    grid-auto-flow: row;
  }
`
const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);  
  width: 64%;
  column-gap: 10px;
  grid-auto-flow: column;

  @media (max-width: 768px){
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;  
    grid-auto-flow: row;
  }
`

export default AppFooter;
