import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import MediumIcon from '../../../assets/icons/medium.svg';
import TelegramIcon from '../../../assets/icons/telegram.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import GithubIcon from '../../../assets/icons/github.svg';

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

const AppFooter = () => (
  <div className="footer">
    <AppHeader isFooter />
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
);

export default AppFooter;
