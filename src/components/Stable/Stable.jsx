import React from 'react';
import './Stable.scss';
import tokenImg from '../../assets/Images/token.png';

const Stable = () => (
  <div className="stable-wrapper">
    <div className="width-container">
      <div className="stable-text">
        <div className="stable-title">
          <div>Fortress Stable</div>
          <div>Coin-SFT</div>
        </div>
        <div className="stable-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames sapien sem nisl integer. Aliquam laoreet cras hendrerit augue diam neque, vulputate nulla. Metus volutpat nullam nunc, orci consequat.
        </div>
        <div className="stable-btn">
          <div
            className="button medium"
            target="_blank"
            rel="noopener noreferrer"
            href="#"
          >
            LINK TO MEDIUM
          </div>
        </div>
      </div>
      <div className="stable-img">
        <img src={tokenImg} alt="" />
      </div>
    </div>
  </div>
);

Stable.propTypes = {};

export default Stable;
