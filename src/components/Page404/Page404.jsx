import React from 'react';
import LogoSvg from '../../assets/Icons/LogoSvg';

import './Page404.scss';

const Page404 = () => (
  <div className="page-404-wrapper">
    <div className="page-404-title">
      Unfortunately we couldn't find the page you're looking for...
      <br />
    </div>
    <div className="link-wrapper">
      Please go back to
      <br />
      <a href="/"><LogoSvg /></a>
    </div>
  </div>
);

Page404.propTypes = {};

export default Page404;
