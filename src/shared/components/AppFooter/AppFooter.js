import React from 'react';

import AppHeader from '../AppHeader/AppHeader';
import MediumIcon from '../../../assets/icons/medium.svg';
import TelegramIcon from '../../../assets/icons/telegram.svg';
import TwitterIcon from '../../../assets/icons/twitter.svg';
import GithubIcon from '../../../assets/icons/github.svg';

const socialLinks = [
  {
    icon: MediumIcon,
    link: '',
  },
  {
    icon: TelegramIcon,
    link: '',
  },
  {
    icon: TwitterIcon,
    link: '',
  },
  {
    icon: GithubIcon,
    link: '',
  },
];

const AppFooter = () => (
  <div className="footer">
    <AppHeader isFooter />
    <div className="app-details">
      <div className="licence-details">
        © 2021 Developed by Jetfuel.
        Licensed & open-source under the ...
      </div>
      <div className="social-links">
        {
          socialLinks.map(socialLink => (
            <img src={socialLink.icon} alt="Stablecoin" className="social-links-image" />
          ))
        }
      </div>
    </div>
  </div>
);

export default AppFooter;
