import React from 'react';
import './Pluses.scss';
import bep20Img from '../../assets/Images/bep20.png';
import chainImg from '../../assets/Images/chain.png';
import featureImg from '../../assets/Images/feature.png';

const Pluses = () => (
  <div className="pluses-wrapper">
    <div className="width-container">
      <div className="pluses-items">
        <div className="pluses-item">
          <div className="pluses-item-header">
            <img src={bep20Img} alt="" />
            <span className="pluses-item-title">BEP-20</span>
          </div>
          <div className="pluses-item-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames sapien sem nisl integer.
          </div>
        </div>
        <div className="pluses-item">
          <div className="pluses-item-header">
            <img src={chainImg} alt="" />
            <span className="pluses-item-title">Two chain</span>
          </div>
          <div className="pluses-item-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames sapien sem nisl integer.
          </div>
        </div>
        <div className="pluses-item">
          <div className="pluses-item-header">
            <img src={featureImg} alt="" />
            <span className="pluses-item-title">Feature 3</span>
          </div>
          <div className="pluses-item-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames sapien sem nisl integer.
          </div>
        </div>
      </div>
    </div>
  </div>
);

Pluses.propTypes = {};

export default Pluses;
