import React from 'react';
import './Hero.scss';

const Hero = () => (
  <div className="hero-wrapper">
    <div className="width-container">
      <div className="hero-title">
        <div className="bold">Fortress Stable</div>
        <div className="thin">Coin-SFT</div>
      </div>
      <div className="hero-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames sapien sem nisl integer. Aliquam laoreet cras hendrerit augue diam neque, vulputate nulla. Metus volutpat nullam nunc, orci consequat.
      </div>
      <div className="hero-btn">
        <div
          className="button medium"
          target="_blank"
          rel="noopener noreferrer"
          href="#"
        >
          COIN
        </div>
        <div
          className="button medium"
          target="_blank"
          rel="noopener noreferrer"
          href="#"
        >
          WHITE PAPER
        </div>
      </div>
    </div>
  </div>
);

Hero.propTypes = {};

export default Hero;
